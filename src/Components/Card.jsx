import React, { useEffect, useState } from 'preact/compat';
import { useParams, useHistory } from 'react-router-dom';
import fetchAsync from '../fetchAsync';
import star from '../assets/star.svg';
import arrow from '../assets/arrow.svg';
import './Card.css';


const Card = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const history = useHistory();
  const [repo, setRepo] = useState([]);
  const [languages, setLanguages] = useState({});
  const [contributors, setContributors] = useState([]);


  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchAsync(`https://api.github.com/repositories/${id}`);
        setRepo(data);

        const lang = await fetchAsync(data.languages_url)
        setLanguages(lang)

        const contrib = await fetchAsync(`${data.contributors_url}?per_page=10`);
        setContributors(contrib)

        setLoading(false);

      } catch (err) {
        history.push(`/error?${err}`)
      }
    };
    fetchData();
  }, [id])


  return loading ? <div className="spinner" /> : (
    <>
      <button className="back-Btn" type="button" onClick={() => history.goBack()}>
        <img className="back-img" src={arrow} alt="Go back" />
      </button>
      <a className="link" href={repo.html_url} title="Open GitHub repository">
        <h1 className="card-name">{repo.name}</h1>
      </a>
      <div className="flex-container">
        <article className="owner">
          <img className="owner-avatar" alt="Profile" src={repo.owner.avatar_url} />
          <p className="card__label label">Created by</p>
          <a className="owner__link link" href={repo.owner.html_url} title="Open owner GitHub">{repo.owner.login}</a>
        </article>
        <article className="card">
          <p className="card__label label">Stars</p>
          <p className="card_stars">
            <img className="starImg" alt="star" src={star} />{repo.stargazers_count}
          </p>
          <p className="card__label label">Pushed at</p>
          <p className="card-pushedAt">{new Date(repo.pushed_at).toLocaleString('ru')}</p>
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