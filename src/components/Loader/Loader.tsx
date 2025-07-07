
import { PuffLoader } from "react-spinners";
import s from "./Loader.module.css";
import { FC } from "react";

export const Loader: FC = () => {
  return (
    <div className={s.loader}>
      <PuffLoader color="#808080" size={80} />
    </div>
  );
};