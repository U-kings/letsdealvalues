import Image from "next/image";
import Link from "next/link";
import { Certificate } from "@/types/certificate";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "../tailgrids/core/dialog";

const SingleCertificate = ({ certificate }: { certificate: Certificate }) => {
  const { title, logo, logoWhite, certificateImg } = certificate;
  return (
    <Dialog>
      <div className="ud-single-logo mb-5 mr-10 max-w-35">
        {/* <Link href={link} target="_blank" rel="nofollow noopner"> */}
        <DialogTrigger className="px-3 text-base text-black font-medium hover:text-black hover:underline">
          <Image
            src={logo}
            alt={title}
            className="dark:hidden block scale-150 cursor-pointer"
            width={170}
            height={40}
          />
          <Image
            src={logoWhite}
            alt={title}
            className="hidden dark:block scale-150 cursor-pointer"
            width={170}
            height={40}
          />
        </DialogTrigger>
        {/* </Link> */}

        <DialogOverlay isDismissable className="z-999 overflow-auto">
          <DialogContent className="w-12/12 lg:w-8/12 bg-white text-black">
            <DialogHeader>
              <DialogTitle className="mb-2 text-center">{title}</DialogTitle>
              {/* <DialogDescription>
                                  View our terms and conditions for more details on
                                  the use of our services. By accessing or using our
                                  services, you agree to be bound by these terms.
                                  Please read them carefully before using our
                                  platform. If you do not agree to these terms, please
                                  do not use our services.
                                </DialogDescription> */}
            </DialogHeader>
            <div className="flex justify-center">
              {/* <iframe */}
              <Image
                src={certificateImg}
                alt={title}
                width="500"
                height="60"
                className=" overflow-auto"
                title="PDF Viewer"
              />
              {/* /> */}
            </div>
            {/* <DialogFooter>
                                <DialogClose>Cancel</DialogClose>
                              </DialogFooter> */}
          </DialogContent>
        </DialogOverlay>
      </div>
    </Dialog>
  );
};

export default SingleCertificate;
