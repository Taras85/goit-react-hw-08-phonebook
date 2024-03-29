import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      {isLoggedIn ? (
        (<>
          <NavLink className={css.link} to="/contacts">
            Contacts
          </NavLink>
        
        
          <NavLink className={css.link} to="/profile">
            Profile
          </NavLink>
        </>
          )
      ) : (
        <NavLink className={css.link} to="/">
          Home
        </NavLink>
      )}
    </nav>
  );
};
