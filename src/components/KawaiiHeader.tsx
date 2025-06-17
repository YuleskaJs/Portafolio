
import { Heart, Star } from "lucide-react";

const KawaiiHeader = () => {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-pink-100 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center border-2 border-pink-200">
              <Heart className="w-5 h-5 text-white" fill="white" />
            </div>
            <div className="font-bold text-xl text-pink-700">
              Portfolio
            </div>
          </div>

          {/* Navegación */}
          <div className="hidden md:flex items-center space-x-8">
            {["Inicio", "Sobre Mí", "Proyectos", "Contacto"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "").replace("í", "i")}`}
                className="font-medium text-gray-700 hover:text-pink-700 transition-colors duration-300 relative group"
              >
                {item}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </div>

          {/* Botón de contacto */}
          <div className="flex items-center">
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium px-6 py-2 rounded-lg transition-colors duration-300">
              Contáctame
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default KawaiiHeader;
