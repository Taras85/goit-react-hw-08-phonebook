import React from 'react';
import { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';
import { Button, Input } from '@chakra-ui/react';
import InputMask from 'react-input-mask';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  
   
  
  const dispatch = useDispatch();
  const items = useSelector(getContacts);

  const handleChangeName = e => {
    const { value } = e.target;
    setName(value);
  };

  const handleChangeNumber = e => {
    const { value } = e.target;
    setNumber(value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const contactsLists = [...items];
    // !== -1
    contactsLists.some(contact => name.toLowerCase() === contact.name.toLowerCase()) 
      ? alert(`${name} is already in contacts.`)
      : contactsLists.some(contact => number === contact.number)
      ? alert(`${number} is already in number.`)
      :dispatch(addContact({ name, number }));
    
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleFormSubmit}>
      <label className={css.formLabel}>
        Name
        <Input

          focusBorderColor="teal.500"
                    value={name}
          onChange={handleChangeName}
          className={css.formName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"

        />
      </label>
      <label className={css.formLabel}>
        Number
        <InputMask
   
          focusBorderColor="teal.300"
          value={number}
          onChange={handleChangeNumber}
          className={css.formNumber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter phone number"
          mask="+38(099)999-99-99" 
          maskChar="_" 
          

        />
      </label>
      <Button
        colorScheme="teal"
        variant="outline"
        className={css.formBtn}
        type="submit"
      >
        Add contact
      </Button>
    </form>
  );
};
