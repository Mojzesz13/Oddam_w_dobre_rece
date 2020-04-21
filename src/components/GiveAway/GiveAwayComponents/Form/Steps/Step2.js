import React from 'react';
import Select from "react-select";
import './Steps.scss'
import './Step2.scss'
import GiveAwayInfo from "../../GiveAwayInfo/GiveAwayInfo";

const options = [
    {value: 1, label: '1'},
    {value: 2, label: '2'},
    {value: 3, label: '3'},
    {value: 4, label: '4'},
    {value: 5, label: '5'},
];

const Step2 = (props) => {
    return (
        <>
            <GiveAwayInfo view={props.view}/>
            <div className="formContainer">
                <div className="stepContainer">
                    <div className="stepsCounter">
                        Krok 2/4
                    </div>
                    <div className="title">
                        Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
                    </div>
                    <div className="selectContainer">
                        <p> Liczba 60l worków: </p>
                        <Select
                            className="select"
                            placeholder="- wybierz -"
                            onChange={(e) => props.bags(e.value)}
                            options={options}
                        />
                    </div>
                    <div className="step2Button">
                        <button onClick={props.counterPrev}>Wstecz</button>
                        <button onClick={props.counterNext}>Dalej</button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Step2;