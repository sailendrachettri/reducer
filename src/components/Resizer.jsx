import React, { useState } from 'react'

import Resizer from 'react-image-file-resizer'

const ImageResize = () => {
    const [newImage, setNewImage] = useState(null);
    const [upload, setUpload] = useState(null);
    const [quality, setQuality] = useState(50);
    const [isUploaded, setisUploaded] = useState(false);
    const [loading, setLoading] = useState("Resize")

    const resizeFile = (file) => {
        Resizer.imageFileResizer(
            file,
            500, // new image max width
            500, // new image max height
            'JPEG', // default type
            quality, // new image quality
            0, // rotation degree
            (uri) => {
                setNewImage(uri);
            },
            'base64' // output type
        );
    };


    const handleFileResize = (e) => {
        e.preventDefault();

        if (upload != null) {
            setLoading("Resizing...")

            setisUploaded(false);
            resizeFile(upload)
            setQuality(quality);

            setTimeout(() => {
                setisUploaded(true);
                setLoading("Resize")
            }, 1000);
        }
        else {
            alert("Please upload an image");
            setLoading("Resize");
        }
    }


    return (
        <div className='container'>
            <form onSubmit={handleFileResize}>
            <h3>Compress your image file in seconds</h3>
                <label htmlFor='upload-file'>Upload Image</label>
                <input type="file" id='upload-file' onChange={(event) => setUpload(event.target.files[0])} />

                <div>
                    <input type="number" className='quality' min={10} max={100} value={quality} onChange={(ev) => setQuality(ev.target.value)} /> <span>%</span>
                </div>
                <button type='submit'>{loading}</button>
            </form>


            {isUploaded &&
                <div className='complected'>
                    <p>Image compressed successfully!</p>
                    <img src={newImage} alt="Resized file" className='preview' />
                    <a download="compressed_file" href={newImage}>
                        <button className='download'>Download</button>
                    </a>

                </div>
            }
        </div>
    )
}

export default ImageResize