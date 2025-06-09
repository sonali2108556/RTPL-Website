"use client"
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";

const OurJourney = () => {
  const milestones = [
    {
      year: "2014",
      title: "Foundation",
      description: "TechSolutions founded with a vision to bridge technology and business value"
    },
    {
      year: "2016",
      title: "Bangalore Office",
      description: "Established our first office in Bangalore to serve the growing Indian market"
    },
    {
      year: "2017",
      title: "Launched Assessment Portal",
      description: "Introduced our comprehensive assessment platform for educational institutions"
    },
    {
      year: "2019",
      title: "Launched ERP Solution",
      description: "Deployed enterprise resource planning solutions for mid-size businesses"
    },
    {
      year: "2022",
      title: "Completed 200+ Projects",
      description: "Reached the milestone of successfully delivering over 200 technology projects"
    },
    {
      year: "2023",
      title: "AI & Digital Transformation Services",
      description: "Expanded into AI-powered solutions and comprehensive digital transformation services"
    }
  ];

  const awards = [
    {
      title: "Best Technology Partner 2023",
      organization: "Tech Excellence Awards",
      image: "🏆"
    },
    {
      title: "Innovation Leader 2023",
      organization: "Digital Transformation Summit",
      image: "🥇"
    },
    {
      title: "Top Cloud Solutions Provider",
      organization: "Cloud Computing Magazine",
      image: "☁️"
    },
    {
      title: "AI Implementation Excellence",
      organization: "AI & ML Conference",
      image: "🤖"
    }
  ];

  return (
    <Layout>
      <HeroSection
        title="Our Journey from Startup to Global Partner"
        subtitle="A decade of innovation, growth, and digital transformation excellence. Discover the milestones that shaped our company and defined our mission."
        buttonText="View Our Services"
        buttonLink="/services"
      />

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#236eb4] mb-4">
              Our Journey Timeline
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Key milestones and achievements that have defined our growth and success over the years
            </p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#236eb4] hidden md:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 md:pr-8">
                    <Card className={`${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} hover:shadow-lg transition-shadow`}>
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-[#f9b21d] mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold text-[#236eb4] mb-3">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:block w-4 h-4 bg-[#f9b21d] rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="flex-1 md:pl-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#236eb4] mb-8">
              Founders' Vision
            </h2>
            <blockquote className="text-2xl text-gray-700 italic mb-8">
              "When we started TechSolutions, we had a simple belief: technology should empower businesses, 
              not overwhelm them. Today, that belief continues to drive everything we do."
            </blockquote>
            <div className="flex justify-center items-center space-x-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#236eb4] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-2">
                  JS
                </div>
                <div className="font-semibold">John Smith</div>
                <div className="text-gray-600">CEO & Founder</div>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#236eb4] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-2">
                  SD
                </div>
                <div className="font-semibold">Sarah Davis</div>
                <div className="text-gray-600">CTO & Co-Founder</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Be Part of Our Next Chapter"
        description="Join us as we continue to innovate, grow, and transform businesses through technology."
        buttonText="Start Your Project"
      />
    </Layout>
  );
};

export default OurJourney;
