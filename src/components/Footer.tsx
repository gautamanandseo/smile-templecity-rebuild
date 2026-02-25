import { Phone } from "lucide-react";

const serviceLinks = [
  "Teeth Whitening", "Dental Implants", "Invisalign",
  "Children's Dentistry", "Emergency Dentistry", "Cosmetic Dentistry",
];

const hours = [
  "Mon–Thu: 8am–5pm",
  "Fri: 7am–3pm",
  "Sat–Sun: Closed",
];

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Col 1 */}
        <div>
          <h3 className="text-lg font-bold font-serif mb-2">Lad Family Dentistry</h3>
          <p className="text-gold italic text-base mb-3">Temple City's Most Trusted Smile Since 1989</p>
          <a href="tel:+16262874094" className="flex items-center gap-2 text-gold font-bold text-lg hover:underline mb-2">
            <Phone className="w-4 h-4" />
            (626) 287-4094
          </a>
          <p className="text-primary-foreground/60 text-base">
            5813 Temple City Blvd, Temple City, CA 91780
          </p>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="font-bold mb-3">Services</h4>
          <ul className="space-y-2">
            {serviceLinks.map((s) => (
              <li key={s}>
                <a href="#services" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-base">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="font-bold mb-3">Hours</h4>
          <ul className="space-y-2 text-primary-foreground/60 text-base mb-4">
            {hours.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <span className="inline-block bg-gold text-gold-foreground text-sm font-bold px-3 py-1.5 rounded-full">
            24-Hour Emergency Line
          </span>
        </div>
      </div>
    </div>

    <div className="border-t border-primary-foreground/10 py-4">
      <div className="container mx-auto px-4 text-center text-primary-foreground/50 text-sm">
        <p>© 2026 Lad Family Dentistry. All Rights Reserved.</p>
        <p>5813 Temple City Blvd, Temple City, CA 91780 · (626) 287-4094</p>
      </div>
    </div>
  </footer>
);

export default Footer;
