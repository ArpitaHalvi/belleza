import Image from "next/image";

import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { textColor2, textColor3, textColor4 } from "@/utils/colors.utils";
import { socials } from "@/seeds/socials";

export default function Footer() {
  const details = [
    {
      name: "Address",
      value: "123 Main St, City, Country",
      icon: <FaLocationDot size={20} className={`${textColor2}`} />,
    },
    {
      name: "Phone",
      value: "+1 (123) 456-7890",
      icon: <FaPhoneAlt size={20} className={`${textColor2}`} />,
    },
    {
      name: "Email",
      value: "info@belleza.com",
      icon: <SiGmail size={20} className={`${textColor2}`} />,
    },
  ];
  return (
    <section className="w-full bg-[#791535] p-10 pb-5 flex flex-col justify-center items-center gap-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0">
        <div className="flex flex-col justify-start items-start gap-5">
          <Image
            src="/assets/images/logos/belleza_logo.svg"
            alt="Belleza Logo"
            width={150}
            height={150}
          />
          <p className="text-sm text-[#F7F7EE] mt-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
            officia odio consequuntur reiciendis! Maxime illum perspiciatis
            veritatis unde consequuntur ipsam.
          </p>
          <div className="flex justify-start items-center">
            {socials.map((social) => (
              <div
                key={social.name}
                className="mr-4 p-1 bg-[#F7F7EE] rounded-full text-[#791535] text-lg"
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
                href={detail.link}
                target="_blank"
                className="flex flex-col gap-2 cursor-pointer "
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#F7F7EE] rounded-full text-[#826955]">
                    {detail.icon}
                  </div>
                  <h4 className="text-md font-semibold text-[#F7F7EE]">
                    {detail.name}
                  </h4>
                </div>
                <p className="text-sm text-[#F7F7EE]">{detail.value}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <p className={`text-md ${textColor4} pb-15 sm:pb-0 pt-10`}>
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
          className={`text-md ${textColor4} pb-15 sm:pb-0 pt-10`}
        >
          Developed By <span className={`${textColor3}`}>Vipprow</span>
        </a>
      </div>
    </section>
  );
}
