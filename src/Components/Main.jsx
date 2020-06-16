import React, { useEffect, useState } from 'preact/compat';

const Main = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch(`https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&page=1&per_page=5`)
    fetch(`http://localhost:6701/getData`)
      .then(res => res.json())
      .then(
        data => {
          console.log(data);
          setLoading(false);
        },
        err => {
          console.log(err)
          setLoading(false);
        }
      );
  }, [])
  return loading ? <h1>LOADING</h1> : (
    <>
      <h1>Main Page</h1>
    </>
  );
}


export default Main;