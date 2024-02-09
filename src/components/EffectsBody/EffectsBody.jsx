import cn from "classnames";
import React, { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import Thumb from "../UI/Thumb/Thumb";
import styles from "./effectsBody.module.scss";
import MobileSliderCarousel from "../MobileSliderCarousel/MobileSliderCarousel";

export default function EffectsBody({
    children,
    title,
    color,
    width,
    thumbColor,
    active,
    buttonsColor,
}) {
    const mob915 = useMediaQuery(915);
    const [ifOff, setIfOff] = useState(false);
    const effectsButton = [
        { id: 1, title: "эффект №1" },
        { id: 2, title: "эффект №2" },
        { id: 3, title: "эффект №3" },
        { id: 4, title: "эффект №4" },
        { id: 5, title: "эффект №5" },
        { id: 6, title: "эффект №6" },
        { id: 7, title: "эффект №7" },
        { id: 8, title: "эффект №8" },
    ];
    return (
        <>
            <div
                className={cn(
                    styles.wrapper,
                    styles[width],
                    styles[active],
                    ifOff === true && mob915 === true && styles.body_disable
                )}
            >
                <div className={cn(styles.header, styles[color])}>
                    <p>{title}</p>
                    <Thumb
                        onclick={() => setIfOff((prev) => !prev)}
                        thumbColor={thumbColor}
                    />
                </div>
                <div className={styles.body}>
                    <div
                        className={
                            ifOff === true &&
                            mob915 !== true &&
                            styles.body_disable
                        }
                    >
                        {children}
                    </div>
                </div>
                {mob915 === true && (
                    <div className={styles.buttons__wrapper}>
                        <MobileSliderCarousel
                            effects={effectsButton}
                            id={"equalizer"}
                            color={buttonsColor}
                        />
                    </div>
                )}
            </div>
        </>
    );
}
