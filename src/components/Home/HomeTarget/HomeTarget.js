import React, {useState} from 'react';
import './HomeTarget.scss';
import titleImg from '../../../assets/Decoration.svg';
import Foundations from './entities/Foundations';
import Organizations from './entities/Organizations';
import Local from './entities/Local';
import Pagination from './Pagination/Pagination';

const HomeTarget = () => {
    const [view, setView] = useState(<Foundations/>);

    return (
        <div className="homeTargetContainer" id="target">
            <div className="titleContainer">
                <h1>Komu pomagamy?</h1>
                <img src={titleImg} alt="decorationBar"/>
            </div>
            <div className="buttonsContainer">
                <button onClick={() => setView(<Foundations/>)}>Fundacjom</button>
                <button onClick={() => setView(<Organizations/>)}>Organizacjom pozarządowym</button>
                <button onClick={() => setView(<Local/>)}>Lokalnym zbiórkom</button>
            </div>
            <div className="paginationContainer">{view}</div>
            <Pagination/>
        </div>
    );
};

export default HomeTarget;