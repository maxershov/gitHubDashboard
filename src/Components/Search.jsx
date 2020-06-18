
import React, { useRef, useState, useEffect } from 'preact/compat';
import { useHistory } from 'react-router-dom';
import useQueryGetter from './useQueryGetter';
import './Search.css';


const Search = () => {
  // https://api.github.com/search/repositories?q=tetris&sort=stars
  const { searchQuery, pageNum } = useQueryGetter();
  const [timeoutFetch, setTimeoutFetch] = useState();
  const history = useHistory();
  const [search, setSearch] = useState();

  // Fix right value in setTimeout closure
  const inputRef = useRef(search);
  inputRef.current = search;

  useEffect(() => {
    if (searchQuery !== "stars:%3E1") setSearch(searchQuery);
  }, []);

  function handleInput(e) {
    e.preventDefault();
    setSearch(e.target.value);

    if (timeoutFetch) {
      clearTimeout(timeoutFetch);
    }
    setTimeoutFetch(setTimeout(() => {
      history.push(`?search=${inputRef.current}&page=${pageNum}`);
    }, 1000));
  }


  function handleSubmit(e) {
    e.preventDefault();
    clearTimeout(timeoutFetch);
    history.push(`?search=${search}&page=${pageNum}`);
  }

  return (
    <div className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <input onChange={handleInput} className="search__input" type="text" placeholder="SEARCH" value={search} />
      </form>
    </div>
  );
}


export default Search;