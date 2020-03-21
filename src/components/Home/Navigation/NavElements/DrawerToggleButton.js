import React from 'react';
import './DrawerToggleButton.scss';

const DrawerToggleButton = (props) => {
    return (
        <div className="toggleButton" onClick={props.click}>
            <div className="toggleButtonLine"/>
            <div className="toggleButtonLine"/>
            <div className="toggleButtonLine"/>
        </div>
    );
};

export default DrawerToggleButton;