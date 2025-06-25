import ProductCarousel from "@/components/ProductCarousel";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-white-50 bg-[url('/Background/bg1.jpeg')] bg-[length:1590px_680px] bg-repeat">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-16 relative">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
          </div>

          {/* Main heading with gradient and animation */}
          <h1 className="relative text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Airlines
            </span>
            <span className="text-gray-100"> of the </span>
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
              Sky
            </span>
          </h1>

          {/* Enhanced subtitle section */}
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Animated aircraft icon divider */}
            <div className="flex items-center justify-center gap-4 my-8 animate-fade-in-delay-1">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-blue-400 to-blue-600" />
              <div className="relative">
                <svg
                  className="w-8 h-8 text-blue-600 animate-float"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
                <div className="absolute inset-0 bg-blue-400 blur-xl opacity-30 animate-pulse" />
              </div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent via-purple-400 to-purple-600" />
            </div>

            {/* Enhanced description box */}
            {/* <div className="relative animate-fade-in-delay-2 mt-16">
              <div
                className="
      absolute inset-0 
      bg-gradient-to-r from-blue-50 to-purple-50 
      rounded-2xl 
      transform rotate-1
    "
              />

              <div
                className="
      relative 
      bg-white bg-opacity-70 
      backdrop-blur-sm 
      rounded-2xl 
      p-6 
      shadow-lg 
      border border-gray-100
    "
              >
                <p
                  className="
        text-lg md:text-xl lg:text-2xl 
        text-gray-700 
        leading-relaxed 
        font-light
      "
                >
                  Explore our{" "}
                  <span className="font-semibold text-blue-600">
                    curated gallery
                  </span>{" "}
                  featuring detailed images of unique aircraft models. Each
                  piece captures the{" "}
                  <span className="font-semibold text-purple-600">
                    essence of aviation excellence
                  </span>
                  .
                </p>
              </div>
            </div> */}
            <div className="relative animate-fade-in-delay-2">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-2xl transform rotate-1 blur-sm" />

              <div className="relative bg-white/30 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gray-100/50">
                <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed font-semibold">
                  Explore our{" "}
                  <span className="font-bold text-blue-500">
                    curated gallery
                  </span>{" "}
                  featuring detailed images of unique aircraft models. Each
                  piece captures the{" "}
                  <span className="font-bold text-purple-500">
                    essence of aviation excellence
                  </span>
                </p>
              </div>
            </div>

            {/* Enhanced Call to Action */}
            <div className="animate-fade-in-delay-3 mt-8">
              <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-3">
                  <svg
                    className="w-6 h-6 animate-pulse"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  Click on any model to view gallery
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </button>

              {/* Additional info */}
              <p className="mt-4 text-sm text-gray-500 animate-fade-in-delay-4">
                <span className="inline-flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  High-resolution images • Multiple angles • Detailed views
                </span>
              </p>
            </div>
          </div>

          {/* Animated scroll indicator */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-scroll" />
            </div>
          </div>
        </div>

        <ProductCarousel />
      </main>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes blob {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(16px);
            opacity: 0;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-delay-1 {
          opacity: 0;
          animation: fade-in 0.8s ease-out 0.2s forwards;
        }

        .animate-fade-in-delay-2 {
          opacity: 0;
          animation: fade-in 0.8s ease-out 0.4s forwards;
        }

        .animate-fade-in-delay-3 {
          opacity: 0;
          animation: fade-in 0.8s ease-out 0.6s forwards;
        }

        .animate-fade-in-delay-4 {
          opacity: 0;
          animation: fade-in 0.8s ease-out 0.8s forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Index;
