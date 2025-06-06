"use client"
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, MessageSquare, Globe, Zap, Brain, Volume2, Settings, Play } from "lucide-react";

const ConversationalAI = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-[#f9b21d]" />,
      title: "Advanced NLP",
      description: "Sophisticated natural language processing for human-like conversations"
    },
    {
      icon: <Volume2 className="w-8 h-8 text-[#089949]" />,
      title: "Neural Voice Synthesis",
      description: "Ultra-realistic voice generation with emotional intelligence and tone adaptation"
    },
    {
      icon: <Globe className="w-8 h-8 text-[#236eb4]" />,
      title: "Multi-Language Support",
      description: "Fluent conversations in 25+ languages with cultural context awareness"
    },
    {
      icon: <Mic className="w-8 h-8 text-[#f9b21d]" />,
      title: "Real-Time Processing",
      description: "Instant speech recognition and response generation for seamless interactions"
    },
    {
      icon: <Settings className="w-8 h-8 text-[#089949]" />,
      title: "Custom Training",
      description: "Tailor the AI to your brand voice, industry knowledge, and specific use cases"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-[#236eb4]" />,
      title: "Contextual Memory",
      description: "Maintains conversation context and learns from interactions over time"
    }
  ];

  const useCases = [
    {
      title: "Customer Support",
      description: "24/7 intelligent customer service with human-like problem resolution",
      icon: "🎧"
    },
    {
      title: "Sales Assistant",
      description: "AI-powered sales conversations that convert prospects into customers",
      icon: "💼"
    },
    {
      title: "Virtual Receptionist",
      description: "Professional phone handling with appointment scheduling and call routing",
      icon: "📞"
    },
    {
      title: "Training & Education",
      description: "Interactive learning experiences with personalized tutoring capabilities",
      icon: "🎓"
    },
    {
      title: "Healthcare Assistant",
      description: "Patient interaction and preliminary assessment with medical knowledge",
      icon: "🏥"
    },
    {
      title: "E-commerce Guide",
      description: "Shopping assistance with product recommendations and order support",
      icon: "🛒"
    }
  ];

  return (
    <Layout>
     
      <HeroSection
        title="Conversational AI That Speaks"
        subtitle="Revolutionary AI agents with human-like voice synthesis, natural conversation abilities, and deep contextual understanding that transform customer interactions."
        buttonText="Try Live Demo"
        buttonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1677442136019-21780ecad995"
      />

      {/* Interactive Demo Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-[#f9b21d]/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#089949]/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Experience AI That <span className="text-[#f9b21d]">Speaks</span>
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-gray-300">
            Click below to hear our AI in action. Natural, expressive, and remarkably human-like 
            conversation capabilities that will transform your customer interactions.
          </p>
          
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border border-white/20">
              <CardContent className="p-12">
                <div className="w-32 h-32 bg-gradient-to-r from-[#f9b21d] to-[#e6a01a] rounded-full mx-auto mb-8 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 group">
                  <Play className="w-16 h-16 text-black group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Interactive Demo</h3>
                <p className="text-gray-300 mb-6">
                  Experience natural conversation with our AI agent. Ask questions, have a chat, 
                  and discover the future of customer interaction.
                </p>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-[#f9b21d] to-[#e6a01a] hover:from-[#e6a01a] hover:to-[#d4940f] text-black font-bold px-8 py-4 text-lg rounded-xl"
                >
                  <Mic className="w-5 h-5 mr-2" />
                  Start Conversation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#236eb4] to-[#089949] bg-clip-text text-transparent mb-6">
              Advanced AI Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our conversational AI combines cutting-edge speech synthesis, natural language understanding, 
              and contextual intelligence to create truly human-like interactions.
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

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#236eb4] mb-8">
              Transform Every Interaction
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deploy intelligent conversational agents across multiple touchpoints to enhance 
              customer experience and automate complex interactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{useCase.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gradient-to-br from-[#236eb4]/10 to-[#089949]/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#236eb4] mb-8">
                Cutting-Edge Voice Technology
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Volume2 className="w-8 h-8 text-[#f9b21d] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Neural Voice Synthesis</h4>
                    <p className="text-gray-600">Generate natural, expressive speech with emotional nuance and perfect pronunciation across multiple languages.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Brain className="w-8 h-8 text-[#089949] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Contextual Understanding</h4>
                    <p className="text-gray-600">Advanced NLP models that understand context, intent, and emotion for more meaningful conversations.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Zap className="w-8 h-8 text-[#236eb4] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Real-Time Processing</h4>
                    <p className="text-gray-600">Ultra-low latency speech processing for natural, flowing conversations without delays.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-[#f9b21d] to-[#e6a01a] hover:from-[#e6a01a] hover:to-[#d4940f] text-black font-bold px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.location.href = '/contact'}
                >
                  <Mic className="w-5 h-5 mr-2" />
                  Get Started
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1589254065878-42c9da997008"
                alt="Conversational AI Technology"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#236eb4]/20 to-[#089949]/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Deploy Conversational AI?"
        description="Transform your customer interactions with AI agents that speak naturally and understand deeply. Experience the future of conversation today."
        buttonText="Start Free Trial"
      />
    </Layout>
  );
};

export default ConversationalAI;
