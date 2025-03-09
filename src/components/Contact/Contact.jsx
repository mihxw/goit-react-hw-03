import css from './Contact.module.css';

export default function Contact({user: {id, name, number}, onDelete}) {
return (
<div className={css.contactContainer}>
<span className={css.contactNewUser}>{name}</span>
<span className={css.contactNewUser}>{number}</span>
<button className={css.contactBtn} onClick={() => onDelete(id)}>Delete</button>
</div>
);
}