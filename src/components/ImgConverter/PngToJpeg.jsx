import React, { useState } from 'react'

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Resizer from 'react-image-file-resizer'

const PngToJpeg = () => {
    const [newImage, setNewImage] = useState(null);
    const [file, setFile] = useState(null);
    const [isUploaded, setisUploaded] = useState(false);
    const [loading, setLoading] = useState("Convert");
    const [filename, setFileName] = useState(null);
    const [inputFileName, setInputFileName] = useState(null);

    const resizeFile = (file) => {

        setFileName(file.name.split('.')[0])

        Resizer.imageFileResizer(
            file,
            500, // new image max width
            500, // new image max height
            "jpeg", // default image type
            100, // new image quality
            0, // rotation degree
            (uri) => {
                setNewImage(uri);
            },
            'base64' // output type
        );
    };


    const handleFileResize = (e) => {
        e.preventDefault();

        if (file != null) {
            setLoading("Converting...")

            setisUploaded(false);
            resizeFile(file)

            setTimeout(() => {
                setisUploaded(true);
                setLoading("Convert")
                toast.success("Conversion of image successfully!")
            }, 1000);

        }
        else {
            toast.error("Please upload an image");
            setLoading("Convert");
        }
    }


    return (
        <main>
            <div className='container'>
                <form onSubmit={handleFileResize}>
                    <h3>Convert your PNG image into JPEG in seconds</h3>
                    <label htmlFor='upload-file'>
                        <span className="material-symbols-outlined"> add_photo_alternate  </span>
                        <p> {inputFileName ? inputFileName : "upload your image here"}</p>
                    </label>
                    <input type="file" accept="image/png" id='upload-file'
                        onClick={() => setisUploaded(false)}
                        onChange={(event) => {
                            setFile(event.target.files[0])
                            let filename = event.target.files[0].name
                            setFileName(filename.split('.')[0]);
                            setInputFileName(filename);
                        }
                        }
                    />

                    <div className='convert-btn'>
                        <span className="material-symbols-outlined">low_density</span>
                        <button type='submit'>{loading}</button>
                    </div>
                </form>


                {isUploaded &&
                    <div className='complected'>
                        <a download={`converted_${filename}.jpeg`} href={newImage}>
                            <p>Download your jpeg image file :)</p>
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

export default PngToJpeg