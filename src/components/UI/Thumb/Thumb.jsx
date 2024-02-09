import cn from "classnames";
import React, { useState } from "react";
import styles from "./thumb.module.scss";

export default function Thumb({ thumbColor, onclick }) {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <label className={styles.thumb}>
            <div>
                <p
                    style={
                        isChecked === true
                            ? { visibility: "hidden" }
                            : { visibility: "visible" }
                    }
                >
                    on
                </p>
                <p
                    style={
                        isChecked === true
                            ? { visibility: "visible" }
                            : { visibility: "hidden" }
                    }
                >
                    off
                </p>
            </div>
            <input
                type={"checkbox"}
                onChange={(e) => setIsChecked(e.target.checked)}
                onClick={onclick}
            ></input>
            <span className={cn(styles.slider, styles[thumbColor])} />
        </label>
    );
}
