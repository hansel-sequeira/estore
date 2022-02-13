import * as actionTypes from "./types";

const menuItems = ["Home", "Men", "Women", "Kids", "Bestsellers"];

export const getTopMenu = ()=> async (dispatch) => {
    dispatch({type: actionTypes.MENU, menuItems})
}