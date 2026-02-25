import { Check } from "lucide-react";

const chimanFacts = [
  "Bachelor of Dental Surgery, University of Dundee (Scotland)",
  "DDS, USC School of Dentistry",
  "18-year faculty appointment at USC School of Dentistry",
  "35+ years practicing in Temple City",
  "Founded free dental clinic at orphanage in rural India",
  "Practicing since 1989",
];

const sunjayFacts = [
  "Bachelor's in Engineering, Stanford University",
  "DDS, USC School of Dentistry",
  "Faculty appointment at USC School of Dentistry",
  "Advanced training in IV sedation dentistry",
  "Specialist in dental implants",
  "Answers patient calls 24/7 for emergencies",
];

const DoctorCard = ({
  initials,
  name,
  title,
  facts,
  gradient,
}: {
  initials: string;
  name: string;
  title: string;
  facts: string[];
  gradient: string;
}) => (
  <div className="bg-background rounded-xl shadow-md p-6 md:p-8 flex-1">
    <div className="flex flex-col items-center mb-6">
      <div
        className={`w-24 h-24 rounded-full flex items-center justify-center text-4xl font-bold text-primary-foreground ${gradient}`}
      >
        {initials}
      </div>
      <h3 className="mt-4 text-xl font-bold font-serif text-primary">{name}</h3>
      <p className="text-teal font-medium">{title}</p>
    </div>
    <ul className="space-y-2">
      {facts.map((f) => (
        <li key={f} className="flex items-start gap-2 text-base text-foreground">
          <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
          {f}
        </li>
      ))}
    </ul>
  </div>
);

const AboutDoctors = () => (
  <section id="about" className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary text-center mb-12">
        Meet Your Temple City Dentists
      </h2>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-10">
        <DoctorCard
          initials="CL"
          name="Dr. Chiman Lad, DDS"
          title="Founder & Lead Dentist"
          facts={chimanFacts}
          gradient="bg-gradient-to-br from-primary to-navy-light"
        />
        <DoctorCard
          initials="SL"
          name="Dr. Sunjay Lad, DDS"
          title="General & Cosmetic Dentist"
          facts={sunjayFacts}
          gradient="bg-gradient-to-br from-teal to-primary"
        />
      </div>
      <div className="bg-slate-bg rounded-xl p-6 md:p-8 text-center">
        <p className="text-lg md:text-xl italic text-foreground max-w-3xl mx-auto leading-relaxed">
          "Our family has been caring for your family for over three decades. We use modern technology
          and proven techniques to give you the best possible outcome — with the personal touch of a
          practice that knows your name."
        </p>
      </div>
    </div>
  </section>
);

export default AboutDoctors;
