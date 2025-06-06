import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Industries = () => {
  const industries = [
    {
      title: "Banking & Finance (BFSI)",
      description: "Digital transformation solutions for financial institutions including digital banking, fraud detection, and regulatory compliance.",
      solutions: ["Digital Banking Platforms", "Risk Management Systems", "Regulatory Compliance", "Fraud Detection AI"],
      icon: "🏦",
      challenges: "Regulatory compliance, security, and customer experience modernization",
      link: "/industries/banking-finance"
    },
    {
      title: "Healthcare",
      description: "Innovative solutions for healthcare providers, pharmaceutical companies, and medical device manufacturers.",
      solutions: ["Electronic Health Records", "Telemedicine Platforms", "AI Diagnostics", "Clinical Trial Management"],
      icon: "⚕️",
      challenges: "Patient data security, interoperability, and cost management",
      link: "/industries/healthcare"
    },
    {
      title: "E-Commerce",
      description: "Comprehensive digital commerce solutions from online stores to inventory management and customer analytics.",
      solutions: ["E-commerce Platforms", "Inventory Management", "Customer Analytics", "Mobile Commerce"],
      icon: "🛒",
      challenges: "Omnichannel experience, personalization, and supply chain optimization",
      link: "/industries/ecommerce"
    },
    {
      title: "HR & Recruitment",
      description: "Technology solutions to streamline recruitment, employee management, and organizational development.",
      solutions: ["AI-Powered Recruitment", "Employee Management Systems", "Performance Analytics", "Training Platforms"],
      icon: "👥",
      challenges: "Talent acquisition, employee engagement, and workforce analytics",
      link: "/industries/hr-recruitment"
    },
    {
      title: "Logistics",
      description: "Smart logistics solutions including tracking systems, route optimization, and warehouse management.",
      solutions: ["Fleet Management", "Route Optimization", "Warehouse Automation", "Real-time Tracking"],
      icon: "🚛",
      challenges: "Supply chain visibility, cost optimization, and delivery efficiency",
      link: "/industries/logistics"
    },
    {
      title: "Education",
      description: "Educational technology solutions for institutions, online learning platforms, and student management systems.",
      solutions: ["Learning Management Systems", "Virtual Classrooms", "Student Analytics", "Educational Apps"],
      icon: "🎓",
      challenges: "Digital learning adoption, student engagement, and educational outcomes",
      link: "/industries/education"
    },
    {
      title: "Technology",
      description: "Specialized solutions for software companies, startups, and tech enterprises looking to scale rapidly.",
      solutions: ["Cloud-Native Development", "AI Integration", "DevOps Automation", "Scalable Architectures"],
      icon: "💻",
      challenges: "Rapid scaling, time to market, and technical debt management",
      link: "/industries/technology"
    },
    {
      title: "Manufacturing",
      description: "Industry 4.0 solutions that optimize production, reduce costs, and enhance quality through automation.",
      solutions: ["IoT & Industrial Automation", "Quality Management", "Predictive Maintenance", "Process Optimization"],
      icon: "🏭",
      challenges: "Operational efficiency, quality control, and equipment maintenance",
      link: "/industries/manufacturing"
    }
  ];

  return (
    <Layout>
     
      {/* Industries Grid */}
      <section className="py-16 bg-white" id="industries-grid">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#236eb4] mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We bring deep industry knowledge and specialized expertise to deliver solutions 
              that address the unique challenges and opportunities in your sector.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow group">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-start mb-4">
                    <div className="text-4xl mr-4">{industry.icon}</div>
                    <div>
                      <h3 className="text-2xl font-semibold text-[#236eb4] mb-2 group-hover:text-[#f9b21d] transition-colors">
                        {industry.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 flex-grow">{industry.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Solutions:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {industry.solutions.map((solution, solutionIndex) => (
                        <div key={solutionIndex} className="text-sm text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-[#f9b21d] rounded-full mr-2"></span>
                          {solution}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Common Challenges:</h4>
                    <p className="text-sm text-gray-600">{industry.challenges}</p>
                  </div>
                  
                  <Link href={industry.link}>
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

      {/* Industry Expertise */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#236eb4] mb-6">
              Our Industry Expertise
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              With years of experience across diverse industries, we understand the unique challenges, 
              regulations, and opportunities that define your sector.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-semibold text-[#236eb4] mb-3">Compliance Ready</h3>
                <p className="text-gray-600">Solutions built with industry regulations and compliance requirements in mind.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-[#236eb4] mb-3">Domain Focus</h3>
                <p className="text-gray-600">Specialized teams with deep expertise in your industry vertical.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔗</div>
                <h3 className="text-xl font-semibold text-[#236eb4] mb-3">Seamless Integration</h3>
                <p className="text-gray-600">Solutions that integrate smoothly with existing industry-standard systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </Layout>
  );
};

export default Industries;
