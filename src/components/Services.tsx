import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { servicesData } from "@/data/services";

const Services = () => {
  return (
    <section id="services" className="bg-slate-bg py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-4">
            Everything Your Family Needs — All Under One Roof
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From routine cleanings to full smile makeovers, we handle it all.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="bg-background rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200 p-5 md:p-6 flex flex-col text-left group"
              >
                <div className="w-full h-24 md:h-32 rounded-lg overflow-hidden mb-3">
                  <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                </div>
                <Icon className="w-8 h-8 text-teal mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-primary text-base mb-1">{service.name}</h3>
                <p className="text-sm text-muted-foreground mb-3 flex-1">{service.shortDesc}</p>
                <span className="text-teal text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 bg-gold rounded-xl p-8 md:p-10 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-gold-foreground mb-4">
            Ready to Book? New Patients Always Welcome.
          </h3>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-lg text-lg hover:opacity-90 active:scale-95 transition-all"
          >
            <Calendar className="w-5 h-5" />
            Schedule Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
