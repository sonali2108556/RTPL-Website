"use client"
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Bot, MessageSquare, Workflow, Shield } from "lucide-react";

const AIAgentsAndCopilots = () => {
  const benefits = [
    {
      icon: <Bot className="w-8 h-8 text-[#236eb4]" />,
      title: "Intelligent Automation",
      description: "Deploy AI agents that handle complex tasks autonomously, reducing manual effort and increasing efficiency."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-[#236eb4]" />,
      title: "Natural Conversations",
      description: "Create conversational AI that understands context and provides meaningful, human-like interactions."
    },
    {
      icon: <Workflow className="w-8 h-8 text-[#236eb4]" />,
      title: "Process Optimization",
      description: "Streamline workflows with AI copilots that assist teams in decision-making and task execution."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#236eb4]" />,
      title: "24/7 Availability",
      description: "Ensure round-the-clock support and assistance with AI agents that never sleep."
    }
  ];

  const features = [
    "Custom AI Agent Development",
    "Conversational AI Interfaces",
    "Workflow Automation",
    "Multi-channel Deployment",
    "Advanced NLP Capabilities",
    "Integration with Existing Systems",
    "Real-time Learning & Adaptation",
    "Analytics & Performance Monitoring"
  ];

  const useCases = [
    {
      title: "Customer Support Copilot",
      description: "AI-powered support agents that handle customer inquiries, troubleshoot issues, and escalate complex cases to human agents.",
      image: "https://images.unsplash.com/photo-1553664900-0a9e0f73067b"
    },
    {
      title: "Sales Assistant Agent",
      description: "Intelligent sales copilots that qualify leads, schedule meetings, and provide personalized product recommendations.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
    },
    {
      title: "Code Review Copilot",
      description: "AI agents that assist developers with code reviews, bug detection, and optimization suggestions in real-time.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    }
  ];

  return (
    <Layout>
     
      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#236eb4] mb-6">
                Next-Generation AI Assistants
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our AI agents and copilots are designed to work alongside your teams, providing intelligent 
                assistance, automating routine tasks, and enhancing decision-making processes across your organization.
              </p>
              <p className="text-gray-600 mb-8">
                From customer service chatbots to development copilots, our AI assistants learn from interactions, 
                adapt to your business needs, and continuously improve their performance to deliver exceptional results.
              </p>
              <Button className="bg-[#f9b21d] hover:bg-[#e6a01a] text-black font-semibold">
                Explore AI Assistants
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a" 
                alt="AI Agents" 
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#236eb4]/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#236eb4] mb-4">
              Transform Your Workforce with AI Copilots
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Enhance productivity, improve customer satisfaction, and streamline operations with 
              intelligent AI agents that work seamlessly with your existing workflows.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#236eb4] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                alt="AI Features" 
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#236eb4]/20 to-transparent rounded-lg"></div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#236eb4] mb-6">
                Advanced AI Agent Capabilities
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our AI agents come equipped with sophisticated features that enable them to understand 
                context, learn from interactions, and provide intelligent assistance across various domains.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#f9b21d] flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#236eb4] mb-4">
              AI Agents in Action
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how our AI agents and copilots are revolutionizing workflows and 
              enhancing productivity across different business functions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img 
                    src={useCase.image} 
                    alt={useCase.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#236eb4] mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Deploy Intelligent AI Agents?"
        description="Transform your business operations with AI agents and copilots that work alongside your team to deliver exceptional results."
        buttonText="Start Building AI Agents"
        backgroundColor="bg-gray-900"
      />
    </Layout>
  );
};

export default AIAgentsAndCopilots;
