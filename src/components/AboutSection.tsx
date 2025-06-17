
import { Code, Palette, Users, Award } from "lucide-react";

const AboutSection = () => {
  const skills = [
    { icon: Code, name: "Development", description: "React, TypeScript, Node.js", color: "kawaii-pink" },
    { icon: Palette, name: "Design", description: "UI/UX, Figma, Adobe Suite", color: "kawaii-purple" },
    { icon: Users, name: "Collaboration", description: "Team work, Communication", color: "kawaii-peach" },
    { icon: Award, name: "Quality", description: "Best practices, Testing", color: "kawaii-mint" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="font-cute text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-kawaii-pink rounded-full mx-auto mb-6"></div>
          <p className="font-cute text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-kawaii-pink-light/20 to-kawaii-lavender/20 rounded-2xl p-8 border border-kawaii-pink-light/30">
              <h3 className="font-cute text-2xl font-bold text-gray-800 mb-4">
                My Journey
              </h3>
              <p className="font-cute text-gray-600 leading-relaxed mb-4">
                With over 5 years of experience in frontend development and UI design, 
                I specialize in creating intuitive and beautiful digital experiences. 
                I believe in the power of good design to solve real problems.
              </p>
              <p className="font-cute text-gray-600 leading-relaxed">
                When I'm not coding, you can find me exploring new design trends, 
                contributing to open source projects, or mentoring upcoming developers.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-kawaii-pink/10 rounded-xl">
                <div className="font-cute text-2xl font-bold text-kawaii-pink-dark">50+</div>
                <div className="font-cute text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-kawaii-purple/10 rounded-xl">
                <div className="font-cute text-2xl font-bold text-kawaii-purple">5+</div>
                <div className="font-cute text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right side - Skills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 bg-kawaii-${skill.color}/20 rounded-lg flex items-center justify-center mb-4`}>
                  <skill.icon className={`w-6 h-6 text-kawaii-${skill.color}`} />
                </div>
                <h4 className="font-cute font-bold text-gray-800 mb-2">{skill.name}</h4>
                <p className="font-cute text-sm text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
