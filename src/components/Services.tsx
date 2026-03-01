import { useState } from "react";
import { Calendar, Sparkles, Baby, Moon, Smile, Diamond, Crown, Siren, RotateCcw, Heart, Scissors, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import ServiceDetailDialog, { type ServiceDetail } from "./ServiceDetailDialog";

const services: ServiceDetail[] = [
  {
    icon: Heart, name: "General Dentistry",
    desc: "Cleanings, fillings, and preventive care for the whole family",
    image: "/images/service-general.jpg",
    longDesc: "Our general dentistry services form the foundation of your oral health. From routine cleanings and exams to fillings and preventive treatments, Dr. Chiman Lad and Dr. Sunjay Lad provide comprehensive care using the latest technology. We focus on early detection and prevention to keep your smile healthy for life.",
    benefits: ["Thorough dental exams with digital X-rays", "Professional cleanings by experienced hygienists", "Tooth-colored composite fillings", "Oral cancer screenings", "Personalized treatment plans"],
  },
  {
    icon: Sparkles, name: "Cosmetic Dentistry",
    desc: "Veneers, bonding, recontouring — your best smile yet",
    image: "/images/service-cosmetic.jpg",
    longDesc: "Transform your smile with our cosmetic dentistry services. Whether you're looking for porcelain veneers, dental bonding, or tooth recontouring, our doctors combine artistry with advanced dental techniques to create natural-looking, beautiful results tailored to your face and personality.",
    benefits: ["Custom porcelain veneers", "Dental bonding for chips and gaps", "Tooth recontouring and reshaping", "Smile makeover consultations", "Natural-looking results"],
  },
  {
    icon: Smile, name: "Teeth Whitening",
    desc: "Whiten 4–8 shades with professional-grade treatment",
    image: "/images/service-whitening.jpg",
    longDesc: "Our professional teeth whitening treatments deliver dramatic results that over-the-counter products simply can't match. Using professional-grade whitening agents, we can brighten your smile by 4–8 shades in a single visit. We also offer take-home kits for convenient maintenance.",
    benefits: ["In-office whitening in about one hour", "4–8 shades whiter results", "Custom take-home whitening trays", "Safe for tooth enamel", "Long-lasting brightness"],
  },
  {
    icon: Baby, name: "Children's Dentistry",
    desc: "Gentle, fun, and kid-friendly care from the first tooth",
    image: "/images/service-children.jpg",
    longDesc: "We make dental visits fun and stress-free for kids of all ages. From their first tooth to their teenage years, our gentle approach helps children develop positive associations with dental care. We offer preventive treatments like sealants and fluoride to protect growing smiles.",
    benefits: ["Gentle, patient approach with kids", "Dental sealants and fluoride treatments", "Early orthodontic evaluations", "Fun, welcoming environment", "Education on proper brushing and flossing"],
  },
  {
    icon: Moon, name: "Sedation Dentistry",
    desc: "Anxiety-free dentistry for nervous patients",
    image: "/images/service-sedation.jpg",
    longDesc: "Dr. Sunjay Lad has advanced training in IV sedation dentistry, making even the most anxious patients comfortable during their treatment. Whether you have dental anxiety, a sensitive gag reflex, or need extensive work done, our sedation options ensure a peaceful, pain-free experience.",
    benefits: ["IV sedation by trained specialist", "Oral conscious sedation available", "Nitrous oxide (laughing gas)", "Safe monitoring throughout procedure", "Complete multiple treatments in one visit"],
  },
  {
    icon: Smile, name: "Invisalign",
    desc: "Straight teeth without metal braces — discreet and comfortable",
    image: "/images/service-invisalign.jpg",
    longDesc: "Straighten your teeth discreetly with Invisalign clear aligners. These virtually invisible trays gradually move your teeth into perfect alignment without the look or discomfort of traditional metal braces. Removable for eating and cleaning, Invisalign fits seamlessly into your lifestyle.",
    benefits: ["Nearly invisible clear aligners", "Removable for eating and brushing", "Comfortable with no metal wires", "Fewer office visits than braces", "Custom treatment plan with 3D imaging"],
  },
  {
    icon: Diamond, name: "Dental Implants",
    desc: "Permanent tooth replacement that looks and feels natural",
    image: "/images/service-implants.jpg",
    longDesc: "Dental implants are the gold standard for replacing missing teeth. Dr. Sunjay Lad is a specialist in dental implant placement, offering permanent, natural-looking tooth replacements that function just like your real teeth. Implants preserve bone structure and prevent the shifting of surrounding teeth.",
    benefits: ["Permanent, stable tooth replacement", "Preserves jawbone structure", "Looks and feels like natural teeth", "No adhesives or removal needed", "Can last a lifetime with proper care"],
  },
  {
    icon: Crown, name: "Dental Crowns",
    desc: "Protect and restore damaged or cracked teeth",
    image: "/images/service-crowns.jpg",
    longDesc: "Dental crowns restore damaged, cracked, or weakened teeth to their full strength and natural appearance. We use high-quality porcelain and ceramic materials that match your natural tooth color perfectly. Crowns can also be used to complete dental implants or anchor dental bridges.",
    benefits: ["Natural-looking porcelain crowns", "Same-day crown technology available", "Protect weakened or cracked teeth", "Restore full chewing function", "Long-lasting durability"],
  },
  {
    icon: Siren, name: "Emergency Dentistry",
    desc: "24-hour emergency line — we're here when you need us",
    image: "/images/service-emergency.jpg",
    longDesc: "Dental emergencies don't wait for office hours, and neither do we. Our doctors are available 24 hours a day for urgent dental care. Whether you're dealing with a knocked-out tooth, severe toothache, broken crown, or any other dental emergency, call us immediately at (626) 287-4094.",
    benefits: ["24/7 emergency phone line", "Same-day emergency appointments", "Treatment for severe tooth pain", "Broken tooth and crown repair", "Knocked-out tooth reimplantation"],
  },
  {
    icon: RotateCcw, name: "Root Canals",
    desc: "Pain-free endodontic treatment to save your natural tooth",
    image: "/images/service-rootcanal.jpg",
    longDesc: "Modern root canal treatment is nothing to fear. Using advanced techniques and sedation options, we can save your natural tooth painlessly. Root canals remove infected tissue from inside the tooth, relieve pain, and prevent the need for extraction. Most patients report the procedure is no more uncomfortable than getting a filling.",
    benefits: ["Virtually pain-free with modern techniques", "Saves your natural tooth", "Sedation options available", "Prevents spread of infection", "Quick recovery time"],
  },
  {
    icon: Heart, name: "Dentures",
    desc: "Full and partial dentures crafted for comfort and confidence",
    image: "/images/service-dentures.jpg",
    longDesc: "Our custom-crafted dentures restore your smile, confidence, and ability to eat your favorite foods. We offer both full and partial dentures designed for optimal comfort and a natural appearance. Each set is precisely fitted and adjusted to ensure a secure, comfortable fit.",
    benefits: ["Custom-fitted for comfort", "Natural-looking appearance", "Full and partial options", "Implant-supported dentures available", "Easy adjustment and reline services"],
  },
  {
    icon: Scissors, name: "Tooth Extractions",
    desc: "Gentle extractions with sedation options available",
    image: "/images/service-extraction.jpg",
    longDesc: "When a tooth cannot be saved, our gentle extraction techniques minimize discomfort and promote faster healing. With sedation options available, even the most anxious patients can have teeth removed comfortably. We also provide detailed aftercare instructions and follow-up to ensure proper healing.",
    benefits: ["Gentle, minimally invasive technique", "IV sedation available", "Wisdom tooth removal", "Post-extraction care guidance", "Replacement options discussed"],
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  return (
    <>
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
                <button
                  key={s.name}
                  onClick={() => setSelectedService(s)}
                  className="bg-background rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200 p-5 md:p-6 flex flex-col text-left cursor-pointer"
                >
                  <div className="w-full h-24 md:h-32 rounded-lg overflow-hidden mb-3">
                    <img src={s.image} alt={s.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <Icon className="w-8 h-8 text-teal mb-3" />
                  <h3 className="font-bold text-primary text-base mb-1">{s.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3 flex-1">{s.desc}</p>
                  <span className="text-teal text-sm font-medium flex items-center gap-1">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </span>
                </button>
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

      <ServiceDetailDialog
        service={selectedService}
        open={!!selectedService}
        onOpenChange={(open) => !open && setSelectedService(null)}
      />
    </>
  );
};

export default Services;
