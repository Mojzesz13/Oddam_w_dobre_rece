import React, {useState} from 'react';
import './GiveAwayForm.scss'
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import Summary from "./Steps/Summary";
import ThankYou from "./Steps/ThankYou";

const GiveAwayForm = () => {
    const [viewNumber, setViewNumber] = useState(1);
    const [isError, setIsError] = useState(false);
    const [thingToGive, setThingToGive] = useState("");
    const [bagsNumber, setBagsNumber] = useState("");
    const [localization, setLocalization] = useState({
        location: "",
        toWho: "",
        organization: "",
    });
    const [addressData, setAddressData] = useState(
        {
            address: {
                street: "",
                city: "",
                postCode: "",
                phoneNumber: "",
            },
            receiptDate: {
                data: "",
                time: "",
                comments: ""
            }
        }
    )

    // const [finalUpdate, setFinalUpdate] = useState(
    //     {
    //         viewNumber: 2,
    //         stuffDescriptions: {
    //             thingToGive: "",
    //             bagsNumber: 0,
    //             localization: {
    //                 location: "aaa",
    //                 toWho: "bbb",
    //                 organization: "ccc",
    //             },
    //             address: {
    //                 street: "",
    //                 city: "",
    //                 postCode: "",
    //                 phoneNumber: [],
    //             },
    //             receiptDate: {
    //                 data: [],
    //                 time: [],
    //                 comments: ""
    //             }
    //         }
    //     }
    // )
    //
    // const handlerNextView = () => {
    //     setFinalUpdate(
    //         prevState => {
    //             return {
    //                 viewNumber: prevState.viewNumber + 1
    //             }
    //         }
    //     );
    // };

    const handlerPrevView = () => {
        setViewNumber(prevState => {
            return prevState - 1
        });
    };

    const handlerNextView = () => {
        setViewNumber(prevState => {
            return prevState + 1
        });
    };

    const handlerNextPage = (parameter, p2) => {
        if (parameter === "" || p2 === "") {
            setIsError(true);
        } else {
            setIsError(false);
            setViewNumber(prevState => {
                return prevState + 1
            });
        }
    }


    switch (viewNumber) {
        case 1:
            return <Step1 view={viewNumber}
                          setView={setViewNumber}
                          thing={thingToGive}
                          setThing={setThingToGive}
                          isError={isError}
                          handlerNextPage={handlerNextPage}


            />;
        case 2:
            return <Step2 counterPrev={handlerPrevView}
                          handlerNextPage={handlerNextPage}
                          bags={bagsNumber}
                          setBags={setBagsNumber}
                          view={viewNumber}
                          setView={setViewNumber}
                          isError={isError}
            />;
        case 3:
            return <Step3 handlerNextPage={handlerNextPage}
                          counterPrev={handlerPrevView}
                          view={viewNumber}
                          localization={localization}
                          setLocalization={setLocalization}
                          isError={isError}

            />;
        case 4:
            return <Step4 counterNext={handlerNextView}
                          counterPrev={handlerPrevView}
                          view={viewNumber}
                          addressData={addressData}
                          setAddress={setAddressData}
            />;
        case 5:
            return <Summary counterNext={handlerNextView}
                            counterPrev={handlerPrevView}
                            thing={thingToGive}
                            bags={bagsNumber}
                            localization={localization}
                            address={addressData}
            />;
        case 6:
            return <ThankYou/>;
        default:
    }
}

export default GiveAwayForm;