import Heading from "./ui/Heading";

export default function CareerTransformation() {
  const transforms = [
    { name: "transform1" },
    { name: "transform2" },
    { name: "transform3" },
    { name: "transform4" },
    { name: "transform5" },
  ];
  return (
    <section className="w-full xl:h-[80vh] bg-[#791535] flex flex-col items-center justify-center p-10 gap-3">
      <Heading
        title="Career Transformation"
        subtitle="Your Life Change Starts Here"
        titleColor="#FDDFBF"
        subtitleColor="#FDDFBF"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia impedit voluptates maiores harum molestiae ad dolorum natus soluta nisi autem!"
      />
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 py-5">
        {transforms.map((t) => {
          return (
            <div
              key={t.name}
              className="w-full bg-[#826955] flex flex-col items-start gap-1 sm:gap-3 p-3 md:p-5 lg:p-10 rounded-2xl transition-all duartion-600 hover:scale-105"
            >
              <div className="w-10 h-10 mb-2 sm:mb-0 bg-[#FDDFBF] rounded-xl"></div>
              <h6 className="text-[#F7F7EE] font-bold leading-tight">
                Lorem, ipsum.
              </h6>
              <p className="text-[#F7F7EE] leading-tight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, quidem.
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
