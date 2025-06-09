"use client"
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Shield, Cloud, Code, Zap, Settings } from "lucide-react";

const Engineering = () => {
  const engineeringServices = [
    {
      title: "Full-Stack Development",
      description: "End-to-end application development using modern frameworks and technologies for scalable solutions.",
      icon: Code
    },
    {
      title: "Cloud-Native Architecture",
      description: "Design and implement cloud-native solutions that leverage the full potential of cloud platforms.",
      icon: Cloud
    },
    {
      title: "Microservices Architecture",
      description: "Build modular, scalable applications using microservices patterns for enhanced flexibility.",
      icon: Settings
    },
    {
      title: "DevOps & CI/CD",
      description: "Implement robust DevOps practices and continuous integration/deployment pipelines.",
      icon: Zap
    },
    {
      title: "Security Engineering",
      description: "Integrate security best practices throughout the development lifecycle for robust protection.",
      icon: Shield
    },
    {
      title: "Performance Optimization",
      description: "Optimize application performance for speed, scalability, and efficient resource utilization.",
      icon: Cpu
    }
  ];

  const technologies = [
    {
      category: "Frontend",
      technologies: ["React", "Angular", "Vue.js", "TypeScript", "Next.js"]
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Python", "Java", ".NET", "Go"]
    },
    {
      category: "Cloud",
      technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker"]
    },
    {
      category: "Database",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "DynamoDB"]
    }
  ];

  return (
    <Layout>

      <HeroSection
        title="Engineering"
        subtitle="Building robust, scalable systems using best-in-class engineering practices and cutting-edge technologies"
        buttonText="Explore Our Engineering"
        backgroundImage="https://images.unsplash.com/photo-1518770660439-4636190af475"
      />

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-[#236eb4] mb-6">
                  Engineering Excellence at Scale
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our Engineering practice focuses on building high-performance, scalable, and secure systems 
                  that can adapt to your growing business needs. We leverage modern development methodologies, 
                  cutting-edge technologies, and industry best practices to deliver solutions that are both 
                  robust and maintainable.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  From architecture design to deployment and maintenance, our engineering team ensures 
                  your technology infrastructure is built for the future.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Engineering Process"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#089949]/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#236eb4] mb-6">
              Engineering Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive engineering services that transform your ideas into scalable, production-ready solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {engineeringServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow group">
                <CardContent className="p-6">
                  <service.icon className="h-12 w-12 text-[#089949] mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-[#236eb4] mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#236eb4] mb-6">
              Our Technology Stack
            </h2>
            <p className="text-xl text-gray-600">
              Leveraging cutting-edge technologies to build future-ready solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#236eb4] mb-4">{tech.category}</h3>
                  <div className="space-y-2">
                    {tech.technologies.map((technology, techIndex) => (
                      <div key={techIndex} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                        {technology}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Build Something Amazing?"
        description="Let's engineer solutions that scale with your business and exceed your expectations."
        buttonText="Start Your Engineering Journey"
      />
    </Layout>
  );
};

export default Engineering;
