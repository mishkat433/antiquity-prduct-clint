import React from 'react';

const ImageUpload = () => {
    return (
        <div>
            <form className="uploader">
                <input id="file-upload" type="file" name="fileUpload" accept="image/*" />
            </form>
        </div >
    );
};

export default ImageUpload;