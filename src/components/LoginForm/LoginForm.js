import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';
import {
  Button,
  Input,
} from '@chakra-ui/react';


export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
 
      <form  className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Email
          <Input className={css.input}
            variant="outline"
            focusBorderColor="teal.300"
            type="email"
            name="email"
          placeholder="Enter email"
          required
          />
        </label>
        
   


        <label color="teal" className={css.label}>
          Password
          <Input className={css.input}
            variant="outline"
            focusBorderColor="teal.300"
            type="password"
            name="password"
          placeholder="Enter password"
          required
          />
        </label>

        <Button colorScheme="teal" variant="outline" type="submit">
        Log In
      </Button>
        <div></div>
      </form>



  );
};
