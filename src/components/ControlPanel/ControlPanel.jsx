import React, { useState } from "react";
import GradientButton from "../UI/GradientButton/GradientButton";
import styles from "./controlpanel.module.scss";

import { ReactComponent as CursorIcon } from "../../icons/cursor_icon.svg";
import { ReactComponent as Arrow } from "../../icons/arrow_loop.svg";
import { ReactComponent as Pause } from "../../icons/pause.svg";
import { ReactComponent as Play } from "../../icons/play.svg";
import { ReactComponent as Metronom } from "../../icons/metronome.svg";
import { ReactComponent as Delet } from "../../icons/delete.svg";
import { ReactComponent as Cut } from "../../icons/cut.svg";
import { ReactComponent as Plus } from "../../icons/plus.svg";
import { ReactComponent as Minus } from "../../icons/minus.svg";
import { ReactComponent as Replay } from "../../icons/replay.svg";

import cn from "classnames";
import useMediaQuery from "../../hooks/useMediaQuery";

export default function ControlPanel({ hide }) {
    const mob1024 = useMediaQuery(1024);
    const buttons = [
        { id: 1, name: "arrow", image: <Arrow /> },
        { id: 2, name: "pause", image: <Pause /> },
        { id: 3, name: "play", image: <Play /> },
        { id: 4, name: "metronom", image: <Metronom /> },
        { id: 5, name: "cursor", image: <CursorIcon /> },
        { id: 6, name: "delet", image: <Delet /> },
        { id: 7, name: "cut", image: <Cut /> },
        { id: 8, name: "prev", image: <Replay /> },
        { id: 9, name: "next", image: <Replay /> },
    ];

    const [active, setActive] = useState(false);
    const handleClick = (id) => {
        if (active === id) {
            setActive(false);
        } else {
            setActive(id);
        }
    };

    return (
        <>
            {hide === true ? (
                ""
            ) : (
                <div className={styles.control__wrapper}>
                    <div className={styles.first__section}>
                        <div>
                            {buttons.slice(0, 4).map((item) => (
                                <GradientButton
                                    img={true}
                                    color={active === item.id ? "primary" : ""}
                                    onClick={() => handleClick(item.id)}
                                >
                                    <div
                                        className={cn(
                                            styles.img,
                                            styles[item.name],
                                            active === item.id
                                                ? styles[`${item.name}_active`]
                                                : ""
                                        )}
                                        onClick={() => handleClick(item.id)}
                                    >
                                        {item.image}
                                    </div>
                                </GradientButton>
                            ))}
                        </div>
                        <div>
                            {buttons.slice(4, 7).map((item) => (
                                <GradientButton
                                    img={true}
                                    color={active === item.id ? "primary" : ""}
                                    onClick={() => handleClick(item.id)}
                                >
                                    <div
                                        className={cn(
                                            styles.img,
                                            styles[item.name],
                                            active === item.id
                                                ? styles[`${item.name}_active`]
                                                : ""
                                        )}
                                    >
                                        {item.image}
                                    </div>
                                </GradientButton>
                            ))}
                        </div>
                        <div>
                            {buttons.slice(7, 9).map((item) => (
                                <GradientButton
                                    img={true}
                                    color={active === item.id ? "primary" : ""}
                                    onClick={() => handleClick(item.id)}
                                >
                                    <div
                                        className={cn(
                                            styles.img,
                                            styles[item.name],
                                            active === item.id
                                                ? styles[`${item.name}_active`]
                                                : ""
                                        )}
                                    >
                                        {item.image}
                                    </div>
                                </GradientButton>
                            ))}
                        </div>
                    </div>
                    <div className={styles.second__section}>
                        <p className={styles.title}>tempo</p>
                        <div className={styles.tempo}>
                            <div className={styles.plus}>
                                <Minus />
                            </div>
                            <p>
                                174
                                {mob1024 === true && <span>tempo</span>}
                            </p>
                            <div className={styles.minus}>
                                <Plus />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
