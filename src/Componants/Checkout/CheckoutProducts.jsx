import React from 'react';
import "./Checkout.css"

const CheckoutProducts = ({ checkoutProduct }) => {
    const { image, name, price } = checkoutProduct;
    return (
        <div className='checkout-product'>
            <figure><img className="checkout-image" src={image} alt="" /></figure>
        </div>
    );
};

export default CheckoutProducts;