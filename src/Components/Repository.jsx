import React from 'preact/compat';
import { Link } from 'react-router-dom';
import star from '../assets/star.svg';
import githubLogo from '../assets/github.svg';

import './Repository.css';

const Repository = (props) => {
  const { id, name, url, stars, pushedAt } = props;

  return (
    <article className="repo">
      <p className="repo__label label">Name</p>
      <Link className="repo__name link" to={`/card/${id}`} title="Open repository card">{name}</Link>
      <p className="repo__label label">Stars</p>
      <p className="repo__stars">
        <img className="starImg" alt="star" src={star} />{stars}
      </p>
      <p className="repo__label label">Pushed at</p>
      <p className="repo__pushedAt">{new Date(pushedAt).toLocaleString('ru')}</p>
      <a href={url} className="repo__url link">
        <img className="repo__image" alt="githubLogo" src={githubLogo} />
        OPEN GITHUB
      </a>
    </article>
  );
}


export default Repository;