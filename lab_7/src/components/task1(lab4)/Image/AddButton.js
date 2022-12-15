import React from 'react';

const AddButton = () => {
    function handleClick(){
        document.getElementById("uploadImage").click();
    }
    return (
        <button onClick={handleClick}>Додати</button>
    );
};

export default AddButton;