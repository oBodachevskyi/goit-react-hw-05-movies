import { useState, useEffect } from 'react';
import * as moviesShelfAPI from '../services/API';
import MoviesList from '../components/MoviesList/MoviesList';



export default function HomePage() {
    const [movies, setMovies] = useState('');

    useEffect(() => {
        moviesShelfAPI.fetchTrendingMovies()
        .then(movies => movies.results)
        .then(setMovies);
    }, [])

    return (<>
      <MoviesList moviesArray={movies}/>
      </>)
}


