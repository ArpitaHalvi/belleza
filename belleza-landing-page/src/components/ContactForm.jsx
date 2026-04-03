"use client";
import { useState } from "react";
import Heading from "./ui/Heading";
import {
  textColor1,
  textColor2,
  color1,
  textColor4,
  bgColor1,
} from "@/utils/colors.utils";
import toast from "react-hot-toast";

const details = [
  { name: "Address", value: "123 Main St, City, Country" },
  { name: "Email", value: "belleza@gmail.com" },
  { name: "Phone", value: "+91 2343433434" },
];

const initialData = {
  name: "",
  email: "",
  phoneNumber: "",
  location: "",
  message: "",
};

const fields = [
  { name: "name", label: "Name", type: "text", placeholder: "Your Name" },
  { name: "email", label: "Email", type: "email", placeholder: "Your Email" },
  {
    name: "phoneNumber",
    label: "Phone Number",
    type: "text",
    placeholder: "Your Phone Number",
  },
  {
    name: "location",
    label: "Location",
    type: "select",
    placeholder: "Select Location",
  },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Your Message",
  },
];

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000";

export default function ContactForm() {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    // console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("response: ", response);
      console.log("data: ", data);

      if (response.status === 201) {
        toast.success("Message sent successfully!");
        setFormData(initialData);
      } else if (response.status === 422) {
        toast.error(data.message || "Validation Failed.");
      } else {
        toast.error(
          data.message || "Failed to send message. Please try again.",
        );
      }
    } catch (e) {
      console.error("Error while sending message: ", e);
      toast.error("Network error. Please try again.");
    }
  };

  return (
    <section className="w-full flex flex-col items-center justify-center p-5 sm:p-10">
      <Heading
        title="Get in Touch"
        subtitle="Contact Us"
        titleColor="#826955"
        description="Connecting with Belleza is your first step toward a successful beauty career."
      />
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 py-10 sm:p-10">
        <div className="w-full flex flex-col items-start gap-3 bg-white rounded-2xl shadow-lg p-5 sm:p-7">
          <h3 className={`text-2xl font-bold tracking-tighter ${textColor1}`}>
            Contact Us
          </h3>
          <p className={`text-sm ${textColor2} font-semibold`}>
            We believe every future artist deserves clarity before they begin.
          </p>
          <div className="py-2 flex flex-wrap gap-3 md:gap-10 xl:gap-20">
            {details.map((detail) => {
              return (
                <div key={detail.name}>
                  <h6 className={`uppercase text-sm ${textColor1} font-bold`}>
                    {detail.name}
                  </h6>
                  <p className={`text-sm font-semibold ${textColor2}`}>
                    {detail.value}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="w-full py-6 sm:py-10">
            <form
              onSubmit={handleSubmit}
              className="w-full flex items-start flex-col gap-5"
            >
              {fields.map((field) => (
                <div key={field.name} className="relative w-full">
                  {field.type === "select" ? (
                    <div className="relative">
                      <select
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        required
                        className="peer px-3 py-2 text-sm border rounded-lg border-gray-300 w-full focus:outline-none focus:border-[#791535] bg-white appearance-none text-[#791535]"
                      >
                        <option value="" disabled hidden></option>
                        <option value="haldwani">Haldwani</option>
                        <option value="dehradun">Dehradun</option>
                        <option value="bajpur">Bajpur</option>
                        <option value="rudrapur">Rudrapur</option>
                      </select>
                      <div
                        className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ${textColor1}`}
                      >
                        <svg
                          className="fill-current h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  ) : field.type === "textarea" ? (
                    <textarea
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder=" "
                      rows={6}
                      className={`peer px-3 py-2 text-sm border rounded-lg border-gray-300 w-full focus:outline-none focus:border-[${color1}]`}
                    />
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required
                      placeholder=" "
                      className={`peer px-3 py-2 text-sm border rounded-lg border-gray-300 w-full focus:outline-none focus:border-[${color1}]`}
                    />
                  )}

                  {field.type === "select" && (
                    <p className={`text-sm p-1 ${textColor1}`}>
                      <span className="text-[]">&#42; </span> Please Select your
                      nearest location.
                    </p>
                  )}
                  {/* <label
                    htmlFor={field.name}
                    className={`absolute left-3 top-2 text-gray-500 text-sm transition-all pointer-events-none
      peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400
      peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[${color1}] 
      peer-valid:-top-3 peer-valid:text-xs bg-white px-1`}
                  >
                    {field.label}
                  </label> */}
                  <label
                    htmlFor={field.name}
                    className={`absolute left-3 transition-all pointer-events-none bg-white px-1
  ${
    field.type === "select"
      ? formData[field.name]
        ? "-top-3 text-xs text-[#791535]"
        : "top-2 text-sm text-gray-400"
      : `top-2 text-gray-500 text-sm
         peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400
         peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#791535]
         peer-valid:-top-3 peer-valid:text-xs`
  }`}
                  >
                    {field.label}
                  </label>
                </div>
              ))}
              <button
                type="submit"
                className={`${bgColor1} ${textColor4} hover:bg-[#5a102a] py-2 px-4 rounded-lg text-sm`}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className=""></div>
    </section>
  );
}

{
  /* <div className="w-full relative">
                <input
                  type="name"
                  name="name"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer px-3 py-2 text-sm border rounded-lg border-gray-300 w-full focus:outline-none focus:border-[#791535]"
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 top-2 text-gray-500 text-sm transition-all 
               peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 
               peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#791535] bg-white px-1"
                >
                  Email
                </label>
              </div>
              <div className="w-full flex flex-col justify-center items-start gap-2">
                <label className="font-semibold tracking-tight">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="px-3 py-2 text-sm border rounded-lg border-gray-300 w-full focus:outline-none"
                />
              </div>
              <div className="w-full flex flex-col justify-center items-start gap-2">
                <label
                  htmlFor="phoneNumber"
                  className="font-semibold tracking-tight"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Your Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="px-3 py-2 text-sm border rounded-lg border-gray-300 w-full focus:outline-none"
                />
              </div>
              <div className="w-full flex flex-col justify-center items-start gap-2">
                <label
                  htmlFor="location"
                  className="font-semibold tracking-tight"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Enter Location"
                  value={formData.location}
                  onChange={handleChange}
                  className="px-3 py-2 text-sm border rounded-lg border-gray-300 w-full focus:outline-none"
                />
              </div>
              <div className="w-full flex flex-col justify-center items-start gap-2">
                <label
                  htmlFor="message"
                  className="font-semibold tracking-tight"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="px-3 py-2 text-sm border rounded-lg border-gray-300 w-full focus:outline-none"
                  rows={6}
                />
              </div> */
}
{
  /* {fields.map((field) => (
                <div key={field.name} className="relative w-full">
                  {field.type === "textarea" ? (
                    <textarea
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder=" "
                      rows={6}
                      className="peer px-3 py-2 text-sm border rounded-lg border-gray-300 w-full focus:outline-none focus:border-[#791535]"
                    />
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder=" "
                      className="peer px-3 py-2 text-sm border rounded-lg border-gray-300 w-full focus:outline-none focus:border-[#791535]"
                    />
                  )}
                  <label
                    htmlFor={field.name}
                    className="absolute left-3 top-2 text-gray-500 text-sm transition-all
                   peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400
                   peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#791535] bg-white px-1"
                  >
                    {field.label}
                  </label>
                </div>
              ))} */
}
