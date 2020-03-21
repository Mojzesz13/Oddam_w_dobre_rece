import React from 'react';
import './SideDrawer.scss'
import NavList from './NavList';

const SideDrawer = (props) => {
    let drawerClass = "sideDrawer";
        if(props.show ===true){
            drawerClass = "sideDrawer open"
        }
    return (
        <div className={drawerClass}>
          <NavList/>
        </div>
    );
};

export default SideDrawer;