import React, {createRef} from 'preact/compat';
import {useHistory} from 'react-router-dom';
import useQueryGetter from './useQueryGetter';

import './Search.css';


const Search = () => {
    // https://api.github.com/search/repositories?q=tetris&sort=stars
    const { pageNum } = useQueryGetter();
    const history = useHistory();
    const inputRef = createRef();
    
    function handleSubmit(e){
      e.preventDefault();
      history.push(`?search=${inputRef.current.value}&page=${pageNum}`);
    }
    return (
      <div className="search">
        <form className="search__form" onSubmit={handleSubmit}>
          <input className="search__input" type="text" placeholder="Repository name" ref={inputRef} />
          <button className="search__btn" type="submit">SEARCH</button>
        </form>
      </div>
    );
}


export default Search;