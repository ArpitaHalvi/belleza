export default function HeroSection({ onContactClick, onCourseClick }) {
  return (
    <div className="w-full h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Side */}
      <div className="flex p-5 sm:p-10 items-start justify-center flex-col gap-5 h-screen w-full sm:rounded-br-[40%] bg-[#791535]">
        <p className="text-left ml-2 px-3 py-2 border-l-4 border-[#FDDFBF] text-[#FDDFBF] text-medium font-semibold">
          lorem ipsum.
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#FDDFBF] ">
          Lorem ipsum dolor sit amet.
        </h1>
        <p className="text-[#FDDFBF] text-sm leading-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          fugiat nesciunt velit iusto repellat deserunt illum accusamus
          sapiente. Quod cupiditate vero assumenda ipsa unde fuga culpa dolores
          error at accusantium.
        </p>
        <div className="flex gap-4">
          <button
            className="bg-[#FDDFBF] text-[#791535] font-bold py-2 px-4 rounded-full hover:bg-[#FDDFBF]/90 text-sm"
            onClick={onCourseClick}
          >
            Explore Courses
          </button>
          <button
            className="bg-transparent text-[#FDDFBF] font-bold py-2 px-4 rounded-full border border-[#FDDFBF] hover:bg-[#FDDFBF]/10 text-sm"
            onClick={onContactClick}
          >
            Learn More
          </button>
        </div>
      </div>
      {/* Right Side */}
      <div className="w-full h-screen"></div>
    </div>
  );
}
