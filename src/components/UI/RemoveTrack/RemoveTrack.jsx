import React from "react";
import styles from "./removeTrack.module.scss";
import soundWave from "../../../icons/soundWave.png";
import { ReactComponent as Basket } from "../../../icons/basket.svg";

export default function RemoveTrack() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.soundWave}>
                <img src={soundWave} alt="" />
            </div>
            <div className={styles.basket}>
                <Basket />
            </div>
        </div>
    );
}
