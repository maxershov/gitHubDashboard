import React, { useEffect, useState } from 'preact/compat';
import Repo from './Repository';
import Pagination from './Pagination';
import Search from './Search';
import useQueryGetter from './useQueryGetter'

const Main = () => {
  const { searchQuery, pageNum } = useQueryGetter();
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    console.log(`will be fetched search=${searchQuery} and page=${pageNum}`)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum, searchQuery])
  return loading ? <h1>LOADING</h1> : (
    <>
      <Search />
      <h1>Main Page</h1>
      {repos.map((repo) => {
        return <Repo id={repo.id} name={repo.name} url={repo.html_url} stars={repo.stargazers_count} updated={repo.updated_at} />
      })}
      <Pagination />
    </>
  );
}


export default Main;