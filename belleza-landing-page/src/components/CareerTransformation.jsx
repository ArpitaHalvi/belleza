import {
  bgColor1,
  bgColor2,
  bgColor3,
  bgColor4,
  color3,
  textColor2,
  textColor4,
} from "@/utils/colors.utils";
import Heading from "./ui/Heading";
import { academyFeatures } from "@/seeds/career-transformation";

export default function CareerTransformation() {
  return (
    <section
      className={`w-full ${bgColor1} flex flex-col items-center justify-center p-7 sm:p-20 gap-3`}
    >
      <Heading
        title="Empowering Beauty Through Excellence"
        subtitle="Discover the World of Belleza"
        titleColor={color3}
        subtitleColor={color3}
        description="Welcome to Belleza Beauty School, your gateway to world-class beauty education
guided by industry-certified trainers and global techniques."
      />
      <div className="w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-10">
        {academyFeatures.map((t) => {
          return (
            <div
              key={t}
              className={`w-full ${bgColor3} flex flex-col items-center gap-1 sm:gap-3 px-2 md:p-5 py-5 sm:py-8 rounded-2xl transition-all duartion-600 hover:scale-105`}
            >
              <h6
                className={`${textColor2} font-bold leading-tight text-center text-sm sm:text-md`}
              >
                {t}
              </h6>
            </div>
          );
        })}
      </div>
    </section>
  );
}
