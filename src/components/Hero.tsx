import { useState, useEffect, useCallback } from "react";
import { Phone, Calendar, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/images/service-general.jpg",
    label: "General Dentistry",
    headline: "A Healthier Smile\nStarts With One Call",
    sub: "Comprehensive dental care for your entire family — cleanings, exams, fillings, and preventive treatments.",
  },
  {
    image: "/images/service-cosmetic.jpg",
    label: "Cosmetic Dentistry",
    headline: "Your Best Smile\nIs Just One Visit Away",
    sub: "Veneers, bonding, and recontouring — artistry meets advanced dental science.",
  },
  {
    image: "/images/service-whitening.jpg",
    label: "Teeth Whitening",
    headline: "Brighter. Whiter.\nConfident.",
    sub: "Professional-grade whitening — go 4-8 shades brighter in a single visit.",
  },
  {
    image: "/images/service-implants.jpg",
    label: "Dental Implants",
    headline: "Permanent Teeth\nThat Feel Natural",
    sub: "The gold standard in tooth replacement — placed by a specialist right here in Temple City.",
  },
  {
    image: "/images/service-children.jpg",
    label: "Children's Dentistry",
    headline: "Making Dental Visits\nFun for Kids",
    sub: "Gentle, patient, kid-friendly care from the very first tooth.",
  },
  {
    image: "/images/service-sedation.jpg",
    label: "Sedation Dentistry",
    headline: "Anxiety-Free\nDentistry",
    sub: "IV sedation by a trained specialist — relax completely while we take care of everything.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(idx);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [isTransitioning]
  );

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative min-h-[90vh] md:min-h-screen pt-20 md:pt-0 overflow-hidden">
      {/* decorative blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-500 to-indigo-700 opacity-20 rounded-full animate-blob" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-gold to-teal opacity-15 rounded-full animate-blob animation-delay-2000" />
      {/* Background images — all preloaded, only active one visible */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={s.image}
            alt={s.label}
            className="w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
          {/* Dark overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-primary/20" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col justify-center min-h-[90vh] md:min-h-screen">
        <div className="max-w-2xl">
          {/* Slide label pill */}
          <span
            key={`label-${current}`}
            className="inline-block bg-gold/20 backdrop-blur-sm text-gold border border-gold/30 font-semibold tracking-wide text-sm uppercase px-4 py-1.5 rounded-full mb-6 animate-fade-in"
          >
            {slide.label}
          </span>

          {/* Headline */}
          <h1
            key={`h-${current}`}
            className="text-4xl md:text-5xl lg:text-7xl font-bold font-serif text-primary-foreground leading-[1.1] mb-6 animate-fade-in whitespace-pre-line"
            style={{ animationDelay: "0.1s", animationFillMode: "backwards" }}
          >
            {slide.headline}
          </h1>

          {/* Sub */}
          <p
            key={`sub-${current}`}
            className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-xl leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.2s", animationFillMode: "backwards" }}
          >
            {slide.sub}
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in"
            style={{ animationDelay: "0.3s", animationFillMode: "backwards" }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2.5 bg-gold text-gold-foreground font-bold px-8 py-4 rounded-full text-lg hover:shadow-lg hover:shadow-gold/25 hover:scale-[1.02] active:scale-95 transition-all duration-200"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </a>
            <a
              href="tel:+16262874094"
              className="inline-flex items-center justify-center gap-2.5 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/30 text-primary-foreground font-bold px-8 py-4 rounded-full text-lg hover:bg-primary-foreground/20 active:scale-95 transition-all duration-200"
            >
              <Phone className="w-5 h-5" />
              Call (626) 287-4094
            </a>
          </div>
        </div>

        {/* Bottom controls bar */}
        <div className="absolute bottom-8 left-4 right-4 md:left-auto md:right-auto md:bottom-12 flex items-center gap-4">
          {/* Prev/Next arrows */}
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dot indicators with progress */}
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="group relative h-1.5 rounded-full overflow-hidden transition-all duration-300"
                style={{ width: i === current ? 40 : 12 }}
                aria-label={`Go to slide ${i + 1}`}
              >
                <div className="absolute inset-0 bg-primary-foreground/30 rounded-full" />
                {i === current && (
                  <div
                    className="absolute inset-0 bg-gold rounded-full origin-left"
                    style={{
                      animation: "progress-fill 5s linear forwards",
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={next}
            className="w-11 h-11 rounded-full bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Slide counter */}
          <span className="hidden md:block text-primary-foreground/50 text-sm font-mono ml-2">
            {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
