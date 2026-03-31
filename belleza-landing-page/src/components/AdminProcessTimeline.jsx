import Heading from "./ui/Heading";

export default function AdminProcessTimeline() {
  const process = [
    {
      name: "Choose Course",
      desc: "Select the program that fits your career goals.",
    },
    { name: "Add to Cart", desc: "Review course details & kit benefits." },
    { name: "Secure Payment", desc: "Safe & instant online transaction." },
    { name: "Welcome Call", desc: "Get personal counseling and guidance." },
    { name: "Batch Allocation", desc: "Get your schedule & start training!" },
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center bg-[#FDDFBF] p-10 my-10">
      <Heading
        title="Easy 5-step Process"
        subtitle="Admission Process Timeline"
        titleColor="#791535"
        subtitleColor="#791535"
        description="Start your professional journey with absolute clarity."
      />

      <div className="relative w-full max-w-6xl mt-10">
        <div
          className="absolute 
          left-6.5 top-0 bottom-0 w-0.5 bg-[#F7F7EE] 
           md:left-0 md:top-7 md:w-full md:h-px 
         z-0"
        />

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-4">
          {process.map((p, index) => (
            <div
              key={index}
              className="flex flex-row md:flex-col items-start md:items-center flex-1"
            >
              <div className="shrink-0">
                <div className="rounded-full w-14 h-14 bg-[#791535] flex justify-center items-center text-[#F7F7EE] text-lg font-bold shadow-lg  ring-white">
                  {index + 1}
                </div>
              </div>

              <div className="ml-6 md:ml-0 md:mt-6 flex flex-col items-start md:items-center text-left md:text-center">
                <h4 className="font-bold text-lg leading-tight">{p.name}</h4>
                <p className=" text-sm mt-2 max-w-50">{p.desc}</p>
              </div>
            </div>
          ))}
          {/* {process.map((p, index) => (
            <div
              key={index}
              className="flex flex-row md:flex-col items-start md:items-center flex-1"
            >
              <div className="flex-shrink-0">
                <div className="rounded-full w-14 h-14 bg-[#FF1493] flex justify-center items-center text-white text-xl font-bold shadow-lg shadow-pink-200 ring-8 ring-white">
                  {index + 1}
                </div>
              </div>

              <div className="ml-6 md:ml-0 md:mt-6 flex flex-col items-start md:items-center text-left md:text-center">
                <h4 className="font-bold text-lg text-slate-800 leading-tight">
                  {p.name}
                </h4>
                <p className="text-slate-500 text-sm mt-2 max-w-[200px]">
                  {p.desc}
                </p>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
}

// import Heading from "./ui/Heading";

// export default function AdminProcessTimeline() {
//   const process = [
//     {
//       name: "Choose Course",
//       desc: "Select the program that fits your career goals.",
//     },
//     {
//       name: "Choose Course",
//       desc: "Select the program that fits your career goals.",
//     },
//     {
//       name: "Choose Course",
//       desc: "Select the program that fits your career goals.",
//     },
//     {
//       name: "Choose Course",
//       desc: "Select the program that fits your career goals.",
//     },
//     {
//       name: "Choose Course",
//       desc: "Select the program that fits your career goals.",
//     },
//   ];
//   return (
//     <section className="w-full flex flex-col items-center justify-center bg-[#FDDFBF] p-10 my-10">
//       <Heading
//         title="Easy 5-step Process"
//         subtitle="Admission Process Timeline"
//         titleColor="#791535"
//         subtitleColor="#791535"
//         description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia impedit voluptates maiores harum molestiae ad dolorum natus soluta nisi autem!"
//       />
//       <div className="py-10 md:p-10 flex flex-col md:flex-row justify-center items-center gap-6 md:flex-wrap lg:flex-nowrap lg:gap-5">
//         {process.map((p, index) => (
//           <div
//             key={p.name}
//             className="flex flex-row md:flex-col items-center justify-center gap-5 md:gap-0"
//           >
//             <div className="rounded-full w-13 h-13 bg-[#791535] flex justify-center items-center text-[#F7F7EE] text-lg shadow shadow-black/50 md:mb-2">
//               {index + 1}
//             </div>
//             <div className="flex flex-col items-start md:items-center justify-center">
//               <h4 className="font-bold text-xl tracking-tighter text-center">
//                 {p.name}
//               </h4>
//               <p className="md:text-center text-sm w-3/4">{p.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
