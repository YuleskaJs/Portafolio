import { ArrowRight, Download, Heart } from "lucide-react";
import logo from '../assets/yo.jpg';
import fotoProfesional from '../assets/foto-profesional.jpg';
import AnimatedSection from './AnimatedSection';
const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-purple-50 relative overflow-hidden pt-20">
      {/* Elementos decorativos sutiles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-40 left-20 w-24 h-24 bg-pink-200 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-20 w-32 h-32 bg-purple-200 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Lado izquierdo - Contenido */}
            <AnimatedSection direction="left">
              <div className="space-y-8">
                <div>
                  <p className="text-pink-600 font-medium mb-4">Hola, soy</p>
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">

                Yuleska Finol
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-6">
                Desarrolladora Frontend 
              </h2>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Apasionada por el diseño de interfaces creativas, me encanta construir interfaces funcionales y muy bonitas :).
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Mira mi trabajo aquí</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Descargar CV</span>
              </button>
            </div>
          </div>
          </AnimatedSection>
          {/* Lado derecho - Imagen profesional */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl border border-pink-200 overflow-hidden shadow-xl group">
                <img 
                  src={fotoProfesional} 
                  alt="Foto profesional"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              {/* Cuadrito rosado en la esquina izquierda con el icono de corazón */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
