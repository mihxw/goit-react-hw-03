import css from "./SearchBox.module.css";

export default function SearchBox({ value, onSearch }) {
  return (
    <div>
      <p className={css.searchBox}>Find contacts by name</p>
      <input
        className={css.searchInput}
        type="text"
        name="name"
        autoComplete="on"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}