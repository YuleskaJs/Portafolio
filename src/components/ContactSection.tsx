
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from "lucide-react";

const ContactSection = () => {
  const socialLinks = [
    { icon: Linkedin, name: "LinkedIn", color: "kawaii-pink" },
    { icon: Github, name: "GitHub", color: "kawaii-purple" },
    { icon: Twitter, name: "Twitter", color: "kawaii-peach" }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="font-cute text-4xl font-bold text-gray-800 mb-4">Let's Work Together</h2>
          <div className="w-20 h-1 bg-kawaii-pink rounded-full mx-auto mb-6"></div>
          <p className="font-cute text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left side - Contact info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-kawaii-pink-light/20 to-kawaii-lavender/20 rounded-2xl p-8 border border-kawaii-pink-light/30">
              <h3 className="font-cute text-2xl font-bold text-gray-800 mb-6">
                Get In Touch
              </h3>
              <p className="font-cute text-gray-600 leading-relaxed mb-8">
                I'm currently available for new projects and collaborations. 
                Whether you have a question or just want to say hello, I'd love to hear from you!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-kawaii-pink/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-kawaii-pink" />
                  </div>
                  <div>
                    <h4 className="font-cute font-semibold text-gray-800">Email</h4>
                    <p className="font-cute text-gray-600">hello@sarahchen.dev</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-kawaii-purple/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-kawaii-purple" />
                  </div>
                  <div>
                    <h4 className="font-cute font-semibold text-gray-800">Phone</h4>
                    <p className="font-cute text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-kawaii-peach/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-kawaii-peach" />
                  </div>
                  <div>
                    <h4 className="font-cute font-semibold text-gray-800">Location</h4>
                    <p className="font-cute text-gray-600">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="pt-8 border-t border-kawaii-pink-light/30 mt-8">
                <h4 className="font-cute font-semibold text-gray-800 mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <button
                      key={index}
                      className={`w-10 h-10 bg-kawaii-${social.color}/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300`}
                    >
                      <social.icon className={`w-5 h-5 text-kawaii-${social.color}`} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="font-cute text-xl font-bold text-gray-800 mb-6">
              Send a Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-cute font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-kawaii-pink focus:ring-1 focus:ring-kawaii-pink outline-none font-cute transition-colors duration-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block font-cute font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-kawaii-pink focus:ring-1 focus:ring-kawaii-pink outline-none font-cute transition-colors duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block font-cute font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-kawaii-pink focus:ring-1 focus:ring-kawaii-pink outline-none font-cute transition-colors duration-300"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block font-cute font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-kawaii-pink focus:ring-1 focus:ring-kawaii-pink outline-none font-cute transition-colors duration-300"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label className="block font-cute font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-kawaii-pink focus:ring-1 focus:ring-kawaii-pink outline-none font-cute transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-kawaii-pink hover:bg-kawaii-pink-dark text-white font-cute font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
