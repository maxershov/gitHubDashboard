import React from 'preact/compat';

const Repository = (props) => {
  const { name, url, stars, updated } = props;
  return (
    <>
      <h1>{name}</h1>
      <h1>{url}</h1>
      <p>{stars}</p>
      <p>{updated}</p>
    </>
  );
}


export default Repository;