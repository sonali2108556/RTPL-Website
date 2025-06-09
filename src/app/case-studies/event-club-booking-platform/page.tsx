"use client"
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowLeft, Calendar, Users, Target, CheckCircle, Play, Bell, Shield, Trophy, Clock, Database, BarChart3 } from "lucide-react";
import Link from "next/link";

const EventClubBookingPlatform = () => {
  const keyFeatures = [
    {
      icon: Users,
      title: "Multi-role User Management",
      description: "Admin, Club Manager, and Member roles with secure access control and permission-based functionality"
    },
    {
      icon: Calendar,
      title: "Advanced Event Scheduling",
      description: "Comprehensive event management with recurring bookings, conflict detection, and capacity management"
    },
    {
      icon: Bell,
      title: "Smart Notification Hub",
      description: "Multi-channel notifications (Email, SMS, Web, Push) with customizable templates and delivery tracking"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Multi-factor authentication, role-based access control, and audit logging for compliance"
    }
  ];

  const outcomes = [
    { metric: "75%", description: "Improved club coordination efficiency" },
    { metric: "80%", description: "Reduced manual communication overhead" },
    { metric: "40%", description: "Increased event attendance rates" },
    { metric: "100%", description: "Automated reporting implementation" }
  ];

  const techStack = [
    "ASP.NET MVC5", "C#", "Entity Framework", "MS SQL Server", 
    "Bootstrap", "jQuery", "SignalR", "OAuth 2.0", "Azure Cloud"
  ];

  const phases = [
    { phase: "Discovery & Planning", description: "User role analysis, feature requirements, security assessment" },
    { phase: "Core Development", description: "Built essential modules for event management and user roles" },
    { phase: "Notification Engine", description: "Custom notification system with multi-channel delivery" },
    { phase: "Security Implementation", description: "Advanced security features and audit logging" },
    { phase: "Testing & Deployment", description: "Comprehensive testing and Azure cloud deployment" }
  ];

  return (
    <Layout>
      <HeroSection
        title="Event & Club Booking Platform"
        subtitle="Revolutionizing club event management with multi-role access and intelligent notifications for Notifinz"
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
                Web Design & Development
              </Badge>
              <h2 className="text-4xl font-bold text-[#236eb4] mb-6">Streamlining Club Operations</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Built for Notifinz to revolutionize club event management with secure multi-role access, 
                automated notifications, and comprehensive event coordination capabilities.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-8 h-8 text-[#f9b21d]" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Timeline</h4>
                    <p className="text-gray-600">6 months</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-8 h-8 text-[#089949]" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Team Size</h4>
                    <p className="text-gray-600">8 professionals</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e" 
                alt="Event Management Platform"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#236eb4] to-[#f9b21d] p-4 rounded-xl text-white">
                <Calendar className="w-8 h-8" />
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
              Manual event management processes causing inefficiencies, lack of real-time communication, 
              and need for secure role-based access control system.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Manual event scheduling consuming 20+ hours weekly",
                "Lack of real-time communication between clubs",
                "No centralized notification system",
                "Security vulnerabilities in access control",
                "Poor coordination between different user roles",
                "Limited reporting and analytics capabilities"
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
              See how our platform transforms club event management
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <AspectRatio ratio={16 / 9} className="bg-gradient-to-br from-[#236eb4] to-[#089949] rounded-xl overflow-hidden shadow-2xl">
              <div className="flex items-center justify-center h-full">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Event Management Revolution</h3>
                  <p className="text-gray-100 max-w-md mx-auto">Experience streamlined club operations</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[#f9b21d] to-[#e6a01a] text-black px-3 py-1 rounded text-sm font-medium">
                LIVE DEMO
              </div>
            </AspectRatio>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#236eb4] mb-6">Key Features & Modules</h2>
            <p className="text-xl text-gray-600">Comprehensive club management capabilities</p>
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
            <p className="text-xl text-gray-100">Measurable impact on club operations</p>
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
            <p className="text-xl text-gray-600">Modern technologies powering the platform</p>
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
        title="Need a similar event management platform?"
        description="Let our experts help you build a custom solution that streamlines your event coordination and enhances communication."
        buttonText="Talk to Our Experts"
      />
    </Layout>
  );
};

export default EventClubBookingPlatform;
