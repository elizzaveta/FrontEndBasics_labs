import React from 'react';

const GoodsCard = (props) => {
    const {item}  = props;
    return (
        <div>
            <img src={item.image} alt={item.name + " image"}/>
            <p>{item.name}</p>
            <p>cost: {item.cost}</p>

        </div>
    );
};

export default GoodsCard;