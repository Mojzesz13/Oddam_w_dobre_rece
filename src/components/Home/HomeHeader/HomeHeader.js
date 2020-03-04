import React from 'react';
import {Link} from 'react-scroll';
import {NavLink} from "react-router-dom";
import './HomeHeader.scss'
import HomeLogin from "./HomeLogin/HomeLogin";
import titleImg from "../../../assets/Decoration.svg"

const HomeHeader = () => {
    return (
        <div className="headerContainer" id="main">
            <div className="mainImg">{/*empty*/}</div>
            <div className="textArea">
                <div className="navbar">
                    <HomeLogin/>
                    <nav className="headerLinks">
                        <Link
                            activeClass="active"
                            to="main"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >Start</Link>
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
                </div>
                <div className="textContent">
                    <div className="title">
                        <h1>Zacznij pomagać!</h1>
                        <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    </div>
                    <div className="titleImg"><img src={titleImg} alt="decoration-bar"/>
                    </div>
                    <div className="titleButtons">
                        <button><NavLink to="/login">ODDAJ RZECZY</NavLink></button>
                        <button><NavLink to="/login">ZORGANIZUJ ZBIÓRKĘ</NavLink></button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HomeHeader;