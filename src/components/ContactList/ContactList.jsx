import css from './ContactList.module.css';
import Contact from '../Contact/Contact.jsx';

export default function ContactList({ contactList, deleteContact }) {
  return (
    <ul className={css.list}>
      {contactList.map(contact => (
        <li key={contact.id}>
          <Contact info={contact} deleteContact={deleteContact} />
        </li>
      ))}
    </ul>
  );
}