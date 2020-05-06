import React from 'react';
import {Link} from 'react-scroll';
import './NavList.scss';
import {NavLink} from "react-router-dom";

const NavList = () => {
    return (
            <nav className="headerLinks">
                <NavLink to="/">Start</NavLink>
                <Link
                    activeClass="active"
                    to="instruction"
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

export default NavList;

