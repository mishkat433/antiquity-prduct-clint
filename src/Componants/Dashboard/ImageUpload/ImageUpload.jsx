import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import ImageShow from './ImageShow';
import "./ImageUpload.css"

const ImageUpload = () => {
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false)
    const [imageData, setImageData] = useState([])
    const [reload, setReload] = useState(false)

    const submitHandle = (e) => {
        const formData = new FormData();
        formData.append('image', image.image)
        setLoading(true)

        fetch(`https://api.imgbb.com/1/upload?key=8c9606c529fcf035df626c98a2bd8605`, {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(photo => {
                const image = photo?.data?.display_url
                saveImage(image)
                e.target.reset();
            })

        e.preventDefault()
    }

    const saveImage = (image) => {
        fetch(`https://antiquity-server.vercel.app/saveImage?image=${image}`, {
            method: "POST",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success("image upload success")
                    setLoading(false)
                }

            })
    }

    useEffect(() => {
        fetch('https://antiquity-server.vercel.app/getImage')
            .then(res => res.json())
            .then(data => {
                setReload(!reload)
                setImageData(data)
            })
    }, [reload])

    const deleteHandle = (id) => {
        const confirm = window.confirm("Do you want to delete this image?")
        if (confirm) {

            fetch(`https://antiquity-server.vercel.app/deleteImage/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('Image delete Successful')
                        setReload(!reload)
                    }
                })
        }
    }


    const fileHandle = (e) => {
        setImage({ ...image, [e.target.name]: e.target.files[0] });
    }


    return (
        <div className=''>
            <form className='file-input drop-container' onSubmit={submitHandle}>
                <div>
                    <label htmlFor="images" className="input-field">
                        <span className="drop-title">Drag and Drop files here</span>
                        or
                    </label>
                    <input onChange={fileHandle} type="file" id="images" name='image' accept="image/*" required />
                </div>
                {
                    loading ? <button className='button upload-btn'>loading...</button> : <button className='button upload-btn'>Upload</button>
                }
            </form >

            <div className=' image-card '>
                {
                    imageData.length === 0 && <h2>Loading...</h2>
                }
                {
                    imageData?.map(product => <ImageShow singleImage={product} key={product?._id} deleteHandle={deleteHandle} />)
                }
            </div>

        </div >
    );
};

export default ImageUpload;