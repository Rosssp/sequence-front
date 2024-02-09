import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import AutoTune from "../Effects/AutoTune/AutoTune";
import Compressor from "../Effects/Compressor/Compressor";
import Delay from "../Effects/Delay/Delay";
import Eq from "../Effects/Eq/Eq";
import Reverb from "../Effects/Reverb/Reverb";
import HorizontalRangeSlider from "../HorizontalRangeSlider/HorizontalRangeSlider";
import GradientButton from "../UI/GradientButton/GradientButton";
import RemoveTrack from "../UI/RemoveTrack/RemoveTrack";
import { ReactComponent as CloseArrow } from "../../icons/close_arrow.svg";
import { ReactComponent as Cancel } from "../../icons/cancel.svg";
import sliderArrow from "../../icons/sliderArrow.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import styles from "./mixers.module.scss";
import { Navigation } from "swiper";

export default function Mixers({ mixerIsActive, setMixerIsActive }) {
    const mob915 = useMediaQuery(915);
    const pressetsItems = [
        { id: 1, title: "рэп" },
        { id: 2, title: "фолк" },
        { id: 3, title: "джаз" },
        { id: 4, title: "минор" },
        { id: 5, title: "регги" },
        { id: 6, title: "голос" },

        {
            id: 7,
            active: false,
            title: "equalizer",
            component: <Eq />,
        },
        {
            id: 8,
            active: false,
            title: "compressor",
            component: <Compressor />,
        },
        { id: 9, active: false, title: "delay", component: <Delay /> },
        { id: 10, active: false, title: "reverb", component: <Reverb /> },
        { id: 11, active: false, title: "autotune", component: <AutoTune /> },
    ];
    const [active, setActive] = React.useState(false);
    const handleClick = (id) => {
        if (active === id) {
            pressetsItems[id].active = false;
            setActive(false);
        } else {
            setActive(id);
            pressetsItems[id].active = true;
            console.log(pressetsItems);
        }
    };
    return (
        <div
            className={styles.mixers__wrapper}
            style={
                mixerIsActive === true
                    ? { display: "flex" }
                    : { display: "none" }
            }
        >
            <div className={styles.title}>
                <div>MAIN VOCAL</div>
                {mob915 !== true && (
                    <div
                        className={styles.title__close_desctop}
                        onClick={() => setMixerIsActive(false)}
                    >
                        <div>
                            <Cancel />
                        </div>
                        <p>закрыть</p>
                    </div>
                )}
                {mob915 === true && (
                    <>
                        <HorizontalRangeSlider pan={true} />
                        <div className={styles.title__basket}>
                            <RemoveTrack />
                            <p>очистить дорожку</p>
                        </div>
                        <div
                            className={styles.title__close}
                            onClick={() => setMixerIsActive(false)}
                        >
                            <CloseArrow />
                            <p>закрыть</p>
                        </div>
                    </>
                )}
            </div>
            {mob915 === true ? (
                <div className={styles.pressets__wrapper_mob}>
                    <Swiper
                        direction={"vertical"}
                        slidesPerView={"auto"}
                        spaceBetween={0}
                        navigation={{
                            nextEl: `.next-pressets`,
                            prevEl: ".prev",
                            lockClass: "disabled",
                        }}
                        modules={[Navigation]}
                        className={styles.pressets}
                    >
                        {pressetsItems.map((item, index) => (
                            <SwiperSlide>
                                <GradientButton
                                    size={"xxl"}
                                    color={
                                        active === item.id
                                            ? `${
                                                  mob915 === true
                                                      ? "mobPrimary"
                                                      : "primary"
                                              }`
                                            : ""
                                    }
                                    onClick={() => handleClick(item.id)}
                                >
                                    {item.title}
                                </GradientButton>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className={`${styles.slider__next}`}>
                        <img
                            src={`${sliderArrow}`}
                            className={`next-pressets`}
                        />
                    </div>
                </div>
            ) : (
                <div className={styles.pressets}>
                    {pressetsItems.slice(0, 6).map((item, index) => (
                        <GradientButton
                            size={"xxl"}
                            color={
                                active === item.id
                                    ? `${
                                          mob915 === true
                                              ? "mobPrimary"
                                              : "primary"
                                      }`
                                    : ""
                            }
                            onClick={() => handleClick(item.id)}
                        >
                            {item.title}
                        </GradientButton>
                    ))}
                </div>
            )}
            <div className={styles.effects__wrapper}>
                <div>
                    {mob915 === true ? (
                        <>
                            <Eq active={active === 7 ? "" : "active"} />
                            <Compressor active={active === 8 ? "" : "active"} />
                            <Delay active={active === 9 ? "" : "active"} />
                            <Reverb active={active === 10 ? "" : "active"} />
                            <AutoTune active={active === 11 ? "" : "active"} />
                        </>
                    ) : (
                        <>
                            <Eq />
                            <Compressor />
                            <Delay />
                            <Reverb />
                            <AutoTune />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
