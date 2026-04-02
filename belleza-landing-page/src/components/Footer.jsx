import Image from "next/image";

import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import {
  bgColor1,
  bgColor4,
  textColor2,
  textColor3,
  textColor4,
} from "@/utils/colors.utils";
import { socials } from "@/seeds/socials";

export default function Footer() {
  const details = [
    {
      name: "Address",
      value:
        "Plot No. M-10 C.A, Veer Haqiqat Ray Marg, Rudrapur, Uttarakhand - 263153",
      icon: <FaLocationDot size={20} className={`${textColor2}`} />,
    },
    {
      name: "Phone",
      value: "+1 (123) 456-7890",
      icon: <FaPhoneAlt size={20} className={`${textColor2}`} />,
    },
    {
      name: "Email",
      value: "schoolbelleza@gmail.com",
      icon: <SiGmail size={20} className={`${textColor2}`} />,
    },
  ];
  return (
    <section
      className={`w-full ${bgColor1} px-5 py-10 sm:p-10 pb-5 flex flex-col justify-center items-center gap-5`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0">
        <div className="flex flex-col justify-start items-start gap-5">
          <Image
            src="/assets/images/logos/belleza_logo.svg"
            alt="Belleza Logo"
            width={150}
            height={150}
            loading="eager"
            priority
            className="w-32"
          />
          <p className={`text-sm ${textColor4} mt-3`}>
            Belleza Beauty School is a luxury academy empowering aspiring
            artists through practical training, global curriculum, and expert
            mentorship.
          </p>
          <div className="flex justify-start items-center">
            {socials.map((social) => (
              <div
                key={social.name}
                className={`mr-4 p-2 ${bgColor4} rounded-full text-[#791535] text-lg`}
              >
                <a href={social.link} target="_blank" rel="noopener noreferrer">
                  {social.icon}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-start md:justify-center items-center">
          <div className="flex-col justify-center items-start gap-7 md:gap-4 flex">
            {details.map((detail) => (
              <a
                key={detail.name}
                href={`${detail.name.toLowerCase() === "email" ? `mailto:${detail.value}` : detail.value}`}
                target="_blank"
                className="flex flex-col gap-2 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 ${bgColor4} rounded-full ${textColor2}`}>
                    {detail.icon}
                  </div>
                  <h4 className={`text-md font-semibold ${textColor4}`}>
                    {detail.name}
                  </h4>
                </div>
                <p className={`text-sm ${textColor4}`}>{detail.value}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between items-center">
        <p className={`text-md ${textColor4} pt-10 md:pb-10 text-center`}>
          &copy;
          {new Date().getFullYear()}
          <span className="capitalize text-center">
            {" "}
            Belleza Beauty School.{" "}
          </span>
          All Rights Reserved.
        </p>
        <a
          href="https://vipprow.com/"
          className={`text-md ${textColor4} pb-15 sm:pb-0 pt-3`}
        >
          Developed By <span className={`${textColor3}`}>Vipprow</span>
        </a>
      </div>
    </section>
  );
}
