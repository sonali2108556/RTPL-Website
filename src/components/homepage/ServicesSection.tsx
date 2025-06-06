
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

const ServicesSection = () => {
  const services = [
    {
      title: "AI-Driven Development",
      description: "Accelerate software development with autonomous AI agents, intelligent code generation, and predictive development workflows",
      icon: "🤖",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      gradient: "from-blue-500 to-purple-600",
      link: "/services/ai-driven-development"
    },
    {
      title: "AI Agents & Copilots",
      description: "Deploy intelligent AI assistants that understand context, learn continuously, and enhance human productivity across all business functions",
      icon: "🚀",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      gradient: "from-green-500 to-teal-600",
      link: "/services/ai-agents-and-copilots"
    },
    {
      title: "Intelligent Legacy Modernization",
      description: "Transform legacy systems with AI-powered automation, smart data migration, and intelligent process optimization",
      icon: "⚡",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd",
      gradient: "from-orange-500 to-red-600",
      link: "/services/empower-legacy-applications"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-black services-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#f9b21d]/20 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2 text-[#f9b21d]" />
            <span className="text-[#f9b21d]">AI-Powered Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#c9c9ce] mb-6">
            Intelligent Solutions That Drive Results
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI services designed to automate, optimize, and revolutionize your business operations
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Link key={index} href={service.link} className="block">
              <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:border-[#f9b21d]/50 h-full">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-80`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="text-4xl mb-3 filter drop-shadow-lg">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-2 text-white">{service.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link href="/services">
            <Button className="bg-gradient-to-r from-[#f9b21d] to-[#e6a01a] hover:from-[#e6a01a] hover:to-[#d4940f] text-black font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Explore All AI Services <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
