import { useState } from "react";
import { searchImages } from "..//..//services/api";
import {SearchBar} from "../SearchBar/SearchBar";
import {ImageGallery} from "../ImageGallery/ImageGallery";
import {Loader} from "../Loader/Loader";
import {ErrorMessage} from "../ErrorMessage/ErrorMessage";
import {LoadMoreBtn} from "../LoadMoreBtn/LoadMoreBtn";
import {ImageModal} from "../ImageModal/ImageModal";

export interface Image {
  id: string;
  name: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  user: {
    name: string;
    portfolio_url?: string;
  };
  description?: string;
  likes?: number;
}

export interface ApiResponse {
  results: Image[];
  total_pages: number;
}

const App = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [perPage] = useState<number>(10);
  const [query, setQuery] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleSearch = async (query: string): Promise<void> => {
    setLoading(true);
    setError(null);
    setImages([]);
    setPage(1);
    setQuery(query);

    try {
      const data = await searchImages(query);
      console.log("Fetched data:", data);

      if (data.results.length === 0) {
        setError("No images found. Try another search term.");
      } else {
        setImages(data.results);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
      setError("Failed to fetch images. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  const loadMoreImages = async (): Promise<void> => {
    setLoading(true);
    try {
      const data: ApiResponse = await searchImages(query, page + 1, perPage);
      setImages((prevImages) => [...prevImages, ...data.results]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching more images:", error);
      setError("Failed to fetch more images. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  const openModal = (image: Image): void => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      {!error && images.length > 0 && (
        <ImageGallery images={images} onImageClick={openModal} />
      )}
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onLoadMore={loadMoreImages} />
      )}
      <ImageModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        image={selectedImage}
      />
    </div>
  );
};

export default App;