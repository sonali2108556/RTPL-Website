
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Brain } from "lucide-react";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
  backgroundColor?: string;
}

const CTASection = ({
  title,
  description,
  buttonText,
  buttonLink = "/contact",
  backgroundColor = "bg-gray-900",

}: CTASectionProps) => {
  return (
    <div className="p-2">
      <section className={`${backgroundColor} border-2 border-gray-800 rounded-[20px] py-20 relative overflow-hidden cta-section`}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-[#f9b21d]/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-32 w-40 h-40 bg-white/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-10 right-16 w-28 h-28 bg-[#f9b21d]/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden">
          <Sparkles className="absolute top-16 left-20 w-6 h-6 text-white/20 animate-bounce" style={{ animationDelay: '0s' }} />
          <Brain className="absolute top-32 right-32 w-8 h-8 text-[#f9b21d]/30 animate-bounce" style={{ animationDelay: '1s' }} />
          <Zap className="absolute bottom-32 left-24 w-7 h-7 text-white/25 animate-bounce" style={{ animationDelay: '2s' }} />
          <Sparkles className="absolute bottom-16 right-24 w-5 h-5 text-[#f9b21d]/40 animate-bounce" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-[#c9c9ce] mb-6 leading-tight">
            {title}
          </h2>

          <p className="text-xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>

          <div className="flex justify-center items-center">
            <Button
              size="lg"
              className="bg-[#f9b21d] hover:bg-[#e6a01a] text-black font-bold px-10 py-4 text-lg rounded-xl shadow-2xl hover:shadow-[#f9b21d]/25 transition-all duration-300 transform hover:scale-105 group"
              onClick={() => window.location.href = buttonLink}
            >
              <Sparkles className="w-5 h-5 mr-3 group-hover:animate-spin" />
              {buttonText}
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTASection;
