import React from "react";
import styles from "./time.module.scss";

export default function Time() {
    const timeItems = [
        { id: 1, text: "1/1" },
        { id: 2, text: "1/2" },
        { id: 3, text: "1/4" },
        { id: 4, text: "1/4T" },
        { id: 5, text: "1/8" },
        { id: 6, text: "1/8T" },
        { id: 7, text: "1/16" },
        { id: 8, text: "1/16T" },
    ];
    const [active, setActive] = React.useState(false);

    const handleClick = (id) => {
        if (active === id) {
            setActive(false);
        } else {
            setActive(id);
        }
    };
    return (
        <div className={styles.delay__wrapper}>
            <ul className={styles.delay__time}>
                {timeItems.map((item) => (
                    <li
                        className={active === item.id ? styles.li_active : ""}
                        onClick={() => handleClick(item.id)}
                    >
                        {item.text}
                    </li>
                ))}
            </ul>
            <p>time</p>
        </div>
    );
}
