import { Shield, CreditCard, Check, Phone } from "lucide-react";

const insuranceList = ["PPO Insurance Plans", "Delta Dental", "Cigna", "Aetna", "MetLife", "And most major carriers"];

const paymentPoints = [
  "Cash, Check & All Major Credit Cards",
  "CareCredit Financing Available",
  "Payment Plans for Larger Procedures",
  "Our staff will work with your budget personally",
];

const InsurancePayment = () => (
  <section id="insurance" className="bg-slate-bg py-16 md:py-24 relative overflow-hidden">
    {/* decorative accent */}
    <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-br from-gold to-teal opacity-10 rounded-full animate-blob" />

    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary text-center mb-12">
        We Make Great Dental Care Affordable
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="bg-background rounded-xl shadow-md p-6 md:p-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <Shield className="w-10 h-10 text-teal mb-4" />
          <h3 className="text-xl font-bold text-primary mb-3">Most PPO Insurance Accepted</h3>
          <p className="text-muted-foreground mb-4">
            We work with most major PPO dental insurance plans. Our team will verify your benefits and
            maximize your coverage before your appointment.
          </p>
          <div className="flex flex-wrap gap-2">
            {insuranceList.map((item) => (
              <span key={item} className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1.5 rounded-full">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-background rounded-xl shadow-md p-6 md:p-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <CreditCard className="w-10 h-10 text-teal mb-4" />
          <h3 className="text-xl font-bold text-primary mb-3">Flexible Payment Options</h3>
          <p className="text-muted-foreground mb-4">
            We never want cost to stand between you and a healthy smile.
          </p>
          <ul className="space-y-3">
            {paymentPoints.map((p) => (
              <li key={p} className="flex items-start gap-2 text-base text-foreground">
                <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-primary rounded-xl p-6 md:p-8 text-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
        <p className="text-primary-foreground text-lg mb-3">
          Questions about insurance? Call us — we'll figure it out together.
        </p>
        <a
          href="tel:+16262874094"
          className="inline-flex items-center gap-2 text-gold text-xl font-bold hover:underline"
        >
          <Phone className="w-5 h-5" />
          (626) 287-4094
        </a>
      </div>
    </div>
  </section>
);

export default InsurancePayment;
