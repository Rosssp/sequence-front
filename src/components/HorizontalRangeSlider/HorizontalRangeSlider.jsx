import React, { useState } from "react";
import styles from "./horizontalRangeSlider.module.scss";

export default function HorizontalRangeSlider({ pan }) {
    const [panValue, setPanValue] = useState(0);
    const [volValue, setVolValue] = useState(0);
    return (
        <div className={styles.wrapper}>
            {pan === true && (
                <>
                    <div>
                        <p>pan</p>
                        <input
                            type="range"
                            name="pan"
                            min="-24"
                            max="24"
                            step="0.1"
                            value={panValue}
                            onChange={(e) => setPanValue(e.target.value)}
                        />
                        <p>{panValue}</p>
                    </div>
                </>
            )}
            <div>
                <p>vol.</p>
                <input
                    type="range"
                    name="vol"
                    min="-100"
                    max="100"
                    step="0.1"
                    value={volValue}
                    onChange={(e) => setVolValue(e.target.value)}
                    style={{
                        background: `linear-gradient(to right, white 0%, white ${
                            volValue / 2 + 50
                        }%, rgba(0, 0, 0, 0.25) ${
                            volValue / 2
                        }%, rgba(0, 0, 0, 0.25) 100%)`,
                    }}
                />
                <p className={styles.db}>{volValue} db</p>
            </div>
        </div>
    );
}
