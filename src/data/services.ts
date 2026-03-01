import { Heart, Sparkles, Baby, Moon, Smile, Diamond, Crown, Siren, RotateCcw, Scissors } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceData {
  slug: string;
  icon: LucideIcon;
  name: string;
  shortDesc: string;
  image: string;
  fullDescription: string;
  benefits: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const servicesData: ServiceData[] = [
  {
    slug: "general-dentistry",
    icon: Heart,
    name: "General Dentistry",
    shortDesc: "Cleanings, fillings, and preventive care for the whole family",
    image: "/images/service-general.jpg",
    fullDescription: "Our general dentistry services form the foundation of your oral health. From routine cleanings and exams to fillings and preventive treatments, Dr. Chiman Lad and Dr. Sunjay Lad provide comprehensive care using the latest technology. We focus on early detection and prevention to keep your smile healthy for life.",
    benefits: [
      "Thorough dental exams with digital X-rays",
      "Professional cleanings by experienced hygienists",
      "Tooth-colored composite fillings",
      "Oral cancer screenings",
      "Personalized treatment plans"
    ],
    seo: {
      title: "General Dentistry Temple City CA | Lad Family Dentistry",
      description: "Comprehensive general dentistry services in Temple City including cleanings, exams, fillings & preventive care. Call (626) 287-4094 to schedule your appointment.",
      keywords: ["general dentistry temple city", "dental cleaning temple city", "family dentist temple city", "preventive dentistry"]
    }
  },
  {
    slug: "cosmetic-dentistry",
    icon: Sparkles,
    name: "Cosmetic Dentistry",
    shortDesc: "Veneers, bonding, recontouring — your best smile yet",
    image: "/images/service-cosmetic.jpg",
    fullDescription: "Transform your smile with our cosmetic dentistry services. Whether you're looking for porcelain veneers, dental bonding, or tooth recontouring, our doctors combine artistry with advanced dental techniques to create natural-looking, beautiful results tailored to your face and personality.",
    benefits: [
      "Custom porcelain veneers",
      "Dental bonding for chips and gaps",
      "Tooth recontouring and reshaping",
      "Smile makeover consultations",
      "Natural-looking results"
    ],
    seo: {
      title: "Cosmetic Dentistry Temple City | Veneers & Smile Makeovers",
      description: "Expert cosmetic dentistry in Temple City. Porcelain veneers, dental bonding & smile makeovers. Transform your smile today. Call (626) 287-4094.",
      keywords: ["cosmetic dentistry temple city", "veneers temple city", "smile makeover", "dental bonding"]
    }
  },
  {
    slug: "teeth-whitening",
    icon: Smile,
    name: "Teeth Whitening",
    shortDesc: "Whiten 4–8 shades with professional-grade treatment",
    image: "/images/service-whitening.jpg",
    fullDescription: "Our professional teeth whitening treatments deliver dramatic results that over-the-counter products simply can't match. Using professional-grade whitening agents, we can brighten your smile by 4–8 shades in a single visit. We also offer take-home kits for convenient maintenance.",
    benefits: [
      "In-office whitening in about one hour",
      "4–8 shades whiter results",
      "Custom take-home whitening trays",
      "Safe for tooth enamel",
      "Long-lasting brightness"
    ],
    seo: {
      title: "Teeth Whitening Temple City CA | Professional Whitening Services",
      description: "Professional teeth whitening in Temple City. Get 4-8 shades whiter in one visit. Safe, effective results. Call Lad Family Dentistry (626) 287-4094.",
      keywords: ["teeth whitening temple city", "professional whitening", "zoom whitening", "whiten teeth"]
    }
  },
  {
    slug: "childrens-dentistry",
    icon: Baby,
    name: "Children's Dentistry",
    shortDesc: "Gentle, fun, and kid-friendly care from the first tooth",
    image: "/images/service-children.jpg",
    fullDescription: "We make dental visits fun and stress-free for kids of all ages. From their first tooth to their teenage years, our gentle approach helps children develop positive associations with dental care. We offer preventive treatments like sealants and fluoride to protect growing smiles.",
    benefits: [
      "Gentle, patient approach with kids",
      "Dental sealants and fluoride treatments",
      "Early orthodontic evaluations",
      "Fun, welcoming environment",
      "Education on proper brushing and flossing"
    ],
    seo: {
      title: "Children's Dentistry Temple City | Pediatric Dental Care",
      description: "Gentle children's dentistry in Temple City. Kid-friendly dental care from first tooth to teenage years. Sealants, fluoride & more. Call (626) 287-4094.",
      keywords: ["pediatric dentistry temple city", "children's dentist", "kids dentist temple city", "dental sealants"]
    }
  },
  {
    slug: "sedation-dentistry",
    icon: Moon,
    name: "Sedation Dentistry",
    shortDesc: "Anxiety-free dentistry for nervous patients",
    image: "/images/service-sedation.jpg",
    fullDescription: "Dr. Sunjay Lad has advanced training in IV sedation dentistry, making even the most anxious patients comfortable during their treatment. Whether you have dental anxiety, a sensitive gag reflex, or need extensive work done, our sedation options ensure a peaceful, pain-free experience.",
    benefits: [
      "IV sedation by trained specialist",
      "Oral conscious sedation available",
      "Nitrous oxide (laughing gas)",
      "Safe monitoring throughout procedure",
      "Complete multiple treatments in one visit"
    ],
    seo: {
      title: "Sedation Dentistry Temple City | IV Sedation & Sleep Dentistry",
      description: "Anxiety-free sedation dentistry in Temple City. IV sedation, oral sedation & nitrous oxide. Comfortable dental care for nervous patients. Call (626) 287-4094.",
      keywords: ["sedation dentistry temple city", "iv sedation", "sleep dentistry", "dental anxiety"]
    }
  },
  {
    slug: "invisalign",
    icon: Smile,
    name: "Invisalign",
    shortDesc: "Straight teeth without metal braces — discreet and comfortable",
    image: "/images/service-invisalign.jpg",
    fullDescription: "Straighten your teeth discreetly with Invisalign clear aligners. These virtually invisible trays gradually move your teeth into perfect alignment without the look or discomfort of traditional metal braces. Removable for eating and cleaning, Invisalign fits seamlessly into your lifestyle.",
    benefits: [
      "Nearly invisible clear aligners",
      "Removable for eating and brushing",
      "Comfortable with no metal wires",
      "Fewer office visits than braces",
      "Custom treatment plan with 3D imaging"
    ],
    seo: {
      title: "Invisalign Temple City CA | Clear Aligners & Braces Alternative",
      description: "Invisalign clear aligners in Temple City. Straighten teeth without metal braces. Comfortable, invisible orthodontics. Call Lad Family Dentistry (626) 287-4094.",
      keywords: ["invisalign temple city", "clear aligners", "invisible braces", "orthodontics temple city"]
    }
  },
  {
    slug: "dental-implants",
    icon: Diamond,
    name: "Dental Implants",
    shortDesc: "Permanent tooth replacement that looks and feels natural",
    image: "/images/service-implants.jpg",
    fullDescription: "Dental implants are the gold standard for replacing missing teeth. Dr. Sunjay Lad is a specialist in dental implant placement, offering permanent, natural-looking tooth replacements that function just like your real teeth. Implants preserve bone structure and prevent the shifting of surrounding teeth.",
    benefits: [
      "Permanent, stable tooth replacement",
      "Preserves jawbone structure",
      "Looks and feels like natural teeth",
      "No adhesives or removal needed",
      "Can last a lifetime with proper care"
    ],
    seo: {
      title: "Dental Implants Temple City CA | Tooth Replacement Specialists",
      description: "Expert dental implant placement in Temple City. Permanent tooth replacement that looks & feels natural. Specialist care. Call (626) 287-4094 today.",
      keywords: ["dental implants temple city", "tooth replacement", "implant dentist", "missing teeth"]
    }
  },
  {
    slug: "dental-crowns",
    icon: Crown,
    name: "Dental Crowns",
    shortDesc: "Protect and restore damaged or cracked teeth",
    image: "/images/service-crowns.jpg",
    fullDescription: "Dental crowns restore damaged, cracked, or weakened teeth to their full strength and natural appearance. We use high-quality porcelain and ceramic materials that match your natural tooth color perfectly. Crowns can also be used to complete dental implants or anchor dental bridges.",
    benefits: [
      "Natural-looking porcelain crowns",
      "Same-day crown technology available",
      "Protect weakened or cracked teeth",
      "Restore full chewing function",
      "Long-lasting durability"
    ],
    seo: {
      title: "Dental Crowns Temple City CA | Same-Day Crown Technology",
      description: "High-quality dental crowns in Temple City. Natural-looking porcelain crowns to restore damaged teeth. Same-day options available. Call (626) 287-4094.",
      keywords: ["dental crowns temple city", "porcelain crowns", "same day crowns", "tooth restoration"]
    }
  },
  {
    slug: "emergency-dentistry",
    icon: Siren,
    name: "Emergency Dentistry",
    shortDesc: "24-hour emergency line — we're here when you need us",
    image: "/images/service-emergency.jpg",
    fullDescription: "Dental emergencies don't wait for office hours, and neither do we. Our doctors are available 24 hours a day for urgent dental care. Whether you're dealing with a knocked-out tooth, severe toothache, broken crown, or any other dental emergency, call us immediately at (626) 287-4094.",
    benefits: [
      "24/7 emergency phone line",
      "Same-day emergency appointments",
      "Treatment for severe tooth pain",
      "Broken tooth and crown repair",
      "Knocked-out tooth reimplantation"
    ],
    seo: {
      title: "Emergency Dentist Temple City CA | 24/7 Dental Emergency Care",
      description: "24-hour emergency dentist in Temple City. Same-day appointments for tooth pain, broken teeth & dental emergencies. Call Lad Family Dentistry (626) 287-4094 now.",
      keywords: ["emergency dentist temple city", "24 hour dentist", "dental emergency", "tooth pain relief"]
    }
  },
  {
    slug: "root-canals",
    icon: RotateCcw,
    name: "Root Canals",
    shortDesc: "Pain-free endodontic treatment to save your natural tooth",
    image: "/images/service-rootcanal.jpg",
    fullDescription: "Modern root canal treatment is nothing to fear. Using advanced techniques and sedation options, we can save your natural tooth painlessly. Root canals remove infected tissue from inside the tooth, relieve pain, and prevent the need for extraction. Most patients report the procedure is no more uncomfortable than getting a filling.",
    benefits: [
      "Virtually pain-free with modern techniques",
      "Saves your natural tooth",
      "Sedation options available",
      "Prevents spread of infection",
      "Quick recovery time"
    ],
    seo: {
      title: "Root Canal Treatment Temple City CA | Endodontics",
      description: "Pain-free root canal treatment in Temple City. Save your natural tooth with modern endodontic care. Sedation available. Call (626) 287-4094.",
      keywords: ["root canal temple city", "endodontics", "root canal treatment", "tooth pain"]
    }
  },
  {
    slug: "dentures",
    icon: Heart,
    name: "Dentures",
    shortDesc: "Full and partial dentures crafted for comfort and confidence",
    image: "/images/service-dentures.jpg",
    fullDescription: "Our custom-crafted dentures restore your smile, confidence, and ability to eat your favorite foods. We offer both full and partial dentures designed for optimal comfort and a natural appearance. Each set is precisely fitted and adjusted to ensure a secure, comfortable fit.",
    benefits: [
      "Custom-fitted for comfort",
      "Natural-looking appearance",
      "Full and partial options",
      "Implant-supported dentures available",
      "Easy adjustment and reline services"
    ],
    seo: {
      title: "Dentures Temple City CA | Full & Partial Dentures",
      description: "Custom dentures in Temple City. Full & partial dentures for a natural smile. Implant-supported options available. Call Lad Family Dentistry (626) 287-4094.",
      keywords: ["dentures temple city", "partial dentures", "full dentures", "implant dentures"]
    }
  },
  {
    slug: "tooth-extractions",
    icon: Scissors,
    name: "Tooth Extractions",
    shortDesc: "Gentle extractions with sedation options available",
    image: "/images/service-extraction.jpg",
    fullDescription: "When a tooth cannot be saved, our gentle extraction techniques minimize discomfort and promote faster healing. With sedation options available, even the most anxious patients can have teeth removed comfortably. We also provide detailed aftercare instructions and follow-up to ensure proper healing.",
    benefits: [
      "Gentle, minimally invasive technique",
      "IV sedation available",
      "Wisdom tooth removal",
      "Post-extraction care guidance",
      "Replacement options discussed"
    ],
    seo: {
      title: "Tooth Extractions Temple City CA | Wisdom Teeth Removal",
      description: "Gentle tooth extractions in Temple City including wisdom teeth removal. Sedation options available. Expert care. Call Lad Family Dentistry (626) 287-4094.",
      keywords: ["tooth extraction temple city", "wisdom teeth removal", "tooth removal", "oral surgery"]
    }
  }
];

export const getServiceBySlug = (slug: string): ServiceData | undefined => {
  return servicesData.find(service => service.slug === slug);
};
