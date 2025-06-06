"use client"
import CTASection from "@/components/CTASection";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#236eb4] to-[#1e5a9e] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Educational Technology Solutions
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Transform learning experiences with innovative EdTech solutions that enhance 
                student engagement, improve outcomes, and modernize educational institutions.
              </p>
              <Button className="bg-[#f9b21d] hover:bg-[#e6a01a] text-black font-semibold px-8 py-3">
                Explore Solutions
              </Button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7" 
                alt="Education Technology" 
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
              Revolutionizing Education Through Technology
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The education sector is embracing digital transformation to create more engaging, 
              accessible, and effective learning experiences. Our solutions help educational 
              institutions modernize their approaches and improve student outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Key Challenges */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#236eb4] mb-12">
            Education Industry Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-semibold mb-3">Digital Learning Adoption</h3>
                <p className="text-gray-600">Transitioning from traditional teaching methods to digital learning platforms.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-3">Student Engagement</h3>
                <p className="text-gray-600">Maintaining high levels of student participation and motivation in digital environments.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-3">Educational Outcomes</h3>
                <p className="text-gray-600">Measuring and improving student performance and learning effectiveness.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#236eb4] mb-12">
            Our Education Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="h-full">
              <CardContent className="p-8">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" 
                  alt="Learning Management" 
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-semibold text-[#236eb4] mb-4">Learning Management Systems</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive LMS platforms that facilitate online learning, course management, 
                  and student-teacher collaboration in digital environments.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Course Content Management</li>
                  <li>• Virtual Classrooms</li>
                  <li>• Assessment Tools</li>
                  <li>• Progress Tracking</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardContent className="p-8">
                <img 
                  src="https://images.unsplash.com/photo-1501504905252-473c47e087f8" 
                  alt="Student Analytics" 
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-semibold text-[#236eb4] mb-4">Student Analytics Platform</h3>
                <p className="text-gray-600 mb-4">
                  Advanced analytics solutions that provide insights into student performance, 
                  learning patterns, and institutional effectiveness.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Performance Analytics</li>
                  <li>• Learning Path Optimization</li>
                  <li>• Predictive Insights</li>
                  <li>• Custom Reporting</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      
      <CTASection
        title="Ready to Transform Your Educational Institution?"
        description="Enhance learning experiences with our innovative educational technology solutions."
        buttonText="Get Started"
        backgroundColor="bg-gray-900"

      />
    </Layout>
  );
};

export default Education;
