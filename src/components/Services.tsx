import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";
import { servicesData } from "@/data/services";

const Services = () => {
  // Categorize services
  const categories = {
    cosmetic: ["cosmetic-dentistry", "teeth-whitening", "invisalign"],
    preventive: ["general-dentistry", "childrens-dentistry"],
    restoration: ["dental-implants", "dental-crowns", "root-canals", "dentures"],
    specialized: ["sedation-dentistry", "tooth-extractions", "emergency-dentistry"]
  };

  const getCategoryLabel = (slug: string): string => {
    if (categories.cosmetic.includes(slug)) return "Cosmetic";
    if (categories.preventive.includes(slug)) return "Preventive";
    if (categories.restoration.includes(slug)) return "Restoration";
    return "Specialized";
  };

  const getCategoryColor = (slug: string) => {
    const category = getCategoryLabel(slug);
    switch (category) {
      case "Cosmetic":
        return "from-pink-100 to-rose-100 text-pink-700 border-pink-200";
      case "Preventive":
        return "from-green-100 to-emerald-100 text-green-700 border-green-200";
      case "Restoration":
        return "from-blue-100 to-cyan-100 text-blue-700 border-blue-200";
      case "Specialized":
        return "from-purple-100 to-indigo-100 text-purple-700 border-purple-200";
      default:
        return "from-gray-100 to-slate-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <section id="services" className="relative py-20 md:py-28 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4 border border-blue-200">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Services We Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Everything Your Family Needs — All Under One Roof
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From routine cleanings to full smile makeovers. Expert care using the latest technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            const category = getCategoryLabel(service.slug);
            const categoryColor = getCategoryColor(service.slug);
            
            return (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group relative h-full"
                style={{
                  animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Card */}
                <div className="relative h-full bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-blue-400 flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-48 md:h-56 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Badge */}
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-bold border bg-gradient-to-r ${categoryColor}`}>
                      {category}
                    </div>

                    {/* Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white rounded-full p-4 shadow-xl transform group-hover:scale-100 scale-75">
                        <Icon className="w-8 h-8 text-blue-600" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-5 md:p-6">
                    {/* Title */}
                    <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                      {service.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 flex-1 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Service Features */}
                    <div className="mb-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between text-xs text-gray-500 gap-2">
                        {service.duration && (
                          <span className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                            {service.duration.split(" ")[0]}
                          </span>
                        )}
                        {service.pricing && (
                          <span className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                            {service.pricing.basePrice}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all text-sm">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Hover Border */}
                  <div className="absolute inset-0 rounded-xl border-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="relative mt-16 py-12 px-8 md:px-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 rounded-2xl shadow-2xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Ready to Start Your Smile Journey?
              </h3>
              <p className="text-blue-100 text-lg">
                New patients always welcome. Let us create your perfect smile today.
              </p>
            </div>
            <div className="flex gap-4 flex-shrink-0 flex-wrap md:flex-nowrap">
              <a
                href="tel:+16262874094"
                className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-blue-50 transition-all shadow-lg whitespace-nowrap"
              >
                <span>📞</span>
                (626) 287-4094
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all shadow-lg whitespace-nowrap"
              >
                <Calendar className="w-5 h-5" />
                Schedule Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
