import React from 'react';

const ZoomOutButton = () => {
    function handleClick(){
        let images = document.querySelectorAll(".image")
        images.forEach(image=>{
            console.log(image.width)
            image.style.width = image.width - 40 +'px'
            console.log(image.width)
        })
    }
    return (
        <button onClick={handleClick}>Зменшити</button>
    );
};

export default ZoomOutButton;