import React from "react";
import Modal from "../Modal";
import { ReactComponent as Error } from "../../../icons/cancel.svg";

export default function ModalError() {
    return (
        <>
            <Modal
                type={"ошибка!"}
                title={"name"}
                sub={"что то пошло не так"}
                violet={"повторить"}
                gray={"закрыть"}
                svg={<Error />}
            />
        </>
    );
}
