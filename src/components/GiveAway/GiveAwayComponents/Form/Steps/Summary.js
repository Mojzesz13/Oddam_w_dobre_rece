import React from 'react';

const Summary = (props) => {
    return (
        <div className="formContainer">
            Summary
            <div>{props.thing}</div>
            <div>{props.bags}</div>
            <div>{props.localization.location}</div>
            <button onClick={props.counterPrev}> poprzednia</button>
            <button onClick={props.counterNext}> nastepna</button>

        </div>
    );
};

export default Summary;