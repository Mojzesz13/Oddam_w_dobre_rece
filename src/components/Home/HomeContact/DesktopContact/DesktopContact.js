// import React, {useState} from 'react';
// import './DesktopContact.scss';
// import titleImg from '../../../../assets/Decoration.svg';
//
// const DesktopContact = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [message, setMessage] = useState("");
//     const [errorName, setErrorName] = useState("");
//     const [errorEmail, setErrorEmail] = useState("");
//     const [errorMessage, setErrorMessage] = useState("");
//     const [success, setSuccess] = useState(false);
//     const [color, setColor] = useState("#707070");
//
//     const emailRequirements = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     const borderStyle = {borderBottom: `1px solid ${color}`};
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//
//         if (name.length < 2 || name.includes(" ") === true) {
//             setErrorName("Podane imię jest nieprawidłowe");
//             setColor("red");
//         }
//         if (!emailRequirements.test(email)) {
//             setErrorEmail("Podany email jest nieprawidłowy");
//             setColor("red");
//         }
//         if (message.length < 120) {
//             setErrorMessage("Wiadomość musi mieć co najmniej 120 znaków");
//             setColor("red");
//         }
//
//         const user = {
//             name,
//             email,
//             message,
//         };
//
//         fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
//             method: "POST",
//             body: JSON.stringify(user),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         })
//             .then(response => {
//                 if (response.ok) {
//                     return response.json();
//                 } else {
//                     throw new Error("Błąd 400")
//                 }
//             })
//             .then(user => {
//                 // console.log(user);
//                 setSuccess(true)
//
//             })
//             .catch(err => {
//                 console.error("Wystąpił bład " + err.massage)
//             });
//     };
//
//     let successInfo;
//     if (success === true) {
//         successInfo = <span className="successInfo">Wiadomość została wysłana! Wkródce się skontaktujemy</span>;
//     } else {
//         successInfo = null;
//     }
//
//     return (
//         <div className="desktopContact" id="contact">
//             <div className="title">
//                 <h1>Skontaktuj się z nami</h1>
//                 <img src={titleImg} alt="decorationBar"/>
//             </div>
//             {successInfo}
//             <form className="contactForm"
//                   onSubmit={handleSubmit}>
//                 <div className="personalDate">
//                     <div className="inputsHolder">
//                         <label>Wpisz swoje imię</label>
//                         <input type="text"
//                                name="name"
//                                value={name}
//                                required={true}
//                                style={borderStyle}
//                                placeholder="Krzysztof"
//                                onChange={(e) => setName(e.target.value)}
//                         />
//                         <span>{errorName}</span>
//                     </div>
//                     <div className="inputsHolder">
//                         <label>Wpisz swój email</label>
//                         <input type="text"
//                                name="email"
//                                value={email}
//                                required={true}
//                                style={borderStyle}
//                                placeholder="abc@xyz.pl"
//                                onChange={(e) => setEmail(e.target.value)}
//                         />
//                         <span>{errorEmail}</span>
//                     </div>
//                 </div>
//                 <div className="textAreaHolder">
//                     <label>Wpisz swoją wiadomość</label>
//                     <textarea
//                         value={message}
//                         style={borderStyle}
//                         placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate non velit a hendrerit. Phasellus dictum mauris sit amet orci porta sollicitudin."
//                         onChange={(e) => setMessage(e.target.value)}
//                     >
//                     </textarea>
//                     <span>{errorMessage}</span>
//                     <button>Wyślij</button>
//                 </div>
//             </form>
//         </div>
//     );
// };
//
// export default DesktopContact;

import React, {useState} from 'react';
import './DesktopContact.scss';
import titleImg from '../../../../assets/Decoration.svg';

const initialState = {
    name: "",
    email: "",
    message: "",
}

const DesktopContact = () => {
    const [data, setData] = useState(initialState);
    const [errorName, setErrorName] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [color, setColor] = useState("#707070");

    const emailRequirements = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const borderStyle = {borderBottom: `1px solid ${color}`};

    const handleInputChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value

        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (data.name.length < 2 || data.name.includes(" ") === true) {
            setErrorName("Podane imię jest nieprawidłowe");
            setColor("red");
        }
        if (!emailRequirements.test(data.email)) {
            setErrorEmail("Podany email jest nieprawidłowy");
            setColor("red");
        }
        if (data.message.length < 120) {
            setErrorMessage("Wiadomość musi mieć co najmniej 120 znaków");
            setColor("red");
        }

        const user = {
            name: data.name,
            email: data.email,
            message: data.message,
        };

        fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Błąd 400")
                }
            })
            .then(user => {
                // console.log(user);
                setSuccess(true)

            })
            .then(() => {
                setData({
                    ...data,
                    name: initialState.name,
                    email: initialState.email,
                    message: initialState.message,

                });
                setErrorName("");
                setErrorEmail("");
                setErrorMessage("");
                setColor("#707070");
            })
            .catch(err => {
                console.error("Wystąpił bład " + err.massage)

            });
    };

    let successInfo;
    if (success === true) {
        successInfo = <span className="successInfo">Wiadomość została wysłana! Wkródce się skontaktujemy</span>;

    } else {
        successInfo = null;
    }

    return (
        <div className="desktopContact" id="contact">
            <div className="title">
                <h1>Skontaktuj się z nami</h1>
                <img src={titleImg} alt="decorationBar"/>
            </div>
            {successInfo}
            <form className="contactForm"
                  onSubmit={handleSubmit}>
                <div className="personalDate">
                    <div className="inputsHolder">
                        <label>Wpisz swoje imię</label>
                        <input type="text"
                               name="name"
                               value={data.name}
                               style={borderStyle}
                               placeholder="Krzysztof"
                               onChange={handleInputChange}
                        />
                        <span>{errorName}</span>
                    </div>
                    <div className="inputsHolder">
                        <label>Wpisz swój email</label>
                        <input type="text"
                               name="email"
                               value={data.email}
                               style={borderStyle}
                               placeholder="abc@xyz.pl"
                               onChange={handleInputChange}
                        />
                        <span>{errorEmail}</span>
                    </div>
                </div>
                <div className="textAreaHolder">
                    <label>Wpisz swoją wiadomość</label>
                    <textarea
                        value={data.message}
                        name="message"
                        style={borderStyle}
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate non velit a hendrerit. Phasellus dictum mauris sit amet orci porta sollicitudin."
                        onChange={handleInputChange}
                    >
                    </textarea>
                    <span>{errorMessage}</span>
                    <button>Wyślij</button>
                </div>
            </form>
        </div>
    );
};

export default DesktopContact;