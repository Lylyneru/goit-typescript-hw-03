import Modal from "react-modal";
import s from "./ImageModal.module.css";
import { Image } from "../App/App";

interface ImageModalProps {
  isOpen: boolean;
  closeModal: () => void;
  image: Image | null;
}

export const ImageModal: React.FC<ImageModalProps> = ({ 
  image, 
  isOpen, 
  closeModal }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className={s.modalContent}
      overlayClassName={s.modalOverlay}
      contentLabel="Image Modal"
      ariaHideApp={false}
    >
      <div className={s.modalBody}>
        <img
          src={image.urls.regular}
          alt={image.description || "Image"}
          className={s.modalImage}
        />
        <div className={s.info}>
          <p>
            <strong>Author:</strong> {image.user.name}
          </p>
          <p>
            <strong>Likes:</strong> {image.likes || 0}
          </p>
          <p>
            <strong>Description:</strong>{" "}
            {image.description || "No description available"}
          </p>
        </div>
      </div>
    </Modal>
  );
};





