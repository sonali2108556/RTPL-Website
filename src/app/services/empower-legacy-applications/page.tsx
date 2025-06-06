"use client"
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, RefreshCw, Cloud, Lock, Zap } from "lucide-react";

const EmpowerLegacyApplications = () => {
  const benefits = [
    {
      icon: <RefreshCw className="w-8 h-8 text-[#236eb4]" />,
      title: "Seamless Modernization",
      description: "Transform legacy systems without disrupting your business operations or losing valuable data."
    },
    {
      icon: <Cloud className="w-8 h-8 text-[#236eb4]" />,
      title: "Cloud Integration",
      description: "Move your legacy applications to modern cloud infrastructure for better scalability and performance."
    },
    {
      icon: <Lock className="w-8 h-8 text-[#236eb4]" />,
      title: "Enhanced Security",
      description: "Implement modern security protocols and compliance standards to protect your critical business data."
    },
    {
      icon: <Zap className="w-8 h-8 text-[#236eb4]" />,
      title: "Improved Performance",
      description: "Optimize legacy systems for better speed, reliability, and user experience across all platforms."
    }
  ];

  const approaches = [
    "Legacy System Assessment",
    "API Development & Integration",
    "Database Modernization",
    "Cloud Migration Services",
    "Security Enhancement",
    "Performance Optimization",
    "User Interface Modernization",
    "Continuous Monitoring & Support"
  ];

  return (
    <Layout>
      <HeroSection
        title="Empower Legacy Applications"
        subtitle="Breathe new life into your existing systems with modern technology while preserving your valuable business logic and data."
        buttonText="Modernize Your Systems"
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
                Transform Without Disruption
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our legacy application modernization services help you leverage the value of your existing 
                systems while preparing them for the future. We ensure minimal disruption to your business 
                operations while maximizing the benefits of modern technology.
              </p>
              <p className="text-gray-600 mb-8">
                From API integration to cloud migration, we provide comprehensive solutions that extend 
                the life of your legacy systems and improve their functionality, security, and performance.
              </p>
              <Button className="bg-[#f9b21d] hover:bg-[#e6a01a] text-black font-semibold">
                Start Your Modernization Journey
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                alt="Legacy Modernization" 
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
              Why Modernize Your Legacy Systems?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Unlock the potential of your existing investments while preparing your systems 
              for future growth and technological advancement.
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

      {/* Approaches Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="Modernization Process" 
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#236eb4]/20 to-transparent rounded-lg"></div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#236eb4] mb-6">
                Our Modernization Approach
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We follow a systematic approach to legacy system modernization that ensures 
                minimal risk and maximum value preservation throughout the transformation process.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {approaches.map((approach, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#f9b21d] flex-shrink-0" />
                    <span className="text-gray-700">{approach}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Modernize Your Legacy Systems?"
        description="Let's discuss how we can help you transform your existing applications into modern, efficient, and future-ready solutions."
        buttonText="Get Modernization Roadmap"
        backgroundColor="bg-gray-900"
      />
    </Layout>
  );
};

export default EmpowerLegacyApplications;
