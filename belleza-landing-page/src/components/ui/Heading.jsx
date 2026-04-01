export default function Heading({
  titleColor,
  subtitleColor,
  title,
  subtitle,
  description,
}) {
  return (
    <div className="w-full flex flex-col items-center justify-center px-3">
      <div
        className={`border-l-3 border-[${titleColor}] text-[${titleColor}] font-bold px-3 mx-auto text-sm uppercase tracking-tight`}
      >
        {title}
      </div>
      <div
        className={`w-full flex flex-col justify-center items-center pt-2 text-[${titleColor}] gap-4`}
      >
        <h2
          className={`font-bold text-3xl md:text-5xl capitalize tracking-tight text-[${subtitleColor}] text-center`}
        >
          {subtitle}
        </h2>
        <p
          className={`w-full sm:w-3/4 md:w-1/2 text-center text-sm tracking-tight text-[${subtitleColor}]`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
