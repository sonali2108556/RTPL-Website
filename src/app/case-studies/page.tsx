"use client"
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MapPin, Calendar, Users, Smartphone, Heart, Brain } from "lucide-react";
import Link from "next/link";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Event & Club Booking Platform",
      client: "Notifinz",
      description: "Built for Notifinz to streamline club event management with multi-role access and notifications.",
      category: "Web Design & Development",
      techStack: "ASP.NET, MVC5, C#, MS SQL, Bootstrap",
      icon: Calendar,
      link: "/case-studies/event-club-booking-platform",
      ctaText: "View Case Study"
    },
    {
      title: "Autoguidance Web App",
      client: "Autoguidance",
      description: "A forecasting and analytics tool that helps Australian businesses plan better.",
      category: "Business Intelligence",
      techStack: "ASP.NET, MVC5, C#, MS SQL, Bootstrap",
      icon: MapPin,
      link: "/case-studies/autoguidance-web-app",
      ctaText: "Explore More"
    },
    {
      title: "CRM & Online Exam System",
      client: "Aman Security",
      description: "Automation of training exams with full CRM and proctoring for Aman Security.",
      category: "Education Technology",
      techStack: "ASP.NET, MVC5, Angular, MS SQL, Bootstrap",
      icon: Users,
      link: "/case-studies/crm-online-exam-system",
      ctaText: "Read Case Study"
    },
    {
      title: "Yapxit Social App",
      client: "Yapxit",
      description: "A location-driven app to connect people with shared interests, in real time.",
      category: "Mobile App Development",
      techStack: "Flutter, Firebase, Google Maps API",
      icon: Smartphone,
      link: "/case-studies/yapxit-social-app",
      ctaText: "Discover More"
    },
    {
      title: "Medina Healthcare Platform",
      client: "Medina",
      description: "AI-powered healthcare management platform with intelligent appointment systems and patient care optimization.",
      category: "Healthcare Technology",
      techStack: "React Native, Node.js, MongoDB, AWS, AI/ML",
      icon: Heart,
      link: "/case-studies/medina",
      ctaText: "View Healthcare Solution"
    },
    {
      title: "Disamina AI - AI Hiring Partner",
      client: "Disamina AI",
      description: "Revolutionary HRTech platform with RiVi AI assistant that automates hiring, screening, and candidate engagement with 80% faster recruitment cycles.",
      category: "HRTech / Recruitment Technology",
      techStack: "React.js, Node.js, Python, OpenAI API, MongoDB, WebRTC",
      icon: Brain,
      link: "/case-studies/disamina-ai",
      ctaText: "Explore AI Hiring"
    }
  ];

  return (
    <Layout>
      <HeroSection
        title="Case Studies"
        subtitle="Real results. Real clients. Real impact."
        buttonText="Explore All Cases"
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
      />

      {/* Case Studies Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#236eb4] mb-6">
              Explore Our Custom-Built Software Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we drive business outcomes through innovative technology solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#f9b21d] to-[#e6a01a] rounded-lg flex items-center justify-center flex-shrink-0">
                      <study.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm text-[#f9b21d] font-medium">{study.category}</span>
                      <h3 className="text-xl font-bold text-[#236eb4] mb-2">{study.title}</h3>
                      <p className="text-gray-600 font-medium mb-2">{study.client}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{study.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Tech Stack</h4>
                    <p className="text-sm text-gray-600">{study.techStack}</p>
                  </div>

                  <Link href={study.link}>
                    <Button className="bg-[#f9b21d] hover:bg-[#e6a01a] text-black font-medium w-full group-hover:translate-x-1 transition-transform">
                      {study.ctaText} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a software idea in mind?"
        description="Turn your vision into reality with our expert development team. Let's build something amazing together."
        buttonText="Talk to Our Team"
      />
    </Layout>
  );
};

export default CaseStudies;
