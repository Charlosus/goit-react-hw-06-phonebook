import { useDispatch } from 'react-redux';
import { Section } from './Section';
import { PhonebookInput } from './PhonebookInput';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList';
import { addContact, deleteContact } from '../redux/contactsSlice';

export const App = () => {
  const dispatch = useDispatch();


  const handleDelete = () => dispatch(deleteContact(contact.id));

  const handleFilterChange = evt => {};

  // const visibleContacts = state.contacts.filter(contact =>
  //   contact.name.toLowerCase().includes((state.filter || '').toLowerCase())
  // );
  return (
    <div>
      <Section title="Phonebook">
        <PhonebookInput />
      </Section>
      <Section title="Contacts">
        <ContactList />
      </Section>
    </div>
  );
};
