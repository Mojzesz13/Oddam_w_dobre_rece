import React from 'react';
import './HomeContact.scss';
import HomeFooter from './HomeFooter/HomeFooter';
import DesktopContact from './DesktopContact/DesktopContact';
import MobileContact from './MobilContact/MobileContact';

const HomeContact = () => {

    return (
        <div className="homeContact" id="contact">
            <DesktopContact/>
            <MobileContact/>
            <HomeFooter/>
        </div>
    );
};

export default HomeContact;