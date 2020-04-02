import React, {useEffect, useState} from 'react';
import './GiveAwayForm.scss'
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import Summary from "./Steps/Summary";
import ThankYou from "./Steps/ThankYou";

const GiveAwayForm = () => {
    const [viewNumber, setViewNumber] = useState(1);
    const [thingToGive, setThingToGive] = useState("");

    const handlerNextView = () => {
        setViewNumber(prevState => {
            return prevState + 1
        });
    };

    const handlerPrevView = () => {
        setViewNumber(prevState => {
            return prevState - 1
        });
    };


    const stepView = {viewNumber};
    switch (viewNumber) {
        case 1:
            return <Step1 counterNext={handlerNextView}
                          thing={setThingToGive}/>;
        case 2:
            return <Step2 counterNext={handlerNextView}
                          counterPrev={handlerPrevView}/>;
        case 3:
            return <Step3 counterNext={handlerNextView}
                          counterPrev={handlerPrevView}/>;
        case 4:
            return <Step4 counterNext={handlerNextView}
                          counterPrev={handlerPrevView}/>;
        case 5:
            return <Summary counterNext={handlerNextView}
                            counterPrev={handlerPrevView}
                            thing={thingToGive}
            />;
        case 6:
            return <ThankYou counterPrev={handlerPrevView} counterNext={handlerNextView}/>;
        default:
    }

    return (
        <div className="formContainer">
            <div>{stepView}</div>
        </div>
    );
};

export default GiveAwayForm;