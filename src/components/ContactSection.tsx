
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from "lucide-react";

const ContactSection = () => {
  const socialLinks = [
    { icon: Linkedin, name: "LinkedIn", color: "pink" },
    { icon: Github, name: "GitHub", color: "purple" },
    { icon: Twitter, name: "Twitter", color: "rose" }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Título de sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Trabajemos Juntos</h2>
          <div className="w-20 h-1 bg-pink-500 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Siempre estoy interesada en nuevas oportunidades y proyectos emocionantes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Lado izquierdo - Información de contacto */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Ponte en Contacto
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Actualmente estoy disponible para nuevos proyectos y colaboraciones. 
                ¡Ya sea que tengas una pregunta o solo quieras saludar, me encantaría saber de ti!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">Yuleskafinol2003@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Teléfono</h4>
                    <p className="text-gray-600">+57 (300) 4963837</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Ubicación</h4>
                    <p className="text-gray-600">Medellín, Colombia.</p>
                  </div>
                </div>
              </div>

              {/* Enlaces sociales */}
              <div className="pt-8 border-t border-pink-100 mt-8">
                <h4 className="font-semibold text-gray-800 mb-4">Sígueme</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <button
                      key={index}
                      className={`w-10 h-10 bg-${social.color}-100 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300`}
                    >
                      <social.icon className={`w-5 h-5 text-${social.color}-600`} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Lado derecho - Formulario de contacto */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Enviar Mensaje
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-gray-700 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition-colors duration-300"
                    placeholder="Juan"
                  />
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-2">
                    Apellido
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition-colors duration-300"
                    placeholder="Pérez"
                  />
                </div>
              </div>
              
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition-colors duration-300"
                  placeholder="juan@ejemplo.com"
                />
              </div>
              
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition-colors duration-300"
                  placeholder="Consulta sobre Proyecto"
                />
              </div>
              
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition-colors duration-300 resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Enviar Mensaje</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
