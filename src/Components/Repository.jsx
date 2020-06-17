import React from 'preact/compat';
import { Link } from 'react-router-dom';
import star from '../assets/star.svg';

import './Repository.css';

const Repository = (props) => {
  const { id, name, url, stars, updated } = props;
  return (
    <article className="repo">
      <Link className="repo__name" to={`/card/${id}`}>{name}</Link>
      <p className="repo_stars">
        <img className="starImg" alt="star" src={star} />{stars}
      </p>
      <p className="repo_updated">{updated}</p>
      <a href={url} className="repo__url">Link to GitHub</a>
    </article>
  );
}


export default Repository;