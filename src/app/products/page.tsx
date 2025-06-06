"use client"
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";

const Products = () => {
  const products = [
    {
      title: "Assessment Portal",
      description: "AI-powered online assessment portal with multi-language support (English & Arabic), advanced proctoring, and intelligent question generation.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
      features: [
        "Multi-language support (English & Arabic)",
        "AI-powered question generation",
        "Advanced remote proctoring",
        "Real-time analytics and reporting",
        "Adaptive testing algorithms"
      ],
      link: "/products/assessment-portal",
      badge: "Multi-Language"
    },
    {
      title: "Manufacturing ERP",
      description: "Comprehensive ERP solution designed specifically for manufacturing industry with AI-driven production management and Industry 4.0 integration.",
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492",
      features: [
        "AI-optimized production planning",
        "Smart inventory management",
        "Supply chain optimization",
        "Quality control automation",
        "IoT and Industry 4.0 integration"
      ],
      link: "/products/erp",
      badge: "Industry 4.0"
    },
    {
      title: "Inventory Management",
      description: "Intelligent inventory management portal with predictive analytics, real-time tracking, and automated optimization for efficient operations.",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      features: [
        "AI-powered demand forecasting",
        "RFID and barcode scanning",
        "Multi-location inventory tracking",
        "Automated reorder management",
        "Real-time analytics dashboard"
      ],
      link: "/products/inventory-management",
      badge: "Smart Tracking"
    },
    {
      title: "Conversational AI",
      description: "Advanced AI agents with natural voice synthesis, multi-language support, and human-like conversation capabilities for customer engagement.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      features: [
        "Neural voice synthesis",
        "Natural language processing",
        "25+ language support",
        "Contextual memory and learning",
        "Real-time speech processing"
      ],
      link: "/products/conversational-ai",
      badge: "Voice AI"
    }
  ];

  const integrations = [
    "Salesforce", "Microsoft 365", "Google Workspace", "Slack", "Zoom", "AWS", "Azure", "SAP"
  ];

  return (
    <Layout>

      <HeroSection
        title="AI-Powered Products for Instant Impact"
        subtitle="Ready-to-deploy intelligent solutions that transform your business operations with advanced AI capabilities, seamless integration, and proven results."
        buttonText="Explore Products"
        buttonLink="#products-grid"
        backgroundImage="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
      />

      {/* Products Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="products-grid">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#236eb4] to-[#089949] bg-clip-text text-transparent mb-6">
              Our AI Product Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Battle-tested AI products built with cutting-edge technology, ready for immediate deployment 
              and customization to meet your specific business requirements.
            </p>
          </div>
          
          <div className="space-y-16">
            {products.map((product, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative group">
                    <img 
                      src={product.image}
                      alt={product.title}
                      className="w-full h-80 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#236eb4]/20 to-[#089949]/20 rounded-2xl group-hover:opacity-0 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-[#f9b21d] text-black px-3 py-1 rounded-full text-sm font-bold">
                        {product.badge}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="h-full border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        <Sparkles className="w-6 h-6 text-[#f9b21d] mr-2" />
                        <span className="text-sm font-semibold text-[#236eb4] uppercase tracking-wide">AI-Powered Solution</span>
                      </div>
                      <h3 className="text-3xl font-bold text-[#236eb4] mb-4">{product.title}</h3>
                      <p className="text-gray-600 mb-6 text-lg leading-relaxed">{product.description}</p>
                      
                      <div className="mb-8">
                        <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                          <CheckCircle className="w-5 h-5 text-[#089949] mr-2" />
                          Key Features:
                        </h4>
                        <ul className="space-y-3">
                          {product.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-gray-600 flex items-center">
                              <span className="w-2 h-2 bg-[#f9b21d] rounded-full mr-4 flex-shrink-0"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button 
                          className="flex-1 bg-gradient-to-r from-[#f9b21d] to-[#e6a01a] hover:from-[#e6a01a] hover:to-[#d4940f] text-black font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                          onClick={() => window.location.href = product.link}
                        >
                          Learn More
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button 
                          variant="outline"
                          className="flex-1 border-2 border-[#236eb4] text-[#236eb4] hover:bg-[#236eb4] hover:text-white py-3 px-6 rounded-xl transition-all duration-300"
                          onClick={() => window.location.href = '/contact'}
                        >
                          Book Demo
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#236eb4] mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI products are designed to integrate seamlessly with your existing tech stack 
              and popular business applications for immediate value delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-12">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <span className="font-semibold text-gray-700">{integration}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-[#236eb4]/10 to-[#089949]/10 border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#236eb4] mb-4">Custom Integrations Available</h3>
                <p className="text-gray-600 text-lg mb-6">
                  Need integration with a specific system not listed? Our AI experts can develop custom integrations 
                  to connect our products with any third-party application or legacy system.
                </p>
                <Button 
                  className="bg-[#f9b21d] hover:bg-[#e6a01a] text-black font-bold px-8 py-3 rounded-xl"
                  onClick={() => window.location.href = '/contact'}
                >
                  Discuss Integration Needs
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Benefits */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#236eb4] mb-6">
                Why Choose Our AI Products?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our products combine cutting-edge AI technology with proven business value, 
                delivering immediate impact and long-term growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="text-5xl mb-6">⚡</div>
                  <h3 className="text-2xl font-bold text-[#236eb4] mb-4">Rapid Deployment</h3>
                  <p className="text-gray-600 text-lg">Get up and running in weeks, not months, with our pre-built AI solutions designed for immediate impact.</p>
                </CardContent>
              </Card>
              
              <Card className="text-center bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="text-5xl mb-6">🔧</div>
                  <h3 className="text-2xl font-bold text-[#236eb4] mb-4">Fully Customizable</h3>
                  <p className="text-gray-600 text-lg">Adapt our products to match your exact business requirements, branding, and workflow preferences.</p>
                </CardContent>
              </Card>
              
              <Card className="text-center bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="text-5xl mb-6">📈</div>
                  <h3 className="text-2xl font-bold text-[#236eb4] mb-4">Proven ROI</h3>
                  <p className="text-gray-600 text-lg">Our products have delivered measurable value and significant ROI to organizations worldwide.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Operations?"
        description="Discover how our AI-powered products can revolutionize your business processes and drive unprecedented growth and efficiency."
        buttonText="Explore All Products"
      />
    </Layout>
  );
};

export default Products;
