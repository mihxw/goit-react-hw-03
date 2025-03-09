import { useEffect, useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

const STORAGE_KEY = "contacts";
const DEFAULT_CONTACTS = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem(STORAGE_KEY);
    if(savedContacts !== null) {
      const parseContacts = JSON.parse(savedContacts);
      if(parseContacts.length > 0) {
        return parseContacts;
      }
    }
    return DEFAULT_CONTACTS;
  });

  const [searchBox, setSearchBox] = useState("");
  const handleChange = (newValue) => setSearchBox(newValue);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
   }, [contacts]); 

  const addContacts = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);  
    };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => 
     prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const searchUser = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchBox.toLowerCase())
  );
  

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContacts} />
      <SearchBox value={searchBox} onSearch={handleChange} />
      <ContactList contacts={searchUser} onDelete={deleteContact} />
    </div>
  );
}

export default App;