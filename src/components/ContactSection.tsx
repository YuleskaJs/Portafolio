
import { Heart, Star, Sparkles, Mail, MessageCircle, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-kawaii-cream relative overflow-hidden">
      {/* Floating decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Heart className="absolute top-20 left-10 w-8 h-8 text-kawaii-pink animate-float" fill="currentColor" />
        <Star className="absolute top-40 right-20 w-6 h-6 text-kawaii-yellow animate-bounce" fill="currentColor" />
        <Sparkles className="absolute bottom-40 left-20 w-10 h-10 text-kawaii-purple animate-float" />
        <Heart className="absolute bottom-20 right-10 w-6 h-6 text-kawaii-peach animate-bounce" fill="currentColor" />
        <Star className="absolute top-60 left-1/2 w-4 h-4 text-kawaii-mint animate-float" fill="currentColor" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section title */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Heart className="w-8 h-8 text-kawaii-pink animate-bounce" fill="currentColor" />
            <h2 className="font-kawaii text-5xl font-bold text-kawaii-pink-dark">Let's Be Friends!</h2>
            <Heart className="w-8 h-8 text-kawaii-pink animate-bounce" fill="currentColor" />
          </div>
          <div className="w-24 h-2 bg-kawaii-pink rounded-full mx-auto mb-4"></div>
          <p className="font-cute text-xl text-kawaii-pink-dark max-w-2xl mx-auto">
            I'd love to hear from you! Let's create something magical together! ✨
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left side - Contact info */}
          <div className="space-y-8">
            <div className="bg-white rounded-kawaii p-8 shadow-lg border-4 border-kawaii-pink-light">
              <h3 className="font-kawaii text-3xl font-bold text-kawaii-pink-dark mb-6 flex items-center">
                <Sparkles className="w-6 h-6 mr-2 text-kawaii-purple" />
                Get In Touch ♡
              </h3>
              <p className="font-cute text-lg text-kawaii-pink-dark leading-relaxed mb-6">
                Whether you want to collaborate on a kawaii project, need help with cute coding, 
                or just want to chat about Hello Kitty - I'm always here! 🎀
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-kawaii-pink rounded-full flex items-center justify-center animate-bounce">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-kawaii font-bold text-kawaii-pink-dark">Email Me</h4>
                    <p className="font-cute text-kawaii-purple">hello@kawaiicoder.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-kawaii-purple rounded-full flex items-center justify-center animate-float">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-kawaii font-bold text-kawaii-pink-dark">Let's Chat</h4>
                    <p className="font-cute text-kawaii-purple">Always available for kawaii conversations!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="bg-white rounded-kawaii p-8 shadow-lg border-4 border-kawaii-lavender">
            <h3 className="font-kawaii text-2xl font-bold text-kawaii-pink-dark mb-6 flex items-center">
              <Star className="w-6 h-6 mr-2 text-kawaii-yellow" fill="currentColor" />
              Send Me a Kawaii Message!
            </h3>
            
            <form className="space-y-6">
              <div>
                <label className="block font-cute font-semibold text-kawaii-pink-dark mb-2">
                  Your Name ♡
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-kawaii border-4 border-kawaii-pink-light focus:border-kawaii-pink outline-none font-cute transition-all duration-300"
                  placeholder="What should I call you?"
                />
              </div>
              
              <div>
                <label className="block font-cute font-semibold text-kawaii-pink-dark mb-2">
                  Email Address ✨
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-kawaii border-4 border-kawaii-pink-light focus:border-kawaii-pink outline-none font-cute transition-all duration-300"
                  placeholder="your.email@kawaii.com"
                />
              </div>
              
              <div>
                <label className="block font-cute font-semibold text-kawaii-pink-dark mb-2">
                  Your Message 💕
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-kawaii border-4 border-kawaii-pink-light focus:border-kawaii-pink outline-none font-cute transition-all duration-300 resize-none"
                  placeholder="Tell me about your kawaii project ideas..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-kawaii-pink hover:bg-kawaii-pink-dark text-white font-kawaii font-bold py-4 px-6 rounded-kawaii shadow-lg transform hover:scale-105 transition-all duration-300 border-4 border-white flex items-center justify-center space-x-3"
              >
                <Send className="w-5 h-5" />
                <span>Send Kawaii Message</span>
                <Heart className="w-5 h-5" fill="currentColor" />
              </button>
            </form>
          </div>
        </div>

        {/* Decorative bottom section */}
        <div className="text-center mt-16">
          <div className="flex items-center justify-center space-x-6 mb-6">
            <div className="w-16 h-16 bg-kawaii-pink rounded-full flex items-center justify-center animate-bounce border-4 border-white shadow-lg">
              <span className="text-2xl">🎀</span>
            </div>
            <div className="w-20 h-20 bg-kawaii-purple rounded-full flex items-center justify-center animate-float border-4 border-white shadow-lg">
              <span className="text-3xl">✨</span>
            </div>
            <div className="w-16 h-16 bg-kawaii-peach rounded-full flex items-center justify-center animate-bounce border-4 border-white shadow-lg">
              <span className="text-2xl">💕</span>
            </div>
          </div>
          <p className="font-kawaii text-2xl font-bold text-kawaii-pink-dark">
            Thank you for visiting my kawaii world! ♡
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
