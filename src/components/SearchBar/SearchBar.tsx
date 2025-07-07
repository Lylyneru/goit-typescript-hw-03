import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}


export const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (query.trim() === "") {
      toast.error("Please enter a search field!");
      return;
    }

    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={s.header}>
      <Toaster position="top-center" reverseOrder={false} />
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          type="text"
          className={s.input}
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
        <button type="submit" className={s.button}>
          Search
        </button>
      </form>
    </header>
  );
};
