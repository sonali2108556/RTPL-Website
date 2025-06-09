"use client"
import CTASection from "@/components/CTASection";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ECommerce = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#236eb4]">
                E-Commerce Platform Solutions
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-700">
                Build powerful, scalable e-commerce platforms that drive sales, enhance customer 
                experiences, and optimize business operations in the digital marketplace.
              </p>
              <Button className="bg-[#236eb4] hover:bg-[#1e5a9e] text-white font-semibold px-8 py-3">
                Explore Solutions
              </Button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d" 
                alt="E-Commerce Technology" 
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
              Driving Digital Commerce Success
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The e-commerce landscape is rapidly evolving with changing consumer expectations and 
              technological advancements. Our comprehensive solutions help businesses create 
              engaging online experiences, optimize operations, and scale effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Key Challenges */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#236eb4] mb-12">
            E-Commerce Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-semibold mb-3">Omnichannel Experience</h3>
                <p className="text-gray-600">Creating seamless customer experiences across web, mobile, and physical touchpoints.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-3">Personalization</h3>
                <p className="text-gray-600">Delivering personalized product recommendations and targeted marketing campaigns.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-3">Inventory Management</h3>
                <p className="text-gray-600">Optimizing inventory levels and supply chain operations for efficient fulfillment.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#236eb4] mb-12">
            Our E-Commerce Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="h-full">
              <CardContent className="p-8">
                <img 
                  src="https://images.unsplash.com/photo-1472851294608-062f824d29cc" 
                  alt="E-Commerce Platform" 
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-semibold text-[#236eb4] mb-4">Custom E-Commerce Platforms</h3>
                <p className="text-gray-600 mb-4">
                  Tailored e-commerce solutions with advanced features for product management, 
                  payment processing, and customer engagement.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Responsive Web Design</li>
                  <li>• Mobile App Development</li>
                  <li>• Payment Gateway Integration</li>
                  <li>• SEO Optimization</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardContent className="p-8">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                  alt="Analytics" 
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-semibold text-[#236eb4] mb-4">Analytics & Intelligence</h3>
                <p className="text-gray-600 mb-4">
                  Advanced analytics and AI-powered insights to optimize sales performance, 
                  customer behavior, and business operations.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Customer Analytics</li>
                  <li>• Sales Performance Tracking</li>
                  <li>• Predictive Analytics</li>
                  <li>• Business Intelligence Dashboards</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      
      <CTASection
        title="Ready to Scale Your E-Commerce Business?"
        description="Transform your online presence with our cutting-edge e-commerce solutions."
        buttonText="Get Started Today"
        backgroundColor="bg-gray-900"

      />
    </Layout>
  );
};

export default ECommerce;
