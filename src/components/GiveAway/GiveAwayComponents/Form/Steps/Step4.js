import React, {useState} from 'react';
import './Steps.scss'
import './Step4.scss'
import GiveAwayInfo from "../../GiveAwayInfo/GiveAwayInfo";

const Step4 = (props) => {
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [postCode, setPostCode] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [data, setData] = useState(new Date().toDateString());
    const [time, setTime] = useState("");
    const [comments, setComments] = useState("");
    const [isError, setIsError] = useState(false);

    const handleSetInfo = (element) => {
        if(Object.values(element).includes("") === true) {
            setIsError(true);
        }else {

            props.setAddress(prevState => ({
                address: {
                    ...prevState.address,
                    city,
                    street,
                    postCode,
                    phoneNumber
                },
                receiptDate: {
                    ...prevState.receiptDate,
                    data,
                    time,
                    comments
                }
            }));
        }
    }

    const handlerOnClick = () => {
        props.counterNext();
        handleSetInfo(props.addressData);
    }

    // handleStepFour = (form) => {
    //     if(Object.values(form).includes('') === true) {
    //         this.setState({error: 'Uzupełnij dane!'});
    //         return null;
    //     }
    //
    //     this.setState(prevState => {
    //         return {
    //             step: prevState.step + 1,
    //             gift: {
    //                 ...prevState.gift,
    //                 address: {
    //                     street: form.street,
    //                     city: form.city,
    //                     zipCode: form.zip,
    //                     phone: form.phone
    //                 },
    //                 details: {
    //                     date: form.date,
    //                     time: form.time,
    //                     more: form.details
    //                 }
    //             }
    //         }
    //     });
    // };

    // onChange={(e => props.setAddress({
    //     ...props.addressData,
    //     address: {postCode: e.target.value}
    // }))}  to dziła ale zmienia tylko jeden element

    // const handleTest = (e) => {
    //     props.setAddress(prevState => ({
    //         address: {
    //             ...prevState.address,
    //             city: "to działa na sztywno"
    //         }
    //     }))
    // }  to działa na sztywno

    // this.setState(prevState => ({
    //     jasper: {                   // object that we want to update
    //         ...prevState.jasper,    // keep all other key-value pairs
    //         name: 'something'       // update the value of specific key
    //     }
    // }))

    return (
        <>
            <GiveAwayInfo view={props.view}/>
            <div className="formContainer">
                <div className="stepContainer">
                    <div className="stepsCounter">
                        Krok 4/4
                    </div>
                    <div className="title">
                        Podaj adres oraz termin odbioru rzeczy przez kuriera
                        <div className="infoContainer">
                            <div className="addressContainer">
                                <h2>Adres odbioru:</h2>
                                <div className="informationHolder">
                                    <div className="inputHolder">
                                        <p>Ulica</p>
                                        <input onChange={(e) => setStreet(e.target.value)}
                                        />
                                    </div>
                                    <div className="inputHolder">
                                        <p>Miasto </p>
                                        <input onChange={(e) => setCity(e.target.value)}
                                        />
                                    </div>
                                    <div className="inputHolder">
                                        <p>Kod pocztowy </p>
                                        <input onChange={(e) => setPostCode(e.target.value)}
                                        />
                                    </div>
                                    <div className="inputHolder">
                                        <p>Numer Telefonu </p>
                                        <input onChange={(e) => setPhoneNumber(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="dataContainer">
                                <h2>Termin odbioru:</h2>
                                <div className="informationHolder">
                                    <div className="inputHolder">
                                        <p>Data</p>
                                        <input type="date" value={data} onChange={(e) => setData(e.target.value)}
                                        />
                                    </div>
                                    <div className="inputHolder">
                                        <p>Godzina</p>
                                        <input type="time" onChange={(e) => setTime(e.target.value)}
                                        />
                                    </div>
                                    <div className="inputHolder">
                                        <p>Uwagi do kuriera</p>
                                        <textarea onChange={(e) => setComments(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="step4Button">
                        <button className="step4Button"  onClick={props.counterPrev}>Wstecz</button>
                        <button className="step4Button" onClick={handlerOnClick}>Dalej</button>
                        {isError ? <p className="errorMessage">Proszę uzupełnić wszystkie pola</p> : null}
                    </div>
                </div>
            </div>
        </>

    );
};

export default Step4;