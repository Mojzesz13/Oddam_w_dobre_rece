import React from 'react';
import './Steps.scss'
import './Step4.scss'


const Step4 = (props) => {
    return (
        <div className="formContainer">
            <div className="stepContainer">
                <div className="stepsCounter">
                    Krok 4/4
                </div>
                <div className="title">
                    Podaj adres oraz termin odbioru rzeczy przez kuriera

                    <div className="infoContainer">
                    <div className="addressContainer">
                        <h2>Adres odbioru:</h2>
                    </div>
                    <div className="dataContainer">
                        <h2>Termin odbioru:</h2>

                    </div>
                    </div>
                </div>
                <div className="step3Button">
                    <button onClick={props.counterPrev}>Wstecz</button>
                    <button onClick={props.counterNext}>Dalej</button>
                </div>
            </div>
        </div>
    );
};


export default Step4;