import * as actionTypes from "../../actions/product/types"

const initState = {
    categories: [],
    products: [],
    filteredProducts: []
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
        case actionTypes.FILTER_PRODUCT: return {
            ...state,
            filteredProducts: action.data
        }
        default: return state;
    }
}