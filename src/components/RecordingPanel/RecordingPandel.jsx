import React, { useState } from "react";
import GradientButton from "../UI/GradientButton/GradientButton";
import { ReactComponent as MuteMic } from "../../icons/mute_microphone.svg";
import { ReactComponent as Mic } from "../../icons/microphone_record.svg";
import styles from "./recordingpandel.module.scss";

export default function RecordingPandel({ hide }) {
    const [isPause, setIsPause] = useState(false);
    return (
        <>
            {hide === true ? (
                ""
            ) : (
                <div className={styles.record__wrapper}>
                    <div className={styles.first__section}>
                        <div>
                            {isPause === true ? (
                                <>
                                    <div className={styles.svg}>
                                        <MuteMic />
                                    </div>
                                    <p>запись на паузе</p>
                                </>
                            ) : (
                                <>
                                    <div className={styles.svg}>
                                        <Mic />
                                    </div>
                                    <p>
                                        ИДЁТ ЗАПИСЬ ДОРОЖКИ{" "}
                                        <span>MAIN VOCAL...</span>
                                    </p>
                                </>
                            )}
                        </div>
                        <div>
                            <GradientButton
                                color={isPause === true ? "red" : "red_active"}
                                onClick={() => setIsPause(false)}
                            >
                                {isPause === true ? "запись" : "стоп"}
                            </GradientButton>
                            <GradientButton
                                color={isPause === true ? "red_active" : "red"}
                                onClick={() => setIsPause(true)}
                            >
                                пауза
                            </GradientButton>
                        </div>
                    </div>
                    <div className={styles.second__section}>
                        <p>время записи</p>
                        <div>00:12:14</div>
                    </div>
                </div>
            )}
        </>
    );
}
