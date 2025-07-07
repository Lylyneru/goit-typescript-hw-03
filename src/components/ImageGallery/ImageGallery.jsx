import s from "./ImageGallery.module.css";
import { ImageCard } from "../ImageCard/ImageCard.jsx";

export const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div>
      <ul className={s.gallery}>
        {images.map((image) => (
          <li key={image.id}>
            <ImageCard image={image} onClick={() => onImageClick(image)} />
          </li>
        ))}
      </ul>
    </div>
  );
};
