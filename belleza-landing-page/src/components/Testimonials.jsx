import {
  bgColor1,
  color1,
  color2,
  textColor1,
  textColor2,
  textColor3,
} from "@/utils/colors.utils";
import Heading from "./ui/Heading";
import { IoStarSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { testimonials } from "@/seeds/testimonials";

export default function Testimonials() {
  return (
    <section className="w-full">
      <Heading
        title="Testimonials"
        subtitle="Stories of Unforgettable Experiences"
        titleColor={color2}
        subtitleColor={color2}
        description="Our Students Consistently Praise."
      />
      <div
        className={`overflow-hidden w-full py-10 ${!(testimonials.length > 5) && "px-10"}`}
      >
        <div
          className={`flex ${testimonials.length > 5 ? "animate-conveyor" : "w-full justify-center items-center"} gap-6 w-max`}
        >
          {[...testimonials, ...testimonials].map((testimonial, i) => (
            <div
              key={i}
              className={`shrink-0 w-80 p-5 md:p-7 bg-white rounded-2xl shadow-md border border-[${color1}] flex flex-col gap-7`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-13 h-13 ${bgColor1} rounded-full flex items-center justify-center`}
                >
                  <FaUser size={20} className={`${textColor3}`} />
                </div>
                <h3
                  className={`text-lg font-bold ${textColor1} uppercase tracking-tighter`}
                >
                  {testimonial.name}
                </h3>
              </div>
              <div>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <IoStarSharp key={j} className="text-yellow-500" />
                  ))}
                </div>
                <p className={`pt-2 text-sm ${textColor2}`}>
                  {testimonial.review}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
