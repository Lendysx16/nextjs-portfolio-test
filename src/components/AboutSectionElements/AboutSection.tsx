import Image from "next/image";
import AboutSectionInfo from "./AboutSectionInfo";
export const AboutSection = () => {
  return (
    <section className="min-h-88 relative items-center text-white" id="about">
      <div className="flex h-full flex-col items-center justify-around gap-10 sm:py-16 md:flex-row md:items-start xl:gap-16 xl:px-16 ">
        <div className="mx-auto mb-12 h-full  max-w-[500px] overflow-clip rounded-3xl shadow-[0px_0px_100px_-30px_rgba(0,0,0,0.3)] shadow-violet-400 md:m-0 md:aspect-square">
          <Image
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height={600}
            width={600}
            quality={80}
            priority={true}
            loading="eager"
            alt="computer"
            className="h-full w-full object-cover "
          ></Image>
        </div>
        <AboutSectionInfo />
      </div>
    </section>
  );
};

export default AboutSection;
