
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
      name: "Modern Laptop",
      description: "High-performance laptop for professionals",
      mainImage: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop",
      galleryImages: [
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop"
      ]
    },
    {
      id: 2,
      name: "Professional Workspace",
      description: "Complete workspace setup for productivity",
      mainImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      galleryImages: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop"
      ]
    },
    {
      id: 3,
      name: "Nature Collection",
      description: "Beautiful landscapes and scenery",
      mainImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
      galleryImages: [
        "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=400&fit=crop"
      ]
    },
    {
      id: 4,
      name: "Tech Setup",
      description: "Modern technology and gadgets",
      mainImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      galleryImages: [
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop"
      ]
    }
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
