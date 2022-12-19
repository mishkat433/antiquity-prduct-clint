import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContex } from '../../Contex/AuthProvider';
import "./Checkout.css";

const Checkout = () => {
    const { products, setProducts, loginUser } = useContext(AuthContex)

    const navigate = useNavigate()

    if (products.langth === 0) {
        return
    }

    const checkoutHandle = () => {
        setProducts([])
        toast.success("Your Order successfully confirmed")
        navigate('/')
    }

    return (
        <div className='container'>
            <div className=' checkout-form'>

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