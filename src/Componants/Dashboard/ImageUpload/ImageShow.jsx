import React from 'react';
import "./ImageUpload.css"

const ImageShow = ({ singleImage, deleteHandle }) => {
    const { _id, image } = singleImage;
    return (
        <div className='product-card cart-image'>
            <figure><img className='product-image cart-image' src={image} alt="" /></figure>
            <div>
                <button onClick={() => deleteHandle(_id)} className='delete-btn'>Delete Image</button>
            </div>
        </div>
    );
};

export default ImageShow;