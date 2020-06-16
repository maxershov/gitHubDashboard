// TODO get page from url => send in req from useEffect

import React, { useEffect, useState } from 'preact/compat';
import { useHistory, useParams } from "react-router-dom";
import Repo from './Repository';
import Pagination from './Pagination';


const Main = () => {
  const history = useHistory();
  const { pageNum } = useParams();
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    const page = pageNum ?? 1; // TODO do i need fix if num bigger?
    // fetch(`https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&page=1&per_page=5`)
    fetch(`http://localhost:6701/getData/${page}`)
      .then(res => res.json())
      .then(
        data => {
          // console.log(data);
          setLoading(false);
          setRepos(data.items);
        },
        err => {
          console.log(err)
          setLoading(false);
        }
      );
  }, [pageNum])
  return loading ? <h1>LOADING</h1> : (
    <>
      {console.log(repos)}
      <h1>Main Page</h1>
      {repos.map((repo) => {
        return <Repo name={repo.name} url={repo.html_url} stars={repo.stargazers_count} updated={repo.updated_at} />
      })}
      <Pagination currentPage={pageNum} />
    </>
  );
}


export default Main;