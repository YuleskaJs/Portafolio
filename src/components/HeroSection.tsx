
import { ArrowRight, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-kawaii-pink-light/30 to-kawaii-lavender/40 relative overflow-hidden pt-20">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-40 left-20 w-32 h-32 bg-kawaii-pink/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-kawaii-purple/20 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div>
              <p className="font-cute text-kawaii-pink-dark font-medium mb-4">Hello, I'm</p>
              <h1 className="font-cute text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                Sarah Chen
              </h1>
              <h2 className="font-cute text-2xl md:text-3xl font-semibold text-kawaii-purple mb-6">
                Frontend Developer & UI Designer
              </h2>
            </div>

            <p className="font-cute text-lg text-gray-600 leading-relaxed max-w-lg">
              I create beautiful, user-centered digital experiences with attention to detail 
              and a passion for clean, modern design. Let's build something amazing together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-kawaii-pink hover:bg-kawaii-pink-dark text-white font-cute font-semibold px-8 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-kawaii-pink text-kawaii-pink-dark hover:bg-kawaii-pink hover:text-white font-cute font-semibold px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </button>
            </div>
          </div>

          {/* Right side - Professional image placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-kawaii-pink/20 to-kawaii-purple/20 rounded-2xl border border-kawaii-pink-light/50 flex items-center justify-center shadow-xl backdrop-blur-sm">
                <div className="text-6xl opacity-50">👩‍💻</div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-kawaii-pink rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-2xl text-white">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
