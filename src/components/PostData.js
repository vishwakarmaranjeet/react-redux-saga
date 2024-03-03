import React, { useState, useEffect } from "react";
import axios from "axios";
const PostData = () => {
    const [progress, setProgress] = useState(0);
        const config = {
            responseType: "blob",
            onDownloadProgress: (axiosProgressEvent) => {
                let percentCompleted = Math.round(axiosProgressEvent?.loaded / axiosProgressEvent?.total) * 100;
                setProgress(percentCompleted);
                console.log(axiosProgressEvent);
            }
        };
        const postTitle = () => {
            setProgress(0);
            axios.get("https://picsum.photos/800/800", config)
            .then(response => console.log("response", response))
            .catch(err => console.log(err))
        };  
    return <>
        <h2>{progress}</h2>
        <button type="button" onClick={postTitle} className="cursor-pointer">Progress</button>
    </>
};
export default PostData;