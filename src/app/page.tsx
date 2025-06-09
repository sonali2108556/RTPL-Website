"use client"
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import AICapabilitiesSection from "@/components/homepage/AICapabilitiesSection";
import IDEAMethodologySection from "@/components/homepage/IDEAMethodologySection";
import ServicesSection from "@/components/homepage/ServicesSection";
import IndustriesSection from "@/components/homepage/IndustriesSection";

const Homepage = () => {
  return (
    <Layout>
      <HeroSection
        title="Transform Your Business with Autonomous AI Intelligence"
        subtitle="Accelerate innovation with self-learning AI agents, predictive automation, and intelligent systems that revolutionize how you work, decide, and grow."
        buttonText="Start AI Transformation"
      />

      <AICapabilitiesSection />

      <IDEAMethodologySection />

      <ServicesSection />

      <IndustriesSection />


      <CTASection
        title="Ready to Revolutionize Your Business with AI?"
        description="Join leading enterprises worldwide in transforming operations through autonomous AI intelligence, predictive automation, and data-driven insights that deliver measurable business impact."
        buttonText="Start AI Transformation"
        backgroundColor="bg-gray-900"
      />
    </Layout>
  );
};

export default Homepage;
