import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Brain } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
  textAlign?: 'left' | 'center';
}

const HeroSection = ({ 
  title, 
  subtitle, 
  buttonText = "Get Started", 
  buttonLink = "/contact",
  backgroundImage = "linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)",
  textAlign = 'center'
}: HeroSectionProps) => {
  // Always use gradient background now
  const gradientBackground = "linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)";
  
  return (
    <section 
      className="relative min-h-screen flex items-center bg-cover bg-center overflow-hidden"
      style={{ background: gradientBackground }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#f9b21d]/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-[#089949]/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-40 w-40 h-40 bg-[#236eb4]/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gray-200/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <Sparkles className="absolute top-32 left-16 w-6 h-6 text-[#f9b21d]/30 animate-bounce" style={{animationDelay: '0s'}} />
        <Brain className="absolute top-48 right-24 w-8 h-8 text-[#089949]/30 animate-bounce" style={{animationDelay: '1s'}} />
        <Zap className="absolute bottom-48 left-32 w-7 h-7 text-[#236eb4]/30 animate-bounce" style={{animationDelay: '2s'}} />
        <Sparkles className="absolute bottom-32 right-40 w-5 h-5 text-gray-400/30 animate-bounce" style={{animationDelay: '1.5s'}} />
      </div>

      <div className={`relative z-10 text-gray-900 max-w-6xl mx-auto px-4 ${textAlign === 'left' ? 'text-left' : 'text-center'}`}>
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-gray-100/80 backdrop-blur-md rounded-full text-sm font-medium mb-8 animate-fade-in border border-gray-200">
          <Sparkles className="w-4 h-4 mr-2 text-[#f9b21d]" />
          <span className="text-gray-700">AI-Powered Innovation</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in leading-tight">
          <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
            {title}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 animate-fade-in text-gray-700 leading-relaxed max-w-4xl mx-auto">
          {subtitle}
        </p>
        
        {buttonText && (
          <div className="flex justify-center items-center animate-fade-in">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#f9b21d] to-[#e6a01a] hover:from-[#e6a01a] hover:to-[#d4940f] text-black font-bold px-8 py-4 text-lg rounded-xl shadow-2xl hover:shadow-[#f9b21d]/25 transition-all duration-300 transform hover:scale-105 group"
              onClick={() => window.location.href = buttonLink}
            >
              <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin" />
              {buttonText}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        )}

        {/* Stats Pills */}
        <div className="flex flex-wrap justify-center gap-6 mt-16 animate-fade-in">
          <div className="bg-gray-100/80 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200">
            <span className="text-2xl font-bold text-[#f9b21d]">500+</span>
            <span className="text-sm ml-2 text-gray-700">AI Projects</span>
          </div>
          <div className="bg-gray-100/80 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200">
            <span className="text-2xl font-bold text-[#f9b21d]">99.5%</span>
            <span className="text-sm ml-2 text-gray-700">Success Rate</span>
          </div>
          <div className="bg-gray-100/80 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200">
            <span className="text-2xl font-bold text-[#f9b21d]">15+</span>
            <span className="text-sm ml-2 text-gray-700">Years Innovation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
