import * as actions from "./types";

export const addCartItem = (cartItem) => async (dispatch) => {
    dispatch({
        type: actions.ADD_CART_ITEM,
        data: cartItem
    })
}
