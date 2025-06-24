interface Product {
  id: number;
  name: string;
  description: string;
  mainImage: string;
  galleryImages: string[];
}

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-1 h-full flex flex-col">
      {/* Image Container with fixed dimensions */}
      <div 
        className="relative w-full h-56 bg-gradient-to-br from-gray-50 to-gray-100 flex-shrink-0" 
        onClick={onClick}
      >
        {/* Gallery icon */}
        <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-2 shadow-lg">
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>

        {/* Image with consistent sizing */}
        <img
          src={product.mainImage}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-4">
          <span className="text-white text-sm font-medium bg-black bg-opacity-50 px-4 py-2 rounded-full backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            View {product.galleryImages.length} Images
          </span>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-4 bg-gradient-to-b from-white to-gray-50 flex-grow flex flex-col">
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        
        {/* Description with min-height to ensure visibility */}
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 min-h-[2.5rem] mb-3">
  {product.description || "No description available"}
</p>
        
        {/* Gallery indicator */}
        <div className="mt-auto flex items-center text-xs text-gray-500">
          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"/>
            <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd"/>
          </svg>
          Gallery Available
        </div>
      </div>
    </div>
  );
};

export default ProductCard;