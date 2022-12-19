import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../Contex/AuthProvider';
import ProductCard from './ProductCard';

const Products = () => {
    const { products, setProducts } = useContext(AuthContex)
    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        fetch("https://antiquity-server.vercel.app/products")
            .then(res => res.json())
            .then(data => {
                setAllProducts(data)
            })
    }, [])

    const addToCartHandle = (product) => {
        let arr = [...products, product._id]
        setProducts(arr)
        localStorage.setItem("antiquity", JSON.stringify(arr))
    }

    if (allProducts.length === 0) {
        return <p className='loading'>Loading...</p>
    }
    return (
        <section className='product-section'>
            {
                allProducts?.map(product => <ProductCard singleProduct={product} key={product?._id} addToCartHandle={addToCartHandle} />)
            }
        </section>
    );
};

export default Products;