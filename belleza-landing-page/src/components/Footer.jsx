export default function Footer() {
  return (
    <section className="w-full bg-[#791535] text-white h-10 flex justify-center items-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} All Rights Reserved.
      </p>
    </section>
  );
}
