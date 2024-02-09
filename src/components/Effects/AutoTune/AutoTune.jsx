import React from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import EffectsBody from "../../EffectsBody/EffectsBody";
import Slider from "../../Slider/Slider";
import SliderCarousel from "../../SliderCarousel/SliderCarousel";
import styles from "./autotune.module.scss";

export default function AutoTune({ active }) {
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
            color={"yellow"}
            title={"autotune"}
            thumbColor={"yellow"}
            width={mob915 !== true && "xs"}
            active={active}
            buttonsColor={"yellowRevert"}
        >
            <div className={styles.slider}>
                <Slider color={4} footer={"speed"} colorInput={"yellow"} />
                <Slider color={4} footer={"vibrato"} colorInput={"yellow"} />
                <Slider color={4} footer={"flex tune"} colorInput={"yellow"} />
            </div>
            {mob915 !== true && (
                <div className={styles.effects__button}>
                    <div className={styles.buttons__wrapper}>
                        <div className={styles.buttons}>
                            <SliderCarousel
                                slides={1}
                                effects={effectsButton}
                                id={"autotune"}
                                color={"yellowRevert"}
                            />
                        </div>
                    </div>
                </div>
            )}
        </EffectsBody>
    );
}
