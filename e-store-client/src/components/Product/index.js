import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import * as productAction from "../../redux/actions/product"
import * as cartAction from "../../redux/actions/cart";
import "./_product.scss";

const Product = ()=>{
    const dispatch = useDispatch();
    const products = useSelector((state)=>state.product.products);
    const filteredProducts = useSelector((state)=>state.product.filteredProducts);
    const cart = useSelector((state) => state.cart);
    
    useEffect(()=>{
        dispatch(productAction.getProducts())
        },[])

    const addCartItem = (cartItem) => {
        dispatch(cartAction.addCartItem(cartItem));
    }

    // to print the cart's state on inserting a product in the cart
    // useEffect(()=>{
    //     console.log("Cart's state: ", cart);
    // },[cart])

    return(
        <div className="row">
            {filteredProducts.map((item, index) => (
                <div className="col-lg-3 col-md-6" key={index}>
                    <div className="product__item">
                        <div className="product__item__pic">
                            <img className="product__item__pic" src={item.src} />
                            <ul className="product__hover">
                                <li>
                                    <a href={null} onClick={()=>addCartItem(item)}>
                                        <span className="fa fa-shopping-cart" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="product__item__text">
                            <h6>
                                <a href="#">{item.name}</a>
                            </h6>
                            <div className="rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                            </div>
                            <div className="product__price">{item.price}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Product;