import React from 'react';
import './HomeContact.scss';
import titleImg from "../../../assets/Decoration.svg";

const HomeContact = () => {
    return (
        <div className="homeContact" id="contact">
            <div className="title">
                <h1>Skontaktuj się z nami</h1>
                <img src={titleImg} alt="decoration-bar"/>
            </div>
            <form className="contactForm">
                <div className="personalDate">
                    <div className="inputsHolder">
                        <lable>Wpisz swoje imię</lable>
                        <input type="text" name="" value="" placeholder="Krzysztof"/>
                    </div>
                    <div className="inputsHolder">
                        <lable>Wpisz swój email</lable>
                        <input type="email" name="" value="" placeholder="abc@xyz.pl"/>
                    </div>
                </div>
                <div className="textAreaHolder">
                <label>Wpisz swoją wiadomość</label>
                <textarea
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate non velit a hendrerit. Phasellus dictum mauris sit amet orci porta sollicitudin.">
                </textarea>
                <button typeof="submit">Wyślij</button>
                </div>
            </form>
        </div>
    );
};

export default HomeContact;