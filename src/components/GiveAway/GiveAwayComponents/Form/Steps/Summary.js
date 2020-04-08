import React from 'react';

const Summary = (props) => {

    let test1 = (props.localization);


    return (





        <div className="formContainer">
            Summary
            <div>{props.thing}</div>
            <div>{props.bags}</div>
            <div>{test1.location}</div>
            <div>{test1.toWho}</div>
            <div>{test1.organization}</div>
            <button onClick={props.counterPrev}> poprzednia</button>
            <button onClick={props.counterNext}> nastepna</button>

        </div>
    );
};

export default Summary;