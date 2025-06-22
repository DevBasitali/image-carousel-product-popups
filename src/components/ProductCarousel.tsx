import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";
import LightboxGallery from "./LightboxGallery";

interface Product {
  id: number;
  name: string;
  description: string;
  mainImage: string;
  galleryImages: string[];
}

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: 1,
      name: "STEVEN AIRLINE 1",
      description: "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage:
        "1.JPG",
      galleryImages: [
        "1(3).JPG",
        "1(2).JPG",
        "1(1).JPG",
        // "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop",
      ],
    },
    {
      id: 2,
      name: "STEVEN AIRLINE 2",
      description: "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage:
        "3.JPG",
      galleryImages: [
        "3(3).JPG",
        "3(4).JPG",
        "3(5).JPG",
      ],
    },
    {
      id: 3,
      name: "STEVEN AIRLINE 3",
      description: "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage:
        "2.JPG",
      galleryImages: [
        // "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop",
        // "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop",
        // "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=400&fit=crop",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description: "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage:
        "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
        // "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      ],
    },
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentProducts = () => {
    const start = currentIndex * itemsPerPage;
    return products.slice(start, start + itemsPerPage);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-center mb-8">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 mr-4 hover:scale-105"
          disabled={currentIndex === 0}
        >
          <ArrowLeft className="h-6 w-6 text-gray-600" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1 max-w-6xl mx-4">
          {getCurrentProducts().map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 ml-4 hover:scale-105"
          disabled={currentIndex === totalPages - 1}
        >
          <ArrowRight className="h-6 w-6 text-gray-600" />
        </button>
      </div>

      <div className="flex justify-center space-x-2 mt-6">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? "bg-blue-600 scale-110"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      {selectedProduct && (
        <LightboxGallery
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default ProductCarousel;
