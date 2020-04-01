import React, {useState} from 'react';
import './GiveAwayForm.scss'
import Step1 from "./Steps/Step1";

const GiveAwayForm = () => {
    const[stepCounter, setStepCounter] = useState(0);







    return (
        <div className="formContainer">
            <Step1/>
        </div>
    );
};

export default GiveAwayForm;