import React from 'react';

const Step4 = (props) => {
    return (
        <div className="formContainer ">
            step 4
            <button onClick={props.counterPrev}> poprzednia</button>
            <button onClick={props.counterNext}> nastepna</button>

        </div>
    );
};

export default Step4;