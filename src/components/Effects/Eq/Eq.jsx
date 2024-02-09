import React from "react";
import EffectsBody from "../../EffectsBody/EffectsBody";
import Slider from "../../Slider/Slider";
import SliderCarousel from "../../SliderCarousel/SliderCarousel";
import useMediaQuery from "../../../hooks/useMediaQuery";
import styles from "./eq.module.scss";

export default function Eq({ active }) {
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
        <>
            <EffectsBody
                thumbColor={"primary"}
                title={"equalizer"}
                color={"primary"}
                active={active}
                buttonsColor={"primaryRevert"}
            >
                <div className={styles.slider}>
                    <Slider color={0} footer={"50"} colorInput={"primary"} />
                    <Slider color={0} footer={"120"} colorInput={"primary"} />
                    <Slider color={0} footer={"400"} colorInput={"primary"} />
                    <Slider color={0} footer={"800"} colorInput={"primary"} />
                    <Slider color={0} footer={"1.2К"} colorInput={"primary"} />
                    <Slider color={0} footer={"3K"} colorInput={"primary"} />
                    <Slider color={0} footer={"10K"} colorInput={"primary"} />
                </div>
                {mob915 === true ? (
                    ""
                ) : (
                    <div className={styles.effects__button}>
                        <div className={styles.buttons__wrapper}>
                            <div className={styles.buttons}>
                                <SliderCarousel
                                    effects={effectsButton}
                                    id={"equalizer"}
                                    color={"primaryRevert"}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </EffectsBody>
        </>
    );
}
