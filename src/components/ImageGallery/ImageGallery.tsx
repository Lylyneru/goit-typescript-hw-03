import s from "./ImageGallery.module.css";
import { ImageCard } from "../ImageCard/ImageCard";
import { Image } from "../App/App";

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
  return (
    <ul className={s.imageGallery}>
      {images.map((image) => (
        <li key={image.id} onClick={() => onImageClick(image)}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

