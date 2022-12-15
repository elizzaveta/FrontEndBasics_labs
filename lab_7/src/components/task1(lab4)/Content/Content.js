import React from "react";
import Name from "./Name";
import Birthday from "./Birthday";
import Hobby from "./Hobby";
import FavMovies from "./FavMovies";
import FavPlace from "./FavPlace";
import Education from "./Education";
import BackButton from "../../navigation/BackButton";
import styles from "../../../css/task1/Content.module.css"
import Image from "../Image/Image";

class Content extends React.Component {
    render() {
        return (
            <div>
                <BackButton/>
                <div className={styles.wrapper}>
                    <Name/>
                    <Birthday/>
                    <Education/>
                    <Hobby/>
                    <FavMovies/>
                    <FavPlace/>
                    <Image/>
                </div>
            </div>
        );
    }
}

export default Content