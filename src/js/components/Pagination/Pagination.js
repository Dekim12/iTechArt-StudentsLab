import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import uuid from 'uuid/v1';
import { PAGINATION_ACTIVE, PAGINATION_DISABLED } from '../../constants';
import { defineClassName } from '../../appLogic';
import './pagination.scss';

const Pagination = ({ pageCount, currentPage }) => {
  const generatePaginationPages = count => {
    const result = [];
    for (let i = 1; i <= count; i++) {
      result.push(
        <li
          className={defineClassName(i === currentPage, PAGINATION_ACTIVE)}
          key={uuid()}
        >
          {i === currentPage ? i : <Link to={`/favorite/${i}`}>{i}</Link>}
        </li>
      );
    }
    return result;
  };

  return (
    <div className='pagination-container'>
      <ul className='pagination'>
        <li className={defineClassName(currentPage === 1, PAGINATION_DISABLED)}>
          {currentPage === 1 ? (
            <i className='fa fa-chevron-left' aria-hidden='true' />
          ) : (
            <Link to={`/favorite/${currentPage - 1}`}>
              <i className='fa fa-chevron-left' aria-hidden='true' />
            </Link>
          )}
        </li>
        {generatePaginationPages(pageCount)}
        <li
          className={defineClassName(
            currentPage === pageCount,
            PAGINATION_DISABLED
          )}
        >
          {currentPage === pageCount ? (
            <i className='fa fa-chevron-right' aria-hidden='true' />
          ) : (
            <Link to={`/favorite/${currentPage + 1}`}>
              <i className='fa fa-chevron-right' aria-hidden='true' />
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  pageCount: PropTypes.number,
  currentPage: PropTypes.number,
};

Pagination.defaultProps = {
  pageCount: 1,
  currentPage: 1,
};

export default Pagination;
