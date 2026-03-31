import Image from "next/image";
import { GrInstagram } from "react-icons/gr";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  const socials = [
    { name: "Instagram", icon: <GrInstagram size={20} />, link: "" },
    { name: "Facebook", icon: <FaFacebook size={20} />, link: "" },
    { name: "Youtube", icon: <IoLogoYoutube size={20} />, link: "" },
  ];
  const details = [
    {
      name: "Address",
      value: "123 Main St, City, Country",
      icon: <FaLocationDot size={20} className="text-[#826955]" />,
    },
    {
      name: "Phone",
      value: "+1 (123) 456-7890",
      icon: <FaPhoneAlt size={20} className="text-[#826955]" />,
    },
    {
      name: "Email",
      value: "info@belleza.com",
      icon: <SiGmail size={20} className="text-[#826955]" />,
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
      <p className="text-xs text-[#F7F7EE] pb-15 sm:pb-0 pt-10">
        &copy;
        {new Date().getFullYear()}
        <span className="capitalize text-center">Belleza Beauty School</span>
        All Rights Reserved.
      </p>
    </section>
  );
}
