import React from 'react';
import "./Checkout.css";

const Checkout = () => {
    return (
        <div className='container'>
            <div className='mt '>
                <form >
                    <label for="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />


                    <button>button</button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;