import React from 'react';
import './HomeThreeColumns.scss';

const HomeThreeColumns = () => {
    return (
        <div className="threeColumnsContainer">
            <div className="statisticContainer">
                <h2 className="number">10</h2>
                <h3 className="title">ODDANYCH WORKÓW</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a ligula id diam lacinia elementum et.</p>
            </div>
            <div className="statisticContainer">
                <h2 className="number">5</h2>
                <h3 className="title">WSPARTYCH ORGANIZACJI</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a ligula id diam lacinia elementum et.</p>
            </div>
            <div className="statisticContainer">
                <h2 className="number">7</h2>
                <h3 className="title">ZORGANIZOANYCH ZBIÓREK</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a ligula id diam lacinia elementum et.</p>
            </div>
        </div>
    );
};

export default HomeThreeColumns;