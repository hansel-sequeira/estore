import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import * as action from "../../redux/actions/product"
import "./_product.scss";

const Product = ()=>{
    const dispatch = useDispatch();
    const products = useSelector((state)=>state.product.products);
    useEffect(()=>{
        dispatch(action.getProducts())
        },[])

    return(
        <div className="row">
            {products.map((item, index) => (
                <div className="col-lg-3 col-md-6" key={index}>
                    <div className="product__item">
                        <div className="product__item__pic">
                            <img className="product__item__pic" src={item.src} />
                            <ul className="product__hover">
                                <li>
                                    <a href={item.src}>
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