import { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import { SearchBar } from "./components/SearchBar/SearchBar.jsx";
import { ImageGallery } from "./components/ImageGallery/ImageGallery.jsx";
import { Loader } from "./components/Loader/Loader.jsx";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage.jsx";
import { LoadMoreBtn } from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import { ImageModal } from "./components/ImageModal/ImageModal.jsx";
import { fetchImages } from "./services/api.js";

export const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(12);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    const loadImages = async () => {
      setLoading(true);
      try {
        const data = await fetchImages(query, page, perPage);
        setImages((prevImages) => [...prevImages, ...data.results]);

        setTimeout(() => {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }, 200);
      } catch {
        toast.error("Something went wrong!");
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadImages(); // Викликаємо функцію всередині useEffect
  }, [query, page, perPage]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setPerPage(12);
    setError(null);
  };

  return (
    <div>
      <Toaster position="top-right" />
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={setSelectedImage} />
      {loading && <Loader />}
      {images.length > 0 && <LoadMoreBtn onClick={() => setPage(page + 1)} />}
      <ImageModal
        image={selectedImage}
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};
export default App;
