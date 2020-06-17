import React from 'preact/compat';
import { Link } from 'react-router-dom';

const Repository = (props) => {
  const { id, name, url, stars, updated } = props;
  return (
    <>
      <Link to={`/card/${id}`}>{name}</Link>
      <h1>{url}</h1>
      <p>{stars}</p>
      <p>{updated}</p>
    </>
  );
}


export default Repository;