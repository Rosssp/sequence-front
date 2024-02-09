import React from "react";
import Modal from "../Modal";
import { ReactComponent as Download } from "../../../icons/download.svg";

export default function ModalSave() {
    return (
        <>
            <Modal
                type={"СОХРАНИТЬ трек!"}
                title={"name"}
                sub={"Внимание! Это может занять некоторое время."}
                violet={"сохранить"}
                gray={"отмена"}
                svg={<Download />}
            />
        </>
    );
}
