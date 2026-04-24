import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Let's deal values",
  description: "",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        pageDescription="Feel free to reach out to us anytime! Our dedicated team is here to assist you promptly. Your satisfaction is our priority."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
