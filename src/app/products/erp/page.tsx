"use client"
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, TrendingUp, Shield, Database, Workflow, BarChart3, Cpu, Zap } from "lucide-react";

const ERP = () => {
  const modules = [
    {
      icon: <Settings className="w-8 h-8 text-[#f9b21d]" />,
      title: "Production Management",
      description: "AI-optimized production planning, scheduling, and real-time monitoring"
    },
    {
      icon: <Database className="w-8 h-8 text-[#089949]" />,
      title: "Inventory Control",
      description: "Smart inventory management with predictive analytics and automated reordering"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#236eb4]" />,
      title: "Financial Management",
      description: "Comprehensive financial modules with AI-powered forecasting and reporting"
    },
    {
      icon: <Workflow className="w-8 h-8 text-[#f9b21d]" />,
      title: "Supply Chain",
      description: "End-to-end supply chain optimization with intelligent vendor management"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#089949]" />,
      title: "Quality Control",
      description: "Advanced quality management with AI-powered defect detection and analysis"
    },
    {
      icon: <Shield className="w-8 h-8 text-[#236eb4]" />,
      title: "Compliance & Safety",
      description: "Automated compliance monitoring and safety management systems"
    }
  ];

  const benefits = [
    "30% reduction in operational costs",
    "50% improvement in production efficiency",
    "Real-time visibility across all operations",
    "Predictive maintenance and quality control",
    "Seamless integration with existing systems",
    "Industry 4.0 ready with IoT connectivity"
  ];

  return (
    <Layout>
      <HeroSection
        title="AI-Powered Manufacturing ERP"
        subtitle="Next-generation ERP solution designed specifically for manufacturing enterprises, featuring intelligent automation, predictive analytics, and seamless Industry 4.0 integration."
        buttonText="Schedule Demo"
        buttonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1565793298595-6a879b1d9492"
      />

      {/* Modules Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#236eb4] to-[#089949] bg-clip-text text-transparent mb-6">
              Comprehensive ERP Modules
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Integrated modules powered by AI to streamline every aspect of your manufacturing operations 
              from production planning to financial management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {module.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{module.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{module.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Manufacturing Dashboard"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#236eb4]/20 to-[#089949]/20 rounded-2xl"></div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#236eb4] mb-8">
                Transform Manufacturing Operations
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our AI-powered ERP solution revolutionizes manufacturing processes with intelligent 
                automation, predictive insights, and seamless integration capabilities.
              </p>
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <Cpu className="w-6 h-6 text-[#089949] mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#f9b21d] to-[#e6a01a] hover:from-[#e6a01a] hover:to-[#d4940f] text-black font-bold px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() => {
                  if (window.Calendly) {
                    window.Calendly.initPopupWidget({
                      url: 'https://calendly.com/disamina?hide_gdpr_banner=1',
                    });
                  } else {
                    console.error('Calendly script not loaded.');
                  }
                  return false;
                }}
              >
                <Zap className="w-5 h-5 mr-2" />
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Industry 4.0 Section */}
      <section className="py-20 bg-gradient-to-br from-[#236eb4]/10 to-[#089949]/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#236eb4] mb-8">
            Industry 4.0 Ready
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Built for the future of manufacturing with IoT connectivity, machine learning algorithms, 
            and smart factory integration capabilities.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
              <CardContent className="p-8">
                <Workflow className="w-12 h-12 text-[#f9b21d] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Smart Automation</h3>
                <p className="text-gray-600">AI-driven process automation with machine learning for continuous optimization and efficiency improvements.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
              <CardContent className="p-8">
                <BarChart3 className="w-12 h-12 text-[#089949] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Predictive Analytics</h3>
                <p className="text-gray-600">Advanced analytics for demand forecasting, maintenance scheduling, and quality prediction.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
              <CardContent className="p-8">
                <Cpu className="w-12 h-12 text-[#236eb4] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">IoT Integration</h3>
                <p className="text-gray-600">Seamless connectivity with industrial IoT devices for real-time monitoring and control.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CTASection
        title="Modernize Your Manufacturing"
        description="Join industry leaders who have transformed their operations with our intelligent ERP solution. Experience the future of manufacturing today."
        buttonText="Start Your Journey"
      />
    </Layout>
  );
};

export default ERP;
