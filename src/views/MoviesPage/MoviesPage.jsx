import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import * as moviesShelfAPI from '../../services/API';
import MoviesList from '../../components/MoviesList/MoviesList';
import css from '../MoviesPage/MoviesPage.module.css'

export default function MoviesPage() {
    const [searchName, setSearchName] = useState('');
    const [moviesSearch, setMoviesSearch] = useState('');
    const history = createBrowserHistory();
    const location = useLocation();
    

    const handleInputValues = (e) => {
        setSearchName(e.currentTarget.value)
    }

    const handleSubmitMovies = (e) => {
        e.preventDefault()
        if (searchName !== "") {
            moviesShelfAPI.fetchMoviesSearch(searchName)
            .then(movies => movies.results)
            .then(setMoviesSearch); 
            history.push(`?query=${searchName}`)            
    }
}

    if(location.state !== null && moviesSearch === ''){
        console.log(location.state)
        moviesShelfAPI.fetchMoviesSearch(location.state)
            .then(movies => movies.results)
            .then(setMoviesSearch)}

    if(location.state !== null && searchName === '') {
        return setSearchName(location.state)
    }    

    return (
        <div>
           <form
           onSubmit={handleSubmitMovies}>
           <label>
                <input 
                    className={css.moviesPage__input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies"
                    value={searchName}
                    onChange={handleInputValues}>
                </input>
                <button 
                type="submit"
                className={css.moviesPage__button}>
                    Search
                </button>
            </label>
           </form>
        <div>
        <MoviesList 
        moviesArray={moviesSearch}
        searchName={searchName}/>
        </div>
        </div>)}