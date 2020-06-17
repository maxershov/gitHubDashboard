import React, { useEffect, useState } from 'preact/compat';
import { useParams } from 'react-router-dom';


// https://api.github.com/repositories/:id

//https://api.github.com/repos/996icu/996.ICU/contributors?per_page=5
//https://api.github.com/repos/996icu/996.ICU/languages
//anon	string	Set to 1 or true to include anonymous contributors in results. 

const Card = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:6701/getRepo/${id}`)
      .then(res => res.json())
      .then(
        data => {
          console.log(data);
          setLoading(false);
          setRepo(data);
        },
        err => {
          console.log(err)
          setLoading(false);
        }
      );
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
    </>
  );
}


export default Card;