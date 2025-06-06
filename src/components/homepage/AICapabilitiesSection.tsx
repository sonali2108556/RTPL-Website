
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Brain, TrendingUp, Zap, Shield } from "lucide-react";

const AICapabilitiesSection = () => {
  const aiCapabilities = [
    {
      title: "Autonomous Intelligence",
      description: "Self-learning AI systems that operate independently",
      icon: Brain
    },
    {
      title: "Predictive Analytics",
      description: "AI-powered insights that anticipate future outcomes",
      icon: TrendingUp
    },
    {
      title: "Intelligent Automation",
      description: "Smart workflows that adapt and optimize continuously",
      icon: Zap
    },
    {
      title: "Cognitive Security",
      description: "AI-driven threat detection and autonomous response",
      icon: Shield
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#f9b21d]/10 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2 text-[#f9b21d]" />
            <span className="text-[#f9b21d]">Powered by Advanced AI</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#236eb4] mb-6">
            Next-Generation AI Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of business automation with our cutting-edge AI technologies
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aiCapabilities.map((capability, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 group border-2 hover:border-[#f9b21d]/50">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#f9b21d] to-[#e6a01a] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <capability.icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-[#236eb4] mb-3">{capability.title}</h3>
                <p className="text-gray-600">{capability.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AICapabilitiesSection;
