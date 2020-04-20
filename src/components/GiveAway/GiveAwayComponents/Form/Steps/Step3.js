import React from 'react';
import Select from 'react-select';
import './Steps.scss'
import './Step3.scss'
import GiveAwayInfo from "../../GiveAwayInfo/GiveAwayInfo";

const options = [
    {value: 1, label: 'Warszawa'},
    {value: 2, label: 'Wrocław'},
    {value: 3, label: 'Gdańsk'},
    {value: 4, label: 'Kraków'},
    {value: 5, label: 'Poznań'}
];

const Step3 = (props) => {

    const handlerRadioGoal = (e) => {
        props.setLocalization({...props.localization, toWho: e.target.value});
    };

    return (
        <>
            <GiveAwayInfo view = {props.view}/>
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
                                onChange={(e) => props.setLocalization({...props.localization, location: e.label})}
                                options={options}
                            />
                        </div>
                        <div className="radioButtonsContainer">
                            <h2>Komu chcesz pomóc?</h2>
                            <div className="radioToolbar">
                                <input type="radio"
                                       id="radioA"
                                       name="radioTarget"
                                       value="dzieciom"
                                       onChange={handlerRadioGoal}
                                />
                                <label htmlFor="radioA">dzieciom</label>
                                <input type="radio"
                                       id="radioB"
                                       name="radioTarget"
                                       value="samotnym matkom"
                                       onChange={handlerRadioGoal}
                                />
                                <label htmlFor="radioB">samotnym matkom</label>
                                <input type="radio"
                                       id="radioC"
                                       name="radioTarget"
                                       value="bezdomnym"
                                       onChange={handlerRadioGoal}
                                />
                                <label htmlFor="radioC">bezdomnym</label>
                                <input type="radio"
                                       id="radioD"
                                       name="radioTarget"
                                       value="niepełnosrawnym"
                                       onChange={handlerRadioGoal}
                                />
                                <label htmlFor="radioD">niepełnosrawnym</label>
                                <input type="radio"
                                       id="radioE"
                                       name="radioTarget"
                                       value="osobą starszym"
                                       onChange={handlerRadioGoal}
                                />
                                <label htmlFor="radioE">osobą starszym</label>
                            </div>
                        </div>
                        <div className="specificOrganizations">
                            <h2>Wpisz nazwę konktetnej organizacji (opcjonalnie)</h2>
                            <input name="organization"
                                   onChange={(e) => props.setLocalization({
                                       ...props.localization, organization: e.target.value
                                   })}/>
                        </div>
                    </div>
                    <div className="step3Button">
                        <button onClick={props.counterPrev}>Wstecz</button>
                        <button onClick={props.counterNext}>Dalej</button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Step3;