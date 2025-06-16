import { Section } from './Section';
import { PhonebookInput } from './PhonebookInput';
import { ContactList } from './ContactList';

export const App = () => {
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
