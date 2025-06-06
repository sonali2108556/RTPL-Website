
"use client"
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Brain, Code, Cpu, Database } from "lucide-react";

const AIDrivenDevelopment = () => {
  const benefits = [
    {
      icon: <Brain className="w-8 h-8 text-[#236eb4]" />,
      title: "Intelligent Automation",
      description: "Automate complex workflows with AI-powered decision making and process optimization."
    },
    {
      icon: <Code className="w-8 h-8 text-[#236eb4]" />,
      title: "Smart Code Generation",
      description: "Accelerate development with AI-assisted code generation and intelligent debugging tools."
    },
    {
      icon: <Zap className="w-8 h-8 text-[#236eb4]" />,
      title: "Predictive Analytics",
      description: "Make data-driven decisions with predictive models and real-time insights."
    },
    {
      icon: <Cpu className="w-8 h-8 text-[#236eb4]" />,
      title: "Machine Learning Integration",
      description: "Seamlessly integrate ML models into your applications for enhanced functionality."
    }
  ];

  const features = [
    "Custom AI Model Development",
    "Natural Language Processing",
    "Computer Vision Implementation",
    "Predictive Analytics Solutions",
    "AI-Powered APIs",
    "Intelligent Chatbots",
    "Automated Decision Systems",
    "Real-time Data Processing"
  ];

  const useCases = [
    {
      title: "E-commerce Personalization",
      description: "AI-driven product recommendations and dynamic pricing strategies to boost sales and customer satisfaction.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
    },
    {
      title: "Healthcare Diagnostics",
      description: "Advanced AI systems for medical image analysis and patient data interpretation.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56"
    },
    {
      title: "Financial Risk Assessment",
      description: "Intelligent fraud detection and credit scoring systems powered by machine learning algorithms.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3"
    }
  ];

  return (
    <Layout>
      <HeroSection
        title="AI Driven Development"
        subtitle="Transform your business with intelligent solutions that learn, adapt, and evolve with your needs."
        buttonText="Start Your AI Journey"
        buttonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1518770660439-4636190af475"
        textAlign="left"
      />

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#236eb4] mb-6">
                Revolutionize Your Business with AI
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our AI-driven development services combine cutting-edge artificial intelligence technologies 
                with robust software engineering practices to create intelligent applications that drive 
                business growth and operational efficiency.
              </p>
              <p className="text-gray-600 mb-8">
                From machine learning models to neural networks, we build AI solutions that understand 
                your data, predict outcomes, and automate complex processes, giving you a competitive 
                edge in today's digital landscape.
              </p>
              <Button className="bg-[#f9b21d] hover:bg-[#e6a01a] text-black font-semibold">
                Explore Our AI Solutions
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="AI Development" 
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
              Why Choose AI-Driven Development?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Unlock the power of artificial intelligence to transform your business processes, 
              enhance customer experiences, and drive innovation across your organization.
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
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                alt="AI Features" 
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#236eb4]/20 to-transparent rounded-lg"></div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#236eb4] mb-6">
                Comprehensive AI Development Features
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our AI development platform offers a complete suite of tools and technologies 
                to build, deploy, and manage intelligent applications at scale.
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
              Real-World AI Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how our AI-driven solutions are transforming industries and creating 
              new opportunities for businesses worldwide.
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

      {/* Technology Stack */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#236eb4] mb-4">
              Our AI Technology Stack
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We leverage the latest AI frameworks and tools to deliver robust, scalable, and efficient solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI GPT', 'Hugging Face', 'AWS AI'].map((tech, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Database className="w-12 h-12 text-[#236eb4] mx-auto mb-2" />
                <span className="text-sm font-medium text-gray-700">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Business with AI?"
        description="Let's discuss how our AI-driven development services can help you innovate, automate, and scale your operations for the future."
        buttonText="Get Started Today"
        backgroundColor="bg-gray-900"
      />
    </Layout>
  );
};

export default AIDrivenDevelopment;
