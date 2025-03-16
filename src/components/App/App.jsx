import styles from './App.module.css'; // Імпорт модульних стилів
import { useState, useEffect } from 'react';
import ContactList from "../ContactList/ContactList.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactForm from "../ContactForm/ContactForm.jsx";

const initialContacts = [
  { id: 1, name: "Alice Johnson", number: "123-456-7890" },
  { id: 2, name: "Bob Smith", number: "987-654-3210" },
];

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem('saved-contacts');
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('saved-contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = (contactId) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
  };

  const addContact = (newContact) => {
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={filter} onValue={setFilter} />
      <ContactList contactList={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;