import React, { useState } from 'react';
import './entities.scss';
import  { getOrganizations } from "./fakeEntitiesApi"
import Pagination from "../Pagination/Pagination";
import { paginate } from "../Pagination/paginate";

const Organizations  = () => {
    const[allOrganizations ] = useState(getOrganizations);
    const[pageSize] = useState(3);
    const[currentPage, setCurrentPage] = useState(1);

    const handlePageChange = page => {
        setCurrentPage(page);
    };

    const organizations  = paginate(allOrganizations , currentPage, pageSize );

    return (
        <div className="containerEntities">
            <div className="introduce">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate non velit a hendrerit. Phasellus dictum mauris sit amet orci porta sollicitudin.</p>
            </div>
            <div className="allEntities ">
                {organizations.map(organization  => (
                    <div key={organization._id} className="mainEntities">
                        <div className="entities">
                            <div className="descriptions">
                                <h1>Organizacja "{organization.name}"</h1>
                                <p>Cel i misja:{organization.mission}</p>
                            </div>
                            <div className="neededItems">{organization.items}</div>
                        </div>
                    </div>
                ))}
            </div>
            <Pagination itemsCount={allOrganizations.length}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
            />
        </div>
    );
};
export default Organizations ;