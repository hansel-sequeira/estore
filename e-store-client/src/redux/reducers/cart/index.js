import * as actionTypes from "../../actions/cart/types";

const initState = {
    cartItems: [],
    cartTotalPrice: 0,
    totalQuantity: 0,
    totalItems: 0
}

export const cart = (state = initState, action)=>{
    switch(action.type){
        case actionTypes.ADD_CART_ITEM: 

            let itemExists = state.cartItems.find((x) => x.id === action.data.id);
            if(itemExists){
                itemExists.quantity += 1;
                itemExists.itemTotalPrice += action.data.price;
                return {
                    ...state,
                    cartTotalPrice: state.cartTotalPrice + action.data.price,
                    totalQuantity: state.totalQuantity + 1
                }
            } else {
                let tempData = action.data;
                tempData.quantity = 1;
                tempData.itemTotalPrice = tempData.price * tempData.quantity;
                return {
                    ...state,
                    cartItems: [...state.cartItems, tempData],
                    cartTotalPrice: state.cartTotalPrice + tempData.itemTotalPrice,
                    totalItems: state.cartItems.length + 1,
                    totalQuantity: state.totalQuantity + 1
                }
            }

            
        default: return state;
    }
}