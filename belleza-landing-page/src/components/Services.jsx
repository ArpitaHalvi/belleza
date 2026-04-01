import Heading from "./ui/Heading";

export default function WhyChooseUs() {
  const services = [
    {
      title: "Expert Instructors",
      description: "Learn from industry experts with years of experience.",
    },
    {
      title: "Comprehensive Curriculum",
      description: "Our courses cover all aspects of beauty and wellness.",
    },
    {
      title: "Flexible Learning",
      description: "Access our courses anytime, anywhere, on any device.",
    },
    {
      title: "Community Support",
      description:
        "Join a vibrant community of beauty enthusiasts and professionals.",
    },
  ];
  return (
    <section className="w-full p-10 flex-col justify-center items-center">
      <Heading
        title="The Belleza Advantage"
        subtitle="Why Choose Belleza?"
        titleColor="#826955"
        subtitleColor="#826955"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia impedit voluptates maiores harum molestiae ad dolorum natus soluta nisi autem!"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-10 sm:px-0 lg:px-20 py-5 sm:py-10">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex flex-col gap-1 sm:gap-3 py-5 sm:py-10 px-5 bg-[#FDDFBF] rounded-lg shadow-md relative transition-all duration-500 hover:-translate-y-5"
          >
            <div className="w-10 h-10 rounded-lg border-2 border-[#791535] mb-2"></div>
            <h3 className="font-extrabold text-lg sm:text-2xl text-[#791535]">
              {service.title}
            </h3>
            <p className="text-[#791535] tracking-tight leading-tight">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
