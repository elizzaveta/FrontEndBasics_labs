import React from 'react';
import arrow from "../../images/interface/icon-font-angle-left.png"
import styles from "../../css/navigation/BackButton.module.css"
import {Link} from "react-router-dom";

const BackButton = () => {
    return (
        <div className={styles.iconWrapper}>
            <Link to="/" className={styles.link}>
                <img src={arrow} className={styles.icon} alt="left-arrow-icon"/>
                <p>Назад</p>
            </Link>
        </div>
    );
};

export default BackButton;