import React from 'react';
import "./Products.css"

const ProductCard = ({ singleProduct, addToCartHandle }) => {

    const { name, price, inStock } = singleProduct?.data
    return (
        <div className='product-card'>
            <figure><img className='product-image' src={singleProduct?.image} alt="" /></figure>
            <div className='card-body'>
                <h3>{name}</h3>
                <div className='card-details'>
                    <p>price : ${price}</p>
                    <p>In Stock : {inStock} Pis</p>
                </div>
            </div>
            <div>
                <button onClick={() => addToCartHandle(singleProduct)} className='add-to-card button'>add to cart</button>
            </div>
        </div>
    );
};

export default ProductCard;