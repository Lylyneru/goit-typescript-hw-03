import { Image } from "../App/App";
import s from "./ImageCard.module.css";

interface ImageCardProps {
  image: Image;
}

export const ImageCard = ({ image }: ImageCardProps) => {
  return (
    <div className={s.card}>
      <img src={image.urls.small} alt={image.name || "Image"} />
    </div>
  );
};

export default ImageCard;