import Heading from "./ui/Heading";

export default function AdminProcessTimeline() {
  const process = [
    {
      name: "Choose Course",
      desc: "Select the program that fits your career goals.",
    },
    {
      name: "Choose Course",
      desc: "Select the program that fits your career goals.",
    },
    {
      name: "Choose Course",
      desc: "Select the program that fits your career goals.",
    },
    {
      name: "Choose Course",
      desc: "Select the program that fits your career goals.",
    },
    {
      name: "Choose Course",
      desc: "Select the program that fits your career goals.",
    },
  ];
  return (
    <section className="w-full flex flex-col items-center justify-center bg-[#FDDFBF] p-10 my-10">
      <Heading
        title="Easy 5-step Process"
        subtitle="Admission Process Timeline"
        titleColor="#791535"
        subtitleColor="#791535"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia impedit voluptates maiores harum molestiae ad dolorum natus soluta nisi autem!"
      />
      <div className="py-10 md:p-10 flex flex-col md:flex-row justify-center items-center gap-6 md:flex-wrap lg:flex-nowrap lg:gap-5">
        {process.map((p, index) => (
          <div
            key={p.name}
            className="flex flex-row md:flex-col items-center justify-center gap-5 md:gap-0"
          >
            <div className="rounded-full w-13 h-13 bg-[#791535] flex justify-center items-center text-[#F7F7EE] text-lg shadow shadow-black/50 md:mb-2">
              {index + 1}
            </div>
            <div className="flex flex-col items-start md:items-center justify-center">
              <h4 className="font-bold text-xl tracking-tighter text-center">
                {p.name}
              </h4>
              <p className="md:text-center text-sm w-3/4">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
