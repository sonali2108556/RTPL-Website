"use client"
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowLeft, Calendar, Users, Target, CheckCircle, Play, MapPin, Heart, MessageCircle, Shield, Smartphone, Zap } from "lucide-react";
import Link from "next/link";

const YapxitSocialApp = () => {
  const keyFeatures = [
    {
      icon: MapPin,
      title: "Advanced Real-time Location Tracking",
      description: "GPS-based proximity matching with configurable radius settings, location history, and privacy controls for safe connections"
    },
    {
      icon: Heart,
      title: "AI-Powered Interest Matching Algorithm",
      description: "Machine learning algorithms analyze user preferences, activities, and behavior patterns to suggest highly compatible matches"
    },
    {
      icon: MessageCircle,
      title: "Real-time Chat & Notification Engine",
      description: "Instant messaging with multimedia support, read receipts, typing indicators, and smart push notification management"
    },
    {
      icon: Shield,
      title: "Privacy-first Security Architecture",
      description: "End-to-end encryption, advanced privacy controls, content moderation, and comprehensive user safety features"
    }
  ];

  const outcomes = [
    { metric: "75%", description: "Daily active user engagement" },
    { metric: "4.8/5", description: "User satisfaction rating" },
    { metric: "100%", description: "Security compliance achieved" },
    { metric: "500+", description: "Beta testers onboarded" }
  ];

  const techStack = [
    "Flutter", "Firebase", "Google Maps API", "WebRTC", 
    "Cloud Functions", "Firestore", "FCM", "OAuth 2.0"
  ];

  const phases = [
    { phase: "Discovery & Design", description: "User research, market analysis, UX/UI design and prototyping" },
    { phase: "Core Development", description: "Built location tracking, matching algorithm, and user profiles" },
    { phase: "Communication Features", description: "Real-time chat, notifications, and multimedia messaging" },
    { phase: "Security Implementation", description: "Privacy controls, content moderation, and safety features" },
    { phase: "Testing & Launch", description: "Beta testing, performance optimization, and market launch" }
  ];

  return (
    <Layout>
      <HeroSection
        title="Yapxit – Connect Through Proximity"
        subtitle="A real-time location-based social app that brings people together through shared interests and proximity"
        buttonText="Explore App"
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
                Mobile App Development
              </Badge>
              <h2 className="text-4xl font-bold text-[#236eb4] mb-6">Social Connection Revolution</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                A sophisticated mobile app to connect people based on real-time GPS location and shared interests, 
                while maintaining the highest standards of user privacy and safety.
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
                    <p className="text-gray-600">6 professionals</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556075798-4825dfaaf498" 
                alt="Social Mobile App"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#236eb4] to-[#f9b21d] p-4 rounded-xl text-white">
                <Smartphone className="w-8 h-8" />
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
              Balancing proximity-based matching with user privacy concerns, creating engaging UX for diverse demographics, 
              and implementing robust safety features.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Balancing proximity-based matching with privacy concerns",
                "Creating engaging UX for diverse user demographics",
                "Implementing robust safety and moderation features",
                "Real-time location tracking without battery drain",
                "Preventing fake profiles and ensuring authenticity",
                "Building scalable chat infrastructure"
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
            <h2 className="text-4xl font-bold text-[#236eb4] mb-6">App Demo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Yapxit connects people through proximity and shared interests
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <AspectRatio ratio={16 / 9} className="bg-gradient-to-br from-[#236eb4] to-[#089949] rounded-xl overflow-hidden shadow-2xl">
              <div className="flex items-center justify-center h-full">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Social Connection App</h3>
                  <p className="text-gray-100 max-w-md mx-auto">Experience proximity-based social networking</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[#f9b21d] to-[#e6a01a] text-black px-3 py-1 rounded text-sm font-medium">
                MOBILE APP
              </div>
            </AspectRatio>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#236eb4] mb-6">Core Features & Innovation</h2>
            <p className="text-xl text-gray-600">Advanced social networking capabilities</p>
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
            <p className="text-xl text-gray-100">Beta testing achievements</p>
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
            <p className="text-xl text-gray-600">Modern mobile technologies</p>
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
        title="Have a social app idea?"
        description="Turn your social networking vision into reality with our expert mobile app development team."
        buttonText="Let's Build It"
      />
    </Layout>
  );
};

export default YapxitSocialApp;
