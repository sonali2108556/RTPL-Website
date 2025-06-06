"use client"
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Rocket, Target, Layers, TrendingUp } from "lucide-react";

const StartupSolutions = () => {
  const benefits = [
    {
      icon: <Rocket className="w-8 h-8 text-[#236eb4]" />,
      title: "Rapid MVP Development",
      description: "Get your product to market quickly with our agile development approach and proven methodologies."
    },
    {
      icon: <Target className="w-8 h-8 text-[#236eb4]" />,
      title: "Market Validation",
      description: "Test your ideas with real users and iterate based on feedback to ensure product-market fit."
    },
    {
      icon: <Layers className="w-8 h-8 text-[#236eb4]" />,
      title: "Scalable Architecture",
      description: "Build on solid foundations that can grow with your business and handle increasing user demands."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#236eb4]" />,
      title: "Growth Acceleration",
      description: "Leverage technology to accelerate your growth and gain competitive advantages in your market."
    }
  ];

  const services = [
    "MVP Development & Prototyping",
    "Product Strategy & Roadmapping",
    "Technical Architecture Design",
    "Cloud Infrastructure Setup",
    "Mobile App Development",
    "Web Application Development",
    "API Development & Integration",
    "Analytics & Performance Monitoring"
  ];

  return (
    <Layout>
      <HeroSection
        title="Startup Solutions"
        subtitle="Transform your innovative ideas into market-ready products with our comprehensive startup development services."
        buttonText="Launch Your Startup"
        buttonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1559136555-9303baea8ebd"
        textAlign="left"
      />

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#236eb4] mb-6">
                From Idea to Market Success
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We partner with startups to turn innovative ideas into successful products. Our comprehensive 
                development services help you navigate the challenges of building and scaling a technology startup.
              </p>
              <p className="text-gray-600 mb-8">
                From initial concept to market launch and beyond, we provide the technical expertise, 
                strategic guidance, and development resources you need to build a thriving business.
              </p>
              <Button className="bg-[#f9b21d] hover:bg-[#e6a01a] text-black font-semibold">
                Start Your Journey
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1553664900-0a9e0f73067b" 
                alt="Startup Development" 
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#236eb4]/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#236eb4] mb-4">
              Accelerate Your Startup Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our startup solutions are designed to help you move fast, validate ideas quickly, 
              and build products that users love while maintaining technical excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#236eb4] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                alt="Startup Services" 
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#236eb4]/20 to-transparent rounded-lg"></div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#236eb4] mb-6">
                Comprehensive Startup Services
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                From initial ideation to market launch and scaling, we provide end-to-end 
                development services tailored specifically for startup needs and timelines.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#f9b21d] flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Build Your Startup?"
        description="Let's transform your innovative ideas into a successful product that captures the market and drives growth."
        buttonText="Get Started Today"
        backgroundColor="bg-gray-900"
      />
    </Layout>
  );
};

export default StartupSolutions;
