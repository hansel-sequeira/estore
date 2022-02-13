import {combineReducers} from "redux";
import {product} from "./product";
import {topMenu} from "./topMenu";

const rootReducer = combineReducers({
    topMenu,
    product
})

export default rootReducer;