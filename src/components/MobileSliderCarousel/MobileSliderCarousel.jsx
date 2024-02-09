import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import GradientButton from "../UI/GradientButton/GradientButton";
import sliderArrow from "../../icons/sliderArrow.svg";
import { Navigation } from "swiper";
import Checkbox from "../UI/Checkbox/Checkbox";
import styles from "./mobileSliderCarousel.module.scss";

export default function MobileSliderCarousel({
    effects,
    color,
    id,
    header,
    effectsItems,
    headerStyle,
}) {
    const [active, setActive] = React.useState(false);
    const handleClick = (id) => {
        if (active === id) {
            setActive(false);
        } else {
            setActive(id);
        }
    };
    return (
        <>
            <Swiper
                spaceBetween={4}
                slidesPerView={"auto"}
                // className={styles.pressets}
                navigation={{
                    nextEl: `.next-${id}`,
                    prevEl: ".prev",
                    lockClass: "disabled",
                }}
                modules={[Navigation]}
                className={styles[headerStyle]}
            >
                {header === true ? (
                    <>
                        {effectsItems.map((item, i) => (
                            <SwiperSlide style={{ width: "auto" }}>
                                <Checkbox style={`${item.color}`}>
                                    {item.title}
                                </Checkbox>
                            </SwiperSlide>
                        ))}
                    </>
                ) : (
                    <>
                        {effects.map((item, i) => (
                            <SwiperSlide style={{ width: "auto" }}>
                                <GradientButton
                                    fs={"xs"}
                                    color={active === item.id ? color : ""}
                                    onClick={() => handleClick(item.id)}
                                >
                                    {item.title}
                                </GradientButton>
                            </SwiperSlide>
                        ))}
                    </>
                )}
            </Swiper>
            <div className={`${styles.slider__next}`}>
                <img src={`${sliderArrow}`} className={`next-${id}`} />
            </div>
        </>
    );
}
