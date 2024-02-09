import React from "react";
import Modal from "../Modal";
import { ReactComponent as HourGlass } from "../../../icons/hourglass.svg";

export default function ModalProcessing() {
    return (
        <>
            <Modal
                type={"ИДЁТ ОБРАБОТКА ТРЕКА"}
                title={"name"}
                sub={"Внимание! Это может занять некоторое время."}
                gray={"отменить"}
                svg={<HourGlass />}
            />
        </>
    );
}
