import Heading from "./ui/Heading";
import { IoStarSharp } from "react-icons/io5";

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
        titleColor="#826955"
        subtitleColor="#826955"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia impedit voluptates maiores harum molestiae ad dolorum natus soluta nisi autem!"
      />
      <div className="overflow-hidden w-full py-10">
        <div className="flex animate-conveyor gap-6 w-max">
          {[...testimonials, ...testimonials].map((testimonial, i) => (
            <div
              key={i}
              className="shrink-0 w-80 p-10 bg-white rounded-2xl shadow-md border border-[#791535] flex flex-col gap-7"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#791535] rounded-xl"></div>
                <h3 className="text-lg font-bold text-gray-800">
                  {testimonial.name}
                </h3>
              </div>
              <div>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <IoStarSharp key={j} className="text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-600 pt-2">{testimonial.feedback}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
