
import React, { useRef, useState } from 'preact/compat';
import { useHistory } from 'react-router-dom';
import useQueryGetter from './useQueryGetter';
import './Search.css';


const Search = () => {
  // https://api.github.com/search/repositories?q=tetris&sort=stars
  const { pageNum } = useQueryGetter();
  const [timeoutFetch, setTimeoutFetch] = useState();
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState();

  // Fix right value in setTimeout closure
  const inputRef = useRef(searchQuery);
  inputRef.current = searchQuery;


  function handleInput(e) {
    e.preventDefault();
    setSearchQuery(e.target.value);

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
    history.push(`?search=${searchQuery}&page=${pageNum}`);
  }

  return (
    <div className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <input onChange={handleInput} className="search__input" type="text" placeholder="SEARCH" value={searchQuery} />
      </form>
    </div>
  );
}


export default Search;