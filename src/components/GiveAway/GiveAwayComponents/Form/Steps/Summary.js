import React from 'react';
import './Steps.scss'
import './Summary.scss'
import tShirt from '../../../../../assets/Icon-1.svg';
import courier from '../../../../../assets/Icon-4.svg';


const Summary = (props) => {



    return (
        <div className="formContainer">
            <form>
                <div className="titleSummary">Podsumowanie Twojej darowizny</div>
                <div className="giveSummary">
                    <h2>Oddajesz:</h2>
                    <div className="items holder">
                        <img src={tShirt} alt="tShirtImg"/>
                        <p>{props.bags} worki, {props.thing}, {props.localization.toWho}</p>
                    </div>
                    <div className="location holder">
                        <img src={courier} alt="courierImg"/>
                        <p>dla lokalizaji: {props.localization.location}</p>
                    </div>
                </div>
                <div className="infoSummary">
                    {/*<table>*/}
                    {/*<tr>*/}
                    {/*    <th>Adres odbioru:</th>*/}
                    {/*    <th>Termin odbioru:</th>*/}
                    {/*</tr>*/}
                    {/*<tr>*/}
                    {/*    <td><label>Ulica</label>{props.address.address.street}</td>*/}
                    {/*    <td><label>Adres</label>{props.address.address.city}</td>*/}
                    {/*    <td><label>Kod pocztowy</label>{props.address.address.postCode}</td>*/}
                    {/*    <td><label>Numer Teleony</label>{props.address.address.phoneNumber}</td>*/}
                    {/*</tr>*/}
                    {/*<tr>*/}
                    {/*    <td><label>Data</label>{props.address.address.street}</td>*/}
                    {/*    <td><label>Godzina</label>{props.address.address.city}</td>*/}
                    {/*    <td><label>uwagi dla kuriera</label>{props.address.address.postCode}</td>*/}
                    {/*</tr>*/}
                    {/*</table>*/}
                    <div className="addressSummary">
                        <h2>Adres odbioru:</h2>
                        <li><label>Ulica</label>{props.address.address.street}</li>
                        <li><label>Adres</label>{props.address.address.city}</li>
                        <li><label>Kod pocztowy</label>{props.address.address.postCode}</li>
                        <li><label>Numer Teleony</label>{props.address.address.phoneNumber}</li>
                    </div>
                    <div className="dataSummary">
                        <h2>Termin odbioru:</h2>
                        <li><label>Data</label>{props.address.receiptDate.data}</li>
                        <li><label>Godzina</label>{props.address.receiptDate.time}</li>
                        <li><label>Uwagi dla kuriera</label><textarea>{props.address.receiptDate.comments}</textarea></li>
                    </div>
                </div>
                <button onClick={props.counterPrev}>Wstecz</button>
                <button onClick={props.counterNext}>Potwierdzam</button>
            </form>


        </div>
    );
};

export default Summary;