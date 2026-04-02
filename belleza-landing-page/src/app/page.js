"use client";

import Courses from "@/components/Courses";
import HeroSection from "@/components/HeroSection";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/Services";
import CareerTransformation from "@/components/CareerTransformation";
import StudentWorkGallery from "@/components/StudentWorkGallery";
import Placement from "@/components/Placement";
import Accreditions from "@/components/Accreditions";
import AdminProcessTimeline from "@/components/AdminProcessTimeline";
import ContactForm from "@/components/ContactForm";
import { useRef } from "react";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import BottomNavbar from "@/components/BottomNavbar";

export default function Home() {
  const contactRef = useRef(null);
  const exploreCourses = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToCourses = () => {
    exploreCourses.current?.scrollIntoView({ behavior: "smooth" });
  };
  // bg-[#F7F7EE]
  return (
    <main className="bg-white">
      <HeroSection
        onContactClick={scrollToContact}
        onCourseClick={scrollToCourses}
      />
      <Stats />
      <div ref={exploreCourses}>
        <Courses onContactClick={scrollToContact} />
      </div>
      <WhyChooseUs />
      <CareerTransformation />
      <StudentWorkGallery />
      {/* <Placement /> */}
      {/* <Accreditions /> */}
      <AdminProcessTimeline />
      <Testimonials />
      <div ref={contactRef}>
        <ContactForm />
      </div>
      <BottomNavbar
        onContactClick={scrollToContact}
        onCourseClick={scrollToCourses}
      />
      <Footer />
    </main>
  );
}
