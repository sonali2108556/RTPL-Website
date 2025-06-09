"use client"
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowLeft, Calendar, Users, Target, CheckCircle, Play, Heart, Activity, Clock, Shield, Users2, Brain } from "lucide-react";
import Link from "next/link";

const Medina = () => {
  const keyFeatures = [
    {
      icon: Heart,
      title: "AI-Powered Patient Management",
      description: "Intelligent patient data analysis with predictive health insights and automated care recommendations"
    },
    {
      icon: Activity,
      title: "Smart Appointment Scheduling",
      description: "AI-driven scheduling optimization with automated reminders and resource allocation"
    },
    {
      icon: Clock,
      title: "Real-time Health Monitoring",
      description: "Continuous patient monitoring with instant alerts and emergency response protocols"
    },
    {
      icon: Shield,
      title: "HIPAA Compliant Security",
      description: "Enterprise-grade security with end-to-end encryption and audit trails for healthcare compliance"
    }
  ];

  const outcomes = [
    { metric: "75%", description: "Reduction in patient wait times" },
    { metric: "90%", description: "Appointment scheduling efficiency" },
    { metric: "60%", description: "Increase in patient satisfaction" },
    { metric: "99.9%", description: "System uptime achieved" }
  ];

  const techStack = [
    "React Native", "Node.js", "MongoDB", "AWS Cloud", 
    "AI/ML APIs", "HIPAA Compliance", "Real-time Analytics", "Firebase"
  ];

  const phases = [
    { phase: "Healthcare Analysis", description: "Patient workflow analysis, compliance requirements, and system architecture design" },
    { phase: "Core Platform", description: "Built patient management system with appointment scheduling" },
    { phase: "AI Integration", description: "Implemented AI-powered insights and predictive analytics" },
    { phase: "Mobile Development", description: "React Native app for patients and healthcare providers" },
    { phase: "Security & Compliance", description: "HIPAA compliance implementation and security hardening" }
  ];

  return (
    <Layout>
      <HeroSection
        title="Medina Healthcare Platform"
        subtitle="Revolutionizing patient care through AI-powered healthcare management and intelligent appointment systems"
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
                Healthcare Technology
              </Badge>
              <h2 className="text-4xl font-bold text-[#236eb4] mb-6">AI-Powered Healthcare Revolution</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Medina is a comprehensive healthcare platform that leverages AI to streamline patient management, 
                appointment scheduling, and medical record keeping while ensuring HIPAA compliance.
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
                    <p className="text-gray-600">12 professionals</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f" 
                alt="Healthcare Platform"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#f9b21d] to-[#e6a01a] p-4 rounded-xl text-white">
                <Heart className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#236eb4] mb-8">The Healthcare Challenge</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Traditional healthcare operations struggling with patient wait times, inefficient scheduling, 
              and lack of integrated care management systems.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Long patient wait times affecting satisfaction",
                "Manual appointment scheduling inefficiencies",
                "Fragmented patient data across systems",
                "Lack of predictive healthcare insights",
                "Poor communication between care providers",
                "Compliance and security challenges"
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
              Watch how Medina transforms healthcare operations through intelligent automation
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <AspectRatio ratio={16 / 9} className="bg-gradient-to-br from-[#236eb4] to-[#089949] rounded-xl overflow-hidden shadow-2xl">
              <div className="flex items-center justify-center h-full">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Healthcare Platform Demo</h3>
                  <p className="text-gray-100 max-w-md mx-auto">Experience AI-powered patient care</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[#f9b21d] to-[#e6a01a] text-black px-3 py-1 rounded text-sm font-medium">
                HEALTHCARE AI
              </div>
            </AspectRatio>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#236eb4] mb-6">Advanced Healthcare Features</h2>
            <p className="text-xl text-gray-600">Comprehensive patient care capabilities</p>
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
            <p className="text-xl text-gray-100">Measurable impact on patient care</p>
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
            <p className="text-xl text-gray-600">Modern healthcare technologies</p>
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
        title="Ready to Transform Your Healthcare Operations?"
        description="Let's build an intelligent healthcare solution that drives results for your organization."
        buttonText="Start Your Project"
      />
    </Layout>
  );
};

export default Medina;
