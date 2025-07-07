import s from "./ErrorMessage.module.css";

export const ErrorMessage = ({ message }) => {
  return <p className={s.error}>{message}</p>;
};
