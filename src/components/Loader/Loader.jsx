import { InfinitySpin } from "react-loader-spinner";
import s from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={s.loader}>
      <InfinitySpin width="200" color="#4fa94d" />
    </div>
  );
};
