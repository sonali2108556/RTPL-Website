"use client"
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Cog, Database, Shield, Zap } from "lucide-react";

const CustomPlatformDevelopment = () => {
  const benefits = [
    {
      icon: <Cog className="w-8 h-8 text-[#236eb4]" />,
      title: "Tailored Solutions",
      description: "Build platforms specifically designed for your unique business requirements and workflows."
    },
    {
      icon: <Database className="w-8 h-8 text-[#236eb4]" />,
      title: "Scalable Architecture",
      description: "Design robust, scalable platforms that grow with your business and handle increasing demands."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#236eb4]" />,
      title: "Enterprise Security",
      description: "Implement advanced security measures and compliance standards for enterprise-grade protection."
    },
    {
      icon: <Zap className="w-8 h-8 text-[#236eb4]" />,
      title: "High Performance",
      description: "Optimize platforms for speed, reliability, and exceptional user experience across all devices."
    }
  ];

  const capabilities = [
    "Enterprise Platform Development",
    "API Design & Development",
    "Database Architecture & Optimization",
    "Third-party System Integration",
    "User Management & Authentication",
    "Advanced Analytics & Reporting",
    "Mobile-responsive Design",
    "Ongoing Support & Maintenance"
  ];

  return (
    <Layout>
      <HeroSection
        title="Custom Platform Development"
        subtitle="Build powerful, scalable platforms tailored to your specific business needs with cutting-edge technology and best practices."
        buttonText="Build Your Platform"
        buttonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1518770660439-4636190af475"
        textAlign="left"
      />

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#236eb4] mb-6">
                Platforms Built for Your Success
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our custom platform development services help you create sophisticated, enterprise-grade 
                solutions that address your specific business challenges and drive operational efficiency.
              </p>
              <p className="text-gray-600 mb-8">
                From concept to deployment and beyond, we work closely with you to understand your 
                requirements and build platforms that deliver exceptional value and competitive advantage.
              </p>
              <Button className="bg-[#f9b21d] hover:bg-[#e6a01a] text-black font-semibold">
                Discuss Your Platform
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                alt="Platform Development" 
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
              Why Choose Custom Platform Development?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get exactly what you need with platforms designed from the ground up to match 
              your business processes, goals, and future growth plans.
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

      {/* Capabilities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                alt="Development Capabilities" 
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#236eb4]/20 to-transparent rounded-lg"></div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#236eb4] mb-6">
                Comprehensive Development Capabilities
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our team brings extensive experience in building complex platforms across various 
                industries, ensuring your solution is robust, scalable, and future-ready.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#f9b21d] flex-shrink-0" />
                    <span className="text-gray-700">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Build Your Custom Platform?"
        description="Let's create a powerful, scalable platform that perfectly fits your business needs and drives your success forward."
        buttonText="Start Your Platform Project"
        backgroundColor="bg-gray-900"
      />
    </Layout>
  );
};

export default CustomPlatformDevelopment;
