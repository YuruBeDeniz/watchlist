import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const ResultCard = ({ movie }) => {
  const { addMovieToWatchlist, addMovieToWatched, watchlist, watched } = useContext(GlobalContext);
  
  let storedMovie = watchlist.find(object => object.id === movie.id);
  let storedMovieWatched = watched.find(object => object.id === movie.id)

  const watchlistDisabled = storedMovie ? true : storedMovieWatched ? true : false;
  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className='result-card'>
      <div className='poster-wrapper'>
        {movie.poster_path
           ? <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`}/>
           : <div className='filler-poster'></div>
        }
      </div>

      <div className='info'>
        <div className='header'>
          <h3 className='title'>{movie.title}</h3>
          <h4 className='release-date'>
            {movie.release_date 
              ? movie.release_date.slice(0,4) 
              : "-"}
          </h4>
        </div>

        <div className='controls'>
          <button 
            onClick= {() => addMovieToWatchlist(movie)} 
            disabled={watchlistDisabled}
            className='btn'
          >
            Add to Watchlist
          </button>

          <button 
            onClick= {() => addMovieToWatched(movie)} 
            disabled={watchedDisabled}
            className='btn'
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  )
}
