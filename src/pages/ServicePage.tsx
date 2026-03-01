import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Check, Phone, Clock, DollarSign } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileBottomBar from "@/components/MobileBottomBar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { ProcessFlow } from "@/components/ProcessFlow";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { FAQSection } from "@/components/FAQSection";
import { TechnologyGrid } from "@/components/TechnologyGrid";
import { getServiceBySlug, servicesData } from "@/data/services";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-indigo-50">
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-6">The service you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-6 py-3 rounded-lg transition-all shadow-lg"
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
      <main className="pt-20 pb-14 md:pb-0 bg-white">
        {/* Enhanced Hero Section with Full-Width Image */}
        <section className="relative h-96 md:h-[500px] overflow-hidden">
          {/* Hero Image */}
          <div className="absolute inset-0">
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-12 container mx-auto">
            {/* Back Link */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-all w-fit"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>

            {/* Main Heading */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-white/20 backdrop-blur rounded-xl border border-white/30">
                  <Icon className="w-12 h-12 md:w-16 md:h-16 text-white" />
                </div>
                <div>
                  {/* H1 with Temple City keyword SEO */}
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    {service.name} in Temple City
                  </h1>
                  <p className="text-xl text-white/90 mt-2">Professional Dental Care at Lad Family Dentistry</p>
                </div>
              </div>
              <p className="text-white/80 text-lg md:text-xl max-w-3xl leading-relaxed">
                {service.shortDesc}
              </p>
            </div>
          </div>

          {/* Animated Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center gap-2 text-white/60">
              <span className="text-sm">Scroll to learn more</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-16">
              {/* Service Image */}
              <div className="relative rounded-xl overflow-hidden shadow-xl group">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-64 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* About Section */}
              <section className="space-y-8">
                <div>
                  <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-blue-200">
                    About This Service
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    {service.name} in Temple City
                  </h2>
                  <p className="text-gray-700 text-xl leading-relaxed mb-6">
                    {service.fullDescription}
                  </p>
                </div>

                {/* Key Points Card */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border-2 border-blue-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">What Makes Our {service.name} Service Special?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold">✓</div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Expert Specialists</h4>
                        <p className="text-gray-700 text-sm">Both Dr. Chiman Lad and Dr. Sunjay Lad are USC-trained dentists with decades of combined experience in {service.name.toLowerCase()}.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold">✓</div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Latest Technology</h4>
                        <p className="text-gray-700 text-sm">We invest in cutting-edge equipment and techniques to deliver superior results and minimal discomfort.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold">✓</div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Patient-Centered Care</h4>
                        <p className="text-gray-700 text-sm">We take time to understand your goals and concerns, creating customized treatment plans for each patient.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold">✓</div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Comfortable Experience</h4>
                        <p className="text-gray-700 text-sm">Our Temple City office is designed for comfort, and we offer sedation options for anxious patients.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border-2 border-blue-200">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-semibold text-gray-600">Duration</span>
                    </div>
                    <p className="text-lg font-bold text-gray-900">{service.duration}</p>
                  </div>
                  {service.pricing && (
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border-2 border-green-200">
                      <div className="flex items-center gap-3 mb-2">
                        <DollarSign className="w-5 h-5 text-green-600" />
                        <span className="text-sm font-semibold text-gray-600">Pricing</span>
                      </div>
                      <p className="text-lg font-bold text-gray-900">{service.pricing.basePrice}</p>
                      {service.pricing.insurance && (
                        <p className="text-xs text-gray-600 mt-1">Insurance accepted</p>
                      )}
                    </div>
                  )}
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border-2 border-purple-200">
                    <div className="flex items-center gap-3 mb-2">
                      <Check className="w-5 h-5 text-purple-600" />
                      <span className="text-sm font-semibold text-gray-600">Results</span>
                    </div>
                    <p className="text-lg font-bold text-gray-900">{service.beforeAfter ? "Before & After" : "Visible Improvement"}</p>
                  </div>
                </div>
              </section>

              {/* Benefits Section */}
              <section className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Benefits & Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4 border-blue-600">
                      <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-800 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Before & After Section */}
              {service.beforeAfter && (
                <section className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900">Transformation Results</h2>
                  <div className="space-y-4">
                    <p className="text-gray-700">See real results from our patients. Drag the slider below to compare before and after photos.</p>
                    <BeforeAfterSlider
                      beforeImage={`https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&w=600&h=400&q=80`}
                      afterImage={`https://images.unsplash.com/photo-1579154204601-01d167b8cc67?auto=format&fit=crop&w=600&h=400&q=80`}
                      beforeLabel="Before"
                      afterLabel="After"
                    />
                  </div>
                </section>
              )}

              {/* Technology Section */}
              <section className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Advanced Technology</h2>
                <p className="text-gray-700">We use state-of-the-art equipment and techniques to deliver the best results:</p>
                <TechnologyGrid technologies={service.technology} />
              </section>

              {/* Process Flow Section */}
              <section className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Your Treatment Journey</h2>
                <p className="text-gray-700">Here's what to expect during your {service.name} treatment:</p>
                <ProcessFlow steps={service.processSteps} />
              </section>

              {/* Testimonials Section */}
              {service.testimonials.length > 0 && (
                <section className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900">Patient Testimonials</h2>
                  <p className="text-gray-700">Hear from patients who have had this service:</p>
                  <TestimonialCarousel testimonials={service.testimonials} />
                </section>
              )}

              {/* Local Expertise Section */}
              <section className="space-y-8 py-12 border-t-2 border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900">Why Lad Family Dentistry in Temple City?</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="text-3xl">👨‍⚕️</span>
                        Expert Team
                      </h3>
                      <p className="text-gray-700">Dr. Chiman Lad and Dr. Sunjay Lad are both graduates of USC School of Dentistry and have maintained faculty positions at the university. Their commitment to continuing education ensures they're always up-to-date with the latest techniques and technologies in dentistry.</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="text-3xl">⚡</span>
                        Advanced Technology
                      </h3>
                      <p className="text-gray-700">Our Temple City practice is equipped with state-of-the-art dental technology including digital imaging, 3D scanning, CEREC same-day crowns, and advanced sterilization systems. We invest in equipment that enhances results and minimizes treatment time.</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="text-3xl">❤️</span>
                        Compassionate Care
                      </h3>
                      <p className="text-gray-700">We treat every patient like family. We understand that dental visits can be stressful, which is why we emphasize clear communication, sedation options, and creating a welcoming, anxiety-free environment for all our Temple City patients.</p>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="text-3xl">🏆</span>
                        Proven Results
                      </h3>
                      <p className="text-gray-700">Our {service.testimonials.length}+ patient testimonials speak to the quality of our work. With a 4.9-star rating and hundreds of satisfied patients, we're the trusted choice for {service.name.toLowerCase()} in Temple City.</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="text-3xl">💳</span>
                        Insurance & Payments
                      </h3>
                      <p className="text-gray-700">We accept most insurance plans and offer flexible payment options to make dental care accessible. We're happy to verify your coverage and discuss payment plans that fit your budget.</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="text-3xl">📍</span>
                        Local & Convenient
                      </h3>
                      <p className="text-gray-700">Located in the heart of Temple City at 5813 Temple City Blvd, we're easily accessible from nearby communities. We offer convenient hours and same-day emergency appointments for Temple City residents.</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Sticky Card */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-8 sticky top-24 shadow-xl text-white">
                <h3 className="text-2xl font-bold mb-4">Schedule Your Appointment</h3>
                <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                  Ready to experience professional {service.name} treatment? Contact us today!
                </p>
                <div className="space-y-3 mb-6">
                  <a
                    href="tel:+16262874094"
                    className="w-full inline-flex items-center justify-center gap-2 bg-white text-blue-600 font-bold px-4 py-3 rounded-lg hover:bg-blue-50 transition-all shadow-lg"
                  >
                    <Phone className="w-5 h-5" />
                    (626) 287-4094
                  </a>
                  <a
                    href="/#contact"
                    className="w-full inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-4 py-3 rounded-lg hover:bg-white/10 transition-all"
                  >
                    <Calendar className="w-5 h-5" />
                    Request Appointment
                  </a>
                </div>

                {/* Hours */}
                <div className="pt-6 border-t border-blue-400">
                  <p className="text-sm font-semibold text-blue-100 mb-3">Office Hours:</p>
                  <div className="space-y-1 text-sm text-blue-50">
                    <p>Mon-Thu: 8am-5pm</p>
                    <p>Fri: 7am-3pm</p>
                  </div>
                  <div className="mt-4 text-sm">
                    <p className="text-blue-100 mb-1">📍 Location:</p>
                    <p className="text-blue-50 leading-relaxed">
                      5813 Temple City Blvd<br />
                      Temple City, CA 91780
                    </p>
                  </div>
                </div>
              </div>

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
                  <div className="space-y-3">
                    {relatedServices.map((relatedService) => {
                      const RelatedIcon = relatedService.icon;
                      return (
                        <Link
                          key={relatedService.slug}
                          to={`/services/${relatedService.slug}`}
                          className="flex items-center gap-3 p-3 rounded-lg bg-white hover:bg-blue-50 transition-all group border-2 border-gray-200 hover:border-blue-400"
                        >
                          <RelatedIcon className="w-6 h-6 text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                          <div className="min-w-0">
                            <p className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors text-sm">
                              {relatedService.name}
                            </p>
                            <p className="text-xs text-gray-600 line-clamp-1">
                              {relatedService.shortDesc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <Link
                    to="/#services"
                    className="mt-4 text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm inline-block"
                  >
                    View All Services →
                  </Link>
                </div>
              )}

              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-amber-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Why Choose Us?</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-0.5">✓</span>
                    <span className="text-gray-700"><strong>35+ years</strong> of dental excellence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-0.5">✓</span>
                    <span className="text-gray-700"><strong>USC-trained</strong> specialists</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-0.5">✓</span>
                    <span className="text-gray-700"><strong>24/7</strong> emergency care</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-0.5">✓</span>
                    <span className="text-gray-700"><strong>Latest technology</strong> & techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-0.5">✓</span>
                    <span className="text-gray-700"><strong>Most insurance</strong> accepted</span>
                  </li>
                </ul>
              </div>
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
