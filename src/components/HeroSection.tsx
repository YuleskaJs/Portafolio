
import { Sparkles, Heart, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-kawaii-pink-light via-kawaii-lavender to-kawaii-mint relative overflow-hidden pt-20">
      {/* Floating decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Heart className="absolute top-20 left-10 w-8 h-8 text-kawaii-pink animate-float" fill="currentColor" />
        <Star className="absolute top-32 right-20 w-6 h-6 text-kawaii-yellow animate-bounce" fill="currentColor" />
        <Sparkles className="absolute bottom-40 left-20 w-10 h-10 text-kawaii-purple animate-float" />
        <Heart className="absolute bottom-20 right-10 w-6 h-6 text-kawaii-peach animate-bounce" fill="currentColor" />
        <Star className="absolute top-40 left-1/2 w-4 h-4 text-kawaii-pink animate-float" fill="currentColor" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center">
          {/* Main title */}
          <div className="mb-8">
            <h1 className="font-kawaii text-6xl md:text-8xl font-bold text-kawaii-pink-dark mb-4 animate-bounce">
              ♡ Hello! ♡
            </h1>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Sparkles className="w-8 h-8 text-kawaii-purple animate-float" />
              <h2 className="font-cute text-3xl md:text-4xl font-semibold text-kawaii-purple">
                I'm a Kawaii Developer
              </h2>
              <Sparkles className="w-8 h-8 text-kawaii-purple animate-float" />
            </div>
          </div>

          {/* Description */}
          <div className="max-w-2xl mx-auto mb-12">
            <p className="font-cute text-xl text-kawaii-pink-dark leading-relaxed">
              Creating magical and adorable web experiences with lots of love and sparkles! ✨
              I believe coding should be as cute as Hello Kitty herself! 🎀
            </p>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-kawaii-pink hover:bg-kawaii-pink-dark text-white font-kawaii font-semibold px-8 py-4 rounded-kawaii shadow-lg transform hover:scale-105 transition-all duration-300 border-4 border-white">
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5" fill="currentColor" />
                <span>View My Work</span>
                <Heart className="w-5 h-5" fill="currentColor" />
              </div>
            </button>
            <button className="bg-kawaii-lavender hover:bg-kawaii-purple text-kawaii-pink-dark font-kawaii font-semibold px-8 py-4 rounded-kawaii shadow-lg transform hover:scale-105 transition-all duration-300 border-4 border-white">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5" fill="currentColor" />
                <span>Say Hello!</span>
                <Star className="w-5 h-5" fill="currentColor" />
              </div>
            </button>
          </div>
        </div>

        {/* Kawaii avatar section */}
        <div className="mt-16 flex justify-center">
          <div className="relative">
            <div className="w-48 h-48 bg-kawaii-pink rounded-full border-8 border-white shadow-2xl flex items-center justify-center animate-float">
              <div className="text-6xl">🐱</div>
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-kawaii-yellow rounded-full border-4 border-white shadow-lg flex items-center justify-center animate-bounce">
              <span className="text-2xl">✨</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-kawaii-peach rounded-full border-4 border-white shadow-lg flex items-center justify-center animate-float">
              <span className="text-xl">💕</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-kawaii-cream">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
