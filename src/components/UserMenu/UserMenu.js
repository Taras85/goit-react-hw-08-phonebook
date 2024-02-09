import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../hooks';
import css from './UserMenu.module.css';
import { Button } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>
        Welcome, <span className={css.logInUser}>{user.name}</span>
      </p>

      <Button
        colorScheme="teal"
        variant="outline"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        <span >LOGOUT</span>
        
      </Button>
    </div>
  );
};
