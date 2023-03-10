import { useState } from 'react';
import { ResultCard } from './ResultCard';

const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = e => {
    e.preventDefault();
    setQuery(e.target.value);

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=f8d7ef85079c340b3bc698c803d1d102&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(!data.errors) {
        setResults(data.results);
      } else {
        setResults([]);
      }
    })
  }; 
  return (
    <div className='add-page'>
      <div className='container'>
        <div className='add-content'>
          <div className='input-wrapper'>
            <input 
                value={query}
                onChange={handleChange} 
                type="text" 
                placeholder='Search for a Movie' />
          </div>

          {results.length > 0 && (
            <ul className='results'>
              {results.map(movie => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default Add