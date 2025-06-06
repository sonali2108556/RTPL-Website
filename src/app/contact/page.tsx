"use client"
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const offices = [                                       
    {
      city: "New York",
      address: "123 Tech Avenue, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "newyork@techsolutions.com"
    },
    {
      city: "London",
      address: "456 Innovation Street, London EC1A 1AA",
      phone: "+44 20 1234 5678",
      email: "london@techsolutions.com"
    },
    {
      city: "Singapore",
      address: "789 Digital Boulevard, Singapore 018956",
      phone: "+65 6123 4567",
      email: "singapore@techsolutions.com"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout>
      <HeroSection
        title="Let's Work Together to Build Something Great"
        subtitle="Ready to transform your business with cutting-edge technology? Get in touch with our experts and let's discuss your next project."
        buttonText="Schedule a Call"
        buttonLink="#contact-form"
        backgroundImage="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
      />

      {/* Contact Form and Office Locations */}
      <section className="py-16 bg-white" id="contact-form">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#236eb4] mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full"
                    placeholder="Tell us about your project or requirements..."
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-[#f9b21d] hover:bg-[#e6a01a] text-black font-semibold"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Office Locations */}
            <div>
              <h2 className="text-3xl font-bold text-[#236eb4] mb-6">
                Our Global Offices
              </h2>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-[#236eb4] mb-3">{office.city}</h3>
                      <div className="space-y-2 text-gray-600">
                        <p>{office.address}</p>
                        <p>Phone: {office.phone}</p>
                        <p>Email: {office.email}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Map Placeholder */}
              <div className="mt-8">
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Interactive Map Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Looking to Discuss Your Project?"
        description="Book a consultation call with our experts to explore how we can help transform your business."
        buttonText="Book a Call"
        backgroundColor="bg-gray-900"
      />
    </Layout>
  );
};

export default ContactUs;
