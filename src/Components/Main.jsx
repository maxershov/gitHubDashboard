import React, { useEffect, useState } from 'preact/compat';
import Repo from './Repository';


const Main = () => {
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    // fetch(`https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&page=1&per_page=5`)
    const repos = fetch(`http://localhost:6701/getData`)
      .then(res => res.json())
      .then(
        data => {
          // console.log(data);
          setLoading(false);
          setRepos(data.data.items);
        },
        err => {
          console.log(err)
          setLoading(false);
        }
      );
  }, [])
  return loading ? <h1>LOADING</h1> : (
    <>
      {console.log(repos)}
      <h1>Main Page</h1>
      {repos.map((repo) => {
        return <Repo name={repo.name} url={repo.html_url} stars={repo.stargazers_count} updated={repo.updated_at} />
      })}
    </>
  );
}


export default Main;