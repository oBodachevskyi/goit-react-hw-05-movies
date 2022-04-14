import { useState, useEffect } from 'react';
import * as moviesShelfAPI from '../services/API';

export default function Reviews ({ movieId }) {
    const [movieReviews, setMovieReviews] = useState(null);


   useEffect(()=>{        
        moviesShelfAPI.fetchMovieReviewsById(movieId)
        .then((movieReview) => {
            if (movieReview.results.length > 0) {
                return (setMovieReviews(movieReview.results))
            }            
        }) 
     }, [movieId]);     


    return (<>    
        {movieReviews ?        
        movieReviews.map(review => (
            <li key={review.id}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
            </li>)):
        <p>We don't have any reviews for this movie</p>} 
    </>)}