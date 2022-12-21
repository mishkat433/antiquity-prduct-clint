import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContex } from '../../Contex/AuthProvider';
import "./Checkout.css";
import CheckoutProducts from './CheckoutProducts';

const Checkout = () => {
    const { products, setProducts, loginUser } = useContext(AuthContex)
    const [selectedProduct, setSelectedProduct] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        fetch("https://antiquity-server.vercel.app/products")
            .then(res => res.json())
            .then(data => {
                let arr = []
                products.forEach(singleProducts => {

                    const productFilter = data.filter(da => da?._id === singleProducts)
                    arr.push(productFilter)
                });
                setSelectedProduct(arr)
            })
    }, [products])

    let total = 0;

    for (const single of selectedProduct) {
        total = single[0]?.price + total
    }
    let tax = Number((total * 0.08).toFixed(2));
    let grandTotal = total + tax;

    const removeHandle = () => {
        setProducts([])
        toast.success("Cart Item remove successful")
    }

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
                {/* <div className=''>
                    {
                        selectedProduct.map(prodt => <CheckoutProducts checkoutProduct={prodt[0]} key={prodt[0]?._id} />)
                    }
                </div> */}

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