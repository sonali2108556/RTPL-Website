import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Globe } from "lucide-react";
import Link from "next/link";

const IndustriesSection = () => {
  const industries = [
    {
      name: "Banking & Finance (BFSI)",
      description: "AI-powered financial intelligence with autonomous fraud detection, predictive risk analytics, and intelligent customer insights",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
      // projects: "150+ AI Projects",
      link: "/industries/banking-finance"
    },
    {
      name: "Healthcare",
      description: "Intelligent healthcare solutions with AI diagnostics, predictive patient care, and autonomous clinical decision support",
      image: "/healthcare.webp",
      // projects: "120+ AI Projects",
      link: "/industries/healthcare"
    },
    {
      name: "Logistics",
      description: "Smart supply chain optimization with AI-driven predictive logistics, autonomous inventory management, and intelligent routing",
      image: "/logistics.jpg",
      // projects: "90+ AI Projects",
      link: "/industries/logistics"
    },
    {
      name: "Manufacturing",
      description: "Industry 4.0 solutions with intelligent automation, predictive maintenance, and AI-driven quality control systems",
      image: "https://images.unsplash.com/photo-1565043666747-69f6646db940",
      // projects: "80+ AI Projects",
      link: "/industries/manufacturing"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#236eb4]/10 rounded-full text-sm font-medium mb-6">
            <Globe className="w-4 h-4 mr-2 text-[#236eb4]" />
            <span className="text-[#236eb4]">AI Across Industries</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#236eb4] mb-6">
            Industry-Specific AI Intelligence
          </h2>
          <p className="text-xl text-gray-600">
            Tailored AI solutions that understand your industry's unique challenges and opportunities
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {industries.map((industry, index) => (
            <Link key={index} href={industry.link} className="block">
              <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:border-[#f9b21d]/50 h-full">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-semibold">{industry.name}</div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed">{industry.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link href="/industries">
            <Button className="bg-gradient-to-r from-[#f9b21d] to-[#e6a01a] hover:from-[#e6a01a] hover:to-[#d4940f] text-black font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Explore Industry Solutions <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
