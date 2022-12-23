import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../Contex/AuthProvider';
import ProductCard from './ProductCard';

const Products = () => {
    const { products, setProducts } = useContext(AuthContex)
    const [allProducts, setAllProducts] = useState([])
    const [cart, setCart] = useState([]);
    const [count, setCount] = useState(0)

    useEffect(() => {
        fetch("https://antiquity-server.vercel.app/allProduct")
            .then(res => res.json())
            .then(data => {
                setAllProducts(data)
            })
    }, [])

    const addToCartHandle = (item) => {
        const specificProduct = allProducts.find(pr => pr._id === item?._id)
        specificProduct.select = true

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
        setProducts(newCart)
    }

    const countUp = (countpl) => {
        const getproduct = products.find(p => p._id === countpl)
        let counting = getproduct.quantity
        getproduct.quantity = getproduct.quantity + 1
        setCount(counting)
    }


    const countDown = (countMi) => {
        const getproduct = products.find(p => p._id === countMi)
        let count = getproduct.quantity
        getproduct.quantity = getproduct.quantity - 1
        if (getproduct.quantity === 0) {
            return getproduct.select = false
        }
        setCount(count)
    }

    if (allProducts.length === 0) {
        return <p className='loading'>Loading...</p>
    }
    return (
        <section className='product-section mt'>
            {
                allProducts?.map(product => <ProductCard
                    singleProduct={product}
                    key={product?._id}
                    addToCartHandle={addToCartHandle}
                    count={count}
                    countUp={countUp}
                    countdown={countDown}
                />)
            }
        </section>
    );
};

export default Products;