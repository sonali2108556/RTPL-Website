"use client"
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior AI/ML Engineer",
      department: "Engineering",
      location: "Remote / New York",
      type: "Full-time",
      description: "Lead the development of cutting-edge AI solutions and machine learning models."
    },
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      description: "Build responsive and intuitive user interfaces using modern web technologies."
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote / Austin",
      type: "Full-time",
      description: "Design and maintain scalable cloud infrastructure and deployment pipelines."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote / Boston",
      type: "Full-time",
      description: "Drive product strategy and roadmap for our AI-driven solutions."
    }
  ];

  const benefits = [
    {
      title: "Flexible Work Environment",
      description: "Work remotely or from our modern offices with flexible hours that fit your lifestyle.",
      icon: "🏠"
    },
    {
      title: "Professional Growth",
      description: "Continuous learning opportunities, conference attendance, and skill development programs.",
      icon: "📈"
    },
    {
      title: "Competitive Benefits",
      description: "Comprehensive health insurance, retirement plans, and performance-based bonuses.",
      icon: "💼"
    },
    {
      title: "Innovation Culture",
      description: "Work on cutting-edge projects with the latest technologies and methodologies.",
      icon: "💡"
    }
  ];

  return (
    <Layout>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Join Our Innovation Journey
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Be part of a dynamic team that's shaping the future of AI and digital transformation. 
                Build your career while creating cutting-edge solutions that make a real impact.
              </p>
              <Button className="bg-[#f9b21d] hover:bg-[#e6a01a] text-black font-semibold px-8 py-3">
                View Open Positions
              </Button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                alt="Team Collaboration" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#236eb4] mb-6">
              Why Choose RTPL Digital?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe in fostering an environment where innovation thrives, careers flourish, 
              and every team member contributes to building the future of technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-[#236eb4] mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#236eb4] mb-4">
              Current Openings
            </h2>
            <p className="text-lg text-gray-600">
              Explore exciting opportunities to grow your career with us.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-[#236eb4] mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                        <span>📍 {position.location}</span>
                        <span>🏢 {position.department}</span>
                        <span>⏰ {position.type}</span>
                      </div>
                      <p className="text-gray-600">{position.description}</p>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <Button className="bg-[#236eb4] hover:bg-[#1e5a9e] text-white">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't see the perfect role? We're always looking for talented individuals to join our team.
          </p>
          <Button className="bg-[#f9b21d] hover:bg-[#e6a01a] text-black font-semibold px-8 py-3">
            Send Your Resume
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
