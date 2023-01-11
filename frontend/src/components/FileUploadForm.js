import './FileUploadForm.css'
import BoldLevelSelector from "./BoldLevelSelector";
import {Button} from "@mui/material";
import {useState} from "react";


const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;

const FileUploadForm = (
    label,
    updateFilesCb,
    maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
    ...otherProps
) => {

    const [file, setFile] = useState();

    const onUploadFileHandler = (event) => {

        event.preventDefault()  // required?
        const files = event.target.files
        if(files.length > 1){
            throw Error('Only one file can be uploaded')
        }
        if(files.length === 1){
            // Do some validation, e.g. on the file size
            setFile(event.target.files[0]);
            console.log(file);
        }
    }

    return (
        <div>
            <input type="file" onChange={onUploadFileHandler}/>
            <BoldLevelSelector/>
            <Button>Transform</Button>
        </div>
    )
}

export default FileUploadForm;