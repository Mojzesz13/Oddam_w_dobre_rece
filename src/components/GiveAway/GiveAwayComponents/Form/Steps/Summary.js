import React from 'react';
import './Steps.scss'
import './Summary.scss'
import tShirt from '../../../../../assets/Icon-1.svg';
import courier from '../../../../../assets/Icon-4.svg';


const Summary = (props) => {

    return (
        <div className="formContainer">
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
                <div className="addressSummary">
                    <div>{props.address.address.street}</div>
                    <div>{props.address.address.city}</div>
                    <div>{props.address.address.postCode}</div>
                    <div>{props.address.address.phoneNumber}</div>
                </div>
                <div className="dataSummary">
                    <div>{props.address.receiptDate.data}</div>
                    <div>{props.address.receiptDate.time}</div>
                    <div>{props.address.receiptDate.comments}</div>
                </div>
            </div>
            <button onClick={props.counterPrev}> poprzednia</button>
            <button onClick={props.counterNext}> nastepna</button>

        </div>
    );
};

export default Summary;