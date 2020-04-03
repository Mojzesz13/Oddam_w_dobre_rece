import React from 'react';
import Select from "react-select";

const options = [
    {value: 1, label: 'Warszawa'},
    {value: 2, label: 'Wrocław'},
    {value: 3, label: 'Gdańsk'},
    {value: 4, label: 'Kraków'},
    {value: 5, label: 'Poznań'}
];

const Step3 = (props) => {

    return (
        <div className="formContainer">
            <div className="stepContainer">
                <div className="stepsCounter">
                    Krok 3/4
                </div>
                <div className="title">
                    Lokalizacja:
                    <div className="selectContainer">
                        <Select
                            className="select"
                            placeholder="- wybierz -"
                            onChange={(e) => props.localization({location: e.label})}
                            options={options}
                        />
                    </div>
                </div>

                <div className="step2Button">
                    <button onClick={props.counterPrev}>Wstecz</button>
                    <button onClick={props.counterNext}>Dalej</button>
                </div>
            </div>
        </div>
    );
};

export default Step3;