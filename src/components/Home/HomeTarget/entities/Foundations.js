import React, { useState } from 'react';
import './entities.scss';
import  { getFoundations } from "./fakeEntitiesApi"
import Pagination from "../Pagination/Pagination";
import { paginate } from "../Pagination/paginate";

const Foundations = () => {
    const[allFoundations] = useState(getFoundations);
    const[pageSize] = useState(3);
    const[currentPage, setCurrentPage] = useState(1);

    const handlePageChange = page => {
        setCurrentPage(page);
    };

    const foundations = paginate(allFoundations, currentPage, pageSize );

    return (
        <div className="containerEntities">
            <div className="introduce">
                <p>W naszej bazie znajdziesz listę zweryfikowanych Fundaji, z którymi współpracujemy. Możesz sprawdzić czym się zamują, komu pomagają i czego potrzbują.</p>
            </div>
            <div className="allEntities ">
            {foundations.map(foundation => (
                <div key={foundation._id} className="mainEntities">
                    <div className="entities">
                        <div className="descriptions">
                            <h1>Fundacja "{foundation.name}"</h1>
                            <p>Cel i misja:{foundation.mission}</p>
                        </div>
                        <div className="neededItems">{foundation.items}</div>
                    </div>
                </div>
            ))}
            </div>
            <Pagination itemsCount={allFoundations.length}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
            />
        </div>
    );
};
export default Foundations;