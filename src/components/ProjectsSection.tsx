
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Modern shopping experience with React and TypeScript, featuring responsive design and smooth animations.",
      tech: ["React", "TypeScript", "Tailwind"],
      image: "🛍️",
      color: "kawaii-pink"
    },
    {
      title: "Task Management App", 
      description: "Intuitive productivity tool with drag-and-drop functionality and real-time collaboration features.",
      tech: ["React", "Node.js", "MongoDB"],
      image: "📋",
      color: "kawaii-purple"
    },
    {
      title: "Portfolio Website",
      description: "Clean and professional portfolio showcasing design skills with beautiful animations and interactions.",
      tech: ["React", "Framer Motion", "CSS"],
      image: "💼",
      color: "kawaii-peach"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-kawaii-pink-light/10 to-kawaii-lavender/10">
      <div className="container mx-auto px-6">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="font-cute text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-kawaii-pink rounded-full mx-auto mb-6"></div>
          <p className="font-cute text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of my recent work showcasing different skills and technologies
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Project image */}
              <div className={`h-40 bg-gradient-to-br from-kawaii-${project.color}/20 to-kawaii-${project.color}/10 flex items-center justify-center relative overflow-hidden`}>
                <div className="text-6xl opacity-80 group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
              </div>

              {/* Project content */}
              <div className="p-6">
                <h3 className="font-cute text-xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="font-cute text-gray-600 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-kawaii-pink/10 text-kawaii-pink-dark text-xs font-cute font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-kawaii-pink hover:bg-kawaii-pink-dark text-white font-cute font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 text-sm">
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-cute font-medium py-2 px-4 rounded-lg transition-all duration-300">
                    <Github className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <button className="bg-kawaii-purple hover:bg-kawaii-pink text-white font-cute font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2 mx-auto">
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
