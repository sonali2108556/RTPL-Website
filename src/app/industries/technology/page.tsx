"use client"
import CTASection from "@/components/CTASection";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Technology = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#236eb4]">
                Technology Solutions for Tech Companies
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-700">
                Accelerate innovation with cutting-edge technology solutions designed for 
                software companies, startups, and tech enterprises looking to scale rapidly.
              </p>
              <Button className="bg-[#236eb4] hover:bg-[#1e5a9e] text-white font-semibold px-8 py-3">
                Discover Solutions
              </Button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176" 
                alt="Technology Solutions" 
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
              Empowering Technology Innovation
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Technology companies need specialized solutions to stay competitive in fast-paced markets. 
              Our expertise helps tech companies build scalable platforms, accelerate development cycles, 
              and deliver innovative products to market faster.
            </p>
          </div>
        </div>
      </section>

      {/* Key Challenges */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#236eb4] mb-12">
            Technology Industry Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-3">Rapid Scaling</h3>
                <p className="text-gray-600">Building scalable architectures that can handle exponential growth and user demands.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">⏰</div>
                <h3 className="text-xl font-semibold mb-3">Time to Market</h3>
                <p className="text-gray-600">Accelerating development cycles to launch products faster than competitors.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-semibold mb-3">Technical Debt</h3>
                <p className="text-gray-600">Managing legacy systems while implementing modern development practices.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#236eb4] mb-12">
            Our Technology Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="h-full">
              <CardContent className="p-8">
                <img 
                  src="https://images.unsplash.com/photo-1555949963-aa79dcee981c" 
                  alt="Cloud Architecture" 
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-semibold text-[#236eb4] mb-4">Cloud-Native Development</h3>
                <p className="text-gray-600 mb-4">
                  Build scalable, resilient applications using cloud-native architectures, 
                  microservices, and modern development frameworks.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Microservices Architecture</li>
                  <li>• Container Orchestration</li>
                  <li>• CI/CD Pipelines</li>
                  <li>• Auto-scaling Solutions</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardContent className="p-8">
                <img 
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d" 
                  alt="AI Integration" 
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-semibold text-[#236eb4] mb-4">AI & Machine Learning Integration</h3>
                <p className="text-gray-600 mb-4">
                  Integrate advanced AI capabilities into your products with machine learning 
                  models, natural language processing, and intelligent automation.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• ML Model Development</li>
                  <li>• AI API Integration</li>
                  <li>• Data Pipeline Automation</li>
                  <li>• Intelligent Analytics</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#236eb4] to-[#1e5a9e] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Accelerate Your Tech Innovation?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Partner with us to build cutting-edge technology solutions that drive your business forward.
          </p>
          <Button className="bg-[#f9b21d] hover:bg-[#e6a01a] text-black font-semibold px-8 py-3">
            Start Your Project
          </Button>
        </div>
      </section>
      <CTASection
        title="Ready to Accelerate Your Tech Innovation?"
        description="Partner with us to build cutting-edge technology solutions that drive your business forward."
        buttonText="Start Your Project"
        backgroundColor="bg-gray-900"

      />
    </Layout>
  );
};

export default Technology;
