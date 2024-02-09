import React, { useState } from "react";
import ControlPanel from "./components/ControlPanel/ControlPanel";
import Footer from "./components/Footer/Footer";
import Grid from "./components/Grid/Grid";
import Header from "./components/Header/Header";
import Mixers from "./components/Mixers/Mixers";
import Modal from "./components/Modal/Modal";
import ModalError from "./components/Modal/Modals/ModalError";
import RecordingPandel from "./components/RecordingPanel/RecordingPandel";
import useMediaQuery from "./hooks/useMediaQuery";
import "./scss/index.scss";

function App() {
    const mob915 = useMediaQuery(915);
    const [active, setActive] = useState(false);
    const [mixerIsActive, setMixerIsActive] = useState(false);
    return (
        <>
            <div className="main__container">
                <Header setMixerIsActive={setMixerIsActive} />
                <Mixers
                    mixerIsActive={mixerIsActive}
                    setMixerIsActive={setMixerIsActive}
                />
                <Grid
                    setActive={setActive}
                    setMixerIsActive={setMixerIsActive}
                />
                <ControlPanel hide={active === true ? true : false} />
                <RecordingPandel hide={active === true ? false : true} />
                {mob915 === true ? "" : <Footer />}
            </div>
            <ModalError />
        </>
    );

    // mobile 915
}

export default App;
