import React from 'react';
import ViennaImage from "../../../img/Vienna.jpg"
import AddButton from "./AddButton";
import ZoomInButton from "./ZoomInButton";
import ZoomOutButton from "./ZoomOutButton";
import DeleteButton from "./DeleteButton";
import styles from "../../../css/task1/Image.module.css"
function Image(){
    return (
        <div>
            <div id="imagesDiv" className={styles.imagesDiv}>
                <a href="https://en.wikipedia.org/wiki/Vienna" target="_blank" rel="noreferrer">
                    <img className="image" style={{width:"100%"}} src={ViennaImage} alt="Vienna"/>
                </a>
            </div>
            <div>
                <input onChange={upload} type="file" id="uploadImage" accept="image/*" hidden/>
                    <AddButton/>
                    <ZoomInButton/>
                    <ZoomOutButton/>
                    <DeleteButton/>
            </div>
        </div>
    );
}

function upload(){
    let uploader = document.getElementById("uploadImage");
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        let img = document.createElement("img")
        img.src = uploaded_image
        img.className="image"
        document.getElementById("imagesDiv").appendChild(img)
    });
    reader.readAsDataURL(uploader.files[0]);
}

export default Image;