import React, {useState} from 'react';
import './Steps.scss'
import './Step4.scss'


const Step4 = (props) => {
    const [miasto, setMiasto] = useState("")
    const [ulica, setUlica] = useState("")
    const [code, setCode] = useState("")
    const [data, setData] = useState("")
    const [time, setTime] = useState("")
    const [comments, setComments] = useState("")

    const handleTest = () => {
        props.setAddress(prevState => ({
            address: {
                ...prevState.address,
                city: miasto,
                street: ulica,
                postCode: code
            },
            receiptDate: {
                ...prevState.receiptDate,
                data: data,
                time: time,
                comments: comments
            }
        }))
    }

    const handlerOnClick = () => {
        props.counterNext();
        handleTest();
    }


    // this.setState({...this.state.jasper, name: 'someothername'});

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
                            <div className="information">
                                <div className="inputHolder">
                                    <p>Ulica</p>
                                    <input onChange={(e) => setUlica(e.target.value)}/>
                                </div>
                                <div className="inputHolder">
                                    <p>Miasto </p>
                                    <input onChange={(e) => setMiasto(e.target.value)}
                                    />
                                </div>
                                <div className="inputHolder">
                                    <p>Kod pocztowy </p>
                                    <input onChange={(e) => setCode(e.target.value)}
                                    />
                                </div>
                                <div className="inputHolder">
                                    <p>Numer Telefonu </p>
                                    <input onChange={(e => props.setAddress({
                                        ...props.addressData,
                                        address: {phoneNumber: e.target.value}
                                    }))}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="dataContainer">
                            <h2>Termin odbioru:</h2>
                            <div className="information">
                                <div className="inputHolder">
                                    <p>Data</p>
                                    <input onChange={(e) => setData(e.target.value)}/>
                                </div>
                                <div className="inputHolder">
                                    <p>Godzina</p>
                                    <input onChange={(e) => setTime(e.target.value)}
                                    />
                                </div>
                                <div className="inputHolder">
                                    <p>Uwagi do kuriera</p>
                                    <input onChange={(e) => setComments(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="step3Button">
                    <button type="submit" onClick={handleTest}>Wstecz</button>
                    <button onClick={handlerOnClick}>Dalej</button>
                </div>
            </div>
        </div>
    );
};

export default Step4;