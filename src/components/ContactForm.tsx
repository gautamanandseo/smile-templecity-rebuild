import { useState } from "react";
import { Phone, MapPin, Clock, Siren, Send } from "lucide-react";

const serviceOptions = [
  "General Dentistry", "Cosmetic Dentistry", "Teeth Whitening", "Children's Dentistry",
  "Sedation Dentistry", "Invisalign", "Dental Implants", "Dental Crowns",
  "Emergency Dentistry", "Root Canals", "Dentures", "Tooth Extractions",
];

const dayOptions = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const timeOptions = ["Morning 8–10am", "Midday 10am–12pm", "Afternoon 12–3pm"];

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-primary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary-foreground text-center mb-12">
          Request an Appointment in Temple City
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left — contact info */}
          <div className="flex flex-col justify-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <a href="tel:+16262874094" className="text-gold text-3xl md:text-4xl font-bold font-serif mb-4 hover:underline">
              (626) 287-4094
            </a>
            <span className="inline-block bg-gold text-gold-foreground text-sm font-bold px-4 py-1.5 rounded-full mb-6 w-fit">
              New Patients Welcome
            </span>
            <ul className="space-y-4 text-primary-foreground/80 text-base mb-8">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="tel:+16262874094" className="hover:underline">Call: (626) 287-4094</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
                5813 Temple City Blvd, Temple City, CA 91780
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gold flex-shrink-0" />
                Mon–Thu: 8am–5pm, Fri: 7am–3pm
              </li>
              <li className="flex items-center gap-3">
                <Siren className="w-5 h-5 text-gold flex-shrink-0" />
                Emergency line available 24/7
              </li>
            </ul>
            <p className="text-primary-foreground/60 italic text-base">
              Join thousands of Temple City families who trust Lad Family Dentistry
            </p>
          </div>

          {/* Right — form */}
          <div className="bg-background rounded-xl shadow-lg p-6 md:p-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {submitted ? (
              <div className="text-center py-12 animate-fade-in">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-primary mb-2">Thank you!</h3>
                <p className="text-muted-foreground">We'll be in touch within 1 business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  required
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-input rounded-lg px-4 py-3 text-base bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <input
                  required
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-input rounded-lg px-4 py-3 text-base bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-input rounded-lg px-4 py-3 text-base bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <select
                  required
                  className="w-full border border-input rounded-lg px-4 py-3 text-base bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  defaultValue=""
                >
                  <option value="" disabled>Service Interested In</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select
                    required
                    className="w-full border border-input rounded-lg px-4 py-3 text-base bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    defaultValue=""
                  >
                    <option value="" disabled>Preferred Day</option>
                    {dayOptions.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                  <select
                    required
                    className="w-full border border-input rounded-lg px-4 py-3 text-base bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    defaultValue=""
                  >
                    <option value="" disabled>Preferred Time</option>
                    {timeOptions.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <textarea
                  placeholder="Message / Notes (optional)"
                  rows={3}
                  className="w-full border border-input rounded-lg px-4 py-3 text-base bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-gold text-gold-foreground font-bold text-lg py-4 rounded-lg hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Request My Appointment →
                </button>
                <p className="text-muted-foreground text-sm text-center">
                  We'll call or text you within 1 business day to confirm. For urgent needs, please call us directly.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
