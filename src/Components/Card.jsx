import React, { useEffect, useState } from 'preact/compat';
import { useParams } from 'react-router-dom';
import fetchAsync from '../fetchAsync';

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
        const lang = await fetchAsync(data.languages_url);
        setLanguages(lang)
        const contrib = await fetchAsync(data.contributors_url);
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
      <h1>Card Page</h1>
      <h2>{repo.name}</h2>
      <h3>{repo.stargazers_count}</h3>
      <a href={repo.owner.html_url}>{repo.owner.login}</a>
      <h3>{repo.owner.avatar_url}</h3>
      <h3>{repo.updated_at}</h3>
      <h3>{repo.description}</h3>
      {Object.keys(languages).map(value => <h2>{value}</h2>)}
      {contributors.map((person) => {
        return (
          <>
            <h2>{person.login}</h2>
            <h3>{person.avatar_url}</h3>  
          </>
        )
      } 
        )}
    </>
  );
}


export default Card;