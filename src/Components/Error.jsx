
import React from 'preact/compat';
import './Error.css';
import { useLocation, Link } from 'react-router-dom';


const Error = () => {
  const location = useLocation().search.substr(1);
  
  return (
    <section className="error">
      <p className="error__text">Oops!</p>
      <p>Something went wrong</p>
      <p className="error-msg">{decodeURI(location)}</p>
      <Link to="/main" className="link">Back to Main Page</Link>
    </section>
  );
}


export default Error;