import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Calendar } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceDetail {
  icon: LucideIcon;
  name: string;
  desc: string;
  image: string;
  longDesc: string;
  benefits: string[];
}

interface ServiceDetailDialogProps {
  service: ServiceDetail | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ServiceDetailDialog = ({ service, open, onOpenChange }: ServiceDetailDialogProps) => {
  if (!service) return null;
  const Icon = service.icon;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <Icon className="w-8 h-8 text-teal" />
            <DialogTitle className="text-2xl font-serif text-primary">{service.name}</DialogTitle>
          </div>
          <DialogDescription className="text-muted-foreground text-base">
            {service.desc}
          </DialogDescription>
        </DialogHeader>

        <div className="rounded-xl overflow-hidden mb-4">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-48 md:h-64 object-cover"
            loading="lazy"
          />
        </div>

        <div className="space-y-4">
          <p className="text-foreground text-base leading-relaxed">{service.longDesc}</p>

          <div>
            <h4 className="font-bold text-primary mb-2">Benefits:</h4>
            <ul className="space-y-1.5">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-base text-foreground">
                  <span className="text-teal mt-0.5">✓</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <a
            href="#contact"
            onClick={() => onOpenChange(false)}
            className="inline-flex items-center gap-2 bg-gold text-gold-foreground font-bold px-6 py-3 rounded-lg hover:opacity-90 active:scale-95 transition-all w-full justify-center"
          >
            <Calendar className="w-5 h-5" />
            Book This Service
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailDialog;
