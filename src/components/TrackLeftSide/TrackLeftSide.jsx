import React, { useState } from "react";
import { ReactComponent as Volume } from "../../icons/up_volume.svg";
import { ReactComponent as OffVolume } from "../../icons/off_volume.svg";
import cn from "classnames";
import HorizontalRangeSlider from "../HorizontalRangeSlider/HorizontalRangeSlider";
import useMediaQuery from "../../hooks/useMediaQuery";
import styles from "./trackleftside.module.scss";

export default function TrackLeftSide({
    title,
    pan,
    muteColor,
    handleRecord,
    recButton,
    recActive,
    containerBg,
    flag,
    // isMute,
    // setIsMute,
}) {
    const mob915 = useMediaQuery(915);
    const [panValue, setPanValue] = useState(0);
    const [volValue, setVolValue] = useState(0);
    const [isMute, setIsMute] = React.useState(false);
    return (
        <>
            <div className={styles.track__container}>
                <div className={styles.progressbar}></div>
                <div
                    className={cn(styles.sound__button, styles[muteColor])}
                    onClick={() => setIsMute((prev) => !prev)}
                >
                    {isMute === true ? <OffVolume /> : <Volume />}
                </div>
                <div
                    className={cn(
                        styles.track__header__wrapper,
                        styles[containerBg],
                        isMute === true && styles.mutedBg
                    )}
                >
                    <div className={styles.track__header}>
                        <p className={styles.title}>{title}</p>
                        {recButton === true && (
                            <div
                                onClick={handleRecord}
                                className={cn(styles[recActive], styles.rec)}
                                style={
                                    isMute === true
                                        ? { visibility: "hidden" }
                                        : { visibility: "visible" }
                                }
                            >
                                <p>rec</p>
                            </div>
                        )}
                    </div>
                    {mob915 !== true && (
                        <div className={styles.mixer}>
                            <HorizontalRangeSlider pan={pan} />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
