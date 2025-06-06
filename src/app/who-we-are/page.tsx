"use client"
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";

const WhoWeAreOverview = () => {
  const coreValues = [
    {
      icon: "🎯",
      title: "Excellence",
      description: "We strive for excellence in everything we do, delivering quality that exceeds expectations."
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "We believe in the power of collaboration, working closely with our clients as partners."
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "We embrace innovation and continuously explore new technologies and methodologies."
    },
    {
      icon: "🔒",
      title: "Integrity",
      description: "We conduct our business with the highest level of integrity and transparency."
    },
    {
      icon: "🌱",
      title: "Growth",
      description: "We are committed to the continuous growth of our people, clients, and communities."
    }
  ];

  return (
    <Layout>
      <HeroSection
        title="Driven by Innovation, Guided by Values"
        subtitle="We are a technology company built on the foundation of innovation, integrity, and excellence, committed to transforming businesses through cutting-edge solutions."
        buttonText="Explore Our Story"
        buttonLink="/about-us"
        backgroundImage="https://images.unsplash.com/photo-1493397212122-2b85dda8106b"
      />

      {/* Vision and Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#236eb4] mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                To be the global leader in technology innovation, empowering businesses to achieve 
                unprecedented growth through digital transformation.
              </p>
              <p className="text-lg text-gray-600">
                We envision a world where technology seamlessly integrates with business processes, 
                creating value and driving sustainable success for our clients across all industries.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#236eb4] mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To deliver innovative, reliable, and scalable technology solutions that solve complex 
                business challenges and create lasting value for our clients.
              </p>
              <p className="text-lg text-gray-600">
                We are committed to fostering long-term partnerships, driving innovation, and 
                maintaining the highest standards of service excellence in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#236eb4] mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These values guide our decisions, shape our culture, and define how we interact 
              with our clients, partners, and each other.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="text-5xl mb-6">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-[#236eb4] mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want to Learn More About Us?"
        description="Discover our story, meet our team, and explore our journey from startup to global technology partner."
        buttonText="Explore About Us"
        buttonLink="/about-us"
      />
    </Layout>
  );
};

export default WhoWeAreOverview;
