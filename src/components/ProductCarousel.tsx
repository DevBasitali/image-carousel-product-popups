// import { useState } from "react";
// import { ArrowLeft, ArrowRight } from "lucide-react";
// import ProductCard from "./ProductCard";
// import LightboxGallery from "./LightboxGallery";

// interface Product {
//   id: number;
//   name: string;
//   description: string;
//   mainImage: string;
//   galleryImages: string[];
// }

// const ProductCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

//   const products: Product[] = [
//     {
//       id: 1,
//       name: "STEVEN AIRLINE 1",
//       description:
//         "A legendary wide-body aircraft known as the “Queen of the Skies”",
//       mainImage: "1.JPG",
//       galleryImages: [
//         "1(3).JPG",
//         "1(2).JPG",
//         "1(1).JPG",
//       ],
//     },
//     {
//       id: 2,
//       name: "STEVEN AIRLINE 2",
//       description:
//         "A legendary wide-body aircraft known as the “Queen of the Skies”",
//       mainImage: "3.JPG",
//       galleryImages: ["3(3).JPG", "3(4).JPG", "3(5).JPG"],
//     },
//     {
//       id: 3,
//       name: "STEVEN AIRLINE 3",
//       description:
//         "A legendary wide-body aircraft known as the “Queen of the Skies”",
//       mainImage: "2.JPG",
//       galleryImages: [
//         "2.JPG",
//       ],
//     },
//     {
//       id: 4,
//       name: "STEVEN AIRLINE 3",
//       description:
//         "A legendary wide-body aircraft known as the “Queen of the Skies”",
//       mainImage: "8.JPG",
//       galleryImages: [
//         "8(1).JPG",
//         "8(2).JPG",
//       ],
//     },
//     {
//       id: 4,
//       name: "STEVEN AIRLINE 3",
//       description:
//         "A legendary wide-body aircraft known as the “Queen of the Skies”",
//       mainImage: "8.JPG",
//       galleryImages: [
//         "8(1).JPG",
//         "8(2).JPG",
//       ],
//     },
//     {
//       id: 4,
//       name: "STEVEN AIRLINE 3",
//       description:
//         "A legendary wide-body aircraft known as the “Queen of the Skies”",
//       mainImage: "8.JPG",
//       galleryImages: [
//         "8(1).JPG",
//         "8(2).JPG",
//       ],
//     },
//     {
//       id: 4,
//       name: "STEVEN AIRLINE 3",
//       description:
//         "A legendary wide-body aircraft known as the “Queen of the Skies”",
//       mainImage: "8.JPG",
//       galleryImages: [
//         "8(1).JPG",
//         "8(2).JPG",
//       ],
//     },
//     {
//       id: 4,
//       name: "STEVEN AIRLINE 3",
//       description:
//         "A legendary wide-body aircraft known as the “Queen of the Skies”",
//       mainImage: "8.JPG",
//       galleryImages: [
//         "8(1).JPG",
//         "8(2).JPG",
//       ],
//     },
//      {
//       id: 1,
//       name: "STEVEN AIRLINE 1",
//       description:
//         "A legendary wide-body aircraft known as the “Queen of the Skies”",
//       mainImage: "1.JPG",
//       galleryImages: [
//         "1(3).JPG",
//         "1(2).JPG",
//         "1(1).JPG",
//       ],
//     },
//     {
//       id: 2,
//       name: "STEVEN AIRLINE 2",
//       description:
//         "A legendary wide-body aircraft known as the “Queen of the Skies”",
//       mainImage: "3.JPG",
//       galleryImages: ["3(3).JPG", "3(4).JPG", "3(5).JPG"],
//     },
//     {
//       id: 3,
//       name: "STEVEN AIRLINE 3",
//       description:
//         "A legendary wide-body aircraft known as the “Queen of the Skies”",
//       mainImage: "2.JPG",
//       galleryImages: [
//         "2.JPG",
//       ],
//     },
//     {
//       id: 4,
//       name: "STEVEN AIRLINE 3",
//       description:
//         "A legendary wide-body aircraft known as the “Queen of the Skies”",
//       mainImage: "8.JPG",
//       galleryImages: [
//         "8(1).JPG",
//         "8(2).JPG",
//       ],
//     },
//     {
//       id: 4,
//       name: "STEVEN AIRLINE 3",
//       description:
//         "A legendary wide-body aircraft known as the “Queen of the Skies”",
//       mainImage: "8.JPG",
//       galleryImages: [
//         "8(1).JPG",
//         "8(2).JPG",
//       ],
//     },
//     {
//       id: 4,
//       name: "STEVEN AIRLINE 3",
//       description:
//         "A legendary wide-body aircraft known as the “Queen of the Skies”",
//       mainImage: "8.JPG",
//       galleryImages: [
//         "8(1).JPG",
//         "8(2).JPG",
//       ],
//     },
//     {
//       id: 4,
//       name: "STEVEN AIRLINE 3",
//       description:
//         "A legendary wide-body aircraft known as the “Queen of the Skies”",
//       mainImage: "8.JPG",
//       galleryImages: [
//         "8(1).JPG",
//         "8(2).JPG",
//       ],
//     },
//     {
//       id: 4,
//       name: "STEVEN AIRLINE 3",
//       description:
//         "A legendary wide-body aircraft known as the “Queen of the Skies”",
//       mainImage: "8.JPG",
//       galleryImages: [
//         "8(1).JPG",
//         "8(2).JPG",
//       ],
//     },
//   ];

