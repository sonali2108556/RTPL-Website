"use client"
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Cloud, Shield, Zap, DollarSign } from "lucide-react";

const CloudServices = () => {
  const benefits = [
    {
      icon: <Cloud className="w-8 h-8 text-[#236eb4]" />,
      title: "Seamless Migration",
      description: "Migrate your applications and data to the cloud with minimal downtime and maximum efficiency."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#236eb4]" />,
      title: "Enhanced Security",
      description: "Implement enterprise-grade security measures and compliance standards in the cloud."
    },
    {
      icon: <Zap className="w-8 h-8 text-[#236eb4]" />,
      title: "Improved Performance",
      description: "Boost application performance and reliability with cloud-native architectures."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-[#236eb4]" />,
      title: "Cost Optimization",
      description: "Reduce infrastructure costs while improving scalability and operational efficiency."
    }
  ];

  const services = [
    "Cloud Strategy & Planning",
    "Application Migration",
    "Infrastructure as Code",
    "Container Orchestration",
    "Serverless Architecture",
    "Cloud Security Implementation",
    "DevOps & CI/CD Pipelines",
    "Performance Monitoring & Optimization"
  ];

  return (
    <Layout>
      <HeroSection
        title="Cloud Services"
        subtitle="Accelerate your digital transformation with comprehensive cloud solutions that scale with your business needs."
        buttonText="Explore Cloud Solutions"
        buttonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
        textAlign="left"
      />

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#236eb4] mb-6">
                Cloud-First Solutions for Modern Business
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our comprehensive cloud services help you harness the power of cloud computing to 
                drive innovation, improve efficiency, and reduce costs while maintaining the highest 
                levels of security and performance.
              </p>
              <p className="text-gray-600 mb-8">
                From strategy and migration to optimization and management, we provide end-to-end 
                cloud solutions across all major platforms including AWS, Azure, and Google Cloud.
              </p>
              <Button className="bg-[#f9b21d] hover:bg-[#e6a01a] text-black font-semibold">
                Start Your Cloud Journey
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8" 
                alt="Cloud Computing" 
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
              Transform Your Business with Cloud
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Unlock the benefits of cloud computing with solutions designed to improve agility, 
              reduce costs, and enable innovation at scale.
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
                src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                alt="Cloud Services" 
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#236eb4]/20 to-transparent rounded-lg"></div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#236eb4] mb-6">
                Comprehensive Cloud Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our cloud services cover the entire spectrum of cloud adoption, from initial 
                strategy and planning to ongoing optimization and management.
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
        title="Ready to Embrace the Cloud?"
        description="Transform your infrastructure and accelerate innovation with our comprehensive cloud services and expertise."
        buttonText="Start Cloud Migration"
        backgroundColor="bg-gray-900"
      />
    </Layout>
  );
};

export default CloudServices;
