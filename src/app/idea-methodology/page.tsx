"use client"
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Palette, Cpu, Brain, Clock, Users, Zap, TrendingUp, Star } from "lucide-react";
import Link from "next/link";

const IDEAMethodology = () => {
  const ideaComponents = [
    {
      title: "Innovation",
      description: "We redefine possibilities by integrating cutting-edge AI technologies into your business strategies, ensuring you stay ahead in a rapidly evolving landscape.",
      icon: Lightbulb,
      path: "/idea-methodology/innovation",
      color: "text-[#ff0100]"
    },
    {
      title: "Design",
      description: "Our human-centered design approach creates intuitive, scalable solutions that seamlessly blend functionality with exceptional user experiences.",
      icon: Palette,
      path: "/idea-methodology/design",
      color: "text-[#236eb4]"
    },
    {
      title: "Engineering",
      description: "We build robust, scalable systems using best-in-class engineering practices, ensuring your solutions are future-ready and performant.",
      icon: Cpu,
      path: "/idea-methodology/engineering",
      color: "text-[#089949]"
    },
    {
      title: "Artificial Intelligence",
      description: "Harness the power of AI to automate processes, gain insights, and create intelligent systems that drive business transformation.",
      icon: Brain,
      path: "/idea-methodology/artificial-intelligence",
      color: "text-[#f9b21d]"
    }
  ];

  const valueDrivers = [
    {
      title: "Faster Time to Market",
      description: "Accelerate product development and deployment cycles through streamlined processes and AI-driven automation.",
      icon: Clock
    },
    {
      title: "Improved Customer Experience",
      description: "Create intuitive, user-centric solutions that enhance customer satisfaction and engagement.",
      icon: Users
    },
    {
      title: "Greater Agility",
      description: "Adapt quickly to changing market demands with flexible, scalable technology solutions.",
      icon: Zap
    },
    {
      title: "Innovation",
      description: "Foster a culture of continuous innovation through cutting-edge technologies and creative problem-solving.",
      icon: Lightbulb
    },
    {
      title: "Enhanced Business Performance",
      description: "Drive measurable business outcomes through data-driven insights and optimized operations.",
      icon: TrendingUp
    }
  ];

  return (
    <Layout>
      <HeroSection
        title="IDEA Methodology"
        subtitle="Our proven approach to delivering exceptional technology solutions through Innovation, Design, Engineering, and Artificial Intelligence"
        buttonText="Explore Our Approach"
        backgroundImage="https://images.unsplash.com/photo-1551434678-e076c223a692"
      />

      {/* What is IDEA Methodology */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#236eb4] mb-6">
              What is IDEA Methodology?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              IDEA Methodology is our comprehensive framework that combines Innovation, Design, Engineering, and Artificial Intelligence 
              to deliver transformative technology solutions. This holistic approach ensures that every project we undertake 
              not only meets current business needs but also positions our clients for future success in an ever-evolving digital landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ideaComponents.map((component, index) => (
              <Link href={component.path} key={index}>
                <Card className="text-center hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
                  <CardContent className="p-8">
                    <component.icon className={`h-16 w-16 ${component.color} mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`} />
                    <h3 className="text-2xl font-bold text-[#236eb4] mb-4 group-hover:text-[#f9b21d] transition-colors">
                      {component.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{component.description}</p>
                    <Button variant="outline" className="mt-4 group-hover:bg-[#f9b21d] group-hover:text-black transition-colors">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How does IDEA Methodology work */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#236eb4] mb-6">
                How does IDEA Methodology work?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our methodology creates a seamless integration across all phases of technology delivery
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#ff0100] rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#236eb4] mb-2">Innovation Discovery</h3>
                    <p className="text-gray-600">We begin by understanding your business challenges and identifying innovative opportunities through comprehensive research and strategic thinking.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#236eb4] rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#236eb4] mb-2">Design Thinking</h3>
                    <p className="text-gray-600">Our design team creates user-centric solutions that prioritize experience, usability, and aesthetic appeal while ensuring technical feasibility.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#089949] rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#236eb4] mb-2">Engineering Excellence</h3>
                    <p className="text-gray-600">We implement robust, scalable solutions using cutting-edge technologies and best practices in software engineering and architecture.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#f9b21d] rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#236eb4] mb-2">AI Integration</h3>
                    <p className="text-gray-600">We seamlessly integrate artificial intelligence capabilities to enhance functionality, automate processes, and provide intelligent insights.</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692" 
                  alt="IDEA Methodology Process"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#236eb4]/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How IDEA Methodology drives value */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#236eb4] mb-6">
              How IDEA Methodology Drives Value
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our methodology delivers tangible business outcomes through a comprehensive approach that addresses 
              every aspect of digital transformation, from strategy to implementation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueDrivers.map((driver, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow group">
                <CardContent className="p-8">
                  <driver.icon className="h-12 w-12 text-[#f9b21d] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-[#236eb4] mb-4">{driver.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{driver.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Experience the IDEA Difference?"
        description="Let's discuss how our IDEA Methodology can transform your business and accelerate your digital transformation journey."
        buttonText="Start Your IDEA Journey"
        backgroundColor="bg-gray-900"
      />
    </Layout>
  );
};

export default IDEAMethodology;
