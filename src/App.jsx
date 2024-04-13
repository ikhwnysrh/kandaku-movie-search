import { useEffect, useState } from 'react';
import './App.css';
import { getMovieList, searchMovie } from "./api"

const App = () => {
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result)
    })
  }, [])

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="Movie-wrapper" key={i}>
          <div className="Movie-title">{movie.title}</div>
          <img className="Movie-image" src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}/>
          <div className="Movie-date"><span className='release-date'>Release date: </span><br/>{movie.release_date}</div>
          <div className="Movie-rate"><span className='rating'>Rating: </span><br/>{movie.vote_average.toFixed(1)}</div>
        </div>
      )
    })
  }

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q)
      setPopularMovies(query.results)
    }
  }

  return (
      <div className="App">
        <header className="App-header">
          <h1>KANDAKU MOVIE</h1>
          <input 
            placeholder='cari apa ki...' 
            className='Movie-search'
            onChange={({ target }) => search(target.value)}
          />
          <div className="Movie-container">
            <PopularMovieList />
          </div>
        </header>
      </div>
  );
}

export default App;
