import React from "react";
import { SwiperSlide } from "swiper/react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import EffectsBody from "../../EffectsBody/EffectsBody";
import Slider from "../../Slider/Slider";
import SliderCarousel from "../../SliderCarousel/SliderCarousel";
import GradientButton from "../../UI/GradientButton/GradientButton";
import styles from "./reverb.module.scss";

export default function Reverb({ active }) {
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
            color={"green"}
            title={"reverb"}
            thumbColor={"green"}
            width={mob915 !== true && "sm"}
            active={active}
            buttonsColor={"greenRevert"}
        >
            <div className={styles.slider}>
                <Slider color={3} footer={"DRY/WET"} colorInput={"green"} />
                <Slider color={3} footer={"tone"} colorInput={"green"} />
                <Slider color={3} footer={"size"} colorInput={"green"} />
            </div>
            {mob915 !== true && (
                <div className={styles.effects__button}>
                    <div className={styles.buttons__wrapper}>
                        <div className={styles.buttons}>
                            <SliderCarousel
                                slides={1}
                                effects={effectsButton}
                                id={"reverb"}
                                color={"greenRevert"}
                            />
                        </div>
                    </div>
                </div>
            )}
        </EffectsBody>
    );
}
