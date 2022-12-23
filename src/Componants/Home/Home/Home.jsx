import React, { useContext } from 'react';
import { AuthContex } from '../../../Contex/AuthProvider';
import Products from '../../Products/Products';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import Banner from '../Banner/Banner';
// import Location from '../Location/Location';

const Home = () => {
    const { sidebar } = useContext(AuthContex)
    return (
        <div className='container'>
            <div className={sidebar ? 'home-layout' : undefined}>
                <div className=''>
                    <Banner />
                    {/* <Location /> */}
                    <Products />
                </div>
                <div>
                    {sidebar && <Sidebar />}
                </div>
            </div>
        </div>
    );
};

export default Home;