import Image from "next/image";
import Link from "next/link";
import { Client } from "@/types/client";

const SingleClient = ({ client }: { client: Client }) => {
  const { title, link, logo, logoWhite } = client;
  return (
    <div className="ud-single-logo max-w-35">
      {title === "Streetwise" ? (
        <Link href={link} target="_blank" rel="nofollow noopner">
          <Image
            src={logo}
            alt={title}
            className="dark:hidden block"
            width={140}
            height={40}
          />
          <Image
            src={logoWhite}
            alt={title}
            className="hidden dark:block"
            width={140}
            height={40}
          />
        </Link>
      ) : (
        <div>
          <Image
            src={logo}
            alt={title}
            className="dark:hidden block h-auto w-auto"
            width={140}
            height={40}
          />
          <Image
            src={logoWhite}
            alt={title}
            className="hidden dark:block h-auto w-auto"
            width={140}
            height={40}
          />
        </div>
      )}
    </div>
  );
};

export default SingleClient;
