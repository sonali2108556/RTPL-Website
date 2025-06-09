"use client"
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Bot, BarChart, Eye, MessageSquare, Zap } from "lucide-react";

const ArtificialIntelligence = () => {
  const aiServices = [
    {
      title: "Machine Learning Solutions",
      description: "Develop custom ML models that automate decision-making and uncover valuable insights from your data.",
      icon: Brain
    },
    {
      title: "Natural Language Processing",
      description: "Build intelligent systems that understand, interpret, and generate human language for better communication.",
      icon: MessageSquare
    },
    {
      title: "Computer Vision",
      description: "Implement AI systems that can analyze, understand, and extract information from visual content.",
      icon: Eye
    },
    {
      title: "Predictive Analytics",
      description: "Leverage AI to forecast trends, behavior patterns, and business outcomes for strategic planning.",
      icon: BarChart
    },
    {
      title: "AI-Powered Automation",
      description: "Automate complex business processes using intelligent agents and workflow optimization.",
      icon: Zap
    },
    {
      title: "Conversational AI",
      description: "Create intelligent chatbots and virtual assistants that enhance customer experience and support.",
      icon: Bot
    }
  ];

  const aiCapabilities = [
    {
      title: "Deep Learning",
      description: "Advanced neural networks for complex pattern recognition and decision-making",
      applications: ["Image Recognition", "Speech Processing", "Recommendation Systems"]
    },
    {
      title: "Generative AI",
      description: "AI systems that create new content, designs, and solutions",
      applications: ["Content Generation", "Code Assistance", "Creative Design"]
    },
    {
      title: "Reinforcement Learning",
      description: "AI that learns through interaction and feedback optimization",
      applications: ["Game Strategy", "Resource Optimization", "Autonomous Systems"]
    },
    {
      title: "MLOps",
      description: "Operationalize machine learning models for production deployment",
      applications: ["Model Deployment", "Performance Monitoring", "Continuous Learning"]
    }
  ];

  return (
    <Layout>
      <HeroSection
        title="Artificial Intelligence"
        subtitle="Harnessing the power of AI to automate processes, gain insights, and create intelligent systems that drive business transformation"
        buttonText="Explore AI Solutions"
        backgroundImage="https://images.unsplash.com/photo-1677442136019-21780ecad995"
      />

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485" 
                  alt="AI Technology"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#f9b21d]/20 to-transparent rounded-lg"></div>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-[#236eb4] mb-6">
                  Intelligent Solutions for Tomorrow
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our Artificial Intelligence practice transforms businesses by implementing intelligent systems 
                  that automate complex processes, provide predictive insights, and enhance decision-making capabilities. 
                  We leverage cutting-edge AI technologies to create solutions that learn, adapt, and evolve with your business.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  From machine learning models to conversational AI, we help organizations unlock the full potential 
                  of artificial intelligence to drive innovation and competitive advantage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#236eb4] mb-6">
              AI Services & Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI services that transform data into intelligent insights and automated solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow group">
                <CardContent className="p-6">
                  <service.icon className="h-12 w-12 text-[#f9b21d] mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-[#236eb4] mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#236eb4] mb-6">
              Advanced AI Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Cutting-edge AI technologies that power next-generation solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiCapabilities.map((capability, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#236eb4] mb-4">{capability.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{capability.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-[#f9b21d] mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {capability.applications.map((app, appIndex) => (
                        <span key={appIndex} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Embrace AI?"
        description="Let's explore how artificial intelligence can transform your business processes and unlock new opportunities."
        buttonText="Start Your AI Journey"
      />
    </Layout>
  );
};

export default ArtificialIntelligence;
