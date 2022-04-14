import { Link } from 'react-router-dom';
import css from './MoviesList.module.css';

export default function MoviesList ({moviesArray, searchName}) {
    return (<>
       {moviesArray && (
          <ul>
            {moviesArray.map(({id, title}) => (
              <li key={id} className={css.moviesList_items}>
                <Link to={`/movies/${id}`}
                state={searchName}
                className={css.moviesList_link}>{title}</Link>
              </li>
            ))} 
          </ul>
        )} 
    </>)
}