import * as actionTypes from "../../actions/topMenu/types";

const initState = {
    menuItems: []
}

export const topMenu = (state = initState, action)=>{
    switch(action.type){
        case actionTypes.MENU: return {
            ...state,
            menuItems: action.menuItems
        }
        default: return state;
    }
}