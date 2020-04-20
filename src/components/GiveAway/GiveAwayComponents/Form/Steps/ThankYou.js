import React from 'react';
import './Steps.scss';
import './ThankYou.scss';
import titleImg from '../../../../../assets/Decoration.svg';

const ThankYou = () => {
    return (
        <div className="formContainer ">
            <div className="lastInfo">
                <p>Dziękujemy za przesłanie formularza. Na maila prześlemy wszelkie informacje o odbiorze.</p>
                <img src={titleImg} alt="decorationBar"/>
            </div>
        </div>
    );
};

export default ThankYou;