"use client"
import { useState } from "react";
import { ChevronDown, Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

type MenuItemDetails = {
  title: string;
  description: string;
  buttonText: string;
};

type SubMenuItem = {
  title: string;
  path: string;
  details: MenuItemDetails;
};

type MenuItem = {
  submenu: SubMenuItem[];
};

type MenuItems = {
  "Who We Are": MenuItem;
  "What We Do": MenuItem;
};

const Header = () => {
  const [activeMenu, setActiveMenu] = useState<keyof MenuItems | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuItems: MenuItems = {
    "Who We Are": {
      submenu: [
        {
          title: "Overview",
          path: "/who-we-are",
          details: {
            title: "AI-Powered Innovation",
            description: "Discover how our AI-first approach transforms businesses through intelligent automation and data-driven insights.",
            buttonText: "Explore Our Vision"
          }
        },
        {
          title: "About Us",
          path: "/about-us",
          details: {
            title: "Your AI Transformation Partner",
            description: "Leading the future of enterprise AI with cutting-edge solutions and autonomous intelligent systems.",
            buttonText: "Meet Our Team"
          }
        },
        {
          title: "Our Journey",
          path: "/our-journey",
          details: {
            title: "Pioneering AI Excellence",
            description: "From startup to AI industry leader - our journey of innovation, breakthroughs, and transformative solutions.",
            buttonText: "See Our Milestones"
          }
        }
      ]
    },
    "What We Do": {
      submenu: [
        {
          title: "Overview",
          path: "/services",
          details: {
            title: "AI-Native Solutions",
            description: "Comprehensive AI services that automate, optimize, and revolutionize your business operations.",
            buttonText: "Explore Services"
          }
        },
        {
          title: "Services",
          path: "/services",
          details: {
            title: "Intelligent Automation",
            description: "From AI agents to autonomous systems - we build the future of intelligent enterprise solutions.",
            buttonText: "View All Services"
          }
        },
        {
          title: "Industries",
          path: "/industries",
          details: {
            title: "AI Across Industries",
            description: "Sector-specific AI solutions that understand your domain and deliver measurable business impact.",
            buttonText: "Industry Solutions"
          }
        },
        {
          title: "Products & Platforms",
          path: "/products",
          details: {
            title: "Ready-to-Deploy AI",
            description: "Pre-built AI platforms and intelligent products designed to accelerate your digital transformation.",
            buttonText: "Explore Products"
          }
        }
      ]
    }
  };

  const handleMenuEnter = (menuTitle: keyof MenuItems) => {
    setActiveMenu(menuTitle);
    if (menuItems[menuTitle]?.submenu) {
      setActiveSubmenu(menuItems[menuTitle].submenu[0].title);
    }
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
    setActiveSubmenu(null);
  };

  const isActiveRoute = (path: string) => {
    return pathname === path;
  };

  const isActiveParentRoute = (submenu: any[]) => {
    return submenu.some(item => pathname === item.path);
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Image src="/RTPL-Digital-png.png" alt="RTPL Digital Logo" width={100} height={100} />
            </div>
            {/* <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#236eb4] to-[#089949] bg-clip-text text-transparent">RTPL Digital</span>
              <div className="text-xs text-gray-500 font-medium">AI-Driven Solutions</div>
            </div> */}
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex relative">
            <div className="flex items-center space-x-2">
              {Object.entries(menuItems).map(([menuTitle, menuData]) => (
                <div
                  key={menuTitle}
                  className="relative"
                  onMouseEnter={() => handleMenuEnter(menuTitle as keyof MenuItems)}
                  onMouseLeave={handleMenuLeave}
                >
                  <button className={`flex items-center px-4 py-3 transition-all duration-300 font-medium rounded-lg ${
                    isActiveParentRoute(menuData.submenu) 
                      ? 'text-white bg-yellow-400' 
                      : 'text-gray-700 hover:text-[#236eb4] hover:bg-yellow-100'
                  }`}>
                    {menuTitle}
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300" />
                  </button>

                  {activeMenu === menuTitle && (
                    <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-2xl z-50 w-[700px] flex rounded-xl overflow-hidden animate-fade-in">
                      <div className="w-56 bg-gradient-to-b from-blue-50 to-green-50 border-r">
                        {menuData.submenu.map((item) => (
                          <div
                            key={item.title}
                            className="relative"
                            onMouseEnter={() => setActiveSubmenu(item.title)}
                          >
                            <Link
                              href={item.path}
                              className={`block px-6 py-4 text-gray-700 hover:bg-white/70 hover:text-[#236eb4] transition-all duration-300 font-medium ${
                                activeSubmenu === item.title ? 'bg-white/70 text-[#236eb4] border-r-2 border-[#f9b21d]' : ''
                              }`}
                            >
                              {item.title}
                            </Link>
                          </div>
                        ))}
                      </div>

                      <div className="flex-1 p-8 bg-white">
                        {activeSubmenu && (
                          <div className="space-y-4">
                            {menuData.submenu
                              .filter((item) => item.title === activeSubmenu)
                              .map((item) => (
                                <div key={item.title} className="animate-fade-in">
                                  <h3 className="text-2xl font-bold text-[#236eb4] mb-3">
                                    {item.details.title}
                                  </h3>
                                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                    {item.details.description}
                                  </p>
                                  <Link href={item.path}>
                                    <Button className="bg-gradient-to-r from-[#f9b21d] to-[#e6a01a] hover:from-[#e6a01a] hover:to-[#d4940f] text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                                      {item.details.buttonText}
                                    </Button>
                                  </Link>
                                </div>
                              ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <Link
                href="/idea-methodology"
                className={`px-4 py-3 transition-all duration-300 font-medium rounded-lg ${
                  isActiveRoute("/idea-methodology") 
                  ? 'text-white bg-yellow-400' 
                  : 'text-gray-700 hover:text-[#236eb4] hover:bg-yellow-100'
            }`}
              >
                IDEA Methodology
              </Link>

              <Link
                href="/case-studies"
                className={`px-4 py-3 transition-all duration-300 font-medium rounded-lg ${
                  isActiveRoute("/case-studies") 
                    ? 'text-white bg-yellow-400' 
                    : 'text-gray-700 hover:text-[#236eb4] hover:bg-yellow-100'
                }`}
              >
                Case Studies
              </Link>

              <Link
                href="/contact"
                className={`px-4 py-3 transition-all duration-300 font-medium rounded-lg ${
                  isActiveRoute("/contact") 
                    ? 'text-white bg-yellow-400 ' 
                    : 'text-gray-700 hover:text-[#236eb4] hover:bg-yellow-100'
                }`}
              >
                Contact Us
              </Link>
            </div>
          </nav>

          {/* Enhanced CTA Button */}
          <div className="hidden lg:flex items-center">
            <Button className="bg-[#f9b21d] hover:bg-[#e6a01a] text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Sparkles className="w-4 h-4 mr-2" />
              Start AI Journey
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg animate-fade-in">
            <div className="p-4 space-y-2">
              <Link href="/who-we-are" className={`block py-2 transition-colors ${
                isActiveRoute("/who-we-are") ? 'text-[#236eb4]' : 'text-gray-700 hover:text-[#236eb4]'
              }`}>Who We Are</Link>
              <Link href="/services" className={`block py-2 transition-colors ${
                isActiveRoute("/services") ? 'text-[#236eb4]' : 'text-gray-700 hover:text-[#236eb4]'
              }`}>Services</Link>
              <Link href="/industries" className={`block py-2 transition-colors ${
                isActiveRoute("/industries") ? 'text-[#236eb4]' : 'text-gray-700 hover:text-[#236eb4]'
              }`}>Industries</Link>
              <Link href="/idea-methodology" className={`block py-2 transition-colors ${
                isActiveRoute("/idea-methodology") ? 'text-[#236eb4]' : 'text-gray-700 hover:text-[#236eb4]'
              }`}>IDEA Methodology</Link>
              <Link href="/case-studies" className={`block py-2 transition-colors ${
                isActiveRoute("/case-studies") ? 'text-[#236eb4]' : 'text-gray-700 hover:text-[#236eb4]'
              }`}>Case Studies</Link>
              <Link href="/contact" className={`block py-2 transition-colors ${
                isActiveRoute("/contact") ? 'text-[#236eb4]' : 'text-gray-700 hover:text-[#236eb4]'
              }`}>Contact Us</Link>
              <Button className="w-full mt-4 bg-[#f9b21d] hover:bg-[#e6a01a] text-black">
                Start AI Journey
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
