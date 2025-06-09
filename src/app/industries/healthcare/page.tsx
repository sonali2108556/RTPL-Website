"use client"
import CTASection from "@/components/CTASection";
import HeroSection from "@/components/HeroSection";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Healthcare = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#236eb4] to-[#1e5a9e] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Healthcare Technology Solutions
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Revolutionize patient care with innovative healthcare technology solutions that
                improve outcomes, streamline operations, and enhance the overall healthcare experience.
              </p>
              <Button className="bg-[#f9b21d] hover:bg-[#e6a01a] text-black font-semibold px-8 py-3">
                Learn More
              </Button>
            </div>
            <div>
              <img
                src="/healthcare.webp"
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
              Transforming Healthcare Delivery
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The healthcare industry faces unique challenges in delivering quality care while managing costs
              and ensuring patient safety. Our technology solutions help healthcare providers modernize
              their systems, improve patient outcomes, and streamline clinical workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Key Challenges */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#236eb4] mb-12">
            Healthcare Industry Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-semibold mb-3">Patient Data Security</h3>
                <p className="text-gray-600">Protecting sensitive patient information while ensuring HIPAA compliance and data accessibility.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-semibold mb-3">System Interoperability</h3>
                <p className="text-gray-600">Integrating diverse healthcare systems to enable seamless data exchange and care coordination.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-semibold mb-3">Cost Management</h3>
                <p className="text-gray-600">Reducing operational costs while maintaining high-quality patient care and improving efficiency.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#236eb4] mb-12">
            Our Healthcare Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="h-full">
              <CardContent className="p-8">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f"
                  alt="Electronic Health Records"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-semibold text-[#236eb4] mb-4">Electronic Health Records (EHR)</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive EHR systems that streamline patient data management,
                  improve clinical decision-making, and enhance care coordination.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Patient Portal Integration</li>
                  <li>• Clinical Decision Support</li>
                  <li>• Mobile Access</li>
                  <li>• HIPAA Compliance</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardContent className="p-8">
                <img
                  src="https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d"
                  alt="Telemedicine"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-semibold text-[#236eb4] mb-4">Telemedicine Platforms</h3>
                <p className="text-gray-600 mb-4">
                  Secure telemedicine solutions that enable remote consultations,
                  expand healthcare access, and improve patient convenience.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Video Consultations</li>
                  <li>• Remote Monitoring</li>
                  <li>• Prescription Management</li>
                  <li>• Multi-device Support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      <CTASection
        title="Ready to Modernize Your Healthcare Operations?"
        description="Transform patient care with our innovative healthcare technology solutions."
        buttonText="Schedule Consultation"
        backgroundColor="bg-gray-900"
      />
    </Layout>
  );
};

export default Healthcare;
