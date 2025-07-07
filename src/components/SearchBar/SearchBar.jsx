import { useState } from "react";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (query.trim() === "") {
      toast.error("Please enter a search term!");
      return;
    }

    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={s.header}>
      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.inputWrapper}>
          <button type="submit" className={s.searchButton}>
            🔍
          </button>
          <input
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={handleChange}
          />
        </div>
      </form>
      ;
    </header>
  );
};
