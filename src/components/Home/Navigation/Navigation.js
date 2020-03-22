import React, {useState} from 'react';
import HomeLogin from './NavElements/HomeLogin/HomeLogin';
import NavList from './NavElements/NavList';
import SideDrawer from './NavElements/SideDrawer';
import './Navigation.scss'

const Navigation = () => {
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

    const drawerToggleClickHandler = () => {
        setSideDrawerOpen(!sideDrawerOpen);
    };

    return (
        <div className="navigationContainer">
            <HomeLogin drawerClickHandler={drawerToggleClickHandler}/>
            <div className="listHolder">
                <NavList/>
            </div>
            <SideDrawer show={sideDrawerOpen}/>
        </div>
    );
};

export default Navigation;