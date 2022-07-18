
import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from "./search.svg"
import MovieCard from './MovieCard';

const API_KEY = "http://www.omdbapi.com/?i=tt3896198&apikey=d15297a1"

function App() {

  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')



  const searchMovies = async (title) => {

    await fetch(`${API_KEY}&s=${title}`)
      .then((response) => response.json())
      .then((data) => setMovies(data.Search));
  }

  console.log(movies);

  useEffect(() => {

    searchMovies("Lethal Weapon");

  }, []);



  return (
    <div className="app">
      <h1>Moviesium</h1>
      <div className="search">
        <input type="text"
          placeholder='Enter movie name'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(search)}
        />
      </div>
      {
        movies.length > 0 ? (
          <div className="container">
            {
              movies?.map((movie) => (

                <MovieCard movie={movie} />

              ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies found</h2>
          </div>
        )
      }
    </div>

  );
}

export default App;
