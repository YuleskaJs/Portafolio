
import { Heart, Star, Sparkles } from "lucide-react";

const KawaiiHeader = () => {
  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-kawaii-pink-light via-kawaii-lavender to-kawaii-mint backdrop-blur-md z-50 border-b-4 border-kawaii-pink shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-kawaii-pink rounded-full flex items-center justify-center border-4 border-white shadow-lg animate-bounce">
              <Heart className="w-6 h-6 text-white" fill="white" />
            </div>
            <div className="font-kawaii font-bold text-2xl text-kawaii-pink-dark">
              Hello Kitty ♡
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-cute font-semibold text-kawaii-pink-dark hover:text-kawaii-purple transition-colors duration-300 relative group"
              >
                {item}
                <Star className="w-4 h-4 absolute -top-2 -right-2 text-kawaii-yellow opacity-0 group-hover:opacity-100 transition-opacity animate-float" fill="currentColor" />
              </a>
            ))}
          </div>

          {/* Decorative elements */}
          <div className="flex items-center space-x-2">
            <Sparkles className="w-6 h-6 text-kawaii-purple animate-float" />
            <Sparkles className="w-4 h-4 text-kawaii-pink animate-bounce" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default KawaiiHeader;
