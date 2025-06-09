"use client"
import CTASection from "@/components/CTASection";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const HRRecruitment = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#236eb4]">
                HR & Talent Management Solutions
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-700">
                Streamline your HR processes with intelligent recruitment tools, employee management 
                systems, and analytics that drive organizational success and employee satisfaction.
              </p>
              <Button className="bg-[#236eb4] hover:bg-[#1e5a9e] text-white font-semibold px-8 py-3">
                Discover Solutions
              </Button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" 
                alt="HR Technology" 
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
              Revolutionizing Human Resources
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Modern HR departments need advanced technology to attract top talent, manage employee 
              lifecycles, and drive organizational performance. Our solutions automate processes, 
              provide insights, and enhance employee experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Key Challenges */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#236eb4] mb-12">
            HR Industry Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-3">Talent Acquisition</h3>
                <p className="text-gray-600">Finding and attracting the right candidates in a competitive job market.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-semibold mb-3">Employee Engagement</h3>
                <p className="text-gray-600">Maintaining high levels of employee satisfaction and reducing turnover rates.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-semibold mb-3">Performance Management</h3>
                <p className="text-gray-600">Tracking and improving employee performance with data-driven insights.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#236eb4] mb-12">
            Our HR Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="h-full">
              <CardContent className="p-8">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
                  alt="AI Recruitment" 
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-semibold text-[#236eb4] mb-4">AI-Powered Recruitment</h3>
                <p className="text-gray-600 mb-4">
                  Intelligent recruitment platforms that automate candidate screening, 
                  matching, and interview scheduling for faster hiring decisions.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Resume Parsing & Matching</li>
                  <li>• Video Interview Platforms</li>
                  <li>• Candidate Assessment Tools</li>
                  <li>• Automated Workflows</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardContent className="p-8">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf" 
                  alt="HRMS" 
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-semibold text-[#236eb4] mb-4">Comprehensive HRMS</h3>
                <p className="text-gray-600 mb-4">
                  Complete HR management systems covering payroll, benefits, performance 
                  tracking, and employee self-service portals.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Payroll Management</li>
                  <li>• Performance Analytics</li>
                  <li>• Employee Self-Service</li>
                  <li>• Compliance Tracking</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      
      <CTASection
        title="Ready to Transform Your HR Operations?"
        description="Optimize your talent management with our innovative HR technology solutions."
        buttonText="Schedule Demo"
        backgroundColor="bg-gray-900"

      />
    </Layout>
  );
};

export default HRRecruitment;
