import React from 'react';
import Products from '../../Products/Products';
import Banner from '../Banner/Banner';
import Location from '../Location/Location';

const Home = () => {
    return (
        <div className='container'>
            <div className='mt'>
                <Banner />
                <Location />
                <Products />
            </div>
        </div>
    );
};

export default Home;