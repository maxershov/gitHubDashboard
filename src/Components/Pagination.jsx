/* eslint-disable eqeqeq */
import React from 'preact/compat';
import { Link } from 'react-router-dom';
import useQueryGetter from './useQueryGetter';

import './Pagination.css';


const Pagination = () => {
  const { searchQuery, pageNum } = useQueryGetter();
  return (
    <nav className="pagination">
      {[...Array(9)].map((x, i) => (
        i + 1 == pageNum ? <Link className="page page--active" to={`?search=${searchQuery}&page=${i + 1}`}>{i + 1}</Link>
          : <Link className="page" to={`?search=${searchQuery}&page=${i + 1}`}>{i + 1}</Link>
      )
      )}
    </nav>
  );
}

export default Pagination;