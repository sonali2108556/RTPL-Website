"use client"
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      title: "AI Driven Development",
      description: "Leverage artificial intelligence to build smarter, more efficient applications that adapt and learn from user behavior.",
      features: ["Machine Learning Integration", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
      icon: "🤖",
      link: "/services/ai-driven-development"
    },
    {
      title: "AI Agents & Copilots",
      description: "Deploy intelligent AI assistants that enhance productivity and automate complex workflows across your organization.",
      features: ["Intelligent Automation", "Conversational AI", "Process Optimization", "24/7 Support Agents"],
      icon: "🤝",
      link: "/services/ai-agents-and-copilots"
    },
    {
      title: "Empower Legacy Applications",
      description: "Modernize and enhance your existing systems with cutting-edge technology while preserving valuable business logic.",
      features: ["System Integration", "API Development", "Cloud Migration", "Performance Optimization"],
      icon: "⚡",
      link: "/services/empower-legacy-applications"
    },
    {
      title: "Startup Solutions",
      description: "Accelerate your startup journey with rapid prototyping, MVP development, and scalable technology foundations.",
      features: ["MVP Development", "Rapid Prototyping", "Scalable Architecture", "Agile Development"],
      icon: "🚀",
      link: "/services/startup-solutions"
    },
    {
      title: "Custom Platform Development",
      description: "Build bespoke platforms tailored to your unique business requirements and industry specifications.",
      features: ["Custom Development", "Enterprise Solutions", "Third-party Integrations", "Ongoing Support"],
      icon: "🛠️",
      link: "/services/custom-platform-development"
    },
    {
      title: "Data & AI Services",
      description: "Transform your data into actionable insights with advanced analytics, business intelligence, and AI solutions.",
      features: ["Data Analytics", "Business Intelligence", "Data Warehousing", "AI/ML Models"],
      icon: "📊",
      link: "/services/data-and-ai-services"
    },
    {
      title: "Cloud Services",
      description: "Comprehensive cloud solutions including migration, optimization, and management across all major platforms.",
      features: ["Cloud Migration", "Infrastructure Management", "DevOps Solutions", "Cost Optimization"],
      icon: "☁️",
      link: "/services/cloud-services"
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation services to modernize your business processes and technology stack.",
      features: ["Process Automation", "Digital Strategy", "Change Management", "Technology Roadmap"],
      icon: "🔄",
      link: "/services/digital-transformation"
    },
    {
      title: "DevOps & Automation",
      description: "Streamline your development and deployment processes with advanced DevOps practices and automation tools.",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Logging", "Security Integration"],
      icon: "⚙️",
      link: "/services/devops-and-automation"
    }
  ];

  return (
    <Layout>

      <HeroSection
        title="Future-Ready Services for an Evolving Digital World"
        subtitle="Comprehensive technology services designed to accelerate innovation, drive growth, and transform your business for the digital age."
        buttonText="Discuss Your Needs"
        buttonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1518770660439-4636190af475"
      />

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#236eb4] mb-4">
              Our Service Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From AI-driven development to cloud transformation, we offer comprehensive technology services 
              that address every aspect of your digital journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow group">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-[#236eb4] mb-3 group-hover:text-[#f9b21d] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-[#f9b21d] rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href={service.link}>
                    <Button className="w-full bg-[#236eb4] hover:bg-[#1e5a9e] text-white">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#236eb4] mb-6">
              Why Choose Our Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-[#236eb4] mb-3">Tailored Solutions</h3>
                <p className="text-gray-600">Every solution is customized to meet your specific business requirements and objectives.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-[#236eb4] mb-3">Rapid Delivery</h3>
                <p className="text-gray-600">Agile methodologies ensure fast turnaround times without compromising quality.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-semibold text-[#236eb4] mb-3">Ongoing Support</h3>
                <p className="text-gray-600">Comprehensive post-deployment support and maintenance to ensure long-term success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Business?"
        description="Let's discuss how our comprehensive service portfolio can address your specific technology challenges and drive growth."
        buttonText="Start Your Project"
      />
    </Layout>
  );
};

export default Services;
