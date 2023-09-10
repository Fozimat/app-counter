import styles from "./SearchInput.module.css";

const SearchInput = ({ onSubmit, onChange, value }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        onChange={onChange}
        value={value}
        className={styles.input}
        type="text"
        placeholder="List"
      />
      <button className={styles.addButton} type="submit">
        add
      </button>
    </form>
  );
};

export default SearchInput;
