import React from "react";
import GradientButton from "../../UI/GradientButton/GradientButton";
import EffectsBody from "../../EffectsBody/EffectsBody";
import Slider from "../../Slider/Slider";
import styles from "./compressor.module.scss";

import SliderCarousel from "../../SliderCarousel/SliderCarousel";
import useMediaQuery from "../../../hooks/useMediaQuery";

export default function Compressor({ active }) {
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
    const trash = [
        { number: "-20" },
        { number: "-12" },
        { number: "-8" },
        { number: "-4" },
        { number: "0" },
        { number: "+4" },
        { number: "+8" },
        { number: "+10" },
    ];
    const ratio = [
        { number: "-" },
        { number: "10" },
        { number: "6" },
        { number: "4" },
        { number: "3" },
        { number: "2" },
        { number: "1.5" },
    ];
    const attack = [
        { number: "30" },
        { number: "10" },
        { number: "3" },
        { number: "1" },
        { number: ".1" },
        { number: ".1" },
        { number: "0.3" },
    ];
    const release = [
        { number: "2" },
        { number: "1" },
        { number: ".5" },
        { number: ".2" },
        { number: ".1" },
        { number: ".05" },
    ];
    return (
        <EffectsBody
            color={"violet"}
            thumbColor={"violet"}
            title={"compressor"}
            width={mob915 !== true && "xl"}
            active={active}
            buttonsColor={"violetRevert"}
        >
            <div className={styles.slider}>
                <Slider
                    number={trash}
                    color={1}
                    footer={"trash"}
                    colorInput={"violet"}
                />
                <Slider
                    number={ratio}
                    color={1}
                    footer={"ratio"}
                    colorInput={"violet"}
                />
                <Slider
                    number={attack}
                    color={1}
                    footer={"attack"}
                    colorInput={"violet"}
                />
                <Slider
                    number={release}
                    color={1}
                    footer={"release"}
                    colorInput={"violet"}
                />
                <Slider color={1} footer={"output"} colorInput={"violet"} />
            </div>
            {mob915 === true ? (
                ""
            ) : (
                <div className={styles.effects__button}>
                    <div className={styles.buttons__wrapper}>
                        <div className={styles.buttons}>
                            <SliderCarousel
                                effects={effectsButton}
                                id={"compressor"}
                                color={"violetRevert"}
                            />
                        </div>
                    </div>
                </div>
            )}
        </EffectsBody>
    );
}
