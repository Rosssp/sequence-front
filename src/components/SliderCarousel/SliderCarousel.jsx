import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Navigation } from "swiper";
import GradientButton from "../UI/GradientButton/GradientButton";
import sliderArrow from "../../icons/sliderArrow.svg";

import styles from "./slidercarousel.module.scss";

export default function SliderCarousel({ effects, slides, id, color }) {
    const [active, setActive] = React.useState(false);
    const handleClick = (id) => {
        if (active === id) {
            setActive(false);
        } else {
            setActive(id);
        }
    };
    return (
        <div className={styles.slider}>
            <Swiper
                key={id}
                slidesPerView={slides === undefined ? 2 : slides}
                draggable={false}
                grid={{
                    rows: 3,
                }}
                navigation={{
                    nextEl: `.next-${id}`,
                    prevEl: ".prev",
                    lockClass: "disabled",
                }}
                modules={[Grid, Navigation]}
                className={styles.swiperEffects}
            >
                {effects?.map((item, index) => (
                    <SwiperSlide className={styles.effectSlide}>
                        <GradientButton
                            fs={"sm"}
                            color={active === item.id ? color : ""}
                            onClick={() => handleClick(item.id)}
                        >
                            {item.title}
                        </GradientButton>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={styles.slider__next}>
                <img src={`${sliderArrow}`} className={`next-${id}`} />
            </div>
        </div>
    );
}
