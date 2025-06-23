
import { ShoppingBag, Menu, PlaneIcon } from "lucide-react";

const Navigation = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <PlaneIcon className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">Aircraft Gallery</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">
              Home
            </a>
          </nav>

          <button className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors">
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
