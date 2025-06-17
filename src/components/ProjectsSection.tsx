
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Plataforma E-commerce",
      description: "Experiencia de compra moderna con React y TypeScript, con diseño responsivo y animaciones suaves.",
      tech: ["React", "TypeScript", "Tailwind"],
      image: "🛍️",
      color: "pink"
    },
    {
      title: "App de Gestión de Tareas", 
      description: "Herramienta de productividad intuitiva con funcionalidad de arrastrar y soltar y colaboración en tiempo real.",
      tech: ["React", "Node.js", "MongoDB"],
      image: "📋",
      color: "purple"
    },
    {
      title: "Sitio Web Portfolio",
      description: "Portfolio limpio y profesional que muestra habilidades de diseño con hermosas animaciones e interacciones.",
      tech: ["React", "Framer Motion", "CSS"],
      image: "💼",
      color: "rose"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-6">
        {/* Título de sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Proyectos Destacados</h2>
          <div className="w-20 h-1 bg-pink-500 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Una selección de mi trabajo reciente mostrando diferentes habilidades y tecnologías
          </p>
        </div>

        {/* Cuadrícula de proyectos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Imagen del proyecto */}
              <div className={`h-40 bg-gradient-to-br from-${project.color}-100 to-${project.color}-50 flex items-center justify-center relative overflow-hidden`}>
                <div className="text-6xl opacity-80 group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
              </div>

              {/* Contenido del proyecto */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Stack tecnológico */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-pink-100 text-pink-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botones de acción */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 text-sm">
                    <ExternalLink className="w-4 h-4" />
                    <span>Ver Demo</span>
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-all duration-300">
                    <Github className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Llamada a la acción */}
        <div className="text-center">
          <button className="bg-purple-600 hover:bg-pink-500 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2 mx-auto">
            <span>Ver Todos los Proyectos</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
