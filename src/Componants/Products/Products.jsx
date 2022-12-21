import React, { useContext, useEffect, useState } from 'react';
import { addToDb } from '../../hooks/ShoppingCart';
import { AuthContex } from '../../Contex/AuthProvider';
import ProductCard from './ProductCard';

const Products = () => {
    const { products, setProducts } = useContext(AuthContex)
    const [allProducts, setAllProducts] = useState([])
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("https://antiquity-server.vercel.app/products")
            .then(res => res.json())
            .then(data => {
                setAllProducts(data)
            })
    }, [])

    // const addToCartHandle = (product) => {
    //     let arr = [...products, product._id]
    //     setProducts(arr)
    //     localStorage.setItem("antiquity", JSON.stringify(arr))
    // }

    const addToCartHandle = (item) => {
        const exist = cart.find(product => product._id === item._id);
        let newCart = []
        if (!exist) {
            item.quantity = 1;
            newCart = [...cart, item]
        }
        else {
            const rest = cart.filter(product => product._id !== item._id)
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }


        setCart(newCart);
        addToDb(item._id);
        setProducts(newCart)
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