import * as actionTypes from "./types";
import axios from "axios";

export const getProductCategories = () => async (dispatch) => {

    let tempArray = [];
    await axios({
        method: "get",
        url: "http://localhost:5000/product/api/getCategories"
    }).then((res)=>{
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
    dispatch({type:actionTypes.PRODUCT_CATEGORY, categories: tempArray})
}

export const getProducts = () => async (dispatch) => {
    let productArr = [];
    await axios({
        method: "get",
        url: "http://localhost:5000/product/api/getProducts"
    }).then((res)=>{
        productArr = res.data.data.map((item)=>{
            return {
                id: item.id,
                src: `http://localhost:5000/${item.img}`,
                name: item.name,
                price: item.price
            }
        })
    }).catch((err)=>{
        console.log("Error while retrieving products from the database! ", err);
    })
    dispatch({type:actionTypes.PRODUCT, data: productArr});
} 