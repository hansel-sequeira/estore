import React from "react";
import "./_header.scss";
import { useSelector } from "react-redux";
import TopMenu from "../TopMenu";

const Header = ()=>{

    const cart = useSelector((state)=>state.cart);

    return(
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">

                <div className="col-sm-2 col-md-2 col-lg-3">
                    <a className="navbar-brand navbarLogo">eStore</a>
                </div>
                
                <div className="col-sm-5 col-md-6 col-lg-6">
                    <div className="input-group">
                    <button type="button" className="btn btn-success"><i className="fa fa-search"></i></button>
                    <button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">All</a></li>
                        <li><a className="dropdown-item" href="#">Men</a></li>
                        <li><a className="dropdown-item" href="#">Women</a></li>
                        <li><a className="dropdown-item" href="#">Kids</a></li>
                    </ul>

                    <input type="text" className="form-control"/>
                    </div>
                </div>

                <div className="col-sm- 5 col-md-4 col-lg-3">
                    <div className="header_right float-end">
                        <div className="auth">
                        <a href="#">Login</a>
                        <a href="#">Register</a>
                        </div>
                        
                        <ul className="widget">
                        <li><i className="fa fa-heart"></i> </li>
                        <li><i className="fa fa-shopping-cart">
                            {cart.totalItems>0 && <div className="cartItems">{cart.totalQuantity}</div>}
                            </i>
                        </li>
                        </ul>
                    </div>
                </div>
                    

                </div>
            </nav>
            <TopMenu/>
        </div>
    )
}

export default Header;