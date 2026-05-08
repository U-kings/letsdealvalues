import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
// import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Us | Let's deal values - Your Trusted Partner for Exceptional Service",
  description: "Learn more about our company, our mission, and the values that drive us. We are committed to providing exceptional service and building lasting relationships with our customers.",
};

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb pageName="About Us" />
      <About />
      {/* <Team /> */}
    </main>
  );
};

export default AboutPage;
