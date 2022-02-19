import * as actionTypes from "./types";
import axios from "axios";

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

    let tempArray = [];
    await axios({
        method: "get",
        url: "http://localhost:5000/product/api/getCategories"
    }).then((res)=>{
        console.log("The response from API: ", res.data);

        let parentCategory = res.data.data.filter(item => item.parent_category_id === null)

        tempArray = parentCategory.map( item =>{
          let obj = {
            id: item.id,
            category: item.category,
            subcategory: res.data.data.filter(childItem => childItem.parent_category_id === item.id).map((childItem)=>{
                let childObj = {
                    id: childItem.id,
                    name: childItem.category
                }
                return childObj;
            })
          }
          return obj;
        })
    }).catch((err)=>{
        console.log("Error while retrieving product categories from the database! ", err);
    })

    console.log("Temp array: ", tempArray);
    dispatch({type:actionTypes.PRODUCT_CATEGORY, categories: tempArray})
}

export const getProducts = () => async (dispatch) => {
    await axios({
        method: "get",
        url: "http://localhost:5000/product/api/getProducts"
    }).then((res)=>{
        console.log(res.data);
    }).catch((err)=>{
        console.log("Error while retrieving products from the database! ", err);
    })
    dispatch({type:actionTypes.PRODUCT, data: products});
} 