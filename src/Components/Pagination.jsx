/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
import React from 'preact/compat';
import { Link } from 'react-router-dom';
import useQueryGetter from './useQueryGetter';

import './Pagination.css';


const Pagination = (props) => {

  function getPagesArr(start) {

    const lastPage = Math.floor(props.total / 10);

    let page = start
    const minusArr = []
    const plusArr = []

    while (minusArr.length < 5 && page > 0) {
      minusArr.unshift(page);
      --page;
    }
    
    while (plusArr.length < 10 - minusArr.length && start <= lastPage) {
      start++;
      plusArr.push(start);
    }
    return [...minusArr, ...plusArr];
  }

  const { searchQuery, pageNum } = useQueryGetter();
  return (
    <nav className="pagination">
      {getPagesArr(pageNum).map(num => (
        num == pageNum ? <Link className="page page--active" to={`?search=${searchQuery}&page=${num}`}>{num}</Link>
          : <Link className="page" to={`?search=${searchQuery}&page=${num}`}>{num}</Link>
      ))}
    </nav>
  );
}


export default Pagination;