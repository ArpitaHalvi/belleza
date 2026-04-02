import { textColor1, textColor2 } from "@/utils/colors.utils";
import {
  FaCrown,
  FaChalkboardTeacher,
  FaHandsHelping,
  FaGlobe,
  FaChartLine,
} from "react-icons/fa";
import { MdSchool } from "react-icons/md";

export const services = [
  {
    title: "Luxury Learning Environment",
    description:
      "Experience a premium, fully equipped academy designed to simulate real salon and studio settings for immersive professional training.",
    icon: <FaCrown className={`${textColor2}`} size={30} />,
  },
  {
    title: "Certified & Experienced Trainers",
    description:
      "Learn directly from certified beauty experts and industry professionals dedicated to shaping confident, career-ready artists.",
    icon: <FaChalkboardTeacher className={`${textColor2}`} size={30} />,
  },
  {
    title: "100% Practical & Hands-On Training",
    description:
      "Each course blends theory with live demonstrations, model practice, and personalized mentoring to ensure real skill development.",
    icon: <FaHandsHelping className={`${textColor2}`} size={30} />,
  },
  {
    title: "Global Standard Curriculum",
    description:
      "Our international-level syllabus keeps you ahead with modern beauty techniques, tools, and latest industry practices.",
    icon: <FaGlobe className={`${textColor2}`} size={30} />,
  },
  {
    title: "Career, Support & Growth Opportunities",
    description:
      "Receive career guidance, portfolio support, and internship opportunities to start your journey as a professional beauty artist.",
    icon: <FaChartLine className={`${textColor2}`} size={30} />,
  },
];
