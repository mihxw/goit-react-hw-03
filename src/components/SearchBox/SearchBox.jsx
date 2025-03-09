import css from './SearchBox.module.css';
export default function SearchBox({ value, onValue }) {
  return <input className={css.inp} type='text' value={value} onChange={evt => onValue(evt.target.value)} />;
}