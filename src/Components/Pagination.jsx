import React from 'preact/compat';
import { Link } from 'react-router-dom';
import useQueryGetter from './useQueryGetter';

import './Pagination.css';


const Pagination = () => {
  const { searchQuery } = useQueryGetter();
  return (
    <>
      <Link to={`?search=${searchQuery}&page=1`}>1</Link>
      <Link to={`?search=${searchQuery}&page=2`}>2</Link>
      <Link to={`?search=${searchQuery}&page=3`}>3</Link>
      <Link to={`?search=${searchQuery}&page=4`}>4</Link>
      <Link to={`?search=${searchQuery}&page=5`}>5</Link>
    </>
  );
}

export default Pagination;