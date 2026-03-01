import { Phone } from "lucide-react";

const stats = [
  { value: "35+", label: "Years in Practice" },
  { value: "2", label: "USC-Trained Dentists" },
  { value: "2,100+", label: "Website Visitors Last Year" },
  { value: "(626) 287-4094", label: "Call Anytime", isPhone: true },
];

const StatsBar = () => (
  <section className="bg-primary py-8 md:py-6 relative overflow-hidden">
    {/* decorative blobs */}
    <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-br from-blue-400 to-indigo-600 opacity-20 rounded-full animate-blob" />
    <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-br from-gold to-teal opacity-15 rounded-full animate-blob animation-delay-2000" />

    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-primary-foreground/20">
        {stats.map((s, idx) => (
          <div
            key={s.label}
            className="text-center px-4 animate-fade-in"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            {s.isPhone ? (
              <a href="tel:+16262874094" className="flex items-center justify-center gap-2 text-gold font-bold text-2xl md:text-3xl font-serif">
                <Phone className="w-5 h-5" />
                {s.value}
              </a>
            ) : (
              <div className="text-gold font-bold text-3xl md:text-4xl font-serif">{s.value}</div>
            )}
            <div className="text-primary-foreground/80 text-sm mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsBar;
