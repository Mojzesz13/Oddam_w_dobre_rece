import React, {useState} from 'react';
import './HomeTarget.scss';
import titleImg from "../../../assets/Decoration.svg";
import Foundations from "./entities/Foundations"
import Organizations from "./entities/Organizations";
import Local from "./entities/Local";
import Pagination from "./Pagination/Pagination";

const HomeTarget = () => {
    const [view, setView] = useState(<Foundations/>);

    return (
        <div className="homeTargetContainer" id="target">
            <div className="title">
                <h1>Komu pomagamy?</h1>
                <img src={titleImg} alt="decoration-bar"/>
            </div>
            <ul className="buttons">
                <li onClick={() => setView(<Foundations/>)}>Fundacjom</li>
                <li onClick={() => setView(<Organizations/>)}>Organizacjom pozarządowym</li>
                <li onClick={() => setView(<Local/>)}>Lokalnym zbiórkom</li>
            </ul>
            <div className="paginationDiv">{view}</div>
            <Pagination/>
        </div>
    );
};

export default HomeTarget;