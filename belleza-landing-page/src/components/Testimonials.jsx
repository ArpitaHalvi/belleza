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

export default function Testimonials() {
  const testimonials = [
    { name: "John Doe", feedback: "This course changed my life!", rating: 5 },
    { name: "John Doe", feedback: "This course changed my life!", rating: 5 },
    { name: "John Doe", feedback: "This course changed my life!", rating: 5 },
  ];
  return (
    <section className="w-full">
      <Heading
        title="Testimonials"
        subtitle="What Our Students Say"
        titleColor={color2}
        subtitleColor={color2}
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia impedit voluptates maiores harum molestiae ad dolorum natus soluta nisi autem!"
      />
      <div className="overflow-hidden w-full py-10">
        <div className="flex animate-conveyor gap-6 w-max">
          {[...testimonials, ...testimonials].map((testimonial, i) => (
            <div
              key={i}
              className={`shrink-0 w-80 p-10 bg-white rounded-2xl shadow-md border border-[${color1}] flex flex-col gap-7`}
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
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <IoStarSharp key={j} className="text-yellow-500" />
                  ))}
                </div>
                <p className={`pt-2 text-sm ${textColor2}`}>
                  {testimonial.feedback}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
