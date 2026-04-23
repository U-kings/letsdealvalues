import React from "react";
import Image from "next/image";

type Props = object;

const Hero = (props: Props) => {
  return (
    <>
      <section className="relative overflow-hidden bg-white md:pt-32.5 lg:pt-32">
        <div className="absolute md:mt-32.5 lg:mt-32 bg-linear-to-b from-black/90 to-transparent top-0 bottom-0 left-0 right-0 z-10">
          <div className="text-white h-40">
            <h1></h1>
          </div>
        </div>
        <div className="overflow-hidden h-[60rem]">
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
