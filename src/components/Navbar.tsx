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
        className={`fixed top-0 left-0 right-0 z-40 bg-background transition-shadow duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <div>
            <span className="text-xl font-bold font-serif text-primary">Lad Family Dentistry</span>
            <span className="hidden sm:block text-sm text-teal">Temple City's Most Trusted Smile</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-base font-medium text-foreground hover:text-teal transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+16262874094"
              className="inline-flex items-center gap-2 bg-gold text-gold-foreground font-bold px-5 py-2.5 rounded-lg hover:opacity-90 active:scale-95 transition-all"
            >
              <Phone className="w-4 h-4" />
              (626) 287-4094
            </a>
          </nav>
          <button
            className="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-primary" />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 md:hidden ${
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setDrawerOpen(false)}
      />
      <div
        className={`fixed top-0 right-0 z-50 h-full w-4/5 max-w-sm bg-background shadow-2xl transition-transform duration-300 md:hidden ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <span className="font-serif font-bold text-primary text-lg">Menu</span>
          <button
            onClick={() => setDrawerOpen(false)}
            className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col p-4 gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setDrawerOpen(false)}
              className="text-lg font-medium text-foreground py-3 px-4 rounded-lg hover:bg-secondary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+16262874094"
            className="mt-4 flex items-center justify-center gap-2 bg-gold text-gold-foreground font-bold py-3 rounded-lg text-lg"
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
