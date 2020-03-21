import React from 'react';
import _ from 'lodash';
import "./Pagination.scss"

const Pagination = props => {
    const { itemsCount, pageSize, currentPage, onPageChange } = props;

    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    const pages = _.range(0, pagesCount + 1);
    const solutionForProblemWithExtraNumber = pages.shift();  // I used this because i didn't know how to sort problem in different way

    return (
        <nav>
            <ul className="pagination">
                {pages.map(page => (
                    <li key={page}
                        className= { page === currentPage ? "pageItem active" : "pageItem"} onClick={() => onPageChange(page)}>
                        <a className="pageLink" >
                            {page}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
export default Pagination;