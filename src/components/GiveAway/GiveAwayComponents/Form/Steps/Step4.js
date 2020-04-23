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

    const handleOnClick = () => {

        props.counterNext();
        handleSetInfo(props.addressData);
    }


    const validate = () => {

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
                                        <input type="number"
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
                                        <textarea type="text"
                                                  name="comments"
                                                  value="This is a description."
                                                  onChange={(e) => setComments(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="step4Button">
                        <button className="step4Button" onClick={props.counterPrev}>Wstecz</button>
                        <button className="step4Button" onClick={handleOnClick}>Dalej</button>
                        {isError ? <p className="errorMessage">Proszę uzupełnić wszystkie pola</p> : null}
                    </div>
                </div>
            </div>
        </>

    );
};

export default Step4;