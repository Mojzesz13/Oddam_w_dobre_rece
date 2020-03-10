import React from 'react';
import {Link} from 'react-scroll';
import "./Navigation.scss"


const Navigation = () => {
    return (
        <nav className="headerLinks">
            <Link
                activeClass="active"
                to="/main"
                spy={true}
                smooth={true}
                duration={500}
            >Start</Link>
            <Link
                activeClass="active"
                to="/instruction"
                spy={true}
                smooth={true}
                duration={500}
            >O co chodzi?</Link>
            <Link
                activeClass="active"
                to="aboutUs"
                spy={true}
                smooth={true}
                duration={500}
            >O nas</Link>
            <Link
                activeClass="active"
                to="target"
                spy={true}
                smooth={true}
                duration={500}
            >Fundacja i organizacje</Link>
            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
            >Kontakt</Link>
        </nav>
    );
};

export default Navigation;