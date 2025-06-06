"use client"
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, TrendingUp, AlertTriangle, BarChart3, Scan, Clock, Brain, Zap } from "lucide-react";

const InventoryManagement = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-[#f9b21d]" />,
      title: "AI-Powered Forecasting",
      description: "Intelligent demand prediction and automated reorder point optimization"
    },
    {
      icon: <Scan className="w-8 h-8 text-[#089949]" />,
      title: "Smart Tracking",
      description: "RFID, barcode, and QR code scanning with real-time location tracking"
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-[#236eb4]" />,
      title: "Automated Alerts",
      description: "Proactive notifications for low stock, expiry dates, and reorder requirements"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#f9b21d]" />,
      title: "Advanced Analytics",
      description: "Comprehensive reporting and analytics for inventory optimization"
    },
    {
      icon: <Package className="w-8 h-8 text-[#089949]" />,
      title: "Multi-Location Support",
      description: "Manage inventory across multiple warehouses and locations seamlessly"
    },
    {
      icon: <Clock className="w-8 h-8 text-[#236eb4]" />,
      title: "Real-Time Updates",
      description: "Instant inventory updates with live synchronization across all systems"
    }
  ];

  const benefits = [
    "Reduce inventory costs by up to 25%",
    "Eliminate stockouts with predictive analytics",
    "Automate 80% of inventory management tasks",
    "Real-time visibility across all locations",
    "Seamless integration with existing systems",
    "Mobile-first design for on-the-go management"
  ];

  const metrics = [
    { value: "99.8%", label: "Inventory Accuracy" },
    { value: "60%", label: "Faster Order Processing" },
    { value: "35%", label: "Reduction in Carrying Costs" },
    { value: "24/7", label: "Real-Time Monitoring" }
  ];

  return (
    <Layout>
      <HeroSection
        title="Intelligent Inventory Management"
        subtitle="AI-powered inventory management portal that transforms how you track, manage, and optimize your inventory with predictive analytics and real-time insights."
        buttonText="Try Free Demo"
        buttonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1553062407-98eeb64c6a62"
      />

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#236eb4] to-[#089949] bg-clip-text text-transparent mb-6">
              Smart Inventory Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage artificial intelligence to automate inventory processes, predict demand patterns, 
              and optimize stock levels across your entire operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#236eb4] mb-8">
                Optimize Your Inventory Operations
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our AI-powered inventory management system delivers unprecedented visibility and control 
                over your stock levels, ensuring optimal inventory performance across all locations.
              </p>
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <Package className="w-6 h-6 text-[#089949] mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#f9b21d] to-[#e6a01a] hover:from-[#e6a01a] hover:to-[#d4940f] text-black font-bold px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() => window.location.href = '/contact'}
              >
                <Zap className="w-5 h-5 mr-2" />
                Get Started
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
                alt="Inventory Management Dashboard"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#236eb4]/20 to-[#089949]/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-gradient-to-br from-[#236eb4]/10 to-[#089949]/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#236eb4] mb-8">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations worldwide trust our inventory management system to deliver 
              measurable improvements in efficiency and cost savings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm shadow-xl border-0 text-center">
                <CardContent className="p-8">
                  <div className="text-4xl md:text-5xl font-bold text-[#f9b21d] mb-4">{metric.value}</div>
                  <p className="text-gray-700 font-semibold">{metric.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#236eb4] mb-8">
            Advanced Technology Stack
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Built with cutting-edge technologies to ensure scalability, reliability, 
            and seamless integration with your existing systems.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-white to-gray-50 shadow-xl border-0">
              <CardContent className="p-8">
                <Brain className="w-12 h-12 text-[#f9b21d] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Machine Learning</h3>
                <p className="text-gray-600">Advanced ML algorithms for demand forecasting, pattern recognition, and inventory optimization.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-white to-gray-50 shadow-xl border-0">
              <CardContent className="p-8">
                <TrendingUp className="w-12 h-12 text-[#089949] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Predictive Analytics</h3>
                <p className="text-gray-600">Data-driven insights for proactive inventory management and strategic decision making.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-white to-gray-50 shadow-xl border-0">
              <CardContent className="p-8">
                <Scan className="w-12 h-12 text-[#236eb4] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">IoT Integration</h3>
                <p className="text-gray-600">Seamless connectivity with sensors, RFID tags, and automated tracking systems.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CTASection
        title="Transform Your Inventory Management"
        description="Join thousands of businesses that have optimized their inventory operations with our AI-powered management system."
        buttonText="Start Free Trial"
      />
    </Layout>
  );
};

export default InventoryManagement;
