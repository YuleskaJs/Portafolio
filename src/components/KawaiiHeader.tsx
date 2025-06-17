
import { Heart, Star } from "lucide-react";

const KawaiiHeader = () => {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-kawaii-pink-light shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-kawaii-pink rounded-full flex items-center justify-center border-2 border-kawaii-pink-light">
              <Heart className="w-5 h-5 text-white" fill="white" />
            </div>
            <div className="font-cute font-bold text-xl text-kawaii-pink-dark">
              Portfolio
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-cute font-medium text-gray-700 hover:text-kawaii-pink-dark transition-colors duration-300 relative group"
              >
                {item}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-kawaii-pink group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </div>

          {/* Contact button */}
          <div className="flex items-center">
            <button className="bg-kawaii-pink hover:bg-kawaii-pink-dark text-white font-cute font-medium px-6 py-2 rounded-lg transition-colors duration-300">
              Get in Touch
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default KawaiiHeader;
