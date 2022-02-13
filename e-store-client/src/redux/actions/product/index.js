import * as actionTypes from "./types";

const categories = [
    {
        id: 1,
        category: 'Kids',
        subcategory: [
            {
                id: 1,
                name: "Dresses"
            }, 
            {
                id: 2,
                name: "Jacket" 
            }
        ]
    },
    {
        id: 2,
        category: 'Men',
        subcategory: [
            {
                id: 1,
                name: "T-shirt"
            }, 
            {
                id: 2,
                name: "Jacket" 
            }
        ]
    }
];

const products = [

    {
        id: 1,
        src: require("../../../assets/img/shop/shop-1.jpg"),
        name: "Product 1",
        price: "$10.00"
    },
    {
        id: 2,
        src: require("../../../assets/img/shop/shop-2.jpg"),
        name: "Product 2",
        price: "$20.00"
    },
    {
        id: 3,
        src: require("../../../assets/img/shop/shop-3.jpg"),
        name: "Product 3",
        price: "$30.00"
    }
];

export const getProductCategories = () => async (dispatch) => {
    dispatch({type:actionTypes.PRODUCT_CATEGORY, categories})
}

export const getProducts = () => async (dispatch) => {
    dispatch({type:actionTypes.PRODUCT, data: products});
}