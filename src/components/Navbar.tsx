import { useState, useEffect } from "react";
import { Phone, Menu, X, Home } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/", icon: Home },
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
            ? "bg-white/70 backdrop-blur-2xl shadow-[0_2px_15px_rgba(0,0,0,0.06)] border-b border-gray-100/50"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:shadow-blue-600/30 transition-all">
              <span className="text-white font-bold text-sm font-serif">L</span>
            </div>
            <div>
              <span className={`text-base font-semibold transition-colors duration-300 ${
                scrolled ? "text-gray-900" : "text-primary-foreground"
              } block`}>
                Lad Dentistry
              </span>
              <span className={`text-xs transition-colors duration-300 block ${
                scrolled ? "text-gray-600" : "text-blue-100"
              }`}>
                Temple City
              </span>
            </div>
          </a>

          {/* Desktop nav — Premium Apple style */}
          <nav className="hidden lg:flex items-center gap-8">
            <div className={`flex items-center gap-0.5 px-1 py-1 rounded-2xl transition-all duration-300 ${
              scrolled 
                ? "bg-gray-100/50" 
                : "bg-white/10 backdrop-blur-md"
            }`}>
              {navLinks.map((l) => {
                const Icon = l.icon;
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    className={`flex items-center gap-2 text-sm font-medium px-3.5 py-2 rounded-xl transition-all duration-200 hover:bg-white/20 active:scale-95 ${
                      scrolled
                        ? "text-gray-700 hover:bg-gray-200/50"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                    {l.label}
                  </a>
                );
              })}
            </div>

            <a
              href="tel:+16262874094"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-blue-600/30 hover:scale-[1.02] active:scale-95 transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">(626) 287-4094</span>
              <span className="sm:hidden">Call</span>
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden p-2.5 min-w-[44px] min-h-[44px] rounded-xl flex items-center justify-center transition-all ${
              scrolled
                ? "bg-gray-100 text-gray-900"
                : "bg-white/10 backdrop-blur-md text-white"
            }`}
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setDrawerOpen(false)}
      />

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 bg-white/95 backdrop-blur-xl shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <span className="font-semibold text-gray-900 text-lg">Menu</span>
          <button
            onClick={() => setDrawerOpen(false)}
            className="p-2.5 min-w-[44px] min-h-[44px] rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-gray-900" />
          </button>
        </div>

        {/* Drawer Navigation */}
        <nav className="flex flex-col px-4 gap-1 py-4">
          {navLinks.map((l) => {
            const Icon = l.icon;
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setDrawerOpen(false)}
                className="flex items-center gap-3 text-gray-900 font-medium py-3.5 px-4 rounded-xl hover:bg-gray-100 active:scale-95 transition-all"
              >
                {Icon && <Icon className="w-5 h-5 text-blue-600" />}
                {l.label}
              </a>
            );
          })}

          {/* Divider */}
          <div className="my-4 border-t border-gray-100" />

          {/* CTA Button */}
          <a
            href="tel:+16262874094"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3.5 rounded-xl hover:shadow-lg hover:shadow-blue-600/30 active:scale-95 transition-all"
          >
            <Phone className="w-5 h-5" />
            <span>(626) 287-4094</span>
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
