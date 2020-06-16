import React from 'preact/compat';
import { Link } from 'react-router-dom';

const Pagination = (props) => {
  // const { currentPage } = props;
  // function changePage(pageNum) {
  //     history.push(`/main/${pageNum}`)
  // }
  return (
    <>
      <Link to="/main/1">1</Link>
      <Link to="/main/2">2</Link>
      <Link to="/main/3">3</Link>
      <Link to="/main/4">4</Link>
      <Link to="/main/5">5</Link>
    </>
  );
}


export default Pagination;