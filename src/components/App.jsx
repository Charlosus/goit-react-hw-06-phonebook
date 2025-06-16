import { useDispatch } from 'react-redux';
import { Section } from './Section';
import { PhonebookInput } from './PhonebookInput';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList';
import { addContact, deleteContact } from '../redux/contactsSlice';

export const App = () => {
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const input = evt.target;
    dispatch(addContact(input.elements.text.value))
    input.reset();
  };
  const handleDelete = () => dispatch(deleteContact(contact.id));

  const handleFilterChange = evt => {
    
  };

  // const visibleContacts = state.contacts.filter(contact =>
  //   contact.name.toLowerCase().includes((state.filter || '').toLowerCase())
  // );
  return (
    <div>
      <Section title="Phonebook">
        <PhonebookInput
          name={state.name}
          number={state.number}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </Section>
      <Section title="Contacts">
        <ContactList
          filter={state.filter}
          onFilterChange={handleFilterChange}
          // contacts={visibleContacts}
          onDelete={handleDelete}
        />
      </Section>
    </div>
  );
};
