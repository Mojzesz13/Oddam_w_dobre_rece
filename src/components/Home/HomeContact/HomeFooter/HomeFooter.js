import React from 'react';
import "./HomeFooter.scss";
import faceIcon from "../../../../assets/Facebook.svg"
import instaIcon from "../../../../assets/Instagram.svg"

const HomeFooter = () => {
    return (
        <footer className="footer">
            <div className="copyright">Copyright by Coders Lab</div>
            <div className="mediaIcons">
                <img src={faceIcon} alt="Facebook-Icon"/>
                <img src={instaIcon} alt="Instagram-Icon"/>
            </div>
        </footer>
    );
};

export default HomeFooter;