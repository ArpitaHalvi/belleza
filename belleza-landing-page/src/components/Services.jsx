import { bgColor3, color2, textColor1 } from "@/utils/colors.utils";
import Heading from "./ui/Heading";
import { services } from "@/seeds/services";

export default function Services() {
  return (
    <section className="w-full p-10 flex-col justify-center items-center">
      <Heading
        title="The Belleza Advantage"
        subtitle="Why Choose Belleza?"
        titleColor={color2}
        subtitleColor={color2}
        description="Belleza Beauty School offers a world-class learning experience with expert trainers, luxury classrooms, and hands-on training. Our globally recognized curriculum and career-focused approach help students master beauty skills and confidently step into the professional industry."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-10 sm:px-0 lg:px-20 py-5 sm:py-10">
        {services.map((service) => (
          <div
            key={service.title}
            className={`flex flex-col items-start gap-1 sm:gap-3 py-5 sm:py-7 px-5 ${bgColor3} rounded-lg shadow-md relative transition-all duration-500 hover:-translate-y-5`}
          >
            <div
              className={`rounded-lg ${bgColor3} mb-2 flex items-center justify-center`}
            >
              {service.icon}
            </div>
            <h3 className={`font-extrabold text-lg sm:text-2xl ${textColor1}`}>
              {service.title}
            </h3>
            <p className={`${textColor1} tracking-tight leading-tight text-sm`}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
