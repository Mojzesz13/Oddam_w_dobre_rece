import React, {useState} from 'react';
import './HomeContact.scss';
import titleImg from "../../../assets/Decoration.svg";
import HomeFooter from "./HomeFooter/HomeFooter";

const HomeContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [massage, setMassage] = useState("");

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // }}


    return (
        <div className="homeContact" id="contact">
            <div className="title">
                <h1>Skontaktuj się z nami</h1>
                <img src={titleImg} alt="decoration-bar"/>
            </div>
            <form className="contactForm"
                // onSubmit={console.log({name, email, massage})}
            >
                <div className="personalDate">
                    <div className="inputsHolder">
                        <lable>Wpisz swoje imię</lable>
                        <input type="text"
                               name="name"
                               value={name}
                               placeholder="Krzysztof"
                               onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="inputsHolder">
                        <lable>Wpisz swój email</lable>
                        <input type="email"
                               name="email"
                               value={email}
                               placeholder="abc@xyz.pl"
                               onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="textAreaHolder">
                    <label>Wpisz swoją wiadomość</label>
                    <textarea
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate non velit a hendrerit. Phasellus dictum mauris sit amet orci porta sollicitudin."
                        value={massage}
                        onChange={(e) => setMassage(e.target.value)}
                    >
                </textarea>
                    <button>Wyślij</button>
                </div>
            </form>
            <HomeFooter/>
        </div>
    );
};

export default HomeContact;