import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../../Contex/AuthProvider';
// import { AuthContex } from '../../../Contex/AuthProvider';
import "./Sidebar.css"

const Sidebar = () => {
    const { products, setProducts } = useContext(AuthContex)
    const [selectedProduct, setSelectedProduct] = useState([])

    useEffect(() => {
        fetch("http://localhost:5200/products")
            .then(res => res.json())
            .then(data => {
                let arr = []
                products.forEach(singleProducts => {

                    const fil = data.filter(da => da?._id === singleProducts)
                    arr.push(fil)
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

    return (
        <div className='container'>
            <div className='mt sidebar'>

                <div className=' ' >
                    <h3 className=''>Order Summary</h3>
                    <div className='flex flex-col gap-y-3'>
                        <div className='flex justify-between px-5'>
                            <p>Selected Items : <span>{products?.length}</span></p>
                        </div>
                        <div className='flex justify-between px-5'>
                            <p>Total Price : <span>${total}</span></p>
                        </div>

                        <div className='flex justify-between px-5'>
                            <p>Tax : <span>${tax}</span></p>
                        </div>
                        <div className='flex justify-between px-5'>
                            <p>Grand Total : <span>${grandTotal}</span></p>
                        </div>
                        <div className='flex justify-between px-5 mt-5'>
                            <button disabled={products?.length !== 0 ? false : true} className="button add-to-card" onClick={removeHandle}>
                                Remove cart items</button>
                        </div>
                    </div>
                    <div className='checkout'>
                        <Link to='/checkout'><button className="add-to-card checkout-btn">Checkout</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;