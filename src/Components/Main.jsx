import React, { useEffect, useState } from 'preact/compat';
import Repo from './Repository';
import Pagination from './Pagination';
import Search from './Search';
import useQueryGetter from './useQueryGetter'
import fetchAsync from '../fetchAsync';

import './Main.css';

import token from '../../token';


const Main = () => {
  const { searchQuery, pageNum } = useQueryGetter();
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const page = pageNum ?? 1; // TODO delete
    console.log(`will be fetched search=${searchQuery} and page=${pageNum}`)
    // fetch(`https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&page=1&per_page=5`)
    console.log("token", token);
    async function fetchData() {
      try {
        const data = await fetchAsync(`http://localhost:6701/getData/${page}`);
        // const data = await fetchAsync(`https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&page=1&per_page=5`, {
        // headers: {
        //   authorization: token
        // }})
        setRepos(data.items);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum, searchQuery])
  return loading ? <h1>LOADING</h1> : (
    <>
      <Search />
      <section className="repo-list">
        {repos.map(repo =>
          <Repo id={repo.id} name={repo.name} url={repo.html_url} stars={repo.stargazers_count} updated={repo.updated_at} />)}
      </section>
      <Pagination />
    </>
  );
}


export default Main;