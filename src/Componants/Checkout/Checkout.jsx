import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContex } from '../../Contex/AuthProvider';
import "./Checkout.css";
import CheckoutProducts from './CheckoutProducts';

const Checkout = () => {
    const { products, setProducts, loginUser } = useContext(AuthContex)
    const [count, setCount] = useState(null)


    const navigate = useNavigate()

    // const removeHandle = () => {
    //     setProducts([])
    //     toast.success("Cart Item remove successful")
    // }

    if (products.langth === 0) {
        return
    }

    const checkoutHandle = () => {
        setProducts([])
        toast.success("Your Order successfully confirmed")
        navigate('/')
    }
    const countUp = (countpl) => {
        const getproduct = products.find(p => p._id === countpl)
        let count = getproduct.quantity
        getproduct.quantity = getproduct.quantity + 1
        setCount(count)
    }
    const countdown = (countMi) => {
        const getproduct = products.find(p => p._id === countMi)
        let count = getproduct.quantity
        getproduct.quantity = getproduct.quantity - 1
        setCount(count)
    }

    return (
        <div className='container'>
            <div className=' checkout-form'>
                <div className='side-one'>
                    {
                        products.map(prod => <CheckoutProducts prod={prod} key={prod?._id} countUp={countUp} countdown={countdown} count={count} />)
                    }
                </div>

                <form onSubmit={checkoutHandle} className='form'>
                    <h3>Check out form</h3>
                    <div className="form-control mb">
                        <input type="text" value={loginUser?.displayName} readOnly />
                    </div>
                    <div className="form-control mb">
                        <input type="email" name="email" placeholder="Your last name.." value={loginUser?.email} readOnly />
                    </div>
                    <div className="form-control mb">
                        <input type="number" name="phone" placeholder="PhoneNumber" required />
                    </div>
                    <div className="form-control">
                        <button className='button login-btn'>Confirm Order</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;