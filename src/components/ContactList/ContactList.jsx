import { useDispatch, useSelector } from 'react-redux';
import { delContact } from 'redux/contacts/operations';
import { getContacts, getFilter } from 'redux/contacts/selectors';
// import css from './ContactList.module.css';
import { Button, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

const getVisibleContacts = (contacts, filter) => {
  if (!filter) {
    return contacts;
  } else {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  const dispatch = useDispatch();
  const handleDelete = id => dispatch(delContact(id));

  return (
    <Table variant="simple" maxWidth='600'>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Number</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {visibleContacts.map((contact, id) => (
          <Tr key={id}>
            <Td>{contact.name}</Td>
            <Td>{contact.number} </Td>
            <Td>
              {' '}
              {/* <button
                type="button"
                className={css.contactListItemBtn}
                onClick={() => handleDelete(contact.id)}
              >
                Delete
              </button> */}
              <Button
                colorScheme="teal"
                variant="outline"
                type="button"
                onClick={() => handleDelete(contact.id)}
              >
                Delete
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

// <div className={css.wraperContactList}>
//   <ul className={css.contactList}>
//     {visibleContacts.map((contact, id) => (
//       <li key={id} className={css.contactListItem}>
//         {contact.name}: {contact.number}
// <button
//   type="button"
//   className={css.contactListItemBtn}
//   onClick={() => handleDelete(contact.id)}
// >
//   Delete
// </button>
//       </li>
//     ))}
//   </ul>
// </div>
