import React, {useState} from 'react';
import './GiveAwayForm.scss'
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import Summary from "./Steps/Summary";
import ThankYou from "./Steps/ThankYou";

const GiveAwayForm = () => {
    const [viewNumber, setViewNumber] = useState(4);
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
                street: "11",
                city: "2",
                postCode: "3",
                phoneNumber: [4],
            },
            receiptDate: {
                data: [],
                time: [],
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

    switch (viewNumber) {
        case 1:
            return <Step1 counterNext={handlerNextView}
                          thing={setThingToGive}/>;
        case 2:
            return <Step2 counterNext={handlerNextView}
                          counterPrev={handlerPrevView}
                          bags={setBagsNumber}
            />;
        case 3:
            return <Step3 counterNext={handlerNextView}
                          counterPrev={handlerPrevView}
                          localization={localization}
                          setLocalization={setLocalization}
            />;
        case 4:
            return <Step4 counterNext={handlerNextView}
                          counterPrev={handlerPrevView}
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
            return <ThankYou counterPrev={handlerPrevView}/>;
        default:
    }
};

export default GiveAwayForm;