import React from 'react';
import styles from "../../../css/task1/FavMovies.module.css"

const FavMovies = () => {
    function handleClick(color,e){
        if(e.target.style.background === ''){
            e.target.style.background = color;
        } else {
            e.target.style.background = ''
        }
    }

    return (
        <div>
            <p>Улюблені фільми:</p>
            <ol>
                <li>"Мумия", 1999</li>
                <li onClick={e=>handleClick("#8bbfc2",e)} className={styles.pointerElement}>"Молчание ягнят", 1991
                </li>
                <li className={styles.pointerElement} onClick={e=>handleClick("#b88ab9",e)}>"Мулан", 2020</li>
            </ol>
        </div>
    );
};

export default FavMovies;