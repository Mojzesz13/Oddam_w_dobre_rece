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
    const [errorInfo, setErrorInfo] = useState(
        {
            cityError: "",
            streetError: "",
            postCodeError: "",
            phoneNumberError: "",
            dataError: "",
            timeError: "",
        });

    const handleSetInfo = () => {
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

    const errorMessage = () => {
        let result = [];
        Object.keys(errorInfo).forEach(function (key) {
            if (errorInfo[key] !== "") {
                result.push(errorInfo[key] + ", ");
            }
        })
        return result
    }

    const validate = () => {
        let streetError = "";
        let cityError = "";
        let postCodeError = "";
        let phoneNumberError = "";
        let dataError = "";
        let timeError = "";

        if (street === "") {
            streetError = "uzupelnij ulice"
        }
        if (city === "") {
            cityError = "uzupelnij miasto"
        }
        if (postCode === "" && !postCode.includes("-")) {
            postCodeError = "uzupelnij kod pocztowy"
        }
        if (phoneNumber === "") {
            phoneNumberError = "uzupelnij numer telefonu"
        }
        if (data === "") {
            dataError = "uzupelnij date"
        }
        if (time === "") {
            timeError = "uzupelnij godzinę"
        }
        if (streetError || cityError || postCodeError || phoneNumberError || dataError || timeError) {
            setErrorInfo({...errorInfo, streetError, cityError, postCodeError, phoneNumberError, dataError, timeError})
            return false
        }
        return true
    }

    const handleOnClick = (e) => {
        e.preventDefault();
        validate();
        if (validate() === true) {
            props.counterNext();
            handleSetInfo(props.addressData);
        }
    }

    return (
        <>
            <GiveAwayInfo view={props.view}/>
            <form className="formContainer">
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
                                        <label htmlFor="street">Ulica</label>
                                        <input type="text"
                                               name="street"
                                               onChange={(e) => setStreet(e.target.value)}
                                        />
                                    </div>
                                    <div className="inputHolder">
                                        <label htmlFor="city">Miasto</label>
                                        <input type="text"
                                               name="city"
                                               onChange={(e) => setCity(e.target.value)}
                                        />
                                    </div>
                                    <div className="inputHolder">
                                        <label htmlFor="postCode">Kod pocztowy</label>
                                        <input type="text"
                                               name="postCode"
                                               onChange={(e) => setPostCode(e.target.value)}
                                        />
                                    </div>
                                    <div className="inputHolder">
                                        <label htmlFor="phoneNumber">Numer Telefonu</label>
                                        <input type="number"
                                               name="phoneNumber"
                                               onChange={(e) => setPhoneNumber(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="dataContainer">
                                <h2>Termin odbioru:</h2>
                                <div className="informationHolder">
                                    <div className="inputHolder">
                                        <label htmlFor="data">Data</label>
                                        <input type="date"
                                               value={data}
                                               onChange={(e) => setData(e.target.value)}
                                        />
                                    </div>
                                    <div className="inputHolder">
                                        <label htmlFor="time">Godzina</label>
                                        <input type="time"
                                               name="time"
                                               onChange={(e) => setTime(e.target.value)}
                                        />
                                    </div>
                                    <div className="inputHolder">
                                        <label htmlFor="comments">Uwagi do kuriera</label>
                                        <textarea
                                            name="comments"
                                            value=""
                                            onChange={(e) => setComments(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="formFooter">
                        <button className="step4Button" onClick={props.counterPrev}>Wstecz</button>
                        <button className="step4Button" onClick={handleOnClick}>Dalej</button>
                        <div className="errorMessage errorStep4">{errorMessage()} </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Step4;