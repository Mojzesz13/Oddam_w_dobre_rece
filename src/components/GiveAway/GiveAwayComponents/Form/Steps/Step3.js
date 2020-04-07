import React from 'react';
import Select from 'react-select';
import {Checkbox, Radio} from 'react-btn-checkbox';
import './Steps.scss'
import './Step3.scss'


const options = [
    {value: 1, label: 'Warszawa'},
    {value: 2, label: 'Wrocław'},
    {value: 3, label: 'Gdańsk'},
    {value: 4, label: 'Kraków'},
    {value: 5, label: 'Poznań'}
];


let options1 = {
    'First': false,
    'Second': false,
    'Third': true
};


const Step3 = (props) => {

    return (
        <div className="formContainer">
            <div className="stepContainer">
                <div className="stepsCounter">
                    Krok 3/4
                </div>
                <div className="title">
                    Lokalizacja:
                    <div className="selectContainer2">
                        <Select
                            className="select"
                            placeholder="- wybierz -"
                            onChange={(e) => props.localization({location: e.label})}
                            options={options}
                        />
                    </div>

                    <div className="radioButtonsContainer">
                        <div className="radio-toolbar">
                            <input type="radio" id="radioA" name="radioFruit" value="apple"/>
                            <label htmlFor="radioA">dzieciom</label>

                            <input type="radio" id="radioB" name="radioFruit" value="banana"/>
                            <label htmlFor="radioB">samotnym matkom</label>

                            <input type="radio" id="radioC" name="radioFruit" value="orange"/>
                            <label htmlFor="radioC">bezdomnym</label>

                            <input type="radio" id="radioD" name="radioFruit" value="orange"/>
                            <label htmlFor="radioD">niepełnosrawnym</label>

                            <input type="radio" id="radioE" name="radioFruit" value="orange"/>
                            <label htmlFor="radioE">osobą starszym</label>
                        </div>
                    </div>

                    <div className="specificOrganizations">
                        <h2>Wpisz nazwę konktetnej organizacji (opcjonalnie)</h2>
                        <input placeholder="twoja strra"></input>

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