import React from "react";
import EffectsBody from "../../EffectsBody/EffectsBody";
import Slider from "../../Slider/Slider";
import styles from "./delay.module.scss";
import Time from "../../Time/Time";
import SliderCarousel from "../../SliderCarousel/SliderCarousel";
import useMediaQuery from "../../../hooks/useMediaQuery";

export default function Delay({ active }) {
    const mob915 = useMediaQuery(915);

    const effectsButton = [
        { id: 1, title: "эффект №1" },
        { id: 4, title: "эффект №4" },
        { id: 7, title: "эффект №7" },

        { id: 2, title: "эффект №2" },
        { id: 5, title: "эффект №5" },
        { id: 8, title: "эффект №8" },

        { id: 3, title: "эффект №3" },
        { id: 6, title: "эффект №6" },
    ];

    return (
        <EffectsBody
            active={active}
            color={"orange"}
            thumbColor={"orange"}
            title={"delay"}
            buttonsColor={"orangeRevert"}
        >
            <div className={styles.slider}>
                <Slider color={2} footer={"feedback"} colorInput={"orange"} />
                <Time />
                <Slider color={2} footer={"pin pong"} colorInput={"orange"} />
                <Slider color={2} footer={"tone"} colorInput={"orange"} />
                <Slider color={2} footer={"mix"} colorInput={"orange"} />
            </div>
            {mob915 !== true && (
                <div className={styles.effects__button}>
                    <div className={styles.buttons__wrapper}>
                        <div className={styles.buttons}>
                            <SliderCarousel
                                id={"delay"}
                                effects={effectsButton}
                                color={"orangeRevert"}
                            />
                        </div>
                    </div>
                </div>
            )}
        </EffectsBody>
    );
}
