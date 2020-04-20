import React from 'react';
import './GiveAwayMain.scss'
import HomeContact from "../Home/HomeContact/HomeContact";
import GiveAwayHeader from "./GiveAwayComponents/Header/GiveAwayHeader";
import GiveAwayForm from "./GiveAwayComponents/Form/GiveAwayForm";

const GiveAwayMain = () => {

    return (

        <div className="giveAwayContainer">
            <GiveAwayHeader/>
            <GiveAwayForm/>
            <HomeContact/>
        </div>
    );
};

export default GiveAwayMain;