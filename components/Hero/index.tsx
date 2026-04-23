import React from "react";
import Image from "next/image";

type Props = object;

const Hero = (props: Props) => {
  return (
    <>
      <section className="relative overflow-hidden bg-white md:pt-32.5 lg:pt-32">
        <div className="absolute md:mt-32.5 lg:mt-32 bg-linear-to-b from-black/90 to-black/70 top-0 bottom-0 left-0 right-0 z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white h-40 text-center flex flex-col items-center">
            <h1 className="text-6xl font-bold">Let&apos;s Deal Values</h1>
            <p className="text-md font-light mt-4 w-4/6">Combines web development, cloud computing, IT services, and professional training to provide comprehensive digital solutions for businesses.</p>
          </div>
        </div>
        <div className="overflow-hidden h-170">
          <Image
            src="/images/hero-img.jpg"
            width={1080}
            height={70}
            className="w-full mt-[-65%] bg-cover"
            alt="hero-img"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
