import { Clock, MapPin, Phone, Siren, ExternalLink } from "lucide-react";

const hours = [
  { day: "Monday", time: "8:00am – 5:00pm" },
  { day: "Tuesday", time: "8:00am – 5:00pm" },
  { day: "Wednesday", time: "8:00am – 5:00pm" },
  { day: "Thursday", time: "8:00am – 5:00pm" },
  { day: "Friday", time: "7:00am – 3:00pm" },
  { day: "Saturday", time: "CLOSED", closed: true },
  { day: "Sunday", time: "CLOSED", closed: true },
];

const HoursLocation = () => (
  <section className="bg-background py-16 md:py-24">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary text-center mb-12">
        Visit Our Temple City Office
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Hours */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-6 h-6 text-teal" />
            <h3 className="text-xl font-bold text-primary">Office Hours</h3>
          </div>
          <div className="rounded-xl overflow-hidden border mb-6">
            {hours.map((h, i) => (
              <div
                key={h.day}
                className={`flex justify-between px-4 py-3 text-base ${
                  i % 2 === 0 ? "bg-slate-bg" : "bg-background"
                }`}
              >
                <span className="font-medium text-foreground">{h.day}</span>
                <span className={h.closed ? "text-destructive font-medium" : "text-muted-foreground"}>
                  {h.time}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-gold rounded-xl p-5 flex items-start gap-3">
            <Siren className="w-6 h-6 text-gold-foreground flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-gold-foreground">Dental Emergency?</p>
              <p className="text-gold-foreground/90 text-base">
                Our doctors are available 24 hours a day for urgent care.{" "}
                <a href="tel:+16262874094" className="underline font-bold">Call (626) 287-4094</a> any time.
              </p>
            </div>
          </div>
        </div>

        {/* Location */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-6 h-6 text-teal" />
            <h3 className="text-xl font-bold text-primary">Location</h3>
          </div>
          <p className="text-lg text-foreground mb-4">
            5813 Temple City Blvd, Temple City, CA 91780
          </p>

          {/* Google Maps Embed */}
          <div className="rounded-xl h-48 md:h-64 mb-4 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.8!2d-118.058!3d34.107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2db45b4f6c0a1%3A0x8b0e8b0e8b0e8b0e!2s5813%20Temple%20City%20Blvd%2C%20Temple%20City%2C%20CA%2091780!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lad Family Dentistry Location"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://maps.google.com/?q=5813+Temple+City+Blvd+Temple+City+CA+91780"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-teal text-teal-foreground font-bold px-6 py-3 rounded-lg hover:opacity-90 active:scale-95 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              Get Directions
            </a>
            <a
              href="tel:+16262874094"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary font-bold px-6 py-3 rounded-lg hover:bg-primary/5 transition-all"
            >
              <Phone className="w-4 h-4" />
              (626) 287-4094
            </a>
          </div>
          <p className="text-muted-foreground mt-4 text-base">
            Conveniently located in the heart of Temple City
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default HoursLocation;
