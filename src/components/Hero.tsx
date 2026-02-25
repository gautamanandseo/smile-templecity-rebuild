import { Phone, Calendar, Shield, Clock, GraduationCap, Star } from "lucide-react";

const Hero = () => (
  <section className="min-h-screen md:min-h-screen flex flex-col md:flex-row pt-16">
    {/* Left */}
    <div className="flex-1 bg-primary flex flex-col justify-center px-6 md:px-12 lg:px-20 py-16 md:py-0">
      <span className="text-gold font-bold tracking-widest text-sm uppercase mb-4">
        Temple City's #1 Rated Dentist
      </span>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-primary-foreground leading-tight mb-6">
        A Healthier Smile Starts With One Call
      </h1>
      <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
        Dr. Chiman Lad & Dr. Sunjay Lad have been caring for Temple City families for over 35 years.
        Two USC-trained dentists. One practice. Zero pressure.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 bg-gold text-gold-foreground font-bold px-8 py-4 rounded-lg text-lg hover:opacity-90 active:scale-95 transition-all"
        >
          <Calendar className="w-5 h-5" />
          Book Appointment
        </a>
        <a
          href="tel:+16262874094"
          className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground text-primary-foreground font-bold px-8 py-4 rounded-lg text-lg hover:bg-primary-foreground/10 active:scale-95 transition-all"
        >
          <Phone className="w-5 h-5" />
          Call (626) 287-4094
        </a>
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-3 text-primary-foreground/70 text-sm">
        <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-gold" /> 35+ Years Serving Temple City</span>
        <span className="flex items-center gap-2"><GraduationCap className="w-4 h-4 text-gold" /> Two USC Alumni</span>
        <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-gold" /> Most PPO Insurance Accepted</span>
        <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-gold" /> 24-Hour Emergency Line</span>
      </div>
    </div>

    {/* Right — desktop only */}
    <div className="hidden md:flex flex-1 bg-gradient-to-br from-teal to-primary items-center justify-center relative">
      {/* Floating review card */}
      <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-primary-foreground/20 max-w-xs">
        <div className="flex justify-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-gold text-gold" />
          ))}
        </div>
        <p className="text-primary-foreground font-semibold text-lg mb-2">Hundreds of 5-star reviews</p>
        <p className="text-primary-foreground/80">New patients welcome!</p>
      </div>
      {/* Decorative tooth SVG */}
      <svg className="absolute bottom-8 right-8 w-24 h-24 text-primary-foreground/10" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 10c-15 0-25 12-30 25-3 8-2 18 1 26 4 10 10 20 15 28 2 3 5 3 7 0 5-8 11-18 15-28 3-8 4-18 1-26C54 22 65 10 50 10z" />
      </svg>
    </div>
  </section>
);

export default Hero;
