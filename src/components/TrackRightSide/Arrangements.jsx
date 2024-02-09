import cn from "classnames";
import React, { useState } from "react";
import styles from "./arrangements.module.scss";

export default function Arrangements({ color, soundWave, flag }) {
    const [isDisabled, setIsDisabled] = useState(false);
    return (
        <div className={styles.arrangements__wrapper}>
            <div className={styles.arrangements}>
                <div className={cn(styles.soundtrack, styles[color])}>
                    <img src={`${soundWave}`} alt="" />
                </div>
            </div>
        </div>
    );
}
