import { Route, Routes, useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import * as moviesShelfAPI from '../../services/API';
import { lazy, Suspense } from 'react';
import css from '../MovieDetailsPage/MovieDetailsPage.module.css'

const Cast = lazy(()=> import('../Cast'
 /* webpackChunkName: "cast-page" */))
 const Reviews = lazy(()=> import('../Reviews'
 /* webpackChunkName: "reviews-page" */))

export default function MovieDetailsPage (){
    const [movie, setMovie] = useState("")
    const { moviesId } = useParams();
    const location = useLocation();
    let wayBack = null;
  

     useEffect(() => {
        moviesShelfAPI.fetchMovieById(moviesId).then(setMovie);        
      }, [moviesId]); 

     location.state === null ?
        wayBack = '/' :   
        wayBack = `/movies?query=${location.state}`
 
    return (<div>
        <div>
        <Link to={wayBack} 
        state={location.state}>
        <button 
            type="button"
            className={css.backButton}>
                Go back
            </button>
        </Link>
        </div>
         {movie && (<><div className={css.movieDetails__box}>
             
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='' height='320px'/> 
        <div className={css.movieDetails__info}>
        <h2>{movie.title} {`(${movie.release_date.slice(0, 4)})`}</h2>
        <h3>Overview</h3>
            <p>{movie.overview} </p>
        <h3>Generes</h3>
            <ul>
            {movie.genres.map(genre => (<li key={genre.id}>{genre.name}</li>))}
            </ul>
        </div>
         </div>
        <div
        className={css.addInform_box}>
            <p>Additional information</p>
            <ul>
               <li>
                <NavLink 
                    to='cast'
                    className>Cast</NavLink>
               </li> 
               <li>
                <NavLink to='reviews'>Reviews</NavLink>
               </li>
            </ul>
        </div>

      <Suspense fallback={<h1>Loading</h1>}>
      <Routes>
            <Route 
                path="/cast" 
                element={<Cast 
                    movieId={movie.id}/>}> 
            </Route>  

            <Route 
                path="/reviews" 
                element={<Reviews 
                    movieId={movie.id}/>}> 
            </Route>  
       </Routes>
      </Suspense>
        </>)}       
        </div>)
}