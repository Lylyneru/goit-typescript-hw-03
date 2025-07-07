import Modal from "react-modal";
import s from "./ImageModal.module.css";

Modal.setAppElement("#root");

export const ImageModal = ({ image, isOpen, onClose }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <img
        className={s.modalImg}
        src={image.urls.regular}
        alt={image.alt_description}
      />
    </Modal>
  );
};
