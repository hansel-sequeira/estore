import React from "react";
import MainContainer from "./MainContainer";
import {Route} from "react-router-dom";

const LandingPage = ()=>{
    return (
        <div>
            <Route exact path="/" component={MainContainer}/>
        </div>
    )
}

export default LandingPage;