import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';
import { Button, Input } from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <Input className={css.input}
          variant="outline"
          focusBorderColor="teal.300"
          type="text"
          name="name"
          placeholder="Enter user name"
        ></Input >
        {/* <input
          className={css.label}
          type="text"
          name="name"
          placeholder="Enter user name"
        /> */}
      </label>
      <label className={css.label}>
        Email
        <Input className={css.input}
          variant="outline"
          focusBorderColor="teal.300"
          type="email"
          name="email"
          placeholder="Enter email"
        ></Input>
        {/* <input
          className={css.label}
          type="email"
          name="email"
          placeholder="Enter email"
        /> */}
      </label>
      <label className={css.label}>
        Password
        <Input className={css.input}
          variant="outline"
          focusBorderColor="teal.300"
          type="password"
          name="password"
          placeholder="Enter password"
        ></Input>
        {/* <input
          className={css.label}
          type="password"
          name="password"
          placeholder="Enter password"
        /> */}
      </label>
      <Button colorScheme="teal" variant="outline" type="submit">
        Register
      </Button>
      {/* <button className={css.formBtn} type="submit">
        Register
      </button> */}
    </form>
  );
};
