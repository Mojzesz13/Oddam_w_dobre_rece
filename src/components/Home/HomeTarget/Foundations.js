import React, {useState} from 'react';
import './Foundations.scss';
import  { getFundations } from "./fakeFoundationsApi"

const Foundations = () => {
    const[fundations, setFundations] = useState(getFundations);

    return (
        <div className="containerFoundations">
            {fundations.map(foundation => (
                <div className="allFoundations">
                    <div className="foundation">
                        <div className="descriptions">
                            <h1>{foundation.name}</h1>
                            <p>{foundation.mission}</p>
                        </div>
                        <div className="neededItems">{foundation.items}}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default Foundations;







// <div className="containerFoundations">
//     <div className="introduce">
//         <p>W naszej bazie znajdziesz listę zweryfikowanych Fundaji, z którymi współpracujemy. Możesz sprawdzić czym się zamują, komu pomagają i czego potrzbują.</p>
//     </div>
//     <div className="allFoundations">
//         <div className="foundation">
//             <div className="descriptions">
//                 <h1>Fundacja "Dbamy o Zdrowi"</h1>
//             </div>
//             <div className="neededItems"></div>
//         </div>
//         <div className="foundation">
//             <div className="descriptions"></div>
//             <div className="neededItems"></div>
//         </div>
//         <div className="foundation">
//             <div className="descriptions"></div>
//             <div className="neededItems"></div>
//         </div>
//     </div>
//
// </div>
//
//
// <table className="table">
//     <thead>
//     <tr>
//         <th>name</th>
//         <th>mission</th>
//         <th>items</th>
//     </tr>
//
//     <tbody>
//     {fundations.map(fundation => (
//         <tr>
//             <td>{fundation.name}</td>
//             <td>{fundation.mission}</td>
//             <td>{fundation.items}</td>
//         </tr>
//     ))}
//     </tbody>
//     </thead>
// </table>