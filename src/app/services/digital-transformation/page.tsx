"use client"
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Workflow, Users, Target, TrendingUp } from "lucide-react";

const DigitalTransformation = () => {
  const benefits = [
    {
      icon: <Workflow className="w-8 h-8 text-[#236eb4]" />,
      title: "Process Automation",
      description: "Streamline operations and eliminate manual tasks with intelligent automation solutions."
    },
    {
      icon: <Users className="w-8 h-8 text-[#236eb4]" />,
      title: "Enhanced Collaboration",
      description: "Enable seamless collaboration across teams with modern digital tools and platforms."
    },
    {
      icon: <Target className="w-8 h-8 text-[#236eb4]" />,
      title: "Strategic Alignment",
      description: "Align technology initiatives with business objectives for maximum impact and ROI."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#236eb4]" />,
      title: "Competitive Edge",
      description: "Stay ahead of the competition with cutting-edge digital capabilities and innovation."
    }
  ];

  const services = [
    "Digital Strategy Development",
    "Business Process Optimization",
    "Technology Stack Modernization",
    "Change Management",
    "Employee Training & Adoption",
    "Performance Measurement",
    "Continuous Improvement",
    "Innovation Framework Implementation"
  ];

  return (
    <Layout>
      <HeroSection
        title="Digital Transformation"
        subtitle="Navigate the digital landscape with comprehensive transformation strategies that modernize your business and drive sustainable growth."
        buttonText="Start Your Transformation"
        buttonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1560472354-b33ff0c44a43"
        textAlign="left"
      />

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#236eb4] mb-6">
                Reimagine Your Business for the Digital Age
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our digital transformation services help organizations navigate the complexities of 
                digital change, ensuring successful adoption of new technologies and processes that 
                drive business growth and operational excellence.
              </p>
              <p className="text-gray-600 mb-8">
                From strategic planning to implementation and change management, we guide you through 
                every step of your digital transformation journey with proven methodologies and expertise.
              </p>
              <Button className="bg-[#f9b21d] hover:bg-[#e6a01a] text-black font-semibold">
                Begin Your Journey
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1553664900-0a9e0f73067b" 
                alt="Digital Transformation" 
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
              Drive Success Through Digital Innovation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your organization with strategic digital initiatives that improve efficiency, 
              enhance customer experiences, and create new opportunities for growth.
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                alt="Transformation Services" 
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#236eb4]/20 to-transparent rounded-lg"></div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#236eb4] mb-6">
                End-to-End Transformation Services
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our comprehensive approach to digital transformation ensures successful change 
                management and sustainable adoption of new technologies and processes.
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
        title="Ready to Transform Your Business?"
        description="Embark on your digital transformation journey with expert guidance and proven strategies for lasting success."
        buttonText="Start Transformation"
        backgroundColor="bg-gray-900"
      />
    </Layout>
  );
};

export default DigitalTransformation;
