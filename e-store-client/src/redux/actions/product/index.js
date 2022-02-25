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
                category_id: item.category_id,
                src: `http://localhost:5000/${item.img}`,
                name: item.name,
                price: item.price
            }
        })
    }).catch((err)=>{
        console.log("Error while retrieving products from the database! ", err);
    })
    dispatch({type:actionTypes.PRODUCT, data: productArr});
    dispatch({
        type: actionTypes.FILTER_PRODUCT,
        data: productArr
    })
} 

export const applyFilter = (param, products)=> (dispatch) => {
    let query = buildQuery(param);
    let filteredData = filterData(products,query);
    dispatch({
        type: actionTypes.FILTER_PRODUCT,
        data: filteredData
    })
}

const buildQuery = (filter) => {
    let query = {};
    for(let keys in filter){
        query[keys] = filter[keys];
    }
    return query;
}

const filterData = (data, query) => {
    if(query.category_id.length===0 && query.price.min===undefined && query.price.max===undefined){
        return data;
    }
    const filteredData = data.filter((item) => {
    for(let keys in query){
        if(keys==="price"){
            if(query[keys]['min']!==null && item[keys] < query[keys]['min']){
                return false;
            }
            if(query[keys]['max']!==null && item[keys] > query[keys]['max']){
                return false;
            }
        }  else if(keys==="category_id" && query[keys].length!==0 && !query[keys].includes(item[keys])){
            return false;
        } 
    } return true; //if all query params pass, return this data item
    });
    return filteredData;
}


