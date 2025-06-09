"use client"
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Rocket, Target, Zap, Brain, TrendingUp } from "lucide-react";

const Innovation = () => {
  const innovationServices = [
    {
      title: "Strategic Innovation Consulting",
      description: "Identify breakthrough opportunities and develop innovation strategies that align with your business objectives.",
      icon: Target
    },
    {
      title: "Technology Roadmapping",
      description: "Create comprehensive technology roadmaps that guide your digital transformation journey.",
      icon: TrendingUp
    },
    {
      title: "Emerging Technology Assessment",
      description: "Evaluate and integrate cutting-edge technologies like AI, IoT, and blockchain into your business model.",
      icon: Brain
    },
    {
      title: "Innovation Workshops",
      description: "Facilitate collaborative sessions to generate and validate innovative ideas with your team.",
      icon: Lightbulb
    },
    {
      title: "Rapid Prototyping",
      description: "Quickly develop and test proof-of-concepts to validate innovative solutions before full implementation.",
      icon: Rocket
    },
    {
      title: "Digital Innovation Labs",
      description: "Establish dedicated innovation environments to continuously explore and develop new capabilities.",
      icon: Zap
    }
  ];

  const industries = [
    {
      name: "Financial Services",
      description: "Drive fintech innovation with blockchain, AI-powered analytics, and digital banking solutions.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3"
    },
    {
      name: "Healthcare",
      description: "Transform patient care through telemedicine, AI diagnostics, and digital health platforms.",
      image: "/healthcare.webp"
    },
    {
      name: "Manufacturing",
      description: "Implement Industry 4.0 solutions with IoT, predictive maintenance, and smart automation.",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6"
    }
  ];

  return (
    <Layout>

      <HeroSection
        title="Innovation"
        subtitle="Driving breakthrough solutions and strategic technology advancement that redefine what's possible for your business"
        buttonText="Innovate With Us"
        backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
      />

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-[#236eb4] mb-6">
                  Pioneering Tomorrow's Solutions Today
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our Innovation practice focuses on identifying and implementing breakthrough technologies 
                  that drive competitive advantage. We help organizations navigate the complexities of 
                  digital transformation by introducing cutting-edge solutions that are both visionary and practical.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Through strategic innovation consulting, emerging technology assessment, and rapid prototyping, 
                  we ensure your business stays ahead of the curve in an ever-evolving technological landscape.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa" 
                  alt="Innovation Process"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#ff0100]/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#236eb4] mb-6">
              Innovation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive innovation services designed to transform your business through strategic technology advancement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovationServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow group">
                <CardContent className="p-6">
                  <service.icon className="h-12 w-12 text-[#ff0100] mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-[#236eb4] mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#236eb4] mb-6">
              Innovation Across Industries
            </h2>
            <p className="text-xl text-gray-600">
              Tailored innovation strategies for diverse industry verticals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{industry.name}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Innovate?"
        description="Let's explore how our innovation expertise can drive breakthrough solutions for your business challenges."
        buttonText="Start Your Innovation Journey"
      />
    </Layout>
  );
};

export default Innovation;
