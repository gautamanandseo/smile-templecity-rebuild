import { Phone } from "lucide-react";

const MobileBottomBar = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
    <a
      href="tel:+16262874094"
      className="flex items-center justify-center gap-3 bg-gold text-gold-foreground font-bold text-lg py-4 hover:opacity-90 active:scale-[0.98] transition-all"
    >
      <Phone className="w-5 h-5" />
      Call Now — (626) 287-4094
    </a>
  </div>
);

export default MobileBottomBar;
