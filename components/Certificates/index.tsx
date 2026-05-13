"use client";

import { Dispatch, SetStateAction } from "react";
import { certificatesData } from "./certificatesData";
import SingleCertificate from "./SingleCertificate";

const Certificates = ({
  setDialog,
  dialog
}: {
  dialog: number;
  setDialog: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <section className="py-5 dark:bg-gray-800 bg-white flex items-center justify-center flex-col">
      <div className="">
        {/* <h2 className="mb-6 text-center text-3xl font-bold text-dark dark:text-white sm:text-4xl">
            Our Certificates and Recognitions
        </h2> */}
        {/* <p className="mx-auto mb-12 max-w-full text-center text-md font-medium text-gray-500 dark:text-white">
            We are proud to have received the following certificates and recognitions for our commitment to excellence and quality in our services.
        </p> */}
      </div>
      <div className="container px-4">
        <div className="-mx-4 flex flex-wrap items-center justify-left gap-0 xl:gap-0">
          {certificatesData.map((certificate, i) => (
            <SingleCertificate
              key={i}
              certificate={certificate}
              dialog={dialog}
              setDialog={setDialog}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
