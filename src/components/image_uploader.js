import React, { useState } from 'react'
import { FileUploader } from 'react-drag-drop-files';

const fileTypes = ["JPG", "PNG", "GIF"]

export default function ImageUploader() {
    const [file, setFile] = useState(null)
    const [url, setUrl] = useState(null)

    const handleChange = (param) => {
        console.log(param)
        // console.log(URL.createObjectURL(param.target.value))
    };

    return (
        <div>
            {/* <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
            {file ? file.name : ""} */}

            <input type="file" id="img" name="img" accept="image/png" onChange={handleChange}/>
        </div>
    );
}