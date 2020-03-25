import React, { useState } from 'react';
import './entities.scss';
import  { getLocals } from "./fakeEntitiesApi"
import Pagination from "../Pagination/Pagination";
import { paginate } from "../Pagination/paginate";

const Locals = () => {
    const[allLocals] = useState(getLocals);
    const[pageSize] = useState(3);
    const[currentPage, setCurrentPage] = useState(1);

    const handlePageChange = page => {
        setCurrentPage(page);
    };

    const locals = paginate(allLocals, currentPage, pageSize );

    return (
        <div className="containerEntities">
            <div className="introduce">
                <p>Wspieramy lokalne zbiórki organizowane przez indywidualne osoby, którym zależy na dobru społeczności, w której żyją. Sam też możesz zorganizować taką zbiórkę i pomóc tym, którzy są najbliżej.</p>
            </div>
            <div className="allEntities ">
                {locals.map(local => (
                    <div key={local._id} className="mainEntities">
                        <div className="entities">
                            <div className="descriptions">
                                <h1>Zbiórka "{local.name}"</h1>
                                <p>Cel i misja:{local.mission}</p>
                            </div>
                            <div className="neededItems">{local.items}</div>
                        </div>
                    </div>
                ))}
            </div>
            <Pagination itemsCount={allLocals.length}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
            />
        </div>
    );
};
export default Locals;