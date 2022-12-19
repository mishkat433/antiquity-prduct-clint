import React, { useContext } from 'react';
import { AuthContex } from '../../Contex/AuthProvider';
import "./Products.css"

const ProductCard = ({ singleProduct, addToCartHandle }) => {

    const { name, price, image, stock } = singleProduct

    return (
        <div className='product-card'>
            <figure><img className='product-image' src={image} alt="" /></figure>
            <div className='card-body'>
                <h3>{name}</h3>
                <div className='card-details'>
                    <p>price : {price}</p>
                    <p>In Stock : {stock}</p>
                </div>
            </div>
            <div>
                <button onClick={() => addToCartHandle(singleProduct)} className='add-to-card button'>add to cart</button>
            </div>
        </div>
    );
};

export default ProductCard;