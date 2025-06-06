"use client"
import CTASection from "@/components/CTASection";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Manufacturing = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#236eb4] to-[#1e5a9e] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Smart Manufacturing Solutions
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Transform your manufacturing operations with Industry 4.0 solutions that optimize 
                production, reduce costs, and enhance quality through advanced automation and analytics.
              </p>
              <Button className="bg-[#f9b21d] hover:bg-[#e6a01a] text-black font-semibold px-8 py-3">
                Explore Solutions
              </Button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1567789884554-0b844b597180" 
                alt="Smart Manufacturing" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#236eb4] mb-6">
              Driving Manufacturing Excellence
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The manufacturing industry is experiencing a digital revolution with IoT, AI, and automation 
              technologies. Our solutions help manufacturers improve operational efficiency, reduce waste, 
              and deliver higher quality products while maintaining competitive advantages.
            </p>
          </div>
        </div>
      </section>

      {/* Key Challenges */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#236eb4] mb-12">
            Manufacturing Industry Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-xl font-semibold mb-3">Operational Efficiency</h3>
                <p className="text-gray-600">Optimizing production processes to reduce waste and improve throughput.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-3">Quality Control</h3>
                <p className="text-gray-600">Maintaining consistent product quality while meeting increasing customer demands.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-semibold mb-3">Equipment Maintenance</h3>
                <p className="text-gray-600">Minimizing downtime through predictive maintenance and real-time monitoring.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#236eb4] mb-12">
            Our Manufacturing Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="h-full">
              <CardContent className="p-8">
                <img 
                  src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c" 
                  alt="IoT Manufacturing" 
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-semibold text-[#236eb4] mb-4">IoT & Industrial Automation</h3>
                <p className="text-gray-600 mb-4">
                  Connected manufacturing systems with IoT sensors, real-time monitoring, 
                  and automated process control for optimal efficiency.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• IoT Sensor Networks</li>
                  <li>• Real-time Monitoring</li>
                  <li>• Process Automation</li>
                  <li>• Predictive Maintenance</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardContent className="p-8">
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789" 
                  alt="Quality Management" 
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-semibold text-[#236eb4] mb-4">Quality Management Systems</h3>
                <p className="text-gray-600 mb-4">
                  Advanced quality control solutions with AI-powered defect detection, 
                  statistical process control, and compliance management.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Automated Quality Inspection</li>
                  <li>• Statistical Process Control</li>
                  <li>• Compliance Tracking</li>
                  <li>• Quality Analytics</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      
      <CTASection
        title="Ready to Modernize Your Manufacturing Operations?"
        description="Transform your production capabilities with our Industry 4.0 solutions."
        buttonText="Get Started"
        backgroundColor="bg-gray-900"

      />
    </Layout>
  );
};

export default Manufacturing;
