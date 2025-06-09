"use client"
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowLeft, Calendar, Users, Target, CheckCircle, Play, Database, Video, BookOpen, Award, Shield, Clock } from "lucide-react";
import Link from "next/link";

const CRMOnlineExamSystem = () => {
  const keyFeatures = [
    {
      icon: Database,
      title: "Comprehensive CRM with Candidate Database",
      description: "Advanced candidate management system with enrollment tracking, progress monitoring, and automated communication workflows"
    },
    {
      icon: Video,
      title: "Secure Online Exams with Live Proctoring",
      description: "Multi-camera webcam monitoring, screen recording, browser lockdown, and AI-powered suspicious activity detection"
    },
    {
      icon: BookOpen,
      title: "Intelligent Question Bank Management",
      description: "Dynamic question pools with randomization, difficulty grading, multimedia support, and plagiarism detection"
    },
    {
      icon: Award,
      title: "Automated Scoring & Digital Certification",
      description: "Instant results processing, detailed analytics, customizable certificates, and blockchain verification"
    }
  ];

  const outcomes = [
    { metric: "90%", description: "Reduction in manual work" },
    { metric: "95%", description: "Fraud incidents prevented" },
    { metric: "1000+", description: "Monthly exams conducted" },
    { metric: "99.9%", description: "System uptime achieved" }
  ];

  const techStack = [
    "ASP.NET MVC5", "Angular", "C#", "MS SQL Server", 
    "Bootstrap", "SignalR", "WebRTC", "OAuth 2.0", "Azure"
  ];

  const phases = [
    { phase: "Requirements Analysis", description: "Security training workflow analysis, exam requirements, and compliance needs" },
    { phase: "CRM Development", description: "Built comprehensive candidate management and enrollment system" },
    { phase: "Exam Engine", description: "Secure online testing with question banks and randomization" },
    { phase: "Proctoring Integration", description: "Live monitoring, recording, and fraud detection features" },
    { phase: "Certification System", description: "Automated scoring, certificates, and analytics dashboard" }
  ];

  return (
    <Layout>
      <HeroSection
        title="CRM & Exam Platform for Aman Security Training"
        subtitle="From Excel to automated online exams with comprehensive candidate management and live proctoring"
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
                Education Technology
              </Badge>
              <h2 className="text-4xl font-bold text-[#236eb4] mb-6">Automated Training & Assessment</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                End-to-end platform covering candidate registration to certification with built-in examination tools, 
                live monitoring capabilities, and comprehensive CRM functionality.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-8 h-8 text-[#f9b21d]" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Timeline</h4>
                    <p className="text-gray-600">10 months</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-8 h-8 text-[#089949]" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Team Size</h4>
                    <p className="text-gray-600">12 professionals</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173" 
                alt="Online Exam Platform"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#236eb4] to-[#f9b21d] p-4 rounded-xl text-white">
                <Shield className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#236eb4] mb-8">The Challenge</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Manual exam scheduling consuming 20+ hours weekly, high risk of fraud, and lack of real-time 
              monitoring and analytics capabilities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Manual exam scheduling consuming 20+ hours weekly",
                "High risk of exam fraud and security breaches",
                "Lack of real-time monitoring and analytics",
                "Excel-based candidate management inefficiencies",
                "No centralized certification system",
                "Poor candidate experience and engagement"
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
              See how our platform transforms security training and examination
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <AspectRatio ratio={16 / 9} className="bg-gradient-to-br from-[#236eb4] to-[#089949] rounded-xl overflow-hidden shadow-2xl">
              <div className="flex items-center justify-center h-full">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Training Platform Demo</h3>
                  <p className="text-gray-100 max-w-md mx-auto">Experience automated examination system</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[#f9b21d] to-[#e6a01a] text-black px-3 py-1 rounded text-sm font-medium">
                EDUCATION TECH
              </div>
            </AspectRatio>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#236eb4] mb-6">Advanced Features & Security</h2>
            <p className="text-xl text-gray-600">Comprehensive examination and CRM capabilities</p>
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
            <p className="text-xl text-gray-100">Measurable impact on training operations</p>
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
            <p className="text-xl text-gray-600">Modern technologies powering secure examinations</p>
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
        title="Looking to build an online exam platform?"
        description="Create a secure, scalable examination system with integrated CRM and advanced proctoring capabilities."
        buttonText="Get Started Today"
      />
    </Layout>
  );
};

export default CRMOnlineExamSystem;
