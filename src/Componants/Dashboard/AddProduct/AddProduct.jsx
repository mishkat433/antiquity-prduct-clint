import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import "./AddProduct.css";

const AddProduct = () => {
    const [formData, setFormData] = useState({})
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState([])

    const addProduct = (e) => {
        setLoading(true)
        const form = new FormData();
        form.append('image', image.photo)

        fetch(`https://api.imgbb.com/1/upload?key=8c9606c529fcf035df626c98a2bd8605`, {
            method: "POST",
            body: form,
        })
            .then(res => res.json())
            .then(photo => {
                const image = photo?.data?.display_url
                saveData(image, formData)
                e.target.reset();
            })
        e.preventDefault()
    }

    const saveData = (image, data) => {
        const readyData = { image, data }

        fetch('https://antiquity-server.vercel.app/addProduct', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(readyData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("product added success")
                    setLoading(false)
                }
            })
    }

    const formHandle = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const fileHandle = (e) => {
        setImage({ ...image, [e.target.name]: e.target.files[0] });
    }

    return (
        <section className="full-addProduct">
            <form onSubmit={addProduct} className="addproduct-form">
                <h1 className='heading'>Add Product</h1>
                <div className="form-control mb">
                    <input onChange={formHandle} type="text" name="name" placeholder="Product Name" className="input input-bordered" required />
                </div>
                <div className="form-control mb">
                    <input onChange={fileHandle} type="file" name="photo" placeholder="Photo" className="input file input-bordered" required />
                </div>
                <div className="form-control mb">
                    <input onChange={formHandle} type="number" name="price" placeholder="Product Price" className="input input-bordered" required />
                </div>
                <div className="form-control mb">
                    <input onChange={formHandle} name="inStock" type="number" placeholder="Quantity" className="input input-bordered" required />
                </div>
                <div className="form-control mb">
                    {!loading ? <button className="button login-btn">Add Product</button> : <button disabled className="button login-btn">loading...</button>}
                </div>
            </form>
        </section >
    );
};

export default AddProduct;