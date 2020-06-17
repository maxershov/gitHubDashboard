import React, { useEffect, useState } from 'preact/compat';
import { useParams } from 'react-router-dom';
import fetchAsync from '../fetchAsync';
import star from '../assets/star.svg';

import './Card.css';

import delMe from '../../backend/contr';

// https://api.github.com/repositories/:id

// https://api.github.com/repos/996icu/996.ICU/contributors?per_page=5
// https://api.github.com/repos/996icu/996.ICU/languages
// anon	string	Set to 1 or true to include anonymous contributors in results. 

const Card = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [repo, setRepo] = useState([]);
  const [languages, setLanguages] = useState({});
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchAsync(`http://localhost:6701/getRepo/${id}`);
        setRepo(data);
        // const lang = await fetchAsync(data.languages_url);
        const lang = { "JS": 1, "Python": 2 };
        setLanguages(lang)
        // const contrib = await fetchAsync(data.contributors_url);
        const contrib = delMe.data;
        setContributors(contrib)
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();

  }, [id])
  return loading ? <h1>LOADING</h1> : (
    <>
      <h1 className="card-name">{repo.name}</h1>
      <div className="flex-container">
        <article className="owner">
          <p className="card__label label">Created by</p>
          <img className="owner-avatar" alt="Profile" src={repo.owner.avatar_url} />
          <a className="owner__link link" href={repo.owner.html_url}>{repo.owner.login}</a>
        </article>
        <article className="card">
          <p className="card__label label">Stars</p>
          <p className="card_stars">
            <img className="starImg" alt="star" src={star} />{repo.stargazers_count}
          </p>
          <p className="card__label label">Last updated</p>
          <p className="card-updated">{repo.updated_at}</p>
          <p className="card__label label">Description</p>
          <p className="card-description">{repo.description}</p>
          <p className="card__label label">Languages</p>
          <ul className="languages">{Object.keys(languages).map(value =>
            <li className="languages__item">{value}</li>)}
          </ul>
          <p className="card__label label">Top contributors</p>
          <article className="contributor">{contributors.map(person => (
            <a className="contributor__link" href={person.html_url}>
              <img className="contributor__avatar" title={person.login} alt="Contributor" src={person.avatar_url} />
            </a>
          )
          )}
          </article>
        </article>
      </div>
    </>
  );
}


export default Card;