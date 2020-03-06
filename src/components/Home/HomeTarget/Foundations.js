import React, {useEffect, useState} from 'react';
import './Foundations.scss';
import  { getFundations } from "./fakeFoundationsApi"
import Pagination from "./Pagination/Pagination";
import { paginate } from "./Pagination/paginate";

const Foundations = () => {
    const[allFoundations, setAllFundations] = useState(getFundations);
    const[pageSize, setPageSize] = useState(3);
    const[currentPage, setCurrentPage] = useState(1);

    const handlePageChange = page => {
        setCurrentPage(page);
    };

    const { length: count } = allFoundations;

    const foundations = paginate(allFoundations, currentPage, pageSize );

    return (
        <>
        <div className="containerFoundations">

            {foundations.map(foundation => (
                <div key={foundation._id} className="allFoundations">
                    <div className="foundation">
                        <div className="descriptions">
                            <h1>{foundation.name}</h1>
                            <p>{foundation.mission}</p>
                        </div>
                        <div className="neededItems">{foundation.items}</div>
                    </div>
                </div>
            ))}

            <Pagination itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
            />
            {/*tutaj moze bedzie trzeba rozproszyc  itemCount wczesniej*/}
        </div>

    </>
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