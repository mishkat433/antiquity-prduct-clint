import React from 'react';

const CheckoutProducts = ({ prod, countUp, countdown }) => {
    const { price, name } = prod?.data;
    return (
        <div className='single-checkout-full'>
            <img className='checkout-image' src={prod?.image} alt="" />
            <div className='inner-card'>
                <div>
                    <h4>{name} </h4>
                    <p>price : ${price}</p>
                </div>
                <div className='right'>
                    <span onClick={() => countdown(prod?._id)} className='pl'>-</span>
                    <span>{prod.quantity}</span>
                    <span onClick={() => countUp(prod?._id)} className='pl'>+</span>
                </div>
            </div>

        </div>
    );
};

export default CheckoutProducts;