import s from "./ErrorMessage.module.css";
import { RiErrorWarningLine } from "react-icons/ri";

interface ErrorMessageProps {
  message?: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className={s.errorContainer}>
      <RiErrorWarningLine size={24} />
      <p>{message || "Something went wrong. Please try again!"}</p>
    </div>
  );
};