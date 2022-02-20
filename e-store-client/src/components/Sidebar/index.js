import React, { useEffect, useState } from "react";
import * as actionTypes from "../../redux/actions/product"
import {useSelector, useDispatch} from "react-redux";
import "./_sidebar.scss";

const Sidebar = ()=>{
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.product.categories);
    const products = useSelector((state) => state.product.products);
    const [categoryFilter, setCategoryFilter] = useState([]);
    const [filter, setFilter] = useState({});

    const applyProductFilter = (subitems)=>{
        let tempFilter = {
            ...filter, 
            category_id : subitems.map((x)=>x.id)
        }
        setFilter(tempFilter);
        if(tempFilter.category_id.length > 0){
            dispatch(actionTypes.applyFilter(tempFilter, products));
        } else {
            dispatch(actionTypes.applyFilter(null, products));
        }
    }

    const checkboxChange = (evt, subitem) => {
        let tempCategories = [...categoryFilter];
        if(evt.target.checked){
            tempCategories.push(subitem);
        } else {
            tempCategories = tempCategories.filter(x=> x.id !=subitem.id);
        }
        setCategoryFilter(tempCategories);
        applyProductFilter(tempCategories);
    }
    
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
                                                <input type="checkbox" name={subitem.name} className="form-check-input" onChange={(evt)=>{checkboxChange(evt,subitem)}}></input>
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

        {/* 
            <li className="border-top my-3"></li>


            <li className="mb-1">
                <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                Account
                </button>
                <div className="collapse" id="account-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="#" className="link-dark rounded">New...</a></li>
                    <li><a href="#" className="link-dark rounded">Profile</a></li>
                </ul>
                </div>
            </li> */}
            </ul>
        </div> 

        </div>
    )
}

export default Sidebar;