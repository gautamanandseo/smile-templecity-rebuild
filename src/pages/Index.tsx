import Navbar from "@/components/Navbar";
import MobileBottomBar from "@/components/MobileBottomBar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import AboutDoctors from "@/components/AboutDoctors";
import Reviews from "@/components/Reviews";
import InsurancePayment from "@/components/InsurancePayment";
import HoursLocation from "@/components/HoursLocation";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Lad Family Dentistry",
    "url": "https://toptemplecitydentist.com/",
    "logo": "https://toptemplecitydentist.com/logo.png",
    "image": "https://toptemplecitydentist.com/images/office.jpg",
    "description": "Dentist in Temple City, Lad Family Dentistry, providing top quality cosmetic, family, and general dentistry for all ages. Featured services: Children's Dentistry, Dental Implants, Dentures, and Invisalign.",
    "telephone": "+16262874094",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5813 Temple City Blvd",
      "addressLocality": "Temple City",
      "addressRegion": "CA",
      "postalCode": "91780",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "34.107",
      "longitude": "-118.058"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "07:00",
        "closes": "15:00"
      }
    ],
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500"
    },
    "founder": [
      {
        "@type": "Person",
        "name": "Dr. Chiman Lad",
        "jobTitle": "Dentist",
        "alumniOf": "USC School of Dentistry"
      },
      {
        "@type": "Person",
        "name": "Dr. Sunjay Lad",
        "jobTitle": "Dentist",
        "alumniOf": "USC School of Dentistry"
      }
    ]
  };

  return (
    <div className="pb-14 md:pb-0">
      <SEO
        title="Dentist in Temple City CA | Lad Family Dentistry | (626) 287-4094"
        description="Dentist in Temple City, Lad Family Dentistry, providing top quality cosmetic, family, and general dentistry for all ages. Featured services: Children's Dentistry, Dental Implants, Dentures, and Invisalign. Looking for a new dentist? Give us a call today."
        keywords={[
          "dentist temple city",
          "temple city dentist",
          "cosmetic dentistry",
          "family dentist",
          "dental implants",
          "invisalign",
          "children's dentistry",
          "emergency dentist",
          "teeth whitening",
          "sedation dentistry"
        ]}
        canonical="https://toptemplecitydentist.com/"
        schema={schema}
      />
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <AboutDoctors />
        <Reviews />
        <InsurancePayment />
        <HoursLocation />
        <ContactForm />
      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
};

export default Index;
