import React from "react";
import Checkbox from "../UI/Checkbox/Checkbox";
import GradientButton from "../UI/GradientButton/GradientButton";
import { ReactComponent as Equalizer } from "../../icons/equalizer.svg";
import { ReactComponent as Download } from "../../icons/download.svg";
import { ReactComponent as Logout } from "../../icons/logout.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useMediaQuery from "../../hooks/useMediaQuery";
import MobileSliderCarousel from "../MobileSliderCarousel/MobileSliderCarousel";
import styles from "./header.module.scss";

export default function Header({ setMixerIsActive }) {
    const mob915 = useMediaQuery(915);
    const headerItems = [
        { title: "Название трека, присвсвсsdsdsdsdsdsd", id: "153120" },
    ];
    const effectsItems = [
        { title: "eq", color: "primary" },
        { title: "comp.", color: "violet" },
        { title: "delay", color: "orange" },
        { title: "reverb", color: "green" },
        { title: "a.tune", color: "yellow" },
    ];
    return (
        <header>
            <div className={styles.title}>
                <div className={styles.title__image}>
                    <img
                        src="https://i.ytimg.com/vi/bNM1Uq_uEgw/maxresdefault.jpg"
                        alt=""
                    />
                </div>
                <div className={styles.title__name}>
                    {headerItems.map((item, index) => (
                        <>
                            <p>{item.title}</p>
                            <p>ID: {item.id}</p>
                        </>
                    ))}
                </div>
            </div>
            <GradientButton
                onClick={() => setMixerIsActive((prev) => !prev)}
                style={"withImg"}
                size={mob915 === true && "xl"}
                color={"primary"}
            >
                <p>пресеты</p>
                <div className={styles.pressets_svg}>
                    <Equalizer />
                </div>
            </GradientButton>
            <div className={styles.pressets}>
                <MobileSliderCarousel
                    id={"header"}
                    effectsItems={effectsItems}
                    header={true}
                    headerStyle={"pressets"}
                />
            </div>

            <div className={styles.login}>
                <GradientButton
                    color={"primary"}
                    size={mob915 === true && "xl"}
                >
                    <div className={styles.login_svg}>
                        <Download />
                    </div>
                </GradientButton>
                <GradientButton
                    style={"withImg"}
                    size={mob915 === true && "xl"}
                    color={"violet"}
                >
                    {mob915 === true ? "" : <p>пользователь</p>}
                    <div className={styles.user_svg}>
                        <Logout />
                    </div>
                </GradientButton>
            </div>
        </header>
    );
}
