import Image from "next/image";
import Heading from "./ui/Heading";
import { color2 } from "@/utils/colors.utils";

export default function StudentWorkGallery() {
  const photos = [
    "/assets/images/free-image.jpeg",
    "/assets/images/free-image.jpeg",
    "/assets/images/free-image.jpeg",
    "/assets/images/free-image.jpeg",
  ];
  return (
    <section className="w-full my-10 p-5 sm:p-10 flex flex-col items-center justify-center">
      <Heading
        title="Student Portfolio"
        subtitle="Student work gallery"
        titleColor={color2}
        subtitleColor={color2}
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia impedit voluptates maiores harum molestiae ad dolorum natus soluta nisi autem!"
      />
      <div className="w-full grid grid-cols-2 md:grid-cols-3 align-middle gap-2 sm:gap-5 py-10">
        {photos.map((photo, index) => (
          <div key={index}>
            <Image
              src={photo}
              width={100}
              height={100}
              loading="lazy"
              className="w-full object-contain rounded-2xl shadow-md"
              alt={`Gallery Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
