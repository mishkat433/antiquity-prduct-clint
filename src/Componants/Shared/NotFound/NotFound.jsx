import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='container'>
            <h3 className='mt'>Something sent wrong! page not found</h3>
            <Link to="/" className='button'>Back to home</Link>
        </div>
    );
};

export default NotFound;