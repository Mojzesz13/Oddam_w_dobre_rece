import React from 'react';
import './Steps.scss'

const Step1 = (props) => {

    const handlerRadio = (e) => {
        props.thing(e.target.value);
    };

    return (
        <div className="formContainer">
            <div className="stepContainer">
                <div className="stepsCounter">
                    Krok 1/4
                </div>
                <div className="title">
                    Zaznacz co chcesz oddać:
                </div>
                <div className="thingsList">
                    <label className="inputHolder">
                        <input type="radio"
                               name="radio"
                               value="Ubrania, które nadają się do ponownego użycia"
                               onClick={handlerRadio}/>
                        <p>ubrania, które nadają się do ponownego użycia </p>
                        <span className="checkMark">{/*empty*/}</span>
                    </label>
                    <label className="inputHolder">
                        <input type="radio"
                               name="radio"
                               value="Ubrania do wyrzucenia"
                               onClick={handlerRadio}/>
                        <p>ubrania do wyrzucenia</p>
                        <span className="checkMark">{/*empty*/}</span>
                    </label>
                    <label className="inputHolder">
                        <input
                            type="radio"
                            name="radio"
                            value="Zabawki"
                            onClick={handlerRadio}/>
                        <p>zabawki</p>
                        <span className="checkMark">{/*empty*/}</span>
                    </label>
                    <label className="inputHolder">
                        <input type="radio"
                               name="radio"
                               value="Książki"
                               onClick={handlerRadio}/>
                        <p>książki</p>
                        <span className="checkMark">{/*empty*/}</span>
                    </label>
                    <label className="inputHolder">
                        <input type="radio"
                               name="radio"
                               value="Inne"
                               onClick={handlerRadio}/>
                        <p>inne</p>
                        <span className="checkMark">{/*empty*/}</span>
                    </label>
                </div>
                <button className="step1Button" onClick={props.counterNext}>Dalej</button>
            </div>
        </div>
    );
};

export default Step1;
