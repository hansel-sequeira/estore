import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../../redux/actions/cart"
import "./_productDetails.scss";

const ProductDetails = (props) => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const [qty, setQty] = useState(1);
    const product = props.location.payload;

    const updateCart = (product) => {
        let tempProduct = { ...product, qty: parseInt(qty)};
        dispatch(actionTypes.addCartItem(tempProduct));
    }

    useEffect(() => {
        console.log(cart);
    },[cart])

    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-lg-6">
                    <img src={product.src}/>
                </div>
                <div className="col-lg-6">
                    <div className="product_details_text">
                        <h3>{product.name}</h3>
                        <div className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                        </div>
                        <div className="product_price">
                            {`$${parseFloat(product.price).toFixed(2)}`}
                        </div>
                        <p>
                            Brief description about the product.
                        </p>

                        {/* <input type="number" min={1} defaultValue={qty} onChange={(evt)=>{setQty(evt.target.value)}}/>
                        <button className="btn btn-success" onClick={()=>{updateCart(product)}}>Add to Cart</button> */}
                  
                        <div className="input-group my-5">
                            <input type="number" className="form-control" defaultValue={qty} onChange={(evt) => { setQty(evt.target.value) }}/>
                                <div className="input-group-append">
                                <button className="btn btn-success" type="button" onClick={() => { updateCart(product) }}>Add to Cart</button>
                                </div>
                        </div>
                  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;