"use client"
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Users, Smartphone, Eye, Layers, Zap } from "lucide-react";

const Design = () => {
  const designServices = [
    {
      title: "User Experience (UX) Design",
      description: "Create intuitive and engaging user experiences that drive customer satisfaction and business outcomes.",
      icon: Users
    },
    {
      title: "User Interface (UI) Design",
      description: "Design beautiful, functional interfaces that seamlessly blend aesthetics with usability.",
      icon: Smartphone
    },
    {
      title: "Design System Development",
      description: "Build comprehensive design systems that ensure consistency and scalability across all touchpoints.",
      icon: Layers
    },
    {
      title: "Prototyping & Wireframing",
      description: "Develop interactive prototypes and wireframes to validate design concepts before development.",
      icon: Eye
    },
    {
      title: "Visual Design",
      description: "Create compelling visual designs that strengthen brand identity and enhance user engagement.",
      icon: Palette
    },
    {
      title: "Design Thinking Workshops",
      description: "Facilitate collaborative design thinking sessions to solve complex business challenges.",
      icon: Zap
    }
  ];

  const designProcess = [
    {
      step: "01",
      title: "Research & Discovery",
      description: "Understanding user needs, business goals, and market requirements through comprehensive research."
    },
    {
      step: "02",
      title: "Ideation & Conceptualization",
      description: "Generating creative solutions and concepts through collaborative brainstorming and design thinking."
    },
    {
      step: "03",
      title: "Prototyping & Testing",
      description: "Creating interactive prototypes and conducting user testing to validate design decisions."
    },
    {
      step: "04",
      title: "Implementation & Refinement",
      description: "Delivering final designs and continuously refining based on user feedback and analytics."
    }
  ];

  return (
    <Layout>
      <HeroSection
        title="Design"
        subtitle="Creating intuitive, user-centric solutions that seamlessly blend functionality with exceptional experiences"
        buttonText="Explore Our Design"
        backgroundImage="https://images.unsplash.com/photo-1558655146-9f40138edfeb"
      />

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5" 
                  alt="Design Process"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#236eb4]/20 to-transparent rounded-lg"></div>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-[#236eb4] mb-6">
                  Human-Centered Design Excellence
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our Design practice centers on creating meaningful experiences that resonate with users while 
                  achieving business objectives. We combine deep user research, creative problem-solving, and 
                  strategic thinking to deliver solutions that are both beautiful and functional.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  From initial concept to final implementation, our design team ensures every touchpoint 
                  is carefully crafted to enhance user satisfaction and drive business success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#236eb4] mb-6">
              Design Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive design services that transform ideas into exceptional user experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow group">
                <CardContent className="p-6">
                  <service.icon className="h-12 w-12 text-[#236eb4] mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-[#236eb4] mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#236eb4] mb-6">
              Our Design Process
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach to creating exceptional user experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#236eb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-bold text-[#236eb4] mb-3">{process.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Design the Future?"
        description="Let's create exceptional user experiences that drive engagement and deliver business value."
        buttonText="Start Your Design Journey"
      />
    </Layout>
  );
};

export default Design;
