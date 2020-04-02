import React from 'react';

const Summary = (props) => {
    return (
        <div className="formContainer">
            Summary
            <div>{props.thing}</div>
            <button onClick={props.counterMinus}> poprzednia</button>
            <button onClick={props.counterNext}> nastepna</button>

        </div>
    );
};

export default Summary;