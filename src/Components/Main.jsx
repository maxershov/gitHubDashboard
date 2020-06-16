// TODO get page from url => send in req from useEffect

import React, { useEffect, useState } from 'preact/compat';
import { useHistory, useParams } from "react-router-dom";
import Repo from './Repository';
import Pagination from './Pagination';
import Search from './Search';


const Main = () => {
  const history = useHistory();
  const { pageNum, search } = useParams();
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    console.log("pageNum=", pageNum, "search=", search);
    const page = pageNum ?? 1; // TODO do i need fix if num bigger?
    // TODO add default value for undef search query
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum])
  return loading ? <h1>LOADING</h1> : (
    <>
      <Search />
      <h1>Main Page</h1>
      {repos.map((repo) => {
        return <Repo name={repo.name} url={repo.html_url} stars={repo.stargazers_count} updated={repo.updated_at} />
      })}
      <Pagination currentPage={pageNum} />
    </>
  );
}


export default Main;