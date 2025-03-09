import css from './Contact.module.css';
export default function Contact({ info, deleteContact }) {
  return (
    <div className={css.wrap}>
      <ul className={css.list}>
        <li>{info.name}</li>
        <li>{info.number}</li>
      </ul>
      <button className={css.btn} onClick={() => deleteContact(info.id)}>
        Delete
      </button>
    </div>
  );
}