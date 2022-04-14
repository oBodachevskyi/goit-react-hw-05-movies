import { useState, useEffect } from 'react';
import * as moviesShelfAPI from '../services/API';
import notImage from '../components/noImage.png'; 
 
 export default function Cast({ movieId }) {
     const [movieCasts, setMovieCasts] = useState('')

    useEffect(()=>{        
        moviesShelfAPI.fetchMovieCastById(movieId)
        .then(movieCast => movieCast.cast)
        .then(setMovieCasts);        
      }, [movieId]); 

     return (<>
     <ul>
         {movieCasts && movieCasts.map((cast) => {
             return ((
                <li key={cast.id}>
                {cast.profile_path ? 
                <img src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} alt='' height='160px'/> :
                <img src={notImage} alt='' height='160px' width='107px'/>}
               {cast.name}
               </li>
            ))})}
     </ul>
     </>)}