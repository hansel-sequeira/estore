import React, { useEffect } from "react";
import * as actionTypes from "../../redux/actions/product"
import {useSelector, useDispatch} from "react-redux";
import "./_sidebar.scss";

const Sidebar = ()=>{

    const dispatch = useDispatch();
    const categories = useSelector((state) => state.product.categories);
    
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
                                        <li key={subindex}><a href="#" className="link-dark rounded">{subitem.name}</a></li>
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