import React from 'react';
import './GiweAwayInfo.scss'

const GiveAwayInfo = (props) => {

    let instructionContainer;

    if (props.view === 1) {
        instructionContainer =
            <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć, komu najlepiej je
                przekazać.</p>
    }
    if (props.view === 2) {
        instructionContainer =
            <p>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy
                znajdziesz TUTAJ.</p>
    }
    if (props.view === 3) {
        instructionContainer =
            <p>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować
                organizacje po ich lokalizacji bądź celu ich pomocy.</p>
    }
    if (props.view === 4) {
        instructionContainer = <p>Podaj adres oraz termin odbioru rzeczy.</p>
    }

    return (
        <div className="giveAwayTitleContainer">
            <h3 className="title">Ważne!</h3>
            {instructionContainer}
        </div>
    );
};

export default GiveAwayInfo;