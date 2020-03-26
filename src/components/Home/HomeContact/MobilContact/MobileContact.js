import React, {useState} from 'react';
import './MobileContact.scss';
import Logo from '../../../../assets/clothes.png';
import MiniLogo from '../../../../assets/miniLogo.png';
import PhoneIcon from "../../../../assets/phone.png";
import MailIcon from "../../../../assets/mail.png";


const MobileContact = () => {
    const [loginStatus, setLoginStatus] = useState("flex");
    const [logoutStatus, setLogoutStatus] = useState("none");

    return (
        <div className="mobileContact" id="contact">
            <div className="logged Container" style={{display: loginStatus}}>

                <div className="titleContainer">
                    <h1>Chcesz pozbyć się problemu i zrobić coś dobrego dla innych?</h1>
                </div>
                <div className="buttonsContainer">
                    <button>Oddaj rzecy</button>
                    <button>Zorganizuj zbiórkę</button>
                </div>
            </div>
            <div className="logout Container" style={{display: logoutStatus}}>
                <div className="titleContainer">
                    <h1>Chcesz oddać swoje rzeczy lub zorganizować zbiórkę lokalną?</h1>
                </div>
                <div className="buttonsContainer">
                    <button>Załóż konto</button>
                </div>

            </div>
            <div className="contactContainer">
                <div className="contactTitle">
                    <div className="imgHolder max"><img src={Logo} alt="Logo"/></div>
                    <div className="imgHolder mini"><img src={MiniLogo} alt="Logo"/></div>
                    <div className="title">
                        <h2>Skontaktuj się z nami</h2>
                        <img src={PhoneIcon} alt="Facebook-Icon"/>
                        <img src={MailIcon } alt="Instagram-Icon"/>
                    </div>
                </div>
                <div className='contactFaq'>
                    <ul>
                        <li><a href="#">Regulamin</a> </li>
                        <li><a href="#">Polityka Prywatności</a></li>
                        <li><a href="#">Instrukcja jak spakować rzeczy do oddania</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MobileContact;