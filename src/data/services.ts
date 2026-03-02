import { Heart, Sparkles, Baby, Moon, Smile, Diamond, Crown, Siren, RotateCcw, Scissors, Zap, Shield, ClipboardCheck, Users, Clock, Award } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ProcessStep {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

export interface ServiceData {
  slug: string;
  icon: LucideIcon;
  name: string;
  shortDesc: string;
  image: string;
  fullDescription: string;
  benefits: string[];
  duration: string;
  pricing?: {
    basePrice: string;
    insurance: boolean;
  };
  technology: string[];
  processSteps: ProcessStep[];
  faqs: FAQ[];
  testimonials: Testimonial[];
  beforeAfter: boolean;
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
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&h=600&q=80",
    fullDescription: "General dentistry is the foundation of excellent oral health. At Lad Family Dentistry in Temple City, we provide comprehensive preventive and restorative dental care for patients of all ages. Our experienced team uses state-of-the-art digital imaging and diagnostic tools to catch problems early, before they become serious. From your first visit, we focus on building a relationship with you and understanding your unique dental needs and goals. We believe that preventive care is the best medicine, which is why we emphasize regular cleanings, exams, and education about proper home care. Whether you need a routine cleaning, cavity treatment, or more complex restorative procedures, our skilled dentists provide compassionate, gentle care in a comfortable environment. We treat every patient like family and take the time to explain our findings and answer all your questions. Our commitment is to help you achieve and maintain a healthy, beautiful smile that lasts a lifetime.",
    benefits: [
      "Thorough digital exams with 80% less radiation exposure",
      "Professional cleanings by experienced, gentle hygienists",
      "Tooth-colored composite fillings that blend naturally",
      "Advanced oral cancer screenings",
      "Personalized treatment plans based on your needs",
      "Preventive care to avoid costly procedures",
      "Comfortable, anxiety-free environment",
      "Same-day appointments for emergencies",
      "Insurance verification and payment planning",
      "Patient education and home care guidance"
    ],
    duration: "30-60 minutes",
    pricing: {
      basePrice: "$100-$200",
      insurance: true
    },
    technology: [
      "Digital X-rays (80% less radiation)",
      "Intraoral cameras for patient education",
      "Digital scanners for accurate diagnostics",
      "Ultrasonic scalers for gentle cleaning",
      "LED curing lights for faster results",
      "Electronic health records system",
      "Advanced sterilization protocols"
    ],
    processSteps: [
      {
        title: "Comprehensive Exam",
        description: "We perform a thorough digital X-ray examination and visual inspection to identify any existing problems and assess overall oral health",
        icon: ClipboardCheck
      },
      {
        title: "Professional Cleaning",
        description: "Our hygienists use ultrasonic and manual techniques to remove plaque, tartar, and stains below and above the gumline",
        icon: Zap
      },
      {
        title: "Fluoride Treatment",
        description: "Optional fluoride application strengthens enamel and helps prevent future cavities, especially for children",
        icon: Shield
      },
      {
        title: "Personalized Plan",
        description: "We provide customized recommendations for optimal health and schedule preventive treatments at appropriate intervals",
        icon: ClipboardCheck
      }
    ],
    faqs: [
      {
        question: "How often should I have professional dental cleanings?",
        answer: "Most people benefit from professional cleanings every 6 months. However, if you have gum disease, diabetes, or other risk factors, we may recommend more frequent visits. We'll create a personalized schedule based on your individual needs."
      },
      {
        question: "Is dental X-radiation safe?",
        answer: "Yes, absolutely! Digital X-rays use up to 80% less radiation than traditional film X-rays. We also use lead aprons and thyroid shields to provide additional protection. The benefits of detecting problems early far outweigh the minimal radiation exposure."
      },
      {
        question: "What's the difference between a regular cleaning and a deep cleaning?",
        answer: "A regular cleaning (prophylaxis) removes plaque and tartar from above the gumline and tooth surfaces. A deep cleaning (scaling and root planing) is a therapeutic procedure that treats gum disease by removing buildup from below the gumline and smoothing the root surfaces."
      },
      {
        question: "How can I prevent cavities?",
        answer: "Brush twice daily with fluoride toothpaste, floss daily, limit sugary foods and drinks, and visit us every 6 months for professional cleanings and exams. We also recommend dental sealants for children whose molars are cavity-prone."
      }
    ],
    testimonials: [
      {
        name: "Margaret S.",
        text: "Dr. Lad made dental care so comfortable. Been going there for 15 years and never had a bad experience. The staff is wonderful!",
        rating: 5
      },
      {
        name: "James T.",
        text: "Finally found a dentist who takes time to explain everything. My teeth feel amazing after their cleaning.",
        rating: 5
      },
      {
        name: "Rachel M.",
        text: "Gentle, professional, and caring. They made my nervous kids feel completely comfortable.",
        rating: 5
      }
    ],
    beforeAfter: false,
    seo: {
      title: "General Dentistry Temple City CA | Family Dental Care & Cleanings",
      description: "Trusted family dentistry in Temple City offering preventive care, cleanings, exams, and fillings. Call Lad Family Dentistry (626) 287-4094 for your appointment.",
      keywords: ["general dentistry temple city", "family dentist temple city ca", "dental cleanings temple city", "preventive dentistry", "dental exams temple city"]
    }
  },
  {
    slug: "cosmetic-dentistry",
    icon: Sparkles,
    name: "Cosmetic Dentistry",
    shortDesc: "Veneers, bonding, recontouring — your best smile yet",
    image: "/images/service-cosmetic.jpg",
    fullDescription: "Transform your smile with our cosmetic dentistry services. Whether you're looking for porcelain veneers, dental bonding, or tooth recontouring, our doctors combine artistry with advanced dental techniques to create natural-looking, beautiful results tailored to your face and personality. We use premium materials and state-of-the-art technology to ensure results that exceed expectations.",
    benefits: [
      "Custom porcelain veneers",
      "Dental bonding for chips and gaps",
      "Tooth recontouring and reshaping",
      "Smile makeover consultations",
      "Natural-looking results",
      "Stain-resistant materials",
      "Long-lasting enhancements"
    ],
    duration: "1-3 weeks (2 appointments for veneers)",
    pricing: {
      basePrice: "$800-$2500 per veneer",
      insurance: false
    },
    technology: [
      "Digital smile design software",
      "Shade matching technology",
      "3D imaging for planning",
      "CEREC same-day restoration",
      "Bonded composite materials"
    ],
    processSteps: [
      {
        title: "Smile Design Consultation",
        description: "Digital preview of your new smile using advanced software",
        icon: Sparkles
      },
      {
        title: "Tooth Preparation",
        description: "Minimal tooth adjustment for optimal veneer fit and appearance",
        icon: ClipboardCheck
      },
      {
        title: "Custom Lab Creation",
        description: "Porcelain veneers crafted by master technicians",
        icon: Award
      },
      {
        title: "Final Bonding",
        description: "Precise placement and bonding for a flawless smile",
        icon: Zap
      }
    ],
    faqs: [
      {
        question: "Are porcelain veneers permanent?",
        answer: "Veneers are very durable and can last 10-15 years with proper care. However, they may eventually need replacement due to wear."
      },
      {
        question: "Will veneers damage my natural teeth?",
        answer: "We remove minimal tooth structure (less than 1mm). Your teeth remain strong and healthy underneath the veneers."
      },
      {
        question: "How long does the process take?",
        answer: "Typically 2 visits over 2-3 weeks. Your temporary veneers look great while your permanent ones are being crafted."
      }
    ],
    testimonials: [
      {
        name: "Jessica L.",
        text: "My smile transformation was incredible! The veneers look so natural. Worth every penny!",
        rating: 5
      },
      {
        name: "David C.",
        text: "Professional process from start to finish. Love my new smile!",
        rating: 5
      }
    ],
    beforeAfter: true,
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
    fullDescription: "Our professional teeth whitening treatments deliver dramatic results that over-the-counter products simply can't match. Using professional-grade whitening agents and advanced technology, we can brighten your smile by 4–8 shades in a single visit. We also offer take-home kits for convenient maintenance and touch-ups.",
    benefits: [
      "In-office whitening in about one hour",
      "4–8 shades whiter results",
      "Custom take-home whitening trays",
      "Safe for tooth enamel",
      "Long-lasting brightness",
      "Professional-grade agents",
      "Dramatic before and after results"
    ],
    duration: "60 minutes",
    pricing: {
      basePrice: "$400-$600",
      insurance: false
    },
    technology: [
      "Advanced whitening gel formula",
      "LED whitening accelerator",
      "Professional strength bleach",
      "Custom tray fabrication",
      "Shade matching technology"
    ],
    processSteps: [
      {
        title: "Shade Assessment",
        description: "Document your current tooth color for comparison",
        icon: ClipboardCheck
      },
      {
        title: "Protection Application",
        description: "Apply protective barriers to gums and sensitive areas",
        icon: Shield
      },
      {
        title: "Whitening Application",
        description: "Professional-grade whitening gel with LED activation",
        icon: Zap
      },
      {
        title: "Results & Maintenance",
        description: "Take-home trays for touch-ups and long-lasting results",
        icon: Smile
      }
    ],
    faqs: [
      {
        question: "Is professional whitening safe?",
        answer: "Absolutely. We use professional-grade materials and protective measures to ensure your teeth and gums are safe during treatment."
      },
      {
        question: "How long do results last?",
        answer: "Results typically last 6-12 months. Touch-ups with take-home trays help maintain your bright smile longer."
      },
      {
        question: "Why not just use store-bought whitening?",
        answer: "Professional whitening uses 10x stronger agents and advanced technology for significantly faster, more dramatic results that simply aren't possible at home."
      }
    ],
    testimonials: [
      {
        name: "Amanda R.",
        text: "My teeth are so bright now! The difference is amazing. Worth it!",
        rating: 5
      },
      {
        name: "Tom B.",
        text: "Fast, efficient, and effective. Best decision ever!",
        rating: 5
      }
    ],
    beforeAfter: true,
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
    fullDescription: "We make dental visits fun and stress-free for kids of all ages. From their first tooth to their teenage years, our gentle approach helps children develop positive associations with dental care. We offer preventive treatments like sealants and fluoride to protect growing smiles, and we work closely with parents to ensure excellent home care habits.",
    benefits: [
      "Gentle, patient approach with kids",
      "Dental sealants and fluoride treatments",
      "Early orthodontic evaluations",
      "Fun, welcoming environment",
      "Education on proper brushing and flossing",
      "Caring for baby teeth and permanent teeth",
      "Sports mouthguard fabrication"
    ],
    duration: "30-45 minutes",
    pricing: {
      basePrice: "$75-$150",
      insurance: true
    },
    technology: [
      "Kid-friendly digital X-rays",
      "Intraoral cameras for education",
      "Fun visual aids",
      "Comfortable, colorful equipment",
      "Child-sized instruments"
    ],
    processSteps: [
      {
        title: "Welcome & Education",
        description: "Fun introduction to dental care in an inviting environment",
        icon: Smile
      },
      {
        title: "Gentle Exam",
        description: "Thorough check-up with age-appropriate explanation",
        icon: ClipboardCheck
      },
      {
        title: "Professional Cleaning",
        description: "Gentle removal of plaque with fun, comfortable techniques",
        icon: Zap
      },
      {
        title: "Preventive Treatments",
        description: "Fluoride and sealants to protect developing teeth",
        icon: Shield
      }
    ],
    faqs: [
      {
        question: "When should my child have their first dental visit?",
        answer: "The American Academy of Pediatric Dentistry recommends a first visit after the first tooth erupts or by age 1."
      },
      {
        question: "What are dental sealants?",
        answer: "Sealants are protective coatings applied to chewing surfaces of back teeth to prevent cavities. They're painless and very effective."
      },
      {
        question: "How can I help my child develop good dental habits?",
        answer: "Start early with gentle brushing, lead by example, limit sugary snacks, and make dental visits fun and positive experiences."
      }
    ],
    testimonials: [
      {
        name: "Emily P.",
        text: "My kids love going to the dentist now! Dr. Lad makes it so fun and safe.",
        rating: 5
      },
      {
        name: "Robert H.",
        text: "Great with children. Very professional and caring staff.",
        rating: 5
      }
    ],
    beforeAfter: false,
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
    fullDescription: "Dr. Sunjay Lad has advanced training in IV sedation dentistry, making even the most anxious patients comfortable during their treatment. Whether you have dental anxiety, a sensitive gag reflex, or need extensive work done, our sedation options ensure a peaceful, pain-free experience. You'll remember little to nothing about your appointment.",
    benefits: [
      "IV sedation by trained specialist",
      "Oral conscious sedation available",
      "Nitrous oxide (laughing gas)",
      "Safe monitoring throughout procedure",
      "Complete multiple treatments in one visit",
      "Minimal memory of procedure",
      "Post-sedation recovery support"
    ],
    duration: "Varies by procedure",
    pricing: {
      basePrice: "$200-$600",
      insurance: false
    },
    technology: [
      "IV sedation administration",
      "Continuous monitoring equipment",
      "Pulse oximetry",
      "Blood pressure monitoring",
      "Trained sedation staff"
    ],
    processSteps: [
      {
        title: "Pre-Sedation Consultation",
        description: "Medical history review and sedation option selection",
        icon: ClipboardCheck
      },
      {
        title: "Sedation Administration",
        description: "Safe sedation by trained professional with full monitoring",
        icon: Moon
      },
      {
        title: "Dental Treatment",
        description: "Your procedure while you're relaxed and comfortable",
        icon: Heart
      },
      {
        title: "Recovery & Aftercare",
        description: "Monitoring and instructions for safe post-sedation recovery",
        icon: Shield
      }
    ],
    faqs: [
      {
        question: "Is IV sedation safe?",
        answer: "Yes. Dr. Lad is specially trained in sedation, and we use continuous monitoring equipment to ensure your safety throughout."
      },
      {
        question: "Will I remember my appointment?",
        answer: "Most patients have little to no memory of the procedure. This is actually one of the benefits for anxious patients."
      },
      {
        question: "Can I drive home after sedation?",
        answer: "No. You must arrange for someone to drive you. Sedation affects your ability to drive safely, and we require a responsible adult to accompany you."
      }
    ],
    testimonials: [
      {
        name: "Marcus T.",
        text: "Years of dental anxiety gone! Dr. Lad made me feel completely safe and comfortable.",
        rating: 5
      },
      {
        name: "Linda W.",
        text: "Best decision ever. I was terrified, but the experience was wonderful.",
        rating: 5
      }
    ],
    beforeAfter: false,
    seo: {
      title: "Sedation Dentistry Temple City CA | Anxiety Relief Treatment",
      description: "Advanced sedation dentistry in Temple City. IV & oral sedation for anxious patients. Safe, comfortable care. Call Lad Family Dentistry (626) 287-4094.",
      keywords: ["sedation dentistry temple city", "iv sedation", "sleep dentistry", "dental anxiety"]
    }
  },
  {
    slug: "invisalign",
    icon: Smile,
    name: "Invisalign Clear Aligners",
    shortDesc: "Straight teeth without braces — virtually invisible",
    image: "/images/service-invisalign.jpg",
    fullDescription: "Straighten your teeth discreetly with Invisalign clear aligners. These virtually invisible trays gradually move your teeth into perfect alignment without the look or discomfort of traditional metal braces. Removable for eating and cleaning, Invisalign fits seamlessly into your lifestyle. Treatment typically takes 12-18 months.",
    benefits: [
      "Nearly invisible clear aligners",
      "Removable for eating and brushing",
      "Comfortable with no metal wires",
      "Fewer office visits than braces",
      "Custom treatment plan with 3D imaging",
      "Predictable results",
      "For teens and adults"
    ],
    duration: "12-18 months treatment",
    pricing: {
      basePrice: "$3500-$7500",
      insurance: false
    },
    technology: [
      "3D digital scanning (iTero)",
      "Invisalign treatment planning software",
      "Custom aligner fabrication",
      "SmartTrack material",
      "Digital progress tracking"
    ],
    processSteps: [
      {
        title: "3D Digital Scan",
        description: "Advanced iTero scanning creates precise digital model of your teeth",
        icon: Zap
      },
      {
        title: "Treatment Plan",
        description: "3D visualization of your smile transformation from start to finish",
        icon: Award
      },
      {
        title: "Custom Aligners",
        description: "Your series of custom-made clear aligners manufactured by Invisalign",
        icon: ClipboardCheck
      },
      {
        title: "Regular Check-Ins",
        description: "Periodic appointments to monitor progress and receive new aligners",
        icon: Smile
      }
    ],
    faqs: [
      {
        question: "How long does Invisalign treatment take?",
        answer: "Most cases take 12-18 months, though some simpler cases may be faster. Our thorough treatment plan gives you a clear timeline."
      },
      {
        question: "Can I remove the aligners?",
        answer: "Yes, aligners are removable for eating, drinking, and cleaning. However, they should be worn 20-22 hours daily for best results."
      },
      {
        question: "Is Invisalign uncomfortable?",
        answer: "Most patients find Invisalign very comfortable. You may feel slight pressure as teeth move, which is normal and painless."
      }
    ],
    testimonials: [
      {
        name: "Jennifer M.",
        text: "My teeth are perfectly straight and nobody knew I was getting braces! Love Invisalign!",
        rating: 5
      },
      {
        name: "Chris D.",
        text: "Excellent results. The process was smooth and Dr. Lad explained everything perfectly.",
        rating: 5
      }
    ],
    beforeAfter: true,
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
    fullDescription: "Dental implants are the gold standard for replacing missing teeth. Dr. Sunjay Lad is a specialist in dental implant placement and restoration, offering permanent, natural-looking tooth replacements that function just like your real teeth. Implants preserve bone structure and prevent the shifting of surrounding teeth. The process typically takes 3-6 months from placement to final restoration.",
    benefits: [
      "Permanent, stable tooth replacement",
      "Preserves jawbone structure",
      "Looks and feels like natural teeth",
      "No adhesives or removal needed",
      "Can last a lifetime with proper care",
      "Improved chewing and speaking",
      "No additional medication needed"
    ],
    duration: "3-6 months (full treatment)",
    pricing: {
      basePrice: "$2000-$4000 per implant",
      insurance: false
    },
    technology: [
      "3D CBCT imaging",
      "Guided implant surgery",
      "Computer-planned placement",
      "Titanium implant fixtures",
      "CAD/CAM crown design"
    ],
    processSteps: [
      {
        title: "Comprehensive Planning",
        description: "3D imaging and bone assessment to determine optimal implant position",
        icon: Award
      },
      {
        title: "Surgical Placement",
        description: "Precise implant placement using guided surgery technology",
        icon: Zap
      },
      {
        title: "Osseointegration",
        description: "3-6 month healing period as bone fully integrates with implant",
        icon: Clock
      },
      {
        title: "Crown Restoration",
        description: "Custom crown fabricated and attached to complete your restoration",
        icon: Crown
      }
    ],
    faqs: [
      {
        question: "How long do dental implants last?",
        answer: "With proper care, dental implants can last 25+ years or even a lifetime. They're the most durable tooth replacement option."
      },
      {
        question: "Am I a candidate for implants?",
        answer: "Most people with adequate bone can receive implants. We'll evaluate your specific situation and discuss whether implants are right for you."
      },
      {
        question: "Will the implant look natural?",
        answer: "Yes. The custom crown is designed to match your natural tooth color, shape, and size perfectly for seamless integration."
      }
    ],
    testimonials: [
      {
        name: "Patricia G.",
        text: "My implant looks and feels like my real tooth. I forget it's not! Amazing work.",
        rating: 5
      },
      {
        name: "Kevin S.",
        text: "Professional implantation and restoration. Dr. Lad is a true specialist.",
        rating: 5
      }
    ],
    beforeAfter: true,
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
    fullDescription: "Dental crowns restore damaged, cracked, or weakened teeth to their full strength and natural appearance. We use high-quality porcelain and ceramic materials that match your natural tooth color perfectly. Modern crowns are durable, natural-looking, and can last 10-15 years or longer.",
    benefits: [
      "Natural-looking porcelain crowns",
      "Same-day crown technology available",
      "Protect weakened or cracked teeth",
      "Restore full chewing function",
      "Long-lasting durability",
      "Can cover discolored teeth",
      "Stain-resistant materials"
    ],
    duration: "1-2 weeks (or same-day with CEREC)",
    pricing: {
      basePrice: "$800-$1500",
      insurance: true
    },
    technology: [
      "CEREC CAD/CAM system",
      "3D digital imaging",
      "Shade matching technology",
      "High-strength porcelain",
      "All-ceramic crowns"
    ],
    processSteps: [
      {
        title: "Tooth Preparation",
        description: "Careful preparation of tooth to receive the crown",
        icon: ClipboardCheck
      },
      {
        title: "Digital Scanning",
        description: "3D scan captures precise tooth structure and contours",
        icon: Zap
      },
      {
        title: "Design & Milling",
        description: "Computer-designed crown milled to perfection same-day",
        icon: Award
      },
      {
        title: "Precise Bonding",
        description: "Custom fit and permanent bonding of your crown",
        icon: Crown
      }
    ],
    faqs: [
      {
        question: "What's the difference between CEREC crowns and traditional crowns?",
        answer: "CEREC crowns are designed, milled, and placed in one visit using advanced technology. Traditional crowns require a lab and a second appointment."
      },
      {
        question: "How long do crowns last?",
        answer: "With proper care, crowns typically last 10-15 years or longer. Regular checkups help ensure they remain strong."
      },
      {
        question: "Will my crown feel different?",
        answer: "After a brief adjustment period, your crown will feel like a natural tooth during eating and speaking."
      }
    ],
    testimonials: [
      {
        name: "Nancy K.",
        text: "Got my crown in one day! The technology is incredible. Looks and feels perfect.",
        rating: 5
      },
      {
        name: "George V.",
        text: "Saved my tooth and my smile. Excellent work.",
        rating: 5
      }
    ],
    beforeAfter: true,
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
    shortDesc: "24/7 emergency care — we're here when you need us",
    image: "/images/service-emergency.jpg",
    fullDescription: "Dental emergencies don't wait for office hours, and neither do we. Our doctors are available 24 hours a day for urgent dental care. Whether you're dealing with a knocked-out tooth, severe toothache, broken crown, or any other dental emergency, call us immediately at (626) 287-4094. We prioritize emergency cases and can often see you same-day.",
    benefits: [
      "24/7 emergency phone line",
      "Same-day emergency appointments",
      "Treatment for severe tooth pain",
      "Broken tooth and crown repair",
      "Knocked-out tooth reimplantation",
      "Emergency extraction if needed",
      "Comprehensive emergency care"
    ],
    duration: "Varies by emergency",
    pricing: {
      basePrice: "Variable",
      insurance: true
    },
    technology: [
      "Emergency imaging equipment",
      "Advanced diagnostic tools",
      "Full treatment capabilities",
      "Pain management protocols",
      "24/7 monitoring system"
    ],
    processSteps: [
      {
        title: "Emergency Contact",
        description: "Call our 24/7 line for immediate guidance and appointment scheduling",
        icon: Siren
      },
      {
        title: "Rapid Assessment",
        description: "Quick exam and imaging to determine exact nature of emergency",
        icon: ClipboardCheck
      },
      {
        title: "Pain Relief",
        description: "Immediate pain management while planning treatment",
        icon: Heart
      },
      {
        title: "Emergency Treatment",
        description: "Temporary or permanent solution to resolve your emergency",
        icon: Zap
      }
    ],
    faqs: [
      {
        question: "What qualifies as a dental emergency?",
        answer: "Severe tooth pain, knocked-out teeth, broken crowns or fillings, swelling, infection, or any injury to teeth or mouth."
      },
      {
        question: "What should I do if I knock out a tooth?",
        answer: "Keep the tooth moist (in milk or saliva), and call us immediately. If reimplanted within 1 hour, the tooth has the best chance of survival."
      },
      {
        question: "Is there an emergency fee?",
        answer: "Emergency visits may have an additional charge, but insurance often covers emergency treatment. We'll discuss costs upfront."
      }
    ],
    testimonials: [
      {
        name: "Michael T.",
        text: "Broke a tooth on the weekend. Got an emergency appointment within hours. Saved my tooth!",
        rating: 5
      },
      {
        name: "Susan B.",
        text: "Severe pain at midnight. Called the emergency line and got help immediately. So grateful.",
        rating: 5
      }
    ],
    beforeAfter: false,
    seo: {
      title: "Emergency Dentist Temple City CA | 24/7 Dental Emergency Care",
      description: "24-hour emergency dentist in Temple City. Same-day appointments for tooth pain, broken teeth & dental emergencies. Call Lad Family Dentistry (626) 287-4094 now.",
      keywords: ["emergency dentist temple city", "24 hour dentist", "dental emergency", "tooth pain relief"]
    }
  },
  {
    slug: "root-canals",
    icon: RotateCcw,
    name: "Root Canal Therapy",
    shortDesc: "Save your natural tooth with pain-free endodontic treatment",
    image: "/images/service-rootcanal.jpg",
    fullDescription: "Modern root canal treatment is nothing to fear. Using advanced techniques and sedation options, we can save your natural tooth painlessly. Root canals remove infected or damaged tissue from inside the tooth, relieve pain, and prevent the need for extraction. Most patients report the procedure is no more uncomfortable than getting a filling.",
    benefits: [
      "Virtually pain-free with modern techniques",
      "Saves your natural tooth",
      "Eliminates severe tooth pain",
      "Sedation options available",
      "Prevents spread of infection",
      "Quick recovery time",
      "High success rate (95%+)"
    ],
    duration: "60-90 minutes",
    pricing: {
      basePrice: "$900-$1500",
      insurance: true
    },
    technology: [
      "Rotary endodontic instruments",
      "Electronic apex locator",
      "Ultrasonic irrigation",
      "Operating microscope",
      "Gutta-percha obturation"
    ],
    processSteps: [
      {
        title: "Diagnosis & Imaging",
        description: "X-rays confirm infection and identify the tooth's internal anatomy",
        icon: Zap
      },
      {
        title: "Pain Relief",
        description: "Local anesthesia ensures complete comfort throughout procedure",
        icon: Shield
      },
      {
        title: "Tissue Removal",
        description: "Careful removal of infected or damaged tissue from inside tooth",
        icon: RotateCcw
      },
      {
        title: "Filling & Sealing",
        description: "Root canal filled with biocompatible material and sealed",
        icon: Award
      }
    ],
    faqs: [
      {
        question: "Will a root canal hurt?",
        answer: "No. Modern root canals are no more uncomfortable than getting a filling. The procedure removes the source of pain."
      },
      {
        question: "Why do I need a crown after a root canal?",
        answer: "Root canal-treated teeth are more brittle without the nerve. A crown protects the tooth and extends its lifespan significantly."
      },
      {
        question: "What happens if I don't get a root canal?",
        answer: "Without treatment, infection spreads, the tooth may be lost, and infection can affect overall health. A root canal saves your tooth."
      }
    ],
    testimonials: [
      {
        name: "Richard P.",
        text: "Had a terrible toothache, but the root canal was painless! Problem solved.",
        rating: 5
      },
      {
        name: "Victoria M.",
        text: "Saved my tooth. Dr. Lad explained everything clearly. Very professional.",
        rating: 5
      }
    ],
    beforeAfter: false,
    seo: {
      title: "Root Canal Treatment Temple City CA | Painless Endodontics",
      description: "Painless root canal treatment in Temple City. Save your natural tooth with endodontic therapy. Safe, effective care. Call (626) 287-4094.",
      keywords: ["root canal temple city", "endodontics", "root canal treatment", "tooth pain"]
    }
  },
  {
    slug: "dentures",
    icon: Heart,
    name: "Custom Dentures",
    shortDesc: "Full and partial dentures for a confident, natural smile",
    image: "/images/service-dentures.jpg",
    fullDescription: "Our custom-crafted dentures restore your smile, confidence, and ability to eat your favorite foods. We offer both full and partial dentures designed for optimal comfort and natural appearance. Each set is precisely fitted, adjusted, and crafted with premium materials to ensure a secure, comfortable fit.",
    benefits: [
      "Custom-fitted for comfort and stability",
      "Natural-looking appearance",
      "Full and partial options",
      "Implant-supported dentures available",
      "Easy adjustment and reline services",
      "Affordable tooth replacement",
      "Quick fabrication timeline"
    ],
    duration: "2-3 weeks",
    pricing: {
      basePrice: "$1500-$3500",
      insurance: true
    },
    technology: [
      "Digital denture design",
      "Custom shade matching",
      "Precision bite registration",
      "Advanced denture materials",
      "3D scanning technology"
    ],
    processSteps: [
      {
        title: "Consultation & Design",
        description: "Discuss options and design your ideal dentures",
        icon: ClipboardCheck
      },
      {
        title: "Mold & Model Creation",
        description: "Precise molds and models created for custom fit",
        icon: Award
      },
      {
        title: "Fabrication",
        description: "Expert lab creates your dentures with precision",
        icon: Zap
      },
      {
        title: "Fit & Adjustments",
        description: "Try-in, adjustments, and final delivery of dentures",
        icon: Smile
      }
    ],
    faqs: [
      {
        question: "How long does it take to get custom dentures?",
        answer: "Typically 2-3 weeks from start to finish, including fitting and adjustments."
      },
      {
        question: "How often do dentures need adjustments?",
        answer: "Your gums change over time, so adjustments are needed periodically. We recommend annual check-ups."
      },
      {
        question: "Can I eat normally with dentures?",
        answer: "Yes! After an adjustment period, most patients eat comfortably with dentures. Avoid very hard foods initially."
      }
    ],
    testimonials: [
      {
        name: "Dorothy J.",
        text: "My dentures are so comfortable and natural-looking. Great quality!",
        rating: 5
      },
      {
        name: "Harold T.",
        text: "No more jaw pain. Can eat and speak normally again. Highly recommend!",
        rating: 5
      }
    ],
    beforeAfter: true,
    seo: {
      title: "Custom Dentures Temple City CA | Full & Partial Dentures",
      description: "Custom dentures in Temple City. Full & partial dentures for a natural smile. Implant-supported options available. Call Lad Family Dentistry (626) 287-4094.",
      keywords: ["dentures temple city", "partial dentures", "full dentures", "implant dentures"]
    }
  },
  {
    slug: "tooth-extractions",
    icon: Scissors,
    name: "Tooth Extractions",
    shortDesc: "Gentle tooth removal with compassionate, expert care",
    image: "/images/service-extraction.jpg",
    fullDescription: "When a tooth cannot be saved, our gentle extraction techniques minimize discomfort and promote faster healing. With sedation options available, even the most anxious patients can have teeth removed comfortably. We specialize in all extractions including wisdom teeth. We provide detailed aftercare instructions and follow-up to ensure proper healing.",
    benefits: [
      "Gentle, minimally invasive technique",
      "IV sedation available for comfort",
      "Wisdom tooth removal specialist",
      "Minimal bleeding and swelling",
      "Post-extraction care guidance",
      "Replacement options discussed",
      "Fast recovery protocols"
    ],
    duration: "15-45 minutes per tooth",
    pricing: {
      basePrice: "$150-$500",
      insurance: true
    },
    technology: [
      "Atraumatic extraction instruments",
      "Guided surgical techniques",
      "Cone-beam CT imaging",
      "Piezoelectric surgery tools",
      "Advanced suturing materials"
    ],
    processSteps: [
      {
        title: "Assessment & Planning",
        description: "Imaging and examination to plan optimal extraction approach",
        icon: ClipboardCheck
      },
      {
        title: "Anesthesia",
        description: "Local anesthesia or sedation for complete comfort",
        icon: Shield
      },
      {
        title: "Gentle Extraction",
        description: "Atraumatic extraction minimizing damage to surrounding bone",
        icon: Scissors
      },
      {
        title: "Aftercare Instructions",
        description: "Detailed care instructions and replacement options discussion",
        icon: Heart
      }
    ],
    faqs: [
      {
        question: "How long is recovery from tooth extraction?",
        answer: "Most patients recover within 7-10 days. Initial healing happens quickly, with complete bone healing taking a few months."
      },
      {
        question: "Can wisdom teeth removal be done under sedation?",
        answer: "Absolutely. Dr. Lad offers IV sedation for wisdom teeth removal for maximum patient comfort."
      },
      {
        question: "What should I do after extraction?",
        answer: "Rest, ice for 24 hours, avoid smoking/drinking through straws, don't disturb the extraction site, and follow our detailed aftercare instructions."
      }
    ],
    testimonials: [
      {
        name: "Brandon M.",
        text: "Had wisdom teeth removed. Very gentle procedure, minimal pain. Excellent care.",
        rating: 5
      },
      {
        name: "Lisa R.",
        text: "Dr. Lad's expertise made what I dreaded into a smooth, quick process.",
        rating: 5
      }
    ],
    beforeAfter: false,
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
