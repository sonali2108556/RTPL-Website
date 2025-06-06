
const TechPartnersSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#236eb4] mb-6">
            Strategic AI Technology Partners
          </h2>
          <p className="text-xl text-gray-600">
            Collaborating with industry leaders to deliver cutting-edge AI solutions
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {["Microsoft AI", "Google Cloud AI", "AWS AI/ML", "OpenAI", "NVIDIA", "Anthropic"].map((partner, index) => (
            <div key={index} className="text-center hover:scale-110 transition-transform duration-300 group">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 hover:border-[#f9b21d]/50">
                <div className="w-8 h-8 bg-gradient-to-br from-[#236eb4] to-[#f9b21d] rounded-lg mx-auto mb-3"></div>
                <span className="font-semibold text-gray-700 group-hover:text-[#236eb4] transition-colors">{partner}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechPartnersSection;
