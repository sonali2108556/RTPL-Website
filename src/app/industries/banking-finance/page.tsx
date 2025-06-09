"use client"
import CTASection from "@/components/CTASection";
import HeroSection from "@/components/HeroSection";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const BankingFinance = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#236eb4] to-[#1e5a9e] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Banking & Financial Services Innovation
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Transform your financial institution with cutting-edge technology solutions designed for
                digital banking, risk management, and regulatory compliance in the modern financial landscape.
              </p>
              <Button className="bg-[#f9b21d] hover:bg-[#e6a01a] text-black font-semibold px-8 py-3">
                <Link href="/contact">Get Started</Link>
                
              </Button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43"
                alt="Banking Technology"
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
              Revolutionizing Financial Services
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The banking and financial services industry is undergoing rapid digital transformation.
              Our comprehensive solutions help financial institutions modernize their operations,
              enhance customer experiences, and maintain competitive advantages while ensuring
              regulatory compliance and security.
            </p>
          </div>
        </div>
      </section>

      {/* Key Challenges */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#236eb4] mb-12">
            Key Industry Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold mb-3">Security & Compliance</h3>
                <p className="text-gray-600">Meeting stringent regulatory requirements while maintaining robust cybersecurity measures.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-semibold mb-3">Digital Transformation</h3>
                <p className="text-gray-600">Modernizing legacy systems while ensuring seamless customer experiences across all channels.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-3">Real-time Processing</h3>
                <p className="text-gray-600">Enabling instant transactions and real-time decision making for improved customer satisfaction.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#236eb4] mb-12">
            Our Banking Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="h-full">
              <CardContent className="p-8">
                <img
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3"
                  alt="Digital Banking"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-semibold text-[#236eb4] mb-4">Digital Banking Platform</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive digital banking solutions with mobile-first design,
                  AI-powered insights, and seamless integration capabilities.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Mobile Banking Applications</li>
                  <li>• Online Banking Portals</li>
                  <li>• API-first Architecture</li>
                  <li>• Real-time Analytics</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardContent className="p-8">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                  alt="Risk Management"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-semibold text-[#236eb4] mb-4">Risk Management & Compliance</h3>
                <p className="text-gray-600 mb-4">
                  Advanced risk assessment tools and automated compliance monitoring
                  to ensure regulatory adherence and minimize operational risks.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Fraud Detection Systems</li>
                  <li>• Regulatory Reporting</li>
                  <li>• Credit Risk Assessment</li>
                  <li>• AML/KYC Solutions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 bg-gradient-to-r from-[#236eb4] to-[#1e5a9e] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Financial Services?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Partner with us to modernize your banking operations and deliver exceptional customer experiences.
          </p>
          <Button className="bg-[#f9b21d] hover:bg-[#e6a01a] text-black font-semibold px-8 py-3">
            Schedule Consultation
          </Button>
        </div>
      </section> */}
      <CTASection
        title="Ready to Transform Your Financial Services?"
        description="Partner with us to modernize your banking operations and deliver exceptional customer experiences."
        buttonText="Schedule Consultation"
        backgroundColor="bg-gray-900"
      />
    </Layout>
  );
};

export default BankingFinance;
