
import { Heart, Star, Sparkles, ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Kawaii Todo App",
      description: "A super cute task manager with Hello Kitty themes and pink sparkles! ✨",
      image: "🎀",
      color: "kawaii-pink"
    },
    {
      title: "Magical Weather App", 
      description: "Weather forecasts served with cuteness and rainbow gradients! 🌈",
      image: "🌸",
      color: "kawaii-purple"
    },
    {
      title: "Pastel Portfolio",
      description: "A dreamy portfolio website with floating hearts and soft animations! 💕",
      image: "🦄",
      color: "kawaii-peach"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-kawaii-lavender via-kawaii-mint to-kawaii-pink-light relative overflow-hidden">
      {/* Floating decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Heart className="absolute top-16 left-16 w-8 h-8 text-kawaii-pink animate-float" fill="currentColor" />
        <Star className="absolute top-32 right-16 w-6 h-6 text-kawaii-yellow animate-bounce" fill="currentColor" />
        <Sparkles className="absolute bottom-32 left-10 w-10 h-10 text-kawaii-purple animate-float" />
        <Heart className="absolute bottom-16 right-20 w-6 h-6 text-kawaii-peach animate-bounce" fill="currentColor" />
        <Star className="absolute top-48 left-1/3 w-4 h-4 text-kawaii-pink animate-float" fill="currentColor" />
        <Sparkles className="absolute bottom-48 right-1/3 w-6 h-6 text-kawaii-mint animate-bounce" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section title */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Sparkles className="w-8 h-8 text-kawaii-purple animate-bounce" />
            <h2 className="font-kawaii text-5xl font-bold text-kawaii-pink-dark">My Kawaii Projects</h2>
            <Sparkles className="w-8 h-8 text-kawaii-purple animate-bounce" />
          </div>
          <div className="w-24 h-2 bg-kawaii-purple rounded-full mx-auto mb-4"></div>
          <p className="font-cute text-xl text-kawaii-pink-dark max-w-2xl mx-auto">
            Each project is crafted with love, sprinkled with magic, and designed to bring joy! ♡
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-kawaii overflow-hidden shadow-2xl border-4 border-kawaii-pink-light transform hover:scale-105 hover:-rotate-1 transition-all duration-300 group"
            >
              {/* Project image/emoji */}
              <div className={`h-48 bg-gradient-to-br from-kawaii-${project.color} to-kawaii-${project.color}-light flex items-center justify-center relative overflow-hidden`}>
                <div className="text-8xl animate-float group-hover:animate-bounce transition-all duration-300">
                  {project.image}
                </div>
                <div className="absolute top-4 right-4">
                  <Heart className="w-6 h-6 text-white animate-pulse" fill="currentColor" />
                </div>
                <div className="absolute bottom-4 left-4">
                  <Star className="w-4 h-4 text-kawaii-yellow animate-bounce" fill="currentColor" />
                </div>
              </div>

              {/* Project content */}
              <div className="p-6">
                <h3 className="font-kawaii text-2xl font-bold text-kawaii-pink-dark mb-3 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-kawaii-yellow" fill="currentColor" />
                  {project.title}
                </h3>
                <p className="font-cute text-kawaii-pink-dark mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Action buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-kawaii-pink hover:bg-kawaii-pink-dark text-white font-kawaii font-semibold py-3 px-4 rounded-kawaii transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                    <ExternalLink className="w-4 h-4" />
                    <span>View Live</span>
                  </button>
                  <button className="bg-kawaii-lavender hover:bg-kawaii-purple text-kawaii-pink-dark font-kawaii font-semibold py-3 px-4 rounded-kawaii transition-all duration-300 transform hover:scale-105">
                    <Github className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Floating decoration on hover */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-kawaii-yellow rounded-full border-2 border-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-kawaii-purple" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <button className="bg-kawaii-purple hover:bg-kawaii-pink text-white font-kawaii font-bold px-8 py-4 rounded-kawaii shadow-lg transform hover:scale-105 transition-all duration-300 border-4 border-white">
            <div className="flex items-center space-x-3">
              <Heart className="w-6 h-6" fill="currentColor" />
              <span className="text-xl">View All Projects</span>
              <Heart className="w-6 h-6" fill="currentColor" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
