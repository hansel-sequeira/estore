import React from "react";
import "./_productDetails.scss";

const ProductDetails = (props)=>{
    const product = props.location.payload;
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;