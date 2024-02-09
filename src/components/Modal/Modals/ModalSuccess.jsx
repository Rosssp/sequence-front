import React from "react";
import Modal from "../Modal";
import { ReactComponent as HourGlass } from "../../../icons/";

export default function ModalProcessing() {
    return (
        <>
            <Modal
                type={"УСПЕШНО!"}
                title={"name"}
                sub={"Размер файла для скачивания: 59 Мб."}
                violet={"скачать"}
                gray={"закрыть"}
                svg={<HourGlass />}
            />
        </>
    );
}
