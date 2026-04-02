"use client";

import { useEffect, useState } from "react";
import Heading from "./ui/Heading";
import {
  bgColor1,
  color1,
  color2,
  textColor1,
  textColor2,
  textColor3,
  textColor4,
} from "@/utils/colors.utils";
import { courses } from "@/seeds/courses";
import { IoStarSharp } from "react-icons/io5";

export default function Courses({ onContactClick }) {
  const [active, setActive] = useState("offline");
  const [activeSubCategory, setActiveSubCategory] = useState("All");

  const filteredCourses = courses.filter((course) => {
    const typeMatch = course.type === active;
    const categoryMatch =
      activeSubCategory === "All" ||
      course.category === activeSubCategory.toLowerCase();
    return typeMatch && categoryMatch;
  });

  return (
    <section className="w-full">
      <div
        className={`border border-[${color1}] grid grid-cols-2 mx-auto h-10 font-semibold ${textColor2} sm:text-sm text-xs`}
      >
        <button
          className={`${active === "offline" && `${bgColor1} ${textColor3}`} w-full transition-colors duration-300`}
          onClick={() => setActive("offline")}
        >
          Offline Courses
        </button>
        <button
          className={`${active === "online" && `${bgColor1} ${textColor3}`} w-full transition-colors duration-300`}
          onClick={() => setActive("online")}
        >
          Online Courses
        </button>
      </div>
      <CourseCategories
        category={activeSubCategory}
        fn={setActiveSubCategory}
      />
      <div className="my-10"></div>
      <Heading
        title="Explore & Enroll"
        subtitle="Featured Courses"
        titleColor={color2}
        subtitleColor={color2}
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia impedit voluptates maiores harum molestiae ad dolorum natus soluta nisi autem!"
      />
      <div className="px-7 lg:px-10 xl:px-30 py-10 w-full">
        {active === "offline" ? (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-7 lg:gap-10 place-items-start gap-10">
            {filteredCourses.map((course) => {
              return (
                <div
                  key={course.id}
                  className={`bg-white flex flex-col rounded-3xl shadow-lg w-full sm:w-3/4 md:w-full transform transition duration-300 ease-in-out 
              hover:scale-105 hover:shadow-[0_8px_20px_rgba(121,21,53,0.4)]`}
                >
                  <div className={`h-50 ${bgColor1} rounded-t-3xl`}></div>
                  <div className="sm:py-7 bg-pink flex flex-col gap-2 sm:p-7 p-4">
                    <div
                      className={`font-semibold text-sm ${textColor2} flex items-center gap-2`}
                    >
                      <div className="flex items-center gap-1">
                        {[...Array(4)].map((_, j) => (
                          <IoStarSharp key={j} className="text-yellow-500" />
                        ))}
                      </div>
                      <span className={`${textColor2}`}>(4/5)</span>
                    </div>
                    <div className="flex flex-col">
                      <h2
                        className={`font-bold tracking-tighter text-xl ${textColor2} hover:text-[#791535]`}
                      >
                        {course.name}
                      </h2>
                      <p className={`text-sm ${textColor2}`}>{course.desc}</p>
                    </div>
                    <div className="pl-4 py-3">
                      {course.summary.map((sum) => (
                        <div
                          className={`${textColor2}`}
                          key={sum}
                          type="circle"
                        >
                          <li
                            className={`text-sm tracking-tight ${textColor2} font-semibold`}
                          >
                            {sum}
                          </li>
                        </div>
                      ))}
                    </div>
                    {/* <hr className="text-gray-300" /> */}
                    {/* <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="font-semibold text-xs text-gray-500">
                          FEE
                        </span>
                        <span className={`font-bold text-xl ${textColor1}`}>
                          &#8377;{course.price}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-semibold text-xs text-gray-500">
                          DURATION
                        </span>
                        <span className="font-semibold text-md">
                          {course.duration}
                        </span>
                      </div>
                    </div> */}
                    <button
                      className={`${bgColor1} ${textColor4} py-2 px-4 rounded-md hover:bg-[${color1}] transition-colors duration-300`}
                      onClick={onContactClick}
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="w-full p-10 sm:p-20 flex justify-center items-center">
            <h2
              className={`text-2xl sm:text-4xl tracking-tighter font-bold ${textColor1} text-center`}
            >
              Coming Soon!
            </h2>
          </div>
        )}
      </div>
    </section>
  );
}

const CourseCategories = ({ category, fn }) => {
  const courseCategories = [
    "All",
    "Combo",
    "Makeup",
    "Nails",
    "Hair",
    "Beauty",
  ];
  const activeCategory = category ?? "All";
  return (
    <section
      className={`w-full h-10 overflow-x-auto no-scrollbar sm:overflow-hidden sm:h-20 flex justify-center items-center md:gap-10 border-b border-[${color1}]`}
    >
      {courseCategories.map((category) => {
        return (
          <div
            onClick={() => fn(category)}
            key={category}
            className={`${activeCategory === `${category}` && `${bgColor1} ${textColor3}`} ${textColor2} px-5 py-2 rounded-full`}
          >
            <h5 className="font-semibold sm:text-sm text-xs">{category}</h5>
          </div>
        );
      })}
    </section>
  );
};
