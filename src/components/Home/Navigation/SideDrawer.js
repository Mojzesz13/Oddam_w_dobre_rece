import React from 'react';
import './SideDrawer.scss'

const SideDrawer = (props) => {
    let drawerClass = "sideDrawer";
        if(props.show ===true){
            drawerClass = "sideDrawer open"
        }
    return (
        <div className={drawerClass}>
            <ul>
                <li><a href="/">Test1</a></li>
                <li><a href="/">Test2</a></li>
                <li><a href="/">Test3</a></li>
            </ul>
        </div>
    );
};

export default SideDrawer;