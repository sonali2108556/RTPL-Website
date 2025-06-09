"use client"
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowLeft, Calendar, Users, Target, CheckCircle, Play, TrendingUp, DollarSign, AlertTriangle, BarChart, Globe, Clock, Award } from "lucide-react";
import Link from "next/link";

const AutoguidanceWebApp = () => {
  const keyFeatures = [
    {
      icon: TrendingUp,
      title: "Advanced Financial Forecasting",
      description: "AI-powered predictive analytics with machine learning algorithms for accurate business planning and scenario modeling"
    },
    {
      icon: DollarSign,
      title: "Real-time Budget & Cashflow Management",
      description: "Live monitoring of financial performance with automated variance analysis and budget optimization recommendations"
    },
    {
      icon: AlertTriangle,
      title: "Intelligent Early Warning System",
      description: "Proactive alerts with customizable thresholds, risk assessment, and automated escalation procedures"
    },
    {
      icon: BarChart,
      title: "Dynamic Business Intelligence",
      description: "Interactive dashboards with drill-down capabilities, custom KPIs, and white-label reporting solutions"
    }
  ];

  const outcomes = [
    { metric: "95%", description: "Forecast accuracy achieved" },
    { metric: "15+", description: "Hours saved weekly on analysis" },
    { metric: "6", description: "Months to positive ROI" },
    { metric: "40%", description: "Improved cash flow efficiency" }
  ];

  const techStack = [
    "ASP.NET MVC5", "C#", "Entity Framework", "MS SQL Server", 
    "Bootstrap", "jQuery", "ML Algorithms", "Azure Cloud", "RESTful APIs"
  ];

  const phases = [
    { phase: "Discovery & Analysis", description: "Business requirements analysis, data source identification, forecasting model design" },
    { phase: "Core Platform Development", description: "Built financial forecasting engine and dashboard framework" },
    { phase: "Analytics Integration", description: "Custom ML algorithms and statistical models implementation" },
    { phase: "Dashboard & Reporting", description: "Interactive dashboards with drill-down capabilities" },
    { phase: "Deployment & Optimization", description: "Azure cloud deployment with performance optimization" }
  ];

  return (
    <Layout>
      <HeroSection
        title="Autoguidance – Business Forecasting Web App"
        subtitle="Driving real-time insights and profitability for Australian clients through intelligent automation"
        buttonText="Explore Platform"
        backgroundImage="linear-gradient(135deg, #000000 0%, #1e3a8a 50%, #3b82f6 100%)"
      />

      {/* Case Study Navigation */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <Link href="/case-studies" className="inline-flex items-center text-[#236eb4] hover:text-[#f9b21d] transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-[#236eb4]/10 text-[#236eb4] hover:bg-[#236eb4]/20">
                Business Intelligence
              </Badge>
              <h2 className="text-4xl font-bold text-[#236eb4] mb-6">Intelligent Business Forecasting</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                A comprehensive cloud-based platform for financial forecasting, automated planning, and early warnings 
                to improve cash flow and profitability across multiple business verticals.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-8 h-8 text-[#f9b21d]" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Timeline</h4>
                    <p className="text-gray-600">8 months</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-8 h-8 text-[#089949]" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Team Size</h4>
                    <p className="text-gray-600">10 professionals</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" 
                alt="Business Analytics Platform"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#236eb4] to-[#f9b21d] p-4 rounded-xl text-white">
                <TrendingUp className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#236eb4] mb-8">The Business Challenge</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Manual forecasting processes consuming 40+ hours weekly, limited insights into future performance, 
              and reactive approach to financial risk management.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Manual forecasting processes consuming 40+ hours weekly",
                "Limited insights into future business performance",
                "Reactive approach to financial risk management",
                "Inaccurate manual calculations leading to poor decisions",
                "Delayed decision-making due to outdated reporting",
                "Limited scalability of existing forecasting tools"
              ].map((problem, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-700">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#236eb4] mb-6">Platform Demo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how intelligent forecasting transforms business planning
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <AspectRatio ratio={16 / 9} className="bg-gradient-to-br from-[#236eb4] to-[#089949] rounded-xl overflow-hidden shadow-2xl">
              <div className="flex items-center justify-center h-full">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Business Intelligence Demo</h3>
                  <p className="text-gray-100 max-w-md mx-auto">Experience predictive analytics in action</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[#f9b21d] to-[#e6a01a] text-black px-3 py-1 rounded text-sm font-medium">
                ANALYTICS DEMO
              </div>
            </AspectRatio>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#236eb4] mb-6">Advanced Features & Capabilities</h2>
            <p className="text-xl text-gray-600">Comprehensive business intelligence capabilities</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#f9b21d]/30">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#f9b21d] to-[#e6a01a] rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#236eb4] mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Phases */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#236eb4] mb-6">Implementation Journey</h2>
            <p className="text-xl text-gray-600">Strategic development approach in 5 phases</p>
          </div>
          <div className="max-w-4xl mx-auto">
            {phases.map((phase, index) => (
              <div key={index} className="flex items-start space-x-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#f9b21d] to-[#e6a01a] rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1 pb-8 border-b border-gray-200 last:border-b-0">
                  <h3 className="text-xl font-bold text-[#236eb4] mb-2">Phase {index + 1}: {phase.phase}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-20 bg-gradient-to-r from-[#236eb4] to-[#089949]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Transformative Results</h2>
            <p className="text-xl text-gray-100">Measurable business impact delivered</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {outcomes.map((outcome, index) => (
              <Card key={index} className="text-center bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-[#f9b21d] mb-4">{outcome.metric}</div>
                  <p className="text-white font-medium">{outcome.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#236eb4] mb-6">Technology Stack</h2>
            <p className="text-xl text-gray-600">Modern technologies powering intelligent forecasting</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <Badge 
                key={index}
                variant="outline"
                className="px-6 py-3 text-base bg-white border-2 border-[#236eb4]/20 text-[#236eb4] hover:bg-gradient-to-r hover:from-[#236eb4] hover:to-[#089949] hover:text-white hover:border-transparent transition-all duration-300"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need a forecasting tool like this?"
        description="Transform your business planning with our custom analytics and forecasting solutions designed specifically for your industry."
        buttonText="Let's Build Together"
      />
    </Layout>
  );
};

export default AutoguidanceWebApp;
