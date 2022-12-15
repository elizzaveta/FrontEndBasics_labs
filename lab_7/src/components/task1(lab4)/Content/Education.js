import React from 'react';
import styles from "../../../css/task1/Education.module.css"
const Education = () => {
    return (
        <div className={styles.flexWrapper}>
            <p>Освіта: </p>
            <div className={styles.flexItem}>
                <p>Сумська гімназія №1, м. Суми</p>
                <p>НТУУ "КПІ", м. Київ</p>
            </div>
        </div>
    );
};

export default Education;