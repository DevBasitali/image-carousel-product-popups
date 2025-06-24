
// import { useState } from "react";
// import { X, ArrowLeft, ArrowRight } from "lucide-react";

// interface Product {
//   id: number;
//   name: string;
//   description: string;
//   mainImage: string;
//   galleryImages: string[];
// }

// interface LightboxGalleryProps {
//   product: Product;
//   onClose: () => void;
// }

// const LightboxGallery = ({ product, onClose }: LightboxGalleryProps) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const nextImage = () => {
//     setCurrentImageIndex((prev) => 
//       (prev + 1) % product.galleryImages.length
//     );
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prev) => 
//       (prev - 1 + product.galleryImages.length) % product.galleryImages.length
//     );
//   };

//   const handleBackdropClick = (e: React.MouseEvent) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   return (
//     <div 
//       className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
//       onClick={handleBackdropClick}
//     >
//       <div className="relative max-w-5xl w-full max-h-full">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 z-10 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all duration-200"
//         >
//           <X className="h-6 w-6" />
//         </button>

//         <div className="relative">
//           <img
//             src={product.galleryImages[currentImageIndex]}
//             alt={`${product.name} - Image ${currentImageIndex + 1}`}
//             className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
//           />

//           {product.galleryImages.length > 1 && (
//             <>
//               <button
//                 onClick={prevImage}
//                 className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all duration-200"
//               >
//                 <ArrowLeft className="h-6 w-6" />
//               </button>
              
//               <button
//                 onClick={nextImage}
//                 className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all duration-200"
//               >
//                 <ArrowRight className="h-6 w-6" />
//               </button>
//             </>
//           )}
//         </div>

//         <div className="mt-6 text-center">
//           <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
//           <p className="text-gray-300 mb-4">{product.description}</p>
          
//           {product.galleryImages.length > 1 && (
//             <div className="flex justify-center space-x-2">
//               {product.galleryImages.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentImageIndex(index)}
//                   className={`w-3 h-3 rounded-full transition-all duration-200 ${
//                     index === currentImageIndex
//                       ? "bg-white scale-110"
//                       : "bg-gray-500 hover:bg-gray-300"
//                   }`}
//                 />
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LightboxGallery;

import { useState } from "react";
import { X, ArrowLeft, ArrowRight, Info } from "lucide-react";

interface Product {
  id: number;
  name: string;
  description: string;
  mainImage: string;
  galleryImages: string[];
}

interface LightboxGalleryProps {
  product: Product;
  onClose: () => void;
}

const LightboxGallery = ({ product, onClose }: LightboxGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      (prev + 1) % product.galleryImages.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      (prev - 1 + product.galleryImages.length) % product.galleryImages.length
    );
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 bg-opacity-95 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative max-w-7xl w-full max-h-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-3 bg-white bg-opacity-10 backdrop-blur-md rounded-full text-white hover:bg-opacity-20 transition-all duration-200"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Image Section */}
          <div className="relative flex-1">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src={product.galleryImages[currentImageIndex]}
                alt={`${product.name} - Image ${currentImageIndex + 1}`}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>

            {product.galleryImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white bg-opacity-10 backdrop-blur-md rounded-full text-white hover:bg-opacity-20 transition-all duration-200"
                >
                  <ArrowLeft className="h-6 w-6" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white bg-opacity-10 backdrop-blur-md rounded-full text-white hover:bg-opacity-20 transition-all duration-200"
                >
                  <ArrowRight className="h-6 w-6" />
                </button>
              </>
            )}
          </div>

          {/* Info Section - Right Side with Beautification */}
          <div className="lg:w-1/3 text-center lg:text-left">
            {/* Title with gradient */}
            <h3 className="text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {product.name}
            </h3>
            
            {/* Description Section */}
            <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-10">
              <div className="flex items-center gap-2 mb-4">
                <Info className="h-5 w-5 text-blue-400" />
                <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Description</span>
              </div>
              
              <p className="text-gray-200 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>
            
            {/* Gallery Navigation */}
            {product.galleryImages.length > 1 && (
              <div className="mt-8">
                <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-10">
                  <p className="text-gray-400 text-sm mb-3 uppercase tracking-wider">Gallery Navigation</p>
                  <div className="flex justify-center lg:justify-start space-x-2 mb-3">
                    {product.galleryImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                          index === currentImageIndex
                            ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-125 w-8"
                            : "bg-gray-600 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-500 text-xs text-center lg:text-left">
                    Image {currentImageIndex + 1} of {product.galleryImages.length}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightboxGallery;