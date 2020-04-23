import React from 'react';
import './Steps.scss'
import GiveAwayInfo from "../../GiveAwayInfo/GiveAwayInfo";

const Step1 = (props) => {
    // const [isError, setIsError] = useState(false);

    const handleRadio = (e) => {
        props.setThing(e.target.value);
    };

    // const handlerNextPage = () => {
    //     if (props.thing === "") {
    //         setIsError(true);
    //     } else {
    //         setIsError(false);
    //         props.setView(2);
    //     }
    // }

    return (
        <>
            <GiveAwayInfo view={props.view}/>
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
                                   onClick={handleRadio}/>
                            <p>ubrania, które nadają się do ponownego użycia </p>
                            <span className="checkMark">{/*empty*/}</span>
                        </label>
                        <label className="inputHolder">
                            <input type="radio"
                                   name="radio"
                                   value="Ubrania do wyrzucenia"
                                   onClick={handleRadio}/>
                            <p>ubrania do wyrzucenia</p>
                            <span className="checkMark">{/*empty*/}</span>
                        </label>
                        <label className="inputHolder">
                            <input
                                type="radio"
                                name="radio"
                                value="Zabawki"
                                onClick={handleRadio}/>
                            <p>zabawki</p>
                            <span className="checkMark">{/*empty*/}</span>
                        </label>
                        <label className="inputHolder">
                            <input type="radio"
                                   name="radio"
                                   value="Książki"
                                   onClick={handleRadio}/>
                            <p>książki</p>
                            <span className="checkMark">{/*empty*/}</span>
                        </label>
                        <label className="inputHolder">
                            <input type="radio"
                                   name="radio"
                                   value="Inne"
                                   onClick={handleRadio}/>
                            <p>inne</p>
                            <span className="checkMark">{/*empty*/}</span>
                        </label>
                    </div>
                    <div className="formFooter">
                        <button className="step1Button" onClick={()=>props.handlerNextPage(props.thing)}>Dalej</button>
                        {props.isError ? <p className="errorMessage">Proszę zaznaczyć jedną z dostępnych opcji</p> : null}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Step1;
