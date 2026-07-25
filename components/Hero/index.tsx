import Image from "next/image";

type Props = object;

const Hero = (props: Props) => {
  return (
    <>
      <section className="relative overflow-hidden bg-white md:pt-32 lg:pt-32">
        <div className="absolute md:mt-32.5 lg:mt-32 bg-linear-to-b from-blue-900/90 to-black/70 top-0 bottom-0 left-0 right-0 z-10">
          <div className="absolute mt-10 md:mt-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white w-full flex flex-col">
            <div className="text-center md:text-left container wow fadeInDown" data-wow-delay=".15s">
              <h1 className="text-4xl lg:text-6xl font-bold">Let&apos;s Deal Values</h1>
              <p className="text-lg leading-tight md:text-xl font-semibold mt-6">
                IT Infrastructure & Enterprise Cybersecurity Solutions
              </p>
              <p className="text-sm md:text-base font-light mt-4 lg:w-3/6">
                We combine cybersecurity, IT infrastructure consulting, digital
                development, and professional training to protect and scale
                modern businesses.
              </p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden lg:h-170" data-wow-delay=".15s">
          <Image
            src="/images/hero-img.jpg"
            width={1080}
            height={50}
            className="w-full mt-0 lg:mt-[-55%] wow animate__fadeIn"
            alt="hero-img"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
