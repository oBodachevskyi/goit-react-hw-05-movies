import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => (
<div className={css.header_box}>
    <nav>
        <NavLink 
            to="/"
            className={({ isActive }) =>(isActive ? css.activeLink : css.link)}>
            Home
        </NavLink>

        <NavLink           
            to="/movies"
            className={({ isActive }) =>(isActive ? css.activeLink : css.link)}>
            Movies
        </NavLink>
    </nav>
</div>
)

export default Navigation;