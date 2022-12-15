import React from 'react';
import {GoodsInfo} from "../../utils/GoodsInfo";
import GoodsCard from "./GoodsCard";
import styles from "../../css/task2/GoodsList.module.css"
import BackButton from "../navigation/BackButton";


const GoodsList = () => {
    return (
        <div>
            <BackButton/>
            <div className={styles.goodsWrapper}>
                {GoodsInfo.map(item =>
                    <GoodsCard item={item}/>
                )}
            </div>

        </div>
    );
};

export default GoodsList;