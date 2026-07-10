import { motion } from "framer-motion";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTopButton from "./components/ScrollToTopButton";
import AboutSection from "./sections/AboutSection";
import AppointmentSection from "./sections/AppointmentSection";
import ContactSection from "./sections/ContactSection";
import FAQSection from "./sections/FAQSection";
import HeroSection from "./sections/HeroSection";
import HoursSection from "./sections/HoursSection";
import ServicesSection from "./sections/ServicesSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import WhyChooseUsSection from "./sections/WhyChooseUsSection";

export default function App() {
  return (
    <div className="bg-white text-slate-900 antialiased">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <AppointmentSection />
        <HoursSection />
        <FAQSection />
        <ContactSection />
      </motion.main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
