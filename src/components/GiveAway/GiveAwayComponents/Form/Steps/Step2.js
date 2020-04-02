import React from 'react';

const Step2 = (props) => {

    return (
        <div className="formContainer">
            <div className="stepContainer">
                <div className="stepsCounter">
                    Krok 2/4
                </div>
                <div className="title">
                    Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
                </div>

                <div className="selectBagsList">
                    <p>Liczba 60l worków:</p>
                    <select>
                        <option value="0">1</option>
                        <option value="1">2</option>
                        <option value="2">3</option>
                        <option value="3">4</option>
                        <option value="4">5</option>
                    </select>

                </div>

                <div className="step2Button">
                    <button onClick={props.counterPrev}>poprzednia</button>
                    <button onClick={props.counterNext}>nastepna</button>
                </div>
            </div>
        </div>
    );


};

export default Step2;