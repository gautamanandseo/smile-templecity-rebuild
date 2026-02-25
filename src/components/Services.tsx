import { Calendar, Sparkles, Baby, Moon, Smile, Diamond, Crown, Siren, RotateCcw, Heart, Scissors, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  name: string;
  desc: string;
}

const services: Service[] = [
  { icon: Heart, name: "General Dentistry", desc: "Cleanings, fillings, and preventive care for the whole family" },
  { icon: Sparkles, name: "Cosmetic Dentistry", desc: "Veneers, bonding, recontouring — your best smile yet" },
  { icon: Smile, name: "Teeth Whitening", desc: "Whiten 4–8 shades with professional-grade treatment" },
  { icon: Baby, name: "Children's Dentistry", desc: "Gentle, fun, and kid-friendly care from the first tooth" },
  { icon: Moon, name: "Sedation Dentistry", desc: "Anxiety-free dentistry for nervous patients" },
  { icon: Smile, name: "Invisalign", desc: "Straight teeth without metal braces — discreet and comfortable" },
  { icon: Diamond, name: "Dental Implants", desc: "Permanent tooth replacement that looks and feels natural" },
  { icon: Crown, name: "Dental Crowns", desc: "Protect and restore damaged or cracked teeth" },
  { icon: Siren, name: "Emergency Dentistry", desc: "24-hour emergency line — we're here when you need us" },
  { icon: RotateCcw, name: "Root Canals", desc: "Pain-free endodontic treatment to save your natural tooth" },
  { icon: Heart, name: "Dentures", desc: "Full and partial dentures crafted for comfort and confidence" },
  { icon: Scissors, name: "Tooth Extractions", desc: "Gentle extractions with sedation options available" },
];

const Services = () => (
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
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.name}
              className="bg-background rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200 p-5 md:p-6 flex flex-col"
            >
              <Icon className="w-8 h-8 text-teal mb-3" />
              <h3 className="font-bold text-primary text-base mb-1">{s.name}</h3>
              <p className="text-sm text-muted-foreground mb-3 flex-1">{s.desc}</p>
              <span className="text-teal text-sm font-medium flex items-center gap-1">
                Learn more <ArrowRight className="w-3 h-3" />
              </span>
            </div>
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

export default Services;
