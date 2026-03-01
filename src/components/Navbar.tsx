import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Insurance", href: "#insurance" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl shadow-lg shadow-primary/5 border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gold to-teal flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm font-serif">L</span>
            </div>
            <div>
              <span className={`text-lg font-bold font-serif transition-colors duration-300 ${
                scrolled ? "text-primary" : "text-primary-foreground"
              }`}>
                Lad Family Dentistry
              </span>
              <span className={`hidden sm:block text-xs transition-colors duration-300 ${
                scrolled ? "text-teal" : "text-gold"
              }`}>
                Temple City's Most Trusted Smile
              </span>
            </div>
          </div>

          {/* Desktop nav — Apple pill style */}
          <nav className="hidden md:flex items-center">
            <div className={`flex items-center gap-1 px-2 py-1.5 rounded-full transition-all duration-300 ${
              scrolled 
                ? "bg-secondary/80 backdrop-blur-sm" 
                : "bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/10"
            }`}>
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 hover:scale-[1.02] ${
                    scrolled
                      ? "text-foreground hover:bg-background hover:shadow-sm"
                      : "text-primary-foreground/90 hover:bg-primary-foreground/15 hover:text-primary-foreground"
                  }`}
                >
                  {l.label}
                </a>
              ))}
            </div>

            <a
              href="tel:+16262874094"
              className="ml-4 inline-flex items-center gap-2 bg-gold text-gold-foreground font-bold px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-gold/20 hover:scale-[1.02] active:scale-95 transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              (626) 287-4094
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2.5 min-w-[44px] min-h-[44px] rounded-full flex items-center justify-center transition-all ${
              scrolled
                ? "bg-secondary text-primary"
                : "bg-primary-foreground/10 backdrop-blur-md text-primary-foreground"
            }`}
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setDrawerOpen(false)}
      />

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-4/5 max-w-sm bg-background/95 backdrop-blur-xl shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5">
          <span className="font-serif font-bold text-primary text-lg">Menu</span>
          <button
            onClick={() => setDrawerOpen(false)}
            className="p-2.5 min-w-[44px] min-h-[44px] rounded-full bg-secondary flex items-center justify-center"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>
        <nav className="flex flex-col px-4 gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setDrawerOpen(false)}
              className="text-lg font-medium text-foreground py-3.5 px-5 rounded-2xl hover:bg-secondary active:scale-[0.98] transition-all"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+16262874094"
            className="mt-6 flex items-center justify-center gap-2.5 bg-gold text-gold-foreground font-bold py-4 rounded-2xl text-lg active:scale-95 transition-all"
          >
            <Phone className="w-5 h-5" />
            (626) 287-4094
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
