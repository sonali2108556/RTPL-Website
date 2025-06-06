"use client"
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, GitBranch, Zap, Shield, Gauge } from "lucide-react";

const DevOpsAndAutomation = () => {
  const benefits = [
    {
      icon: <GitBranch className="w-8 h-8 text-[#236eb4]" />,
      title: "Continuous Integration",
      description: "Streamline development workflows with automated testing, building, and deployment pipelines."
    },
    {
      icon: <Zap className="w-8 h-8 text-[#236eb4]" />,
      title: "Faster Delivery",
      description: "Accelerate time-to-market with automated processes and efficient development workflows."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#236eb4]" />,
      title: "Enhanced Security",
      description: "Integrate security practices throughout the development lifecycle with DevSecOps methodologies."
    },
    {
      icon: <Gauge className="w-8 h-8 text-[#236eb4]" />,
      title: "Improved Reliability",
      description: "Ensure consistent, reliable deployments with infrastructure as code and automated monitoring."
    }
  ];

  const services = [
    "CI/CD Pipeline Implementation",
    "Infrastructure as Code",
    "Container Orchestration",
    "Monitoring & Alerting",
    "Automated Testing Frameworks",
    "Release Management",
    "Performance Optimization",
    "Security Integration (DevSecOps)"
  ];

  return (
    <Layout>
      <HeroSection
        title="DevOps & Automation"
        subtitle="Streamline your development and deployment processes with advanced DevOps practices and intelligent automation solutions."
        buttonText="Optimize Your Pipeline"
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
                Accelerate Development with DevOps Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our DevOps and automation services help organizations build, test, and deploy software 
                faster and more reliably through the implementation of modern development practices 
                and intelligent automation tools.
              </p>
              <p className="text-gray-600 mb-8">
                From CI/CD pipelines to infrastructure automation, we help you establish robust 
                DevOps practices that improve collaboration, reduce errors, and accelerate delivery.
              </p>
              <Button className="bg-[#f9b21d] hover:bg-[#e6a01a] text-black font-semibold">
                Enhance Your DevOps
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                alt="DevOps Automation" 
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
              Transform Your Development Lifecycle
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Implement modern DevOps practices that improve efficiency, reduce risks, 
              and enable faster, more reliable software delivery.
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

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                alt="Automation Services" 
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#236eb4]/20 to-transparent rounded-lg"></div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#236eb4] mb-6">
                Comprehensive DevOps Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our DevOps services cover the entire software development lifecycle, from code 
                commit to production deployment and ongoing monitoring.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#f9b21d] flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Accelerate Your Development?"
        description="Transform your software delivery with modern DevOps practices and automation that drive efficiency and reliability."
        buttonText="Implement DevOps"
        backgroundColor="bg-gray-900"

      />
    </Layout>
  );
};

export default DevOpsAndAutomation;
