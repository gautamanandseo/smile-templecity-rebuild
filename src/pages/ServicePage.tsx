import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Check, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileBottomBar from "@/components/MobileBottomBar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { getServiceBySlug, servicesData } from "@/data/services";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-bg">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-6">The service you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-gold text-gold-foreground font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  const relatedServices = servicesData
    .filter(s => s.slug !== service.slug)
    .slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": service.name,
    "description": service.fullDescription,
    "procedureType": "Dental",
    "provider": {
      "@type": "Dentist",
      "name": "Lad Family Dentistry",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "5813 Temple City Blvd",
        "addressLocality": "Temple City",
        "addressRegion": "CA",
        "postalCode": "91780"
      },
      "telephone": "+16262874094"
    }
  };

  return (
    <>
      <SEO
        title={service.seo.title}
        description={service.seo.description}
        keywords={service.seo.keywords}
        canonical={`https://toptemplecitydentist.com/services/${service.slug}`}
        schema={schema}
      />
      <Navbar />
      <main className="pt-20 pb-14 md:pb-0">
        <div className="bg-primary py-12 md:py-16">
          <div className="container mx-auto px-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gold hover:underline mb-4 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <Icon className="w-12 h-12 md:w-16 md:h-16 text-gold" />
              <h1 className="text-3xl md:text-5xl font-bold font-serif text-primary-foreground">
                {service.name}
              </h1>
            </div>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-3xl">
              {service.shortDesc}
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-background rounded-xl shadow-md overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>

              <div className="bg-background rounded-xl shadow-md p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold font-serif text-primary mb-4">
                  About {service.name}
                </h2>
                <p className="text-foreground text-base md:text-lg leading-relaxed mb-6">
                  {service.fullDescription}
                </p>

                <h3 className="text-xl font-bold text-primary mb-4">Benefits & Features</h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-teal flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-base">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-bg rounded-xl p-6 md:p-8">
                <h3 className="text-xl font-bold text-primary mb-4">Why Choose Lad Family Dentistry?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                      <span className="text-gold-foreground font-bold">35+</span>
                    </div>
                    <div>
                      <p className="font-bold text-foreground">Years of Experience</p>
                      <p className="text-muted-foreground text-sm">Serving Temple City since 1989</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal flex items-center justify-center flex-shrink-0">
                      <span className="text-teal-foreground font-bold">2</span>
                    </div>
                    <div>
                      <p className="font-bold text-foreground">USC-Trained Dentists</p>
                      <p className="text-muted-foreground text-sm">Both with faculty appointments</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                      <span className="text-gold-foreground font-bold">24/7</span>
                    </div>
                    <div>
                      <p className="font-bold text-foreground">Emergency Care</p>
                      <p className="text-muted-foreground text-sm">Available around the clock</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal flex items-center justify-center flex-shrink-0">
                      <span className="text-teal-foreground font-bold">PPO</span>
                    </div>
                    <div>
                      <p className="font-bold text-foreground">Most Insurance Accepted</p>
                      <p className="text-muted-foreground text-sm">We maximize your benefits</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gold rounded-xl p-6 md:p-8 sticky top-24">
                <h3 className="text-2xl font-bold font-serif text-gold-foreground mb-4">
                  Ready to Schedule?
                </h3>
                <p className="text-gold-foreground/90 mb-6">
                  Call us now or request an appointment online. New patients are always welcome!
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+16262874094"
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-4 rounded-lg hover:opacity-90 transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    Call (626) 287-4094
                  </a>
                  <a
                    href="/#contact"
                    className="w-full inline-flex items-center justify-center gap-2 border-2 border-primary text-gold-foreground font-bold px-6 py-4 rounded-lg hover:bg-primary/10 transition-all"
                  >
                    <Calendar className="w-5 h-5" />
                    Request Appointment
                  </a>
                </div>
                <div className="mt-6 pt-6 border-t border-gold-foreground/20">
                  <p className="text-gold-foreground/80 text-sm mb-2">Office Hours:</p>
                  <p className="text-gold-foreground font-medium text-sm">Mon-Thu: 8am-5pm</p>
                  <p className="text-gold-foreground font-medium text-sm">Fri: 7am-3pm</p>
                  <p className="text-gold-foreground font-medium text-sm mt-2">
                    📍 5813 Temple City Blvd<br />Temple City, CA 91780
                  </p>
                </div>
              </div>

              {relatedServices.length > 0 && (
                <div className="bg-background rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">Related Services</h3>
                  <div className="space-y-3">
                    {relatedServices.map((relatedService) => {
                      const RelatedIcon = relatedService.icon;
                      return (
                        <Link
                          key={relatedService.slug}
                          to={`/services/${relatedService.slug}`}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-bg transition-all group"
                        >
                          <RelatedIcon className="w-8 h-8 text-teal flex-shrink-0" />
                          <div>
                            <p className="font-bold text-foreground group-hover:text-teal transition-colors">
                              {relatedService.name}
                            </p>
                            <p className="text-sm text-muted-foreground line-clamp-1">
                              {relatedService.shortDesc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <Link
                    to="/#services"
                    className="mt-4 text-teal font-medium hover:underline text-sm inline-block"
                  >
                    View All Services →
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MobileBottomBar />
    </>
  );
};

export default ServicePage;
