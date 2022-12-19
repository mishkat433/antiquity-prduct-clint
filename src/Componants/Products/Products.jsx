import React, { useState } from 'react';

const Products = () => {
    const [allProducts, setAllProducts] = useState([])

    if (allProducts.length === 0) {
        return <p className='loading'>Loading...</p>
    }
    return (
        <div>
            asdf
        </div>
    );
};

export default Products;