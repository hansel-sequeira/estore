import React from "react";
import Sidebar from "../Sidebar";
import Product from "../Product";
import "./_maincontainer.scss";

const MainContainer = ()=>{
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-4 col-md-3 col-lg-2">
                    <Sidebar/>
                </div>
            
                <div className="col-sm-8 col-md-9 col-lg-10">
                    <Product/>
                </div>
            </div>
        </div>
        
    )
}

export default MainContainer;