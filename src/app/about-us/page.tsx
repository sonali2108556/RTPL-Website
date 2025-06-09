"use client"
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";

const AboutUs = () => {
  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "150+", label: "Clients Served" },
    { number: "12", label: "Countries" },
    { number: "250+", label: "Team Members" }
  ];

  const teamCulture = [
    {
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      title: "Collaborative Environment",
      description: "We foster an environment where ideas flow freely and everyone's voice is heard."
    },
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      title: "Continuous Learning",
      description: "We invest in our people's growth through training, certifications, and skill development."
    },
    {
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      title: "Work-Life Balance",
      description: "We believe in maintaining a healthy balance between professional and personal life."
    }
  ];

  return (
    <Layout>
      

      <div className="hero-section">
        <HeroSection
          title="Your Trusted Digital Transformation Partner"
          subtitle="Since our founding, we've been dedicated to helping businesses navigate the digital landscape with innovative solutions and unwavering commitment to excellence."
          buttonText="View Our Journey"
          buttonLink="/our-journey"
          backgroundImage="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
        />
      </div>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#236eb4] mb-6">Our Founding Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                TechSolutions was founded in 2014 by a group of technology enthusiasts who shared 
                a common vision: to bridge the gap between cutting-edge technology and real business value.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a small consulting firm has grown into a global technology partner, 
                serving clients across multiple continents and industries.
              </p>
              <blockquote className="text-xl italic text-[#236eb4] border-l-4 border-[#f9b21d] pl-6">
                "Technology should empower businesses, not complicate them. Our mission has always 
                been to make complex technology simple and accessible."
                <footer className="text-base text-gray-600 mt-2">- John Smith, CEO & Founder</footer>
              </blockquote>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                alt="Global Footprint"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#236eb4] mb-4">
              Our Team Culture
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe that great technology comes from great people. Our culture is built on 
              collaboration, innovation, and a shared commitment to excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamCulture.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#236eb4] mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Join Our Success Story?"
        description="Whether you're looking to transform your business or join our team, we'd love to hear from you."
        buttonText="Get in Touch"
      />
    </Layout>
  );
};

export default AboutUs;
