import React, {useState} from 'react';
import './Steps.scss'

const Step1 = () => {
    const [thing,setThing] = useState("");

    const handlerRadio = (e) => {
        setThing(e.target.value);
    };

    return (
        <div className="StepContainer">
            <div className="stepsCounter">
                Krok 1/4
            </div>
            <div className="title">
                Zaznacz co chcesz oddać:
            </div>
            <div className="list">
                <label>
                    <input type="radio"
                           name="radio"
                           className="radioInput"
                           value="Ubrania, które nadają się do ponownego użycia"
                           onClick={handlerRadio}/>
                    Ubrania, które nadają się do ponownego użycia
                </label>
                <label>
                    <input type="radio"
                           name="radio"
                           className="radioInput"
                           value="Ubrania do wyrzucenia"
                           onClick={handlerRadio}/>
                    Ubrania do wyrzucenia
                </label>
                <label>
                    <input
                        type="radio"
                        name="radio"
                        className="radioInput"
                        value="Zabawki"
                        onClick={handlerRadio}/>
                    Zabawki
                    <span className="checkmark"></span>
                </label>
                <label>
                    <input type="radio"
                           name="radio"
                           className="radioInput"
                           value="Książki"
                           onClick={handlerRadio}/>
                    Książki
                </label>
                <label>
                    <input type="radio"
                           name="radio"
                           className="radioInput"
                           value="Inne"
                           onClick={handlerRadio}/>
                    Inne
                </label>
            </div>
            <button>Dalej</button>
        </div>
    );
};

export default Step1;

