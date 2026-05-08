import Clients from "@/components/Clients";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Vendors | Let's deal values",
  description: "Discover the amazing vendors who partner with us to bring you the best deals and products.",
};

const VendorsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Vendors | Let's deal values"
        pageDescription="Discover the amazing vendors who partner with us to bring you the best deals and products."
      />

      <Clients />
    </>
  );
};

export default VendorsPage;
