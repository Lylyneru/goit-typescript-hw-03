import s from "./LoadMoreBtn.module.css";

import { FC, MouseEventHandler } from "react";

interface LoadMoreBtnProps {
  onLoadMore: MouseEventHandler<HTMLButtonElement>;
}

export const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onLoadMore }) => {
  return (
    <div className={s.loadMoreBtnContainer}>
      <button className={s.loadMoreBtn} onClick={onLoadMore}>
        Load more
      </button>
    </div>
  );
};