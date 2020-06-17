import React, {createRef} from 'preact/compat';
import {useHistory} from 'react-router-dom';
import useQueryGetter from './useQueryGetter';

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
      <>
        <form onSubmit={handleSubmit}>
          <input type="text" ref={inputRef} />
          <button type="submit">SEARCH</button>
        </form>
      </>
    );
}


export default Search;