
import { Zap, Globe, TrendingUp, Target } from "lucide-react";

const StatsSection = () => {
  const stats = [
    { number: "500+", label: "AI Projects Delivered", icon: Zap },
    { number: "50+", label: "Global AI Clients", icon: Globe },
    { number: "15+", label: "Years AI Innovation", icon: TrendingUp },
    { number: "99.5%", label: "AI Success Rate", icon: Target }
  ];

  return (
    <section className="bg-white py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="bg-gray-50 backdrop-blur-md rounded-2xl p-6 border border-gray-200 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                <stat.icon className="w-8 h-8 text-[#f9b21d] mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold mb-2 text-[#236eb4]">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
