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

const Index = () => {
  return (
    <div className="pb-14 md:pb-0">
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
