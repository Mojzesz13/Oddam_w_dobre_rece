import React from 'react';
import './GiveAwayHeader.scss'
import Navigation from '../../../Home/Navigation/Navigation';
import titleImg from '../../../../assets/Decoration.svg';

const GiveAwayHeader = () => {

    return (
        <>
            <div className="giveAwayHeader">
                <Navigation/>
                <div className="textContent">
                    <div className="title">
                        <h1>Oddaj rzeczy, których już nie chcesz</h1>
                        <h1>POTRZEBUJĄCYM</h1>
                    </div>
                    <div className="titleImg"><img src={titleImg} alt="decorationBar"/>
                    </div>
                    <div className="titleInstruction">
                        <h2>Wystarczą 4 proste kroki:</h2>
                        <div className="giveAwaySteps">
                            <div className="stepHolder">
                                <h3>1</h3>
                                <p>Wybierz rzeczy</p>
                            </div>
                            <div className="stepHolder">
                                <h3>2</h3>
                                <p>Spakuj je w worki</p>
                            </div>
                            <div className="stepHolder">
                                <h3>3</h3>
                                <p>Wybierz fundację</p>
                            </div>
                            <div className="stepHolder">
                                <h3>4</h3>
                                <p>Zamów kuriera</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default GiveAwayHeader;