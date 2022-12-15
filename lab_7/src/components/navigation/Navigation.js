import React from 'react';
import styles from "../../css/navigation/Navigation.module.css"
import {
    Link
} from "react-router-dom";

const Navigation = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.buttonGroup}>
                <Link to="/task1">Завдання 1</Link>
                <Link to="/task2">Завдання 2</Link>
            </div>
        </div>
    );
};

export default Navigation;