"use client"
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Globe, Users, BarChart3, Shield, Clock, Brain, Zap } from "lucide-react";

const AssessmentPortal = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-[#f9b21d]" />,
      title: "AI-Powered Assessment",
      description: "Advanced AI algorithms for intelligent question generation and adaptive testing"
    },
    {
      icon: <Globe className="w-8 h-8 text-[#236eb4]" />,
      title: "Multi-Language Support",
      description: "Full support for English and Arabic with RTL layout optimization"
    },
    {
      icon: <Shield className="w-8 h-8 text-[#236eb4]" />,
      title: "Secure & Proctored",
      description: "Advanced security features with AI-powered remote proctoring"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#f9b21d]" />,
      title: "Real-time Analytics",
      description: "Comprehensive analytics and reporting for data-driven insights"
    },
    {
      icon: <Users className="w-8 h-8 text-[#236eb4]" />,
      title: "Scalable Platform",
      description: "Handle thousands of concurrent users with cloud-native architecture"
    },
    {
      icon: <Clock className="w-8 h-8 text-[#236eb4]" />,
      title: "Instant Results",
      description: "AI-powered instant grading and detailed performance reports"
    }
  ];

  const benefits = [
    "Reduce assessment time by 70% with AI automation",
    "Support for 50+ question types and formats",
    "Advanced anti-cheating mechanisms",
    "Custom branding and white-label solutions",
    "Integration with popular LMS platforms",
    "Mobile-responsive design for any device"
  ];

  return (
    <Layout>

      <div className="hero-section">
        <HeroSection
          title="AI-Powered Assessment Portal"
          subtitle="Revolutionary online assessment platform with intelligent proctoring, multi-language support, and advanced analytics for modern evaluation needs."
          buttonText="Start Free Trial"
          buttonLink="/contact"
          backgroundImage="https://images.unsplash.com/photo-1434030216411-0b793f4b4173"
        />
      </div>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#236eb4] to-[#236eb4] bg-clip-text text-transparent mb-6">
              Intelligent Assessment Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage cutting-edge AI technology to create, deliver, and analyze assessments 
              with unprecedented accuracy and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#236eb4] mb-8">
                Why Choose Our Assessment Portal?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-[#236eb4] mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button 
                  size="lg"
                  className="bg-[#f9b21d] hover:bg-[#e6a01a] text-black font-bold px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.location.href = '/contact'}
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Request Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                alt="Assessment Platform Interface"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#236eb4]/20 to-[#236eb4]/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Language Support Section */}
      <section className="py-20 bg-gradient-to-br from-[#236eb4]/10 to-[#236eb4]/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#236eb4] mb-8">
            Multi-Language Excellence
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Seamlessly conduct assessments in English and Arabic with native RTL support, 
            culturally appropriate content, and localized user experiences.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
              <CardContent className="p-8">
                <Globe className="w-12 h-12 text-[#f9b21d] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">English Support</h3>
                <p className="text-gray-600">Complete English language support with advanced NLP capabilities for intelligent question analysis and automated scoring.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
              <CardContent className="p-8">
                <Globe className="w-12 h-12 text-[#236eb4] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Arabic Support</h3>
                <p className="text-gray-600">Native Arabic language support with RTL layout, cultural context awareness, and region-specific assessment patterns.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CTASection
        title="Transform Your Assessment Process"
        description="Join leading organizations worldwide who trust our AI-powered assessment platform to evaluate talent and drive success."
        buttonText="Get Started Today"
      />
    </Layout>
  );
};

export default AssessmentPortal;
