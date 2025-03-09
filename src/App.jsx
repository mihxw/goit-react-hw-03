import css from './App.css';
import { useState, useEffect } from 'react';
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem('saved-contacts');
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return contactList;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('saved-contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  const addContact = newValues => {
    setContacts(prevContacts => {
      return [...prevContacts, newValues];
    });
  };

  const searchContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className={css.div}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={filter} onValue={setFilter} />
      <ContactList contactList={searchContacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;