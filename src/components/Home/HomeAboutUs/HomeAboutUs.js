import React from 'react';
import './HomeAboutUs.scss'
import titleImg from "../../../assets/Decoration.svg";
import  signature from "../../../assets/Signature.svg"

const HomeAboutUs = () => {
    return (
        <div className="aboutUsContainer" id="aboutUs">
            <div className="aboutUsText">
                <div className="title">
                    <h1> O nas </h1>
                    <img src={titleImg} alt="decoration-bar"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque quis lectus vitae aliquet. Sed purus ante, convallis gravida felis eget, tincidunt aliquam odio. Morbi.</p>
                </div>

                <div className="signature">
                    <img src={signature} alt="signatureText"/>
                </div>
            </div>
            <div className="aboutUsImg">{/*empty*/}</div>
        </div>
    );
};

export default HomeAboutUs;