
import { Facebook, Linkedin, Youtube, Sparkles, Mail, Phone, MapPin, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const services = [
    { name: "AI Driven Development", link: "/services/ai-driven-development" },
    { name: "AI Agents & Copilots", link: "/services/ai-agents-and-copilots" },
    { name: "Empower Legacy Applications", link: "/services/empower-legacy-applications" },
    { name: "Startup Solutions", link: "/services/startup-solutions" },
    { name: "Custom Platform Development", link: "/services/custom-platform-development" },
    { name: "Data & AI Services", link: "/services/data-and-ai-services" },
    { name: "Cloud Services", link: "/services/cloud-services" },
    { name: "Digital Transformation", link: "/services/digital-transformation" },
    { name: "DevOps & Automation", link: "/services/devops-and-automation" }
  ];

  const industries = [
    { name: "Banking & Finance", link: "/industries/banking-finance" },
    { name: "Healthcare", link: "/industries/healthcare" },
    { name: "E-Commerce", link: "/industries/ecommerce" },
    { name: "HR & Recruitment", link: "/industries/hr-recruitment" },
    { name: "Logistics", link: "/industries/logistics" },
    { name: "Education", link: "/industries/education" },
    { name: "Technology", link: "/industries/technology" },
    { name: "Manufacturing", link: "/industries/manufacturing" }
  ];

  const products = [
    { name: "Assessment Portal", link: "/products/assessment-portal" },
    { name: "Manufacturing ERP", link: "/products/erp" },
    { name: "Inventory Management", link: "/products/inventory-management" },
    { name: "Conversational AI", link: "/products/conversational-ai" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-[#c9c9ce] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-green-600/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-yellow-400/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Image src="/RTPL-Digital-png.png" alt="RTPL Digital Logo" width={100} height={100} />
            </div>
            <p className="text-[#c9c9ce] text-sm leading-relaxed mb-6">
              Pioneering the future of enterprise AI with autonomous intelligent systems, 
              advanced automation, and data-driven insights that transform businesses 
              across industries worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-sm text-[#c9c9ce]">
                <Mail className="w-4 h-4 text-[#f9b21d]" />
                <span>contact@rtpldigital.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-[#c9c9ce]">
                <Phone className="w-4 h-4 text-[#f9b21d]" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-[#c9c9ce]">
                <MapPin className="w-4 h-4 text-[#f9b21d]" />
                <span>Global AI Innovation Centers</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/rtpl.digital" target="_blank" className="w-10 h-10 bg-white/10 hover:bg-[#f9b21d] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/raitechintro" target="_blank" className="w-10 h-10 bg-white/10 hover:bg-[#f9b21d] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/raitechintro/" target="_blank" className="w-10 h-10 bg-white/10 hover:bg-[#f9b21d] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@rtpl.digital" target="_blank" className="w-10 h-10 bg-white/10 hover:bg-[#f9b21d] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#c9c9ce] flex items-center">
              <div className="w-2 h-2 mr-2"></div>
              AI Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link href={service.link} className="text-[#c9c9ce] hover:text-[#f9b21d] transition-colors text-sm hover:translate-x-1 transform duration-300 block">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#c9c9ce] flex items-center">
              <div className="w-2 h-2 mr-2"></div>
              Industries
            </h3>
            <ul className="space-y-3">
              {industries.map((industry, index) => (
                <li key={index}>
                  <Link href={industry.link} className="text-[#c9c9ce] hover:text-[#f9b21d] transition-colors text-sm hover:translate-x-1 transform duration-300 block">
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#c9c9ce] flex items-center">
              <div className="w-2 h-2 mr-2"></div>
              Products
            </h3>
            <ul className="space-y-3 mb-8">
              {products.map((product, index) => (
                <li key={index}>
                  <Link href={product.link} className="text-[#c9c9ce] hover:text-[#f9b21d] transition-colors text-sm hover:translate-x-1 transform duration-300 block">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-sm font-semibold mb-4 text-[#c9c9ce]">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/idea-methodology" className="text-[#c9c9ce] hover:text-[#f9b21d] transition-colors text-sm">IDEA Methodology</Link></li>
              <li><Link href="/careers" className="text-[#c9c9ce] hover:text-[#f9b21d] transition-colors text-sm">Careers</Link></li>
              <li><Link href="/case-studies" className="text-[#c9c9ce] hover:text-[#f9b21d] transition-colors text-sm">Case Studies</Link></li>
              <li><Link href="/privacy-policy" className="text-[#c9c9ce] hover:text-[#f9b21d] transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="/terms-of-use" className="text-[#c9c9ce] hover:text-[#f9b21d] transition-colors text-sm">Terms of Use</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#c9c9ce] text-sm">
            © 2025 RTPL Digital. All rights reserved. | Powered by AI Innovation
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-xs text-[#c9c9ce]">Transforming Business with AI</span>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-[#f9b21d] rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-[#236eb4] rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-2 h-2 bg-[#089949] rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
