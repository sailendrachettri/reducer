import React, { useState } from 'react'

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Resizer from 'react-image-file-resizer'

const ImageResize = () => {
    const [newImage, setNewImage] = useState(null);
    const [upload, setUpload] = useState(null);
    const [quality, setQuality] = useState(50);
    const [isUploaded, setisUploaded] = useState(false);
    const [loading, setLoading] = useState("Resize")
    const [imageType, setImageType] = useState("JPEG");
    const [filename, setFileName] = useState(null);

    const resizeFile = (file) => {

        setFileName(file.name.split('.')[0])

        Resizer.imageFileResizer(
            file,
            500, // new image max width
            500, // new image max height
            imageType, // default image type
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
            setImageType(imageType);

            setTimeout(() => {
                setisUploaded(true);
                setLoading("Resize")
                toast.success("Compressed successfully!")
            }, 1000);

        }
        else {
            toast.error("Please upload an image");
            setLoading("Resize");
        }
    }


    return (
        <main>
            <div className='container'>
                <form onSubmit={handleFileResize}>
                    <h3>Compress your image file in seconds</h3>
                    <label htmlFor='upload-file'>
                        <span className="material-symbols-outlined"> add_photo_alternate  </span>
                        <p> {filename ? (filename) : "upload your image here"}</p>
                    </label>
                    <input type="file" id='upload-file'
                        onClick={() => setisUploaded(false)}
                        onChange={(event) => {
                            setUpload(event.target.files[0])
                            setFileName(event.target.files[0].name)
                        }
                        }
                    />

                    <div className='quality'>
                        <div>
                            <input type="number" min={10} max={100} value={quality} onChange={(ev) => setQuality(ev.target.value)} />
                            <span>%</span>
                        </div>
                        <select value={imageType} onChange={(ev) => setImageType(ev.target.value)}>
                            <option value="PNG">PNG</option>
                            <option value="JPEG">JPEG</option>
                            <option value="WEBP">WEBP</option>
                        </select>
                    </div>
                    <div className='resize-btn'>
                        <span className="material-symbols-outlined">low_density</span>
                        <button type='submit'>{loading}</button>
                    </div>
                </form>


                {isUploaded &&
                    <div className='complected'>
                        <a download={`compressed_${filename}`} href={newImage}>
                            <p>Download your compressed image file :)</p>
                            <img src={newImage} alt="Resized file" className='preview' />
                            <button className='download'>
                                <span className="material-symbols-outlined">download</span>
                                <span>Download</span>
                            </button>
                        </a>

                    </div>
                }
            </div>
        </main>
    )
}

export default ImageResize