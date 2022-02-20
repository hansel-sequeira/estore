import {combineReducers} from "redux";
import {product} from "./product";
import {topMenu} from "./topMenu";
import { cart } from "./cart";

const rootReducer = combineReducers({
    topMenu,
    product,
    cart
})

export default rootReducer;