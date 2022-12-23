import React, { useContext } from 'react';
import { Link, } from 'react-router-dom';
import { AuthContex } from '../../../Contex/AuthProvider';
import "./Sidebar.css"

const Sidebar = () => {
    const { products } = useContext(AuthContex)


    let total = 0;

    for (const singleCart of products) {
        total = total + (singleCart?.data?.price * singleCart.quantity)
    }

    let tax = Number((total * 0.1).toFixed(2));
    let grandTotal = total + tax;

    // const removeHandle = () => {
    //     setCart([]);
    //     deleteShoppingCart();
    // }


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
                        {/* <div className='flex justify-between px-5 mt-5'>
                            <button disabled={products?.length !== 0 ? false : true} className="add-to-card" onClick={removeHandle}>
                                Remove Al cart items</button>
                        </div> */}
                    </div>
                    <div className='checkout'>
                        <Link to="/checkout"> <button disabled={products.length !== 0 ? false : true} className="add-to-card checkout-btn">Checkout </button></Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Sidebar;