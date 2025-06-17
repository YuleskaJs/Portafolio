
import { Code, Palette, Users, Award } from "lucide-react";

const AboutSection = () => {
  const skills = [
    { icon: Code, name: "Desarrollo", description: "React, TypeScript, Node.js", color: "pink" },
    { icon: Palette, name: "Diseño", description: "UI/UX, Figma, Adobe Suite", color: "purple" },
    { icon: Users, name: "Colaboración", description: "Trabajo en equipo, Comunicación", color: "rose" },
    { icon: Award, name: "Calidad", description: "Mejores prácticas, Testing", color: "indigo" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Título de sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Sobre Mí</h2>
          <div className="w-20 h-1 bg-pink-500 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Apasionada por crear experiencias digitales que marcan la diferencia
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Lado izquierdo - Contenido */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Mi Trayectoria
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Con más de 5 años de experiencia en desarrollo frontend y diseño UI, 
                me especializo en crear experiencias digitales intuitivas y hermosas. 
                Creo en el poder del buen diseño para resolver problemas reales.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Cuando no estoy programando, puedes encontrarme explorando nuevas tendencias de diseño, 
                contribuyendo a proyectos de código abierto, o mentoreando a desarrolladores emergentes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-pink-50 rounded-xl">
                <div className="text-2xl font-bold text-pink-600">50+</div>
                <div className="text-sm text-gray-600">Proyectos Completados</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <div className="text-2xl font-bold text-purple-600">5+</div>
                <div className="text-sm text-gray-600">Años de Experiencia</div>
              </div>
            </div>
          </div>

          {/* Lado derecho - Habilidades */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 bg-${skill.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                  <skill.icon className={`w-6 h-6 text-${skill.color}-600`} />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">{skill.name}</h4>
                <p className="text-sm text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
