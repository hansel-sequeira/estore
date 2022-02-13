import * as actionTypes from "../../actions/product/types"

const initState = {
    categories: [],
    products: []
}

export const product = (state = initState, action)=>{
    switch(action.type){
        case actionTypes.PRODUCT_CATEGORY: return {
            ...state,
            categories: action.categories
        }
        case actionTypes.PRODUCT: return {
            ...state, 
            products: action.data
        }
        default: return state;
    }
}