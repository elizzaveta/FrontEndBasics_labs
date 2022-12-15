import React from 'react';

const DeleteButton = () => {
    function handleClick(){
        let images = document.querySelectorAll(".image")
        if(images.length !==0){
            images[images.length-1].remove()
        }
    }
    return (
        <button onClick={handleClick}>Видалити</button>
    );
};

export default DeleteButton;