//   const itemsPerPage = 48; 
//   const productsPerRow = 4;

//   const totalPages = Math.ceil(products.length / itemsPerPage);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % totalPages);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
//   };

//   const getCurrentProducts = () => {
//     const start = currentIndex * itemsPerPage;
//     return products.slice(start, start + itemsPerPage);
//   };

//   return (
//     <div className="relative">
//       <div className="flex items-center justify-center mb-8">
//         <button
//           onClick={prevSlide}
//           className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 mr-4 hover:scale-105"
//           disabled={currentIndex === 0}
//         >
//           <ArrowLeft className="h-6 w-6 text-gray-600" />
//         </button>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 flex-1 max-w-6xl mx-4">
//           {getCurrentProducts().map((product) => (
//             <ProductCard
//               key={product.id}
//               product={product}
//               onClick={() => setSelectedProduct(product)}
//             />
//           ))}
//         </div>

//         <button
//           onClick={nextSlide}
//           className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 ml-4 hover:scale-105"
//           disabled={currentIndex === totalPages - 1}
//         >
//           <ArrowRight className="h-6 w-6 text-gray-600" />
//         </button>
//       </div>

//       <div className="flex justify-center space-x-2 mt-6">
//         {Array.from({ length: totalPages }).map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-3 h-3 rounded-full transition-all duration-200 ${
//               index === currentIndex
//                 ? "bg-blue-600 scale-110"
//                 : "bg-gray-300 hover:bg-gray-400"
//             }`}
//           />
//         ))}
//       </div>

//       {selectedProduct && (
//         <LightboxGallery
//           product={selectedProduct}
//           onClose={() => setSelectedProduct(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default ProductCarousel;

import { useState } from "react";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import LightboxGallery from "./LightboxGallery";

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
  products: Product[];
}

const ProductCarousel = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [carouselIndexes, setCarouselIndexes] = useState<{ [key: string]: number }>({});
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const allProducts: Product[] = [
    {
      id: 1,
      name: "STEVEN AIRLINE 1",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "1.JPG",
      galleryImages: [
        "1(3).JPG",
        "1(2).JPG",
        "1(1).JPG",
      ],
    },
    {
      id: 2,
      name: "STEVEN AIRLINE 2",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "3.JPG",
      galleryImages: ["3(3).JPG", "3(4).JPG", "3(5).JPG"],
    },
    {
      id: 3,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "2.JPG",
      galleryImages: [
        "2.JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
     {
      id: 1,
      name: "STEVEN AIRLINE 1",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "1.JPG",
      galleryImages: [
        "1(3).JPG",
        "1(2).JPG",
        "1(1).JPG",
      ],
    },
    {
      id: 2,
      name: "STEVEN AIRLINE 2",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "3.JPG",
      galleryImages: ["3(3).JPG", "3(4).JPG", "3(5).JPG"],
    },
    {
      id: 3,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "2.JPG",
      galleryImages: [
        "2.JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 1,
      name: "STEVEN AIRLINE 1",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "1.JPG",
      galleryImages: [
        "1(3).JPG",
        "1(2).JPG",
        "1(1).JPG",
      ],
    },
    {
      id: 2,
      name: "STEVEN AIRLINE 2",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "3.JPG",
      galleryImages: ["3(3).JPG", "3(4).JPG", "3(5).JPG"],
    },
    {
      id: 3,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "2.JPG",
      galleryImages: [
        "2.JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
     {
      id: 1,
      name: "STEVEN AIRLINE 1",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "1.JPG",
      galleryImages: [
        "1(3).JPG",
        "1(2).JPG",
        "1(1).JPG",
      ],
    },
    {
      id: 2,
      name: "STEVEN AIRLINE 2",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "3.JPG",
      galleryImages: ["3(3).JPG", "3(4).JPG", "3(5).JPG"],
    },
    {
      id: 3,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "2.JPG",
      galleryImages: [
        "2.JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 1,
      name: "STEVEN AIRLINE 1",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "1.JPG",
      galleryImages: [
        "1(3).JPG",
        "1(2).JPG",
        "1(1).JPG",
      ],
    },
    {
      id: 2,
      name: "STEVEN AIRLINE 2",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "3.JPG",
      galleryImages: ["3(3).JPG", "3(4).JPG", "3(5).JPG"],
    },
    {
      id: 3,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "2.JPG",
      galleryImages: [
        "2.JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
     {
      id: 1,
      name: "STEVEN AIRLINE 1",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "1.JPG",
      galleryImages: [
        "1(3).JPG",
        "1(2).JPG",
        "1(1).JPG",
      ],
    },
    {
      id: 2,
      name: "STEVEN AIRLINE 2",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "3.JPG",
      galleryImages: ["3(3).JPG", "3(4).JPG", "3(5).JPG"],
    },
    {
      id: 3,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "2.JPG",
      galleryImages: [
        "2.JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },{
      id: 1,
      name: "STEVEN AIRLINE 1",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "1.JPG",
      galleryImages: [
        "1(3).JPG",
        "1(2).JPG",
        "1(1).JPG",
      ],
    },
    {
      id: 2,
      name: "STEVEN AIRLINE 2",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "3.JPG",
      galleryImages: ["3(3).JPG", "3(4).JPG", "3(5).JPG"],
    },
    {
      id: 3,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "2.JPG",
      galleryImages: [
        "2.JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
     {
      id: 1,
      name: "STEVEN AIRLINE 1",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "1.JPG",
      galleryImages: [
        "1(3).JPG",
        "1(2).JPG",
        "1(1).JPG",
      ],
    },
    {
      id: 2,
      name: "STEVEN AIRLINE 2",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "3.JPG",
      galleryImages: ["3(3).JPG", "3(4).JPG", "3(5).JPG"],
    },
    {
      id: 3,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "2.JPG",
      galleryImages: [
        "2.JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 1,
      name: "STEVEN AIRLINE 1",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "1.JPG",
      galleryImages: [
        "1(3).JPG",
        "1(2).JPG",
        "1(1).JPG",
      ],
    },
    {
      id: 2,
      name: "STEVEN AIRLINE 2",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "3.JPG",
      galleryImages: ["3(3).JPG", "3(4).JPG", "3(5).JPG"],
    },
    {
      id: 3,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "2.JPG",
      galleryImages: [
        "2.JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
     {
      id: 1,
      name: "STEVEN AIRLINE 1",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "1.JPG",
      galleryImages: [
        "1(3).JPG",
        "1(2).JPG",
        "1(1).JPG",
      ],
    },
    {
      id: 2,
      name: "STEVEN AIRLINE 2",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "3.JPG",
      galleryImages: ["3(3).JPG", "3(4).JPG", "3(5).JPG"],
    },
    {
      id: 3,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "2.JPG",
      galleryImages: [
        "2.JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 1,
      name: "STEVEN AIRLINE 1",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "1.JPG",
      galleryImages: [
        "1(3).JPG",
        "1(2).JPG",
        "1(1).JPG",
      ],
    },
    {
      id: 2,
      name: "STEVEN AIRLINE 2",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "3.JPG",
      galleryImages: ["3(3).JPG", "3(4).JPG", "3(5).JPG"],
    },
    {
      id: 3,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "2.JPG",
      galleryImages: [
        "2.JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
     {
      id: 1,
      name: "STEVEN AIRLINE 1",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "1.JPG",
      galleryImages: [
        "1(3).JPG",
        "1(2).JPG",
        "1(1).JPG",
      ],
    },
    {
      id: 2,
      name: "STEVEN AIRLINE 2",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "3.JPG",
      galleryImages: ["3(3).JPG", "3(4).JPG", "3(5).JPG"],
    },
    {
      id: 3,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "2.JPG",
      galleryImages: [
        "2.JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },{
      id: 1,
      name: "STEVEN AIRLINE 1",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "1.JPG",
      galleryImages: [
        "1(3).JPG",
        "1(2).JPG",
        "1(1).JPG",
      ],
    },
    {
      id: 2,
      name: "STEVEN AIRLINE 2",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "3.JPG",
      galleryImages: ["3(3).JPG", "3(4).JPG", "3(5).JPG"],
    },
    {
      id: 3,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "2.JPG",
      galleryImages: [
        "2.JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
     {
      id: 1,
      name: "STEVEN AIRLINE 1",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "1.JPG",
      galleryImages: [
        "1(3).JPG",
        "1(2).JPG",
        "1(1).JPG",
      ],
    },
    {
      id: 2,
      name: "STEVEN AIRLINE 2",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "3.JPG",
      galleryImages: ["3(3).JPG", "3(4).JPG", "3(5).JPG"],
    },
    {
      id: 3,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "2.JPG",
      galleryImages: [
        "2.JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 1,
      name: "STEVEN AIRLINE 1",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "1.JPG",
      galleryImages: [
        "1(3).JPG",
        "1(2).JPG",
        "1(1).JPG",
      ],
    },
    {
      id: 2,
      name: "STEVEN AIRLINE 2",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "3.JPG",
      galleryImages: ["3(3).JPG", "3(4).JPG", "3(5).JPG"],
    },
    {
      id: 3,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "2.JPG",
      galleryImages: [
        "2.JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
     {
      id: 1,
      name: "STEVEN AIRLINE 1",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "1.JPG",
      galleryImages: [
        "1(3).JPG",
        "1(2).JPG",
        "1(1).JPG",
      ],
    },
    {
      id: 2,
      name: "STEVEN AIRLINE 2",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "3.JPG",
      galleryImages: ["3(3).JPG", "3(4).JPG", "3(5).JPG"],
    },
    {
      id: 3,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "2.JPG",
      galleryImages: [
        "2.JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 1,
      name: "STEVEN AIRLINE 1",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "1.JPG",
      galleryImages: [
        "1(3).JPG",
        "1(2).JPG",
        "1(1).JPG",
      ],
    },
    {
      id: 2,
      name: "STEVEN AIRLINE 2",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "3.JPG",
      galleryImages: ["3(3).JPG", "3(4).JPG", "3(5).JPG"],
    },
    {
      id: 3,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "2.JPG",
      galleryImages: [
        "2.JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
     {
      id: 1,
      name: "STEVEN AIRLINE 1",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "1.JPG",
      galleryImages: [
        "1(3).JPG",
        "1(2).JPG",
        "1(1).JPG",
      ],
    },
    {
      id: 2,
      name: "STEVEN AIRLINE 2",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "3.JPG",
      galleryImages: ["3(3).JPG", "3(4).JPG", "3(5).JPG"],
    },
    {
      id: 3,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "2.JPG",
      galleryImages: [
        "2.JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
    {
      id: 4,
      name: "STEVEN AIRLINE 3",
      description:
        "A legendary wide-body aircraft known as the “Queen of the Skies”",
      mainImage: "8.JPG",
      galleryImages: [
        "8(1).JPG",
        "8(2).JPG",
      ],
    },
  ];

  const productsPerCarousel = 16; // 16 products per carousel
  const carouselsPerPage = 3; // 3 carousels per page
  const productsPerPage = productsPerCarousel * carouselsPerPage; // 48 products per page

  // Calculate total pages needed
  const totalPages = Math.ceil(allProducts.length / productsPerPage);

  // Get products for current page
  const getCurrentPageProducts = () => {
    const start = pageIndex * productsPerPage;
    const end = start + productsPerPage;
    return allProducts.slice(start, end);
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
          products: products
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
    if (currentIndex < products.length - 1) {
      setCarouselIndex(carouselId, currentIndex + 1);
    }
  };

  const prevCarouselSlide = (carouselId: string) => {
    const currentIndex = getCarouselIndex(carouselId);
    if (currentIndex > 0) {
      setCarouselIndex(carouselId, currentIndex - 1);
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
    <div className="relative">
      {/* Page Navigation */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={prevPage}
          disabled={pageIndex === 0}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
          Previous Page
        </button>
        
        <div className="text-lg font-medium">
          Page {pageIndex + 1} of {totalPages}
        </div>
        
        <button
          onClick={nextPage}
          disabled={pageIndex === totalPages - 1}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          Next Page
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Carousels */}
      <div className="space-y-12">
        {carousels.map((carousel) => {
          const currentIndex = getCarouselIndex(carousel.id);
          const displayProducts = carousel.products.slice(currentIndex, currentIndex + 16);

          return (
            <div key={carousel.id} className="relative bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">{carousel.title}</h2>
              
              <div className="relative">
                {/* Carousel Navigation */}
                <button
                  onClick={() => prevCarouselSlide(carousel.id)}
                  disabled={currentIndex === 0}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>

                <button
                  onClick={() => nextCarouselSlide(carousel.id, carousel.products)}
                  disabled={currentIndex >= carousel.products.length - 16}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>

                {/* Product Grid - 16 items (4x4) */}
                <div className="grid grid-cols-4 gap-4 px-12">
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
              {carousel.products.length > 16 && (
                <div className="flex justify-center space-x-2 mt-4">
                  {Array.from({ length: Math.ceil(carousel.products.length / 16) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCarouselIndex(carousel.id, index * 16)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        Math.floor(currentIndex / 16) === index
                          ? "bg-blue-600 w-6"
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

      {/* Page Dots */}
      <div className="flex justify-center space-x-2 mt-8">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setPageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
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
