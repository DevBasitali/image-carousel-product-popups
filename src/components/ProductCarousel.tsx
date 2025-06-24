import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import LightboxGallery from "./LightboxGallery";
import  {AllProducts}  from "./data/products";

interface Product {
  id: number;
  name: string;
  description: string;
  mainImage: string;
  galleryImages: string[];
}

interface CarouselData {
  id: string;
  title: string;
  AllProducts: Product[];
}

const ProductCarousel = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [carouselIndexes, setCarouselIndexes] = useState<{ [key: string]: number }>({});
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  

  // Responsive values
  const productsPerCarousel = isMobile ? 4 : 16; // 4 products per carousel on mobile, 16 on desktop
  const carouselsPerPage = isMobile ? 1 : 3; // 1 carousel per page on mobile, 3 on desktop
  const productsPerPage = productsPerCarousel * carouselsPerPage;

  // Calculate total pages needed
  const totalPages = Math.ceil(AllProducts.length / productsPerPage);

  // Get products for current page
  const getCurrentPageProducts = () => {
    const start = pageIndex * productsPerPage;
    const end = start + productsPerPage;
    return AllProducts.slice(start, end);
  };

  // Split current page products into carousels
  const getCarouselsForCurrentPage = (): CarouselData[] => {
    const currentPageProducts = getCurrentPageProducts();
    const carousels: CarouselData[] = [];
    
    for (let i = 0; i < carouselsPerPage; i++) {
      const start = i * productsPerCarousel;
      const products = currentPageProducts.slice(start, start + productsPerCarousel);
      
      if (products.length > 0) {
        carousels.push({
          id: `page-${pageIndex}-carousel-${i}`,
          title: `Collection ${pageIndex * carouselsPerPage + i + 1}`,
          AllProducts: products
        });
      }
    }
    
    return carousels;
  };

  const getCarouselIndex = (carouselId: string) => {
    return carouselIndexes[carouselId] || 0;
  };

  const setCarouselIndex = (carouselId: string, index: number) => {
    setCarouselIndexes(prev => ({
      ...prev,
      [carouselId]: index
    }));
  };

  const nextCarouselSlide = (carouselId: string, products: Product[]) => {
    const currentIndex = getCarouselIndex(carouselId);
    const slideSize = isMobile ? 2 : 16; // Show 2 at a time on mobile
    if (currentIndex < products.length - slideSize) {
      setCarouselIndex(carouselId, currentIndex + slideSize);
    }
  };

  const prevCarouselSlide = (carouselId: string) => {
    const currentIndex = getCarouselIndex(carouselId);
    const slideSize = isMobile ? 2 : 16;
    if (currentIndex > 0) {
      setCarouselIndex(carouselId, Math.max(0, currentIndex - slideSize));
    }
  };

  const nextPage = () => {
    if (pageIndex < totalPages - 1) {
      setPageIndex(pageIndex + 1);
    }
  };

  const prevPage = () => {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
    }
  };

  const carousels = getCarouselsForCurrentPage();

  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
      {/* Page Navigation */}
      

      {/* Carousels */}
      <div className="space-y-8 sm:space-y-12">
        {carousels.map((carousel) => {
          const currentIndex = getCarouselIndex(carousel.id);
          const displaySize = isMobile ? 4 : 16; // Show 2 products on mobile, 16 on desktop
          const displayProducts = carousel.AllProducts.slice(currentIndex, currentIndex + displaySize);

          return (
            <div key={carousel.id} className="relative bg-gray-50 p-4 sm:p-6 rounded-lg">
              {/* Removed the title here */}
              
              <div className="relative">
                {/* Carousel Navigation - Only show if there are more products than display size */}
                {carousel.AllProducts.length > displaySize && (
                  <>
                    <button
                      onClick={() => prevCarouselSlide(carousel.id)}
                      disabled={currentIndex === 0}
                      className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-10 p-1.5 sm:p-2 rounded-full bg-white shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>

                    <button
                      onClick={() => nextCarouselSlide(carousel.id, carousel.AllProducts)}
                      disabled={currentIndex >= carousel.AllProducts.length - displaySize}
                      className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-10 p-1.5 sm:p-2 rounded-full bg-white shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                  </>
                )}

                {/* Product Grid - Responsive */}
                <div className={`grid gap-3 sm:gap-4 ${
                  isMobile 
                    ? 'grid-cols-2 px-0' 
                    : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 px-12'
                }`}>
                  {displayProducts.map((product, index) => (
                    <ProductCard
                      key={`${carousel.id}-${product.id}-${index}`}
                      product={product}
                      onClick={() => setSelectedProduct(product)}
                    />
                  ))}
                </div>
              </div>

              {/* Carousel Dots */}
              {carousel.AllProducts.length > displaySize && (
                <div className="flex justify-center space-x-1.5 sm:space-x-2 mt-4">
                  {Array.from({ length: Math.ceil(carousel.AllProducts.length / displaySize) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCarouselIndex(carousel.id, index * displaySize)}
                      className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${
                        Math.floor(currentIndex / displaySize) === index
                          ? "bg-blue-600 w-4 sm:w-6"
                          : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between mt-6 sm:mb-8">
        <button
          onClick={prevPage}
          disabled={pageIndex === 0}
          className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors text-sm sm:text-base"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="hidden sm:inline">Previous Page</span>
          <span className="sm:hidden">Prev</span>
        </button>
        
        <div className="text-sm text-white sm:text-lg font-medium">
          Page {pageIndex + 1} of {totalPages}
        </div>
        
        <button
          onClick={nextPage}
          disabled={pageIndex === totalPages - 1}
          className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors text-sm sm:text-base"
        >
          <span className="hidden sm:inline">Next Page</span>
          <span className="sm:hidden">Next</span>
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>

      {/* Page Dots */}
      <div className="flex justify-center space-x-1.5 sm:space-x-2 mt-6 sm:mt-8">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setPageIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
              index === pageIndex
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