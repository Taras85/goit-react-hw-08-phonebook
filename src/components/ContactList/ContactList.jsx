import { useDispatch, useSelector } from 'react-redux';
import { delContact } from 'redux/contacts/operations';
import { getContacts, getFilter } from 'redux/contacts/selectors';
// import css from './ContactList.module.css';
import { Button, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
// import { useEffect } from 'react';

// const getVisibleContacts = (contacts, filter) => {
//   if (!filter) {
//   } else {
//     return contacts.filter(contact => {
//       return contact.name.toLowerCase().includes(filter.toLowerCase());
//     });
//   }
// };

const getVisibleContacts = (contacts, filter) => {
  let filteredContacts = contacts.slice();
  if (filter) {
    filteredContacts = filteredContacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }
  filteredContacts.sort((a, b) => a.name.localeCompare(b.name));

  return filteredContacts;
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const visibleContacts = getVisibleContacts(contacts, filter);

  // useEffect(() => {
  //   visibleContacts.sort((a, b) => a.name.localeCompare(b.name));
  // }, [visibleContacts]);

  const dispatch = useDispatch();
  const handleDelete = id => dispatch(delContact(id));

  return (
    <Table
      borderWidth="1px"
      borderColor="gray.200"
      boxShadow="md"
      p="6"
      rounded="md"
      bg="white"
    >
      <Thead>
        <Tr>
          <Th color="teal.500">Name</Th>
          <Th color="teal.500">Number</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {/* , id */}
        {visibleContacts.map(({ id, name, number }) => (
          <Tr key={id}>
            <Td>{name}</Td>
            <Td>{number} </Td>
            <Td>
              <Button
                colorScheme="teal"
                variant="outline"
                type="button"
                onClick={() => handleDelete(id)}
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
