import React from 'preact/compat';

const Search = () => {
    // https://api.github.com/search/repositories?q=tetris&sort=stars

    // onClick push to history
    return (
      <>
        <form>
          <input type="text" />
          <button type="submit">SEARCH</button>
        </form>
        <h1>SEARCH</h1>
      </>
    );
}


export default Search;