import cn from "classnames";
import React, { useState } from "react";
import styles from "./slider.module.scss";

export default function Slider({
    min,
    max,
    step,
    // value,
    colorInput,
    footer,
    leftSide,
    color,
    number,
}) {
    const [value, setValue] = useState(50);
    const colorItems = [
        {
            left: "var(--primary-color-top)",
            right: "var(--primary-color-bottom)",
        },
        {
            left: "var(--violet-color-top)",
            right: "var(--violet-color-bottom)",
        },
        {
            left: "var(--orange-color-top)",
            right: "var(--orange-color-bottom)",
        },
        {
            left: "var(--green-color-top)",
            right: "var(--green-color-bottom)",
        },
        {
            left: "var(--yellow-color-top)",
            right: "var(--yellow-color-bottom)",
        },
    ];
    return (
        <div className={styles.wrapper}>
            <div className={styles.slider}>
                <div className={styles.slider__body}>
                    <input
                        style={{
                            background: `linear-gradient(to right, ${colorItems[color]?.left} 0%, ${colorItems[color]?.right} ${value}%, #2f2f2f ${value}%, #2f2f2f 100%)`,
                        }}
                        type="range"
                        min="0"
                        max="100"
                        step={step}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className={cn(styles[colorInput], styles.slider__input)}
                    />
                    {number !== undefined && (
                        <ul>
                            {number?.map((item, index) => (
                                <li>{item.number}</li>
                            ))}
                        </ul>
                    )}
                    <div className={styles.input__leftside}>{leftSide}</div>
                </div>
                {/* <div className={styles.slider__footer}>
                <p className={styles[colorInput]}>{footer}</p>
            </div> */}
            </div>
            <div className={styles.slider__footer}>
                <p className={styles[colorInput]}>{footer}</p>
            </div>
        </div>
    );
}
