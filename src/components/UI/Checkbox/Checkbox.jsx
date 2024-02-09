import React, { useState } from "react";
import styles from "./checkbox.module.scss";

export default function Checkbox({ children, style }) {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <label className={`${styles.wrapper} ${styles[style]}`}>
            <p>{children}</p>
            <input
                type={"checkbox"}
                onClick={() => setIsChecked((prev) => !prev)}
            ></input>
            <span className={`${styles.circle} ${styles[style]}`}></span>
        </label>
    );
}
