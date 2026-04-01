"use client";
import { useState } from "react";
import Heading from "./ui/Heading";

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

      if (response.ok) {
        const data = await response.json();
        console.table(data);
        alert("Message sent successfully!");
        setFormData(initialData);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (e) {
      console.error("Error while sending message: ", e);
    }
  };

  // Places - Haldwani, Dehradun, Rudrapur, Bajpur

  return (
    <section className="w-full flex flex-col items-center justify-center p-5 sm:p-10">
      <Heading
        title="Get in Touch"
        subtitle="Contact Us"
        titleColor="#826955"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, sit!"
      />
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 py-10 sm:p-10">
        <div className="w-full flex flex-col items-start gap-3 bg-white rounded-2xl shadow-lg p-5 sm:p-7">
          <h3 className="text-2xl font-bold tracking-tighter text-[#791535]">
            Contact Us
          </h3>
          <p className="text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae,
            veritatis?
          </p>
          <div className="flex flex-col sm:flex-row item-start sm:items-center gap-3 sm:gap-8">
            {details.map((detail) => {
              return (
                <div key={detail.name}>
                  <h6 className="uppercase text-sm text-[#826955]">
                    {detail.name}
                  </h6>
                  <p className="text-sm font-semibold">{detail.value}</p>
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
                    <select
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required
                      className="peer px-3 py-2 text-sm border rounded-lg border-gray-300 w-full focus:outline-none focus:border-[#791535] bg-white appearance-none"
                    >
                      <option value="" disabled hidden></option>
                      <option value="haldwani">Haldwani</option>
                      <option value="dehradun">Dehradun</option>
                      <option value="bajpur">Bajpur</option>
                      <option value="rudrapur">Rudrapur</option>
                    </select>
                  ) : field.type === "textarea" ? (
                    <textarea
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder=" "
                      rows={6}
                      required
                      className="peer px-3 py-2 text-sm border rounded-lg border-gray-300 w-full focus:outline-none focus:border-[#791535]"
                    />
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required
                      placeholder=" "
                      className="peer px-3 py-2 text-sm border rounded-lg border-gray-300 w-full focus:outline-none focus:border-[#791535]"
                    />
                  )}

                  {/* Unified Label for all types */}
                  <label
                    htmlFor={field.name}
                    className="absolute left-3 top-2 text-gray-500 text-sm transition-all pointer-events-none
      peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400
      peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#791535] 
      peer-valid:-top-3 peer-valid:text-xs bg-white px-1"
                  >
                    {field.label}
                  </label>
                </div>
              ))}
              <button
                type="submit"
                className="bg-[#791535] text-[#F7F7EE] hover:bg-[#5a102a] py-2 px-4 rounded-lg text-sm"
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
