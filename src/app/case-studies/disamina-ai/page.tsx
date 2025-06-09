"use client"
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowLeft, Calendar, Users, Target, CheckCircle, Play, Brain, Clock, TrendingUp, Shield, MessageSquare, Video, FileText, BarChart3 } from "lucide-react";
import Link from "next/link";

const DisamilaAI = () => {
  const keyFeatures = [
    {
      icon: Brain,
      title: "AI Resume Screening & Scoring",
      description: "Automated matching of resumes with job descriptions using NLP for bias-free filtering"
    },
    {
      icon: FileText,
      title: "Job Posting & Career Page",
      description: "One-click job posting via RiVi with branded, personalized career pages"
    },
    {
      icon: Target,
      title: "Skill-Based Assessments",
      description: "AI-suggested assessments with auto-evaluation and ranking of candidates"
    },
    {
      icon: Video,
      title: "AI Video Interview",
      description: "Smart video interviews with AI evaluation of expressions, tone, and responses"
    },
    {
      icon: MessageSquare,
      title: "Real-time Messaging",
      description: "Job-specific recruiter-candidate messaging with in-app notifications"
    },
    {
      icon: BarChart3,
      title: "Dashboard & Analytics",
      description: "AI-driven insights on hiring funnel with conversion rates and engagement metrics"
    }
  ];

  const outcomes = [
    { metric: "80%", description: "Reduction in screening time for recruiters" },
    { metric: "50%", description: "Faster hiring cycles through automation" },
    { metric: "100%", description: "Improved candidate experience transparency" },
    { metric: "24/7", description: "AI assistant availability for instant support" }
  ];

  const techStack = [
    "React.js", "Next.js", "Tailwind CSS", "Node.js", "Express.js", 
    "Python", "spaCy", "OpenAI API", "MongoDB", "PostgreSQL", 
    "WebRTC", "AWS", "Docker", "Firebase"
  ];

  const phases = [
    { phase: "Discovery & Planning", description: "User persona creation, market research, feature prioritization" },
    { phase: "MVP Development", description: "Built core modules – job posting, resume screening, assessments" },
    { phase: "AI Agent Integration", description: "RiVi development with NLP job posting and screening logic" },
    { phase: "Communication & UX", description: "Chat features, notifications, and UX optimization" },
    { phase: "Feedback & Iteration", description: "Stability, speed, and usability improvements" }
  ];

  return (
    <Layout>
      <HeroSection
        title="Disamina AI - Your AI Hiring Partner"
        subtitle="Revolutionary HRTech platform powered by RiVi, the AI recruiter that transforms hiring with intelligent automation and seamless candidate experiences"
        buttonText="Explore Platform"
        backgroundImage="https://images.unsplash.com/photo-1553877522-43269d4ea984"
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
                HRTech / Recruitment Technology / SaaS
              </Badge>
              <h2 className="text-4xl font-bold text-[#236eb4] mb-6">Revolutionizing Recruitment with AI</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Disamina AI is a smart, AI-powered hiring platform that empowers companies to post jobs, 
                screen resumes, assess candidates, and schedule interviews with minimal human intervention. 
                At its heart is RiVi, an AI assistant that acts as a digital recruiter handling initial 
                screening and candidate engagement.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-8 h-8 text-[#f9b21d]" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Timeline</h4>
                    <p className="text-gray-600">12 months</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-8 h-8 text-[#089949]" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Team Size</h4>
                    <p className="text-gray-600">18 professionals</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984" 
                alt="Disamina AI Platform"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#236eb4] to-[#f9b21d] p-4 rounded-xl text-white">
                <Brain className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#236eb4] mb-8">The Hiring Challenge</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Traditional hiring processes are manual, time-consuming, and prone to bias. Companies struggle 
              with multiple tools, inefficient screening, and poor candidate experiences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Manual, repetitive, and time-consuming processes",
                "Dependent on multiple tools and team members",
                "Prone to bias and inefficiency",
                "Poor candidate experience and engagement",
                "Lack of real-time control and intelligence",
                "Difficult career page management"
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
              See RiVi in action and discover how AI transforms the entire hiring process
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <AspectRatio ratio={16 / 9} className="bg-gradient-to-br from-[#236eb4] to-[#089949] rounded-xl overflow-hidden shadow-2xl">
              <div className="flex items-center justify-center h-full">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">AI Recruitment Revolution</h3>
                  <p className="text-gray-100 max-w-md mx-auto">Experience the future of hiring with RiVi</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[#f9b21d] to-[#e6a01a] text-black px-3 py-1 rounded text-sm font-medium">
                AI POWERED
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
            <p className="text-xl text-gray-600">Comprehensive AI-powered recruitment capabilities</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <p className="text-xl text-gray-100">Measurable impact on recruitment efficiency</p>
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
            <p className="text-xl text-gray-600">Cutting-edge technologies powering intelligent recruitment</p>
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

      {/* Why It Stands Out */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#236eb4] mb-8">What Makes It Special</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Brain,
                  title: "AI-Human Hybrid Recruitment",
                  description: "Perfect blend of artificial intelligence and human insight"
                },
                {
                  icon: Users,
                  title: "RiVi as First HR Team Member",
                  description: "Every company gets an AI recruiter from day one"
                },
                {
                  icon: Target,
                  title: "Personalized Flows",
                  description: "Tailored experiences for both employers and candidates"
                },
                {
                  icon: TrendingUp,
                  title: "Scalable Architecture",
                  description: "Modular design for enterprises and flexible for startups"
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#f9b21d] to-[#e6a01a] rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#236eb4] mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Hiring Process?"
        description="Join the recruitment revolution with AI-powered hiring solutions that reduce time-to-hire and improve candidate experiences."
        buttonText="Start AI Hiring Journey"
      />
    </Layout>
  );
};

export default DisamilaAI;
