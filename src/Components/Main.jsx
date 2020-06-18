import React, { useEffect, useState } from 'preact/compat';
import { useHistory } from 'react-router-dom';
import Repo from './Repository';
import Pagination from './Pagination';
import Search from './Search';
import useQueryGetter from './useQueryGetter'
import fetchAsync from '../fetchAsync';

import './Main.css';

// import token from '../../token';

const Main = () => {
  const { searchQuery, pageNum } = useQueryGetter();
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState([]);
  const [totalItems, setTotalItems] = useState();
  const history = useHistory();


  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = await fetchAsync(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&page=${pageNum}&per_page=10`)
        // const data = await fetchAsync(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&page=${pageNum}&per_page=10`, {
        //   headers: {
        //     authorization: token
        //   }
        // })
        setRepos(data.items);
        setTotalItems(data.total_count);
        setLoading(false);

      } catch (err) {
        history.push(`/error?${err}`)
      }
    };
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum, searchQuery])
  return loading ? <div className="spinner" /> : (
    <>
      <Search />
      <section className="repo-list">
        {repos.map(repo =>
          <Repo id={repo.id} name={repo.name} url={repo.html_url} stars={repo.stargazers_count} updated={repo.updated_at} />)}
      </section>
      <Pagination total={totalItems} />
    </>
  );
}


export default Main;