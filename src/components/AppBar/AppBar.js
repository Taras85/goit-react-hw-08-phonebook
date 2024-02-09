import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../hooks';
import css from './AppBar.module.css';
import { Heading } from '@chakra-ui/react';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      <Heading as="h2" size="xl" color='teal'>
        Phonebook
      </Heading>
      {/* <h5>Phonebook</h5> */}

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
