import React from 'react';

const Summary = (props) => {
    return (
        <div className="formContainer">
            Summary
            <div>{props.thing}</div>
            <div>{props.bags}</div>
            <div>{props.localization.location}</div>
            <div>{props.localization.toWho}</div>
            <div>{props.localization.organization}</div>
            <div>{props.address.address.street}</div>
            <div>{props.address.address.city}</div>
            <div>{props.address.address.postCode}</div>
            <div>{props.address.address.phoneNumber}</div>
            <div>{props.address.receiptDate.data}</div>
            <div>{props.address.receiptDate.time}</div>
            <div>{props.address.receiptDate.comments}</div>
            <button onClick={props.counterPrev}> poprzednia</button>
            <button onClick={props.counterNext}> nastepna</button>
        </div>
    );
};

export default Summary;