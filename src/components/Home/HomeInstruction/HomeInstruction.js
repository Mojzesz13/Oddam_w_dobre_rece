import React from 'react';
import {NavLink} from "react-router-dom";
import './HomeInstruction.scss';
import titleImg from '../../../assets/Decoration.svg';
import tShirt from '../../../assets/Icon-1.svg';
import bag from '../../../assets/Icon-2.svg';
import loupe from '../../../assets/Icon-3.svg';
import courier from '../../../assets/Icon-4.svg';


const HomeInstruction = () => {
    return (
        <div className="homeInstruction" id="instruction">
            <div className="title">
                <h1> Wystarczą 4 proste kroki</h1>
                <img src={titleImg} alt="decorationBar"/>
            </div>
            <div className="steps">
                <div className="stepsContainer">
                    <div className="contentContainer">
                        <img src={tShirt} alt="tShirtImg"/>
                        <h4>Wybierz rzecz</h4>
                        <span>____________</span>
                        <p>ubrania, zabawki sprzęt i inne</p>
                    </div>
                    <div className="contentContainer">
                        <img src={bag} alt="bagImg"/>
                        <h4>Spakuj je</h4>
                        <span>____________</span>
                        <p>skorzystaj z worków na śmieci</p>
                    </div>
                    <div className="contentContainer">
                        <img src={loupe} alt="loupeImg"/>
                        <h4>Zdecyduj komu chcesz pomóc</h4>
                        <span>____________</span>
                        <p>wybierz zaufane miejsce</p>
                    </div>
                    <div className="contentContainer">
                        <img src={courier} alt="courierImg"/>
                        <h4>Zamów kuriera</h4>
                        <span>____________</span>
                        <p>kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
            </div>
            <div className="buttonDiv">
                <button><NavLink to="/giveAway">ODDAJ RZECZY</NavLink></button>
            </div>
        </div>
    );
};

export default HomeInstruction;