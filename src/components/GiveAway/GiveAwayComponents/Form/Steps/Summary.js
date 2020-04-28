import React from 'react';
import './Steps.scss'
import './Summary.scss'
import tShirt from '../../../../../assets/Icon-1.svg';
import courier from '../../../../../assets/Icon-4.svg';

const Summary = (props) => {

    const summaryUser = {
        bags: props.bags,
        thing: props.thing,
        toWho: props.localization.toWho,
        location: props.localization.location,
        street: props.address.address.street,
        city: props.address.address.city,
        postCode: props.address.address.postCode,
        phoneNumber: props.address.address.phoneNumber,
        data: props.address.receiptDate.data,
        time: props.address.receiptDate.time,
        comments: props.address.receiptDate.comments
    }
    const howManyBags = (bagsNumber) => {
        if (bagsNumber === 1) {
            return 'worek';
        } else if (bagsNumber === 5) {
            return 'worków'
        } else {
            return 'worki';
        }
    };

   // const handleSummary = (e, summaryUser) => {
   //      e.preventDefault();
   //
   //      fetch("https://oddam-w-dobre-rece-1c38c.firebaseio.com/summary.json", {
   //          method: "POST",
   //          body: JSON.stringify(summaryUser),
   //          headers: {
   //              "Content-Type": "application/json"
   //          }
   //      })
   //          .then(response => {
   //              if (response.ok) {
   //                  return response.json()
   //              } else {
   //                  throw new Error('Błąd sieci!')
   //              }
   //          })
   //          .catch(error => {
   //              console.log(error);
   //          });
   //  };

    return (
        <div className="formContainer">
            <form id="summaryForm">
                <div className="titleSummary">Podsumowanie Twojej darowizny</div>
                <div className="giveSummary">
                    <h2>Oddajesz:</h2>
                    <div className="items holder">
                        <img src={tShirt} alt="tShirtImg"/>
                        <p>{summaryUser.bags} {howManyBags(summaryUser.bags)}, {summaryUser.thing}, {summaryUser.toWho}</p>
                    </div>
                    <div className="location holder">
                        <img src={courier} alt="courierImg"/>
                        <p>dla lokalizaji: {summaryUser.location}</p>
                    </div>
                </div>
                <div className="infoSummary">
                    <div className="addressSummary">
                        <h2>Adres odbioru:</h2>
                        <li><label>Ulica</label>{summaryUser.street}</li>
                        <li><label>Adres</label>{summaryUser.city}</li>
                        <li><label>Kod pocztowy</label>{summaryUser.postCode}</li>
                        <li><label>Numer Teleony</label>{summaryUser.phoneNumber}</li>
                    </div>
                    <div className="dataSummary">
                        <h2>Termin odbioru:</h2>
                        <li><label>Data</label>{summaryUser.data}</li>
                        <li><label>Godzina</label>{summaryUser.time}</li>
                        <li><label>Uwagi dla kuriera</label>
                            <textarea name="comments"
                                      placeholder={summaryUser.comments}
                            /></li>
                    </div>
                </div>
                <div className="formFooter">
                <button onClick={props.counterPrev}>Wstecz</button>
                <button type="submit"
                        onClick={props.counterNext}
                        // onClick={(e) => handleSummary(e, summaryUser)} still in progress
                >Potwierdzam</button>
                </div>
            </form>
        </div>
    );
};

export default Summary;