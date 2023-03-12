import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import MovieCard from './MovieCard';

const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);
  console.log(watchlist)

  return (
    <div className='movie-page'>
     <div className='container'>
      <div className='header'>
        <h1 className='heading'>My Watchlist</h1>
      </div>

      <div className='movie-grid'>
        {watchlist.map(movie => (
          <MovieCard movie={movie} type="watchlist"/>
        ))}
      </div>
     </div> 
    </div>
  )
}

export default Watchlist