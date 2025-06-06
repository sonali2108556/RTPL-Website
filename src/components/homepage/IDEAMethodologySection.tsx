
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, Lightbulb, Palette, Cpu } from "lucide-react";
import Link from "next/link";

const IDEAMethodologySection = () => {
  const ideaMethodologies = [
    {
      title: "Innovation",
      description: "Revolutionary AI solutions that redefine business possibilities through autonomous intelligence, predictive analytics, and transformative automation.",
      icon: Lightbulb,
      path: "/idea-methodology/innovation"
    },
    {
      title: "Design",
      description: "Human-centric AI experiences that seamlessly integrate intelligent automation with intuitive interfaces for maximum user adoption.",
      icon: Palette,
      path: "/idea-methodology/design"
    },
    {
      title: "Engineering",
      description: "Robust, scalable AI architectures built with cutting-edge technologies, ensuring high-performance intelligent systems that evolve with your business.",
      icon: Cpu,
      path: "/idea-methodology/engineering"
    },
    {
      title: "Artificial Intelligence",
      description: "Advanced AI agents, machine learning models, and cognitive automation that drive autonomous decision-making and intelligent operations.",
      icon: Brain,
      path: "/idea-methodology/artificial-intelligence"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#236eb4]/10 rounded-full text-sm font-medium mb-6">
            <Brain className="w-4 h-4 mr-2 text-[#236eb4]" />
            <span className="text-[#236eb4]">Our AI Methodology</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#236eb4] mb-6">
            IDEA: AI-First Development Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven methodology for delivering transformative AI solutions through Innovation, Design, Engineering, and Artificial Intelligence
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ideaMethodologies.map((methodology, index) => (
            <Link href={methodology.path} key={index}>
              <Card className="text-center hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full border-2 hover:border-[#f9b21d]/50 overflow-hidden">
                <CardContent className="p-8 relative">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#f9b21d]/10 to-transparent rounded-bl-3xl"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#f9b21d] to-[#e6a01a] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <methodology.icon className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-[#236eb4] mb-4 group-hover:text-[#f9b21d] transition-colors">{methodology.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{methodology.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/idea-methodology">
            <Button className="bg-gradient-to-r from-[#f9b21d] to-[#e6a01a] hover:from-[#e6a01a] hover:to-[#d4940f] text-black font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Explore IDEA Methodology <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IDEAMethodologySection;
