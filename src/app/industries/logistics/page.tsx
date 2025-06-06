"use client"
import CTASection from "@/components/CTASection";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Logistics = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#236eb4] to-[#1e5a9e] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Smart Logistics & Supply Chain Solutions
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Optimize your supply chain operations with intelligent logistics solutions that
                enhance visibility, reduce costs, and improve delivery performance.
              </p>
              <Button className="bg-[#f9b21d] hover:bg-[#e6a01a] text-black font-semibold px-8 py-3">
                Explore Solutions
              </Button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
                alt="Logistics Technology"
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
              Transforming Supply Chain Operations
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The logistics industry faces increasing demands for faster delivery, cost optimization,
              and supply chain transparency. Our technology solutions help companies streamline
              operations, improve efficiency, and meet customer expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Key Challenges */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#236eb4] mb-12">
            Logistics Industry Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">👁️</div>
                <h3 className="text-xl font-semibold mb-3">Supply Chain Visibility</h3>
                <p className="text-gray-600">Gaining real-time visibility across complex global supply chain networks.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-3">Delivery Optimization</h3>
                <p className="text-gray-600">Optimizing routes and delivery schedules to meet customer expectations.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-semibold mb-3">Cost Management</h3>
                <p className="text-gray-600">Reducing operational costs while maintaining service quality and reliability.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#236eb4] mb-12">
            Our Logistics Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="h-full">
              <CardContent className="p-8">
                <img
                  src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088"
                  alt="Fleet Management"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-semibold text-[#236eb4] mb-4">Fleet Management Systems</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive fleet management solutions with GPS tracking,
                  route optimization, and vehicle maintenance scheduling.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Real-time Vehicle Tracking</li>
                  <li>• Route Optimization</li>
                  <li>• Fuel Management</li>
                  <li>• Driver Performance Analytics</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardContent className="p-8">
                <img
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c"
                  alt="Warehouse Management"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-semibold text-[#236eb4] mb-4">Warehouse Automation</h3>
                <p className="text-gray-600 mb-4">
                  Advanced warehouse management systems with inventory tracking,
                  automated picking, and real-time stock management.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Inventory Management</li>
                  <li>• Automated Picking Systems</li>
                  <li>• Barcode & RFID Tracking</li>
                  <li>• Order Fulfillment</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      
      <CTASection
        title="Ready to Optimize Your Supply Chain?"
        description="Transform your logistics operations with our smart supply chain solutions."
        buttonText="Get Started"
        backgroundColor="bg-gray-900"

      />
    </Layout>
  );
};

export default Logistics;
