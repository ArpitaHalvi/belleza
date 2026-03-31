"use client";
import { FaBookOpenReader } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

export default function BottomNavbar({ onContactClick, onCourseClick }) {
  const links = [
    { name: "Courses", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Whatsapp", href: "#" },
  ];
  const handleWhatsAppClick = () => {
    const phoneNumber = process.env.WHATSAPP_NUMBER;
    const message = "Hello! I would like to know more about Belleza Courses.";
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank",
    );
  };
  return (
    <section className="w-full sm:hidden fixed bottom-0 left-0 right-0 bg-[#FDDFBF] z-50 h-13 flex items-center justify-around">
      <div className="flex gap-8" onClick={onCourseClick}>
        <div key={links[0].name} className="flex flex-col items-center">
          <FaBookOpenReader className="text-[#826955] text-lg" size={20} />
          <p className="text-[10px] font-bold uppercase tracking-tighter text-[#826955]">
            {links[0].name}
          </p>
        </div>
      </div>

      <div
        className="relative flex flex-col items-center mb-6 cursor-pointer"
        onClick={onContactClick}
      >
        <div className="w-14 h-14 rounded-full bg-[#791535] text-[#F7F7EE] flex items-center justify-center shadow-lg ring-4 ring-[#FDDFBF] active:scale-95 transition-transform">
          <CiMail size={25} className="text-[#F7F7EE]" />
        </div>
        {/* <p className="absolute -bottom-5 text-[10px] font-bold uppercase text-[#826955]">
            {links[1].name}
          </p> */}
      </div>

      <div className="flex gap-8" onClick={handleWhatsAppClick}>
        <div key={links[2].name} className="flex flex-col items-center">
          <FaWhatsapp className="text-[#826955]" size={20} />
          <p className="text-[10px] font-bold uppercase tracking-tighter text-[#826955]">
            {links[2].name}
          </p>
        </div>
      </div>
    </section>
  );
}
