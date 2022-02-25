import React, { useEffect, useState } from "react";
import * as actionTypes from "../../redux/actions/product"
import {useSelector, useDispatch} from "react-redux";
import "./_sidebar.scss";

const Sidebar = ()=>{
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.product.categories);
    const products = useSelector((state) => state.product.products);
    const [filter, setFilter] = useState({category_id:[], price:{}});

    const checkboxChange = (evt, subitem) => {
        let tempFilter = {...filter};
        if(evt.target.checked){
            tempFilter.category_id.push(subitem.id);
        } else {
            tempFilter.category_id = tempFilter.category_id.filter(x => x != subitem.id);
        }
        setFilter(tempFilter);
    }

    useEffect(()=>{
        dispatch(actionTypes.applyFilter(filter, products));
    },[filter])
    
    useEffect(()=>{
            dispatch(actionTypes.getProductCategories());
    }, [])


    return (
        <div>
            <div className="flex-shrink-0 p-3 bg-white">
            <span className="fs-5 fw-semibold">Categories</span>
            <ul className="list-unstyled ps-0">
            <li className="border-top my-3"></li>

            {
                categories.map((item,index)=>{
                    return (
                        <li className="mb-1" key={index}>
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target={`#${item.category}-collapse`} aria-expanded="true">
                        {item.category}
                        </button>
                        <div className="collapse" id={`${item.category}-collapse`}>
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                {
                                item.subcategory.map((subitem, subindex)=>{
                                    return (
                                        <li key={subindex}>
                                            <div className="form-check">
                                                <input type="checkbox" name={subitem.name} className="form-check-input"
                                                 onChange={(evt)=>{checkboxChange(evt,subitem)}}
                                                 checked={filter.category_id.find(x => x === subitem.id) ? true:false}></input>
                                                <label className="form-check-label">{subitem.name}</label>
                                            </div>
                                        </li>
                                    )
                                })
                                }

                            </ul>                      
                        </div>
                        </li>
                    )
                })
            }           

        
            <li className="border-top my-3"></li>


            <li className="mb-1">
                <span className="fs-5 fw-semibold">Price Filter</span>
                <div>{`From $${filter?.price?.min || 0} - $${filter?.price?.max || 150}`}</div>
                <div>
                    <p>
                        Min: 
                        <input type="range" id="min_slider" min={1} max={150} step={1} defaultValue={0} onChange={(evt)=>{
                            setFilter({
                                ...filter,
                                price: {
                                    ...filter.price,
                                    min: evt.target.value
                                }
                            })
                        }}/>
                    </p>
                    <p>
                        Max: 
                        <input type="range" id="max_slider" min={1} max={150} defaultValue={150} step={1} onChange={(evt)=>{
                            setFilter({
                                ...filter,
                                price: {
                                    ...filter.price,
                                    max: evt.target.value
                                }
                            })
                        }}/>
                    </p>

                    <button className="btn-sidebar" onClick={()=>dispatch(actionTypes.applyFilter(filter, products))}>Apply filter</button>
                    <button className="btn-sidebar" onClick={()=>{
                        setFilter([]);
                        dispatch(actionTypes.applyFilter(null, products))
                    }}>Remove all filters</button>
                </div>
            </li>
            </ul>
        </div> 

        </div>
    )
}

export default Sidebar;