import cn from "classnames";
import React, { useState } from "react";
import GradientButton from "../UI/GradientButton/GradientButton";
import styles from "./modal.module.scss";

export default function Modal({ svg, type, title, sub, violet, gray, color }) {
    const [isClose, setisClose] = useState(false);
    return (
        <>
            <div
                className={styles.modal__background}
                style={
                    isClose === true ? { display: "none" } : { display: "flex" }
                }
            ></div>
            <div
                className={styles.wrapper}
                style={
                    isClose === true ? { display: "none" } : { display: "flex" }
                }
            >
                <div className={styles.container}>
                    <div className={cn(styles.title, styles[color])}>
                        <div className={styles.title__img}>{svg}</div>
                        <p>{type}</p>
                    </div>
                    <div className={styles.boody}>
                        <p>{title}</p>
                        <p>{sub}</p>
                    </div>
                    <div className={styles.footer}>
                        {violet !== undefined && (
                            <GradientButton size={"modal"} color={"violet"}>
                                {violet}
                            </GradientButton>
                        )}
                        <GradientButton
                            onClick={() => setisClose(true)}
                            size={"modal"}
                        >
                            {gray}
                        </GradientButton>
                    </div>
                </div>
            </div>
        </>
    );
}
