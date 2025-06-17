
import { Heart, Star, Sparkles, Code, Palette, Coffee } from "lucide-react";

const AboutSection = () => {
  const skills = [
    { icon: Code, name: "Kawaii Coding", color: "kawaii-pink" },
    { icon: Palette, name: "Cute Design", color: "kawaii-purple" },
    { icon: Coffee, name: "Pink Lattes", color: "kawaii-peach" }
  ];

  return (
    <section id="about" className="py-20 bg-kawaii-cream relative overflow-hidden">
      {/* Floating decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Star className="absolute top-10 left-10 w-6 h-6 text-kawaii-pink animate-float" fill="currentColor" />
        <Heart className="absolute top-20 right-20 w-8 h-8 text-kawaii-purple animate-bounce" fill="currentColor" />
        <Sparkles className="absolute bottom-20 left-20 w-6 h-6 text-kawaii-yellow animate-float" />
        <Star className="absolute bottom-32 right-10 w-4 h-4 text-kawaii-peach animate-bounce" fill="currentColor" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section title */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Heart className="w-8 h-8 text-kawaii-pink animate-bounce" fill="currentColor" />
            <h2 className="font-kawaii text-5xl font-bold text-kawaii-pink-dark">About Me</h2>
            <Heart className="w-8 h-8 text-kawaii-pink animate-bounce" fill="currentColor" />
          </div>
          <div className="w-24 h-2 bg-kawaii-pink rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image/Avatar */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-kawaii-pink-light to-kawaii-lavender rounded-kawaii border-8 border-white shadow-2xl flex items-center justify-center">
                <div className="text-8xl animate-float">🌸</div>
              </div>
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-kawaii-yellow rounded-full border-6 border-white shadow-xl flex items-center justify-center animate-bounce">
                <Sparkles className="w-8 h-8 text-kawaii-purple" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-kawaii-peach rounded-full border-6 border-white shadow-xl flex items-center justify-center animate-float">
                <Heart className="w-6 h-6 text-white" fill="currentColor" />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <div className="bg-white rounded-kawaii p-8 shadow-lg border-4 border-kawaii-pink-light">
              <h3 className="font-kawaii text-3xl font-bold text-kawaii-pink-dark mb-4 flex items-center">
                <Star className="w-6 h-6 mr-2 text-kawaii-yellow" fill="currentColor" />
                Hello, I'm Kawaii Coder! ♡
              </h3>
              <p className="font-cute text-lg text-kawaii-pink-dark leading-relaxed mb-4">
                I'm a passionate developer who believes that code should be as beautiful and joyful as a Hello Kitty accessory! 
                I specialize in creating adorable user experiences that make people smile. ✨
              </p>
              <p className="font-cute text-lg text-kawaii-pink-dark leading-relaxed">
                When I'm not coding cute applications, you can find me collecting kawaii stickers, 
                drinking pink bubble tea, and dreaming up the next magical project! 🎀
              </p>
            </div>

            {/* Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-kawaii p-6 shadow-lg border-4 border-kawaii-${skill.color} transform hover:scale-105 transition-all duration-300`}
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 bg-kawaii-${skill.color} rounded-full flex items-center justify-center mx-auto mb-3 animate-bounce`}>
                      <skill.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-kawaii font-bold text-kawaii-pink-dark">{skill.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
