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
      <Heading as="h2" size="xl" color='teal'>
        YourPhonebook
      </Heading>
      <Navigation />
      
   

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
