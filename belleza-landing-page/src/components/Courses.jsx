"use client";

import { useState } from "react";
import Heading from "./ui/Heading";

export default function Courses({ onContactClick }) {
  const [active, setActive] = useState("offline");
  const [activeSubCategory, setActiveSubCategory] = useState("All Courses");
  const offlineCourses = [
    {
      id: 1,
      title: "Offline Course 1",
      description: "Description for Offline Course 1",
      price: "99",
      type: "Nail",
      duration: "4 weeks",
    },
    {
      id: 2,
      title: "Offline Course 2",
      description: "Description for Offline Course 2",
      price: "149",
      type: "Hair",
      duration: "6 weeks",
    },
    {
      id: 3,
      title: "Offline Course 3",
      description: "Description for Offline Course 3",
      price: "199",
      type: "Beauty",
      duration: "8 weeks",
    },
  ];
  return (
    <section className="w-full">
      <div className="border border-[#791535] grid grid-cols-2 mx-auto h-10 font-semibold text-[#826955] sm:text-sm text-xs">
        <button
          className={`${active === "offline" && "bg-[#791535] text-[#FDDFBF]"} w-full transition-colors duration-300`}
          onClick={() => setActive("offline")}
        >
          Offline Courses
        </button>
        <button
          className={`${active === "online" && "bg-[#791535] text-[#FDDFBF]"} w-full transition-colors duration-300`}
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
        titleColor="#826955"
        subtitleColor="#826955"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia impedit voluptates maiores harum molestiae ad dolorum natus soluta nisi autem!"
      />
      <div className="px-7 lg:px-10 xl:px-20 py-10 w-full">
        {active === "offline" ? (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-7 lg:gap-10 xl:gap-20 place-items-center gap-10">
            {offlineCourses.map((course) => {
              return (
                <div
                  key={course.id}
                  className="bg-white flex flex-col rounded-lg shadow-lg w-full sm:w-3/4 md:w-full"
                >
                  <div className="h-50 bg-[#791535] rounded-t-lg"></div>
                  <div className="sm:py-10 bg-pink flex flex-col gap-2 sm:p-7 p-4">
                    <div className="font-semibold text-sm text-gray-500">
                      4/5
                    </div>
                    <h2 className="font-bold text-xl">{course.title}</h2>
                    <p className="text-sm">{course.description}</p>
                    <hr className="text-gray-300" />
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="font-semibold text-xs text-gray-500">
                          FEE
                        </span>
                        <span className="font-bold text-xl text-[#791535]">
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
                    </div>
                    <button
                      className="bg-[#826955] text-[#F7F7EE] py-2 px-4 rounded-md hover:bg-[#791535] transition-colors duration-300"
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
          <div className="w-full h-screen p-10">
            <h2>Online Courses</h2>
          </div>
        )}
      </div>
    </section>
  );
}

const CourseCategories = ({ category, fn }) => {
  const courseCategories = ["All", "Combo", "Makeup", "Nail", "Hair", "Beauty"];
  const activeCategory = category ?? "All Courses";
  return (
    <section className="w-full h-10 overflow-x-auto no-scrollbar sm:overflow-hidden sm:h-20 flex justify-center items-center md:gap-10 border-b border-[#791535]">
      {courseCategories.map((category) => {
        return (
          <div
            onClick={() => fn(category)}
            key={category}
            className={`${activeCategory === `${category}` && "bg-[#791535] text-[#FDDFBF]"} text-[#826955] px-5 py-2 rounded-full`}
          >
            <h5 className="font-semibold sm:text-sm text-xs">{category}</h5>
          </div>
        );
      })}
    </section>
  );
};
