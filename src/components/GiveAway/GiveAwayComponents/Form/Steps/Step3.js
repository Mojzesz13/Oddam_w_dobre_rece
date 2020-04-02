import React from 'react';

const Step3 = (props) => {
    return (
        <div className="formContainer ">
            step 3
            <button onClick={props.counterPrev}> poprzednia</button>
            <button onClick={props.counterNext}> nastepna</button>

        </div>
    );
};

export default Step3;