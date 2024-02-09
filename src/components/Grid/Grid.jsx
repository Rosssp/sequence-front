import React from "react";
import cn from "classnames";
import TrackLeftSide from "../TrackLeftSide/TrackLeftSide";
import Arrangements from "../TrackRightSide/Arrangements";
import soundWave from "../../icons/soundWave.png";
import largeWave from "../../icons/largeWave.png";
import { ReactComponent as Basket } from "../../icons/basket.svg";
import { ReactComponent as EqIcon } from "../../icons/equalizer.svg";

import styles from "./grid.module.scss";
import { ReactComponent as Minus } from "../../icons/minus.svg";
import { ReactComponent as Plus } from "../../icons/plus.svg";
import useMediaQuery from "../../hooks/useMediaQuery";

export default function Grid({ setActive, setMixerIsActive }) {
    const mob915 = useMediaQuery(915);
    const GRID_COL_LENGTH = 100;
    const INSIDE_COL_LENGTH = 3;
    const currentCol = [];
    const currentInsideCol = [];

    for (let col = 0; col < GRID_COL_LENGTH; col++) {
        currentCol.push(col);
    }
    for (let col = 0; col < INSIDE_COL_LENGTH; col++) {
        currentInsideCol.push(col);
    }

    const leftSideItem = [
        {
            id: 1,
            title: "minus",
            recButton: false,
            muteColor: "primary",
            pan: false,
            containerBg: "primary",
        },
        {
            id: 2,
            title: "main vocal",
            recButton: true,
            muteColor: "orange",
            pan: true,
            containerBg: "orange",
        },
        {
            id: 3,
            title: "vocal #1",
            recActive: "recActive",
            recButton: true,
            muteColor: "green",
            pan: true,
            containerBg: "green",
        },
        {
            id: 4,
            title: "vocal #2",
            recActive: "recActive",
            recButton: true,
            muteColor: "violet",
            pan: true,
            containerBg: "violet",
        },
        {
            id: 5,
            title: "vocal #3",
            recActive: "recActive",
            recButton: true,
            muteColor: "yellow",
            pan: true,
            containerBg: "yellow",
        },
        {
            id: 6,
            title: "vocal #4",
            recActive: "recActive",
            recButton: true,
            muteColor: "primary",
            pan: true,
            containerBg: "primary",
        },
        {
            id: 7,
            title: "vocal #5",
            recActive: "recActive",
            recButton: true,
            muteColor: "primary",
            pan: true,
            containerBg: "primary",
        },
    ];
    const arrangementsItem = [
        { id: 1, img: soundWave, color: "primary" },
        { id: 2, img: soundWave, color: "orange" },
        { id: 3, img: largeWave, color: "green" },
        { id: 4, img: soundWave, color: "violet" },
        { id: 5, img: largeWave, color: "yellow" },
        { id: 6, img: soundWave, color: "primary" },
        { id: 7, img: largeWave, color: "primary" },
    ];
    const transhItem = [
        { id: 1, img: <Basket />, mobImg: <EqIcon />, color: "primary" },
        { id: 2, img: <Basket />, mobImg: <EqIcon />, color: "orange" },
        { id: 3, img: <Basket />, mobImg: <EqIcon />, color: "green" },
        { id: 4, img: <Basket />, mobImg: <EqIcon />, color: "violet" },
        { id: 5, img: <Basket />, mobImg: <EqIcon />, color: "yellow" },
        { id: 6, img: <Basket />, mobImg: <EqIcon />, color: "primary" },
        { id: 7, img: <Basket />, mobImg: <EqIcon />, color: "primary" },
    ];

    const [recordAactive, setRecordActive] = React.useState(false);
    const handleClick = (id) => {
        if (recordAactive === id) {
            setRecordActive(false);
            setActive(false);
        } else {
            setRecordActive(id);
            setActive(true);
        }
    };

    // const [isMute, setIsMute] = React.useState(false);
    let flag = false;

    return (
        <div className={styles.wrapper}>
            <div className={styles.grid__wrapper}>
                <div className={styles.grid__container}>
                    <div className={styles.left__side}>
                        {leftSideItem.map((item, i) => (
                            <TrackLeftSide
                                // isMute={isMute}
                                // setIsMute={setIsMute}
                                pan={item.pan}
                                title={item.title}
                                muteColor={
                                    recordAactive === item.id
                                        ? item.muteColor
                                        : ""
                                }
                                recButton={item.recButton}
                                handleRecord={() => handleClick(item.id)}
                                recActive={
                                    recordAactive === item.id ? "recActive" : ""
                                }
                                containerBg={
                                    recordAactive === item.id
                                        ? item.containerBg
                                        : ""
                                }
                            />
                        ))}
                    </div>
                    <div className={styles.arragemets__wrapper}>
                        <div className={styles.arragemets}>
                            <div className={styles.grid__tamplate}>
                                <div className={styles.arrangements__items}>
                                    {arrangementsItem.map((item) => (
                                        <div
                                            className={cn(
                                                styles.arrangements__item,
                                                recordAactive === item.id
                                                    ? styles[item.color]
                                                    : ""
                                            )}
                                        >
                                            <Arrangements
                                                color={item.color}
                                                soundWave={item.img}
                                            />
                                        </div>
                                    ))}
                                </div>
                                {currentCol.map((item, index) => (
                                    <>
                                        <div className={styles.grid__coll}>
                                            <p>{item + 1}</p>
                                        </div>
                                        {currentInsideCol.map((item, index) => (
                                            <span className={styles.grid__coll}>
                                                <span>.</span>
                                            </span>
                                        ))}
                                    </>
                                ))}
                            </div>
                        </div>
                        {/* <div className={styles.playIndicator}></div> */}
                    </div>
                    <div className={styles.trash__container}>
                        {transhItem.map((item) => (
                            <div
                                onClick={() => setMixerIsActive(true)}
                                className={cn(
                                    styles.trash__item,
                                    recordAactive === item.id
                                        ? styles[item.color]
                                        : ""
                                )}
                            >
                                {mob915 === true ? (
                                    <>{item.mobImg}</>
                                ) : (
                                    <>{item.img}</>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.grid__bottom}>
                <div className={styles.minus}>
                    <Minus />
                </div>
                <p>сетка</p>
                <div className={styles.plus}>
                    <Plus />
                </div>
            </div>
        </div>
    );
}
