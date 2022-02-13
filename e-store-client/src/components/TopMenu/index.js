import React, {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux";
import * as action from "../../redux/actions/topMenu"
import "./_topmenu.scss"

const TopMenu = ()=>{

    const dispatch = useDispatch();
    const menuItems = useSelector((state)=>state.topMenu.menuItems);

    useEffect(()=>{
        dispatch(action.getTopMenu())
    },[])

    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-light" id="top-menubar">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button> 
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {
                        menuItems.map((item, index)=>(
                            <li className="nav-item" key={index}>
                                <a className="nav-link" href="#">{item}</a>
                            </li>
                        ))
                    }
                </ul>
                </div>
            </div>
            </nav>
        </div>
    );
}

export default TopMenu;