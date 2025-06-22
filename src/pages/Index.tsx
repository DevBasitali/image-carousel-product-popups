
import ProductCarousel from "@/components/ProductCarousel";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Aircraft Model Showcase
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Aircraft Model Showcase is a curated gallery featuring detailed images of unique aircraft models.
            Click on any image to view detailed photos.
          </p>
        </div>
        <ProductCarousel />
      </main>
    </div>
  );
};

export default Index;
