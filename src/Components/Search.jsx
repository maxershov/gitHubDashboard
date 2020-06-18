
import React, { useRef, useState, useEffect } from 'preact/compat';
import { useHistory } from 'react-router-dom';
import useQueryGetter from './useQueryGetter';

import './Search.css';


const Search = () => {
  const { searchQuery, pageNum } = useQueryGetter();
  const [timeoutFetch, setTimeoutFetch] = useState();
  const history = useHistory();
  const [search, setSearch] = useState();

  /* Fix right value in setTimeout closure */
  const inputRef = useRef(search);
  inputRef.current = search;


  useEffect(() => {
    if (searchQuery !== "stars:%3E1") setSearch(searchQuery);
  }, []);


  function searchIfNotEmpty(value) {
    if (value) {
      history.push(`?search=${value}&page=${pageNum}`);
    } else {
      history.push(`?search=stars:%3E1&page=${pageNum}`);
    }
  }

  function handleInput(e) {
    e.preventDefault();
    setSearch(e.target.value);

    if (timeoutFetch) {
      clearTimeout(timeoutFetch);
    }
    setTimeoutFetch(setTimeout(() => {
      searchIfNotEmpty(inputRef.current);
    }, 1000));
  }


  function handleSubmit(e) {
    e.preventDefault();
    clearTimeout(timeoutFetch);
    searchIfNotEmpty(search)
  }

  return (
    <div className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <label className="hidden" htmlFor="search">Search</label>
        <input id="search" onChange={handleInput} className="search__input" type="text" placeholder="SEARCH" value={search} />
      </form>
    </div>
  );
}


export default Search;