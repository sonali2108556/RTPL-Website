"use client"
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, BarChart3, Brain, Database, Target } from "lucide-react";

const DataAndAIServices = () => {
  const benefits = [
    {
      icon: <BarChart3 className="w-8 h-8 text-[#236eb4]" />,
      title: "Data-Driven Insights",
      description: "Transform raw data into actionable insights that drive informed business decisions and strategic planning."
    },
    {
      icon: <Brain className="w-8 h-8 text-[#236eb4]" />,
      title: "AI-Powered Analytics",
      description: "Leverage machine learning and AI algorithms to uncover patterns and predict future trends."
    },
    {
      icon: <Database className="w-8 h-8 text-[#236eb4]" />,
      title: "Data Infrastructure",
      description: "Build robust data pipelines and warehouses that scale with your growing data needs."
    },
    {
      icon: <Target className="w-8 h-8 text-[#236eb4]" />,
      title: "Predictive Modeling",
      description: "Create sophisticated models that forecast outcomes and optimize business performance."
    }
  ];

  const services = [
    "Data Strategy & Consulting",
    "Data Pipeline Development",
    "Business Intelligence Solutions",
    "Machine Learning Model Development",
    "Data Visualization & Dashboards",
    "Predictive Analytics",
    "Data Quality & Governance",
    "Real-time Analytics Platforms"
  ];

  return (
    <Layout>
      <HeroSection
        title="Data & AI Services"
        subtitle="Unlock the power of your data with advanced analytics, machine learning, and AI-driven insights that transform your business."
        buttonText="Explore Data Solutions"
        buttonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
        textAlign="left"
      />

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#236eb4] mb-6">
                Turn Data into Competitive Advantage
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our comprehensive data and AI services help you harness the full potential of your data 
                assets to drive innovation, optimize operations, and create new revenue opportunities.
              </p>
              <p className="text-gray-600 mb-8">
                From data strategy to advanced AI implementations, we provide end-to-end solutions 
                that transform how you collect, process, analyze, and act on data across your organization.
              </p>
              <Button className="bg-[#f9b21d] hover:bg-[#e6a01a] text-black font-semibold">
                Start Your Data Journey
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                alt="Data Analytics" 
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
              Accelerate Growth with Data & AI
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Leverage advanced analytics and artificial intelligence to unlock insights, 
              automate processes, and make smarter decisions faster than ever before.
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
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" 
                alt="AI Services" 
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#236eb4]/20 to-transparent rounded-lg"></div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#236eb4] mb-6">
                Comprehensive Data & AI Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our full-stack data and AI services cover everything from initial data strategy 
                to advanced machine learning implementations and ongoing optimization.
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
        title="Ready to Unlock Your Data's Potential?"
        description="Transform your business with intelligent data solutions that drive growth, efficiency, and competitive advantage."
        buttonText="Start Your Data Transformation"
        backgroundColor="bg-gray-900"
      />
    </Layout>
  );
};

export default DataAndAIServices;
