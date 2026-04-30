import SingleClient from "./SingleClient";
import { clientsData } from "./clientsData";

const Clients = () => {
  return (
    <section className="py-20 dark:bg-dark bg-gray-100">
      <div className=" ">
        {/* <h2 className="mb-6 text-center text-3xl font-bold text-dark dark:text-white sm:text-4xl">
          We have worked with over 100+ clients
        </h2> */}
        <p className="mx-auto mb-12 max-w-150 text-center text-base font-medium text-body-color">
           Let&apos;s deal Values collaborates with renowned Original Equipment Manufacturers (OEMs) and leading global IT firms, celebrated for their superior quality and performance-driven products and solutions.
        </p>
      </div>
      <div className="container px-4">
        <div className="-mx-4 flex flex-wrap items-center justify-center gap-8 xl:gap-11">
          {clientsData.map((client, i) => (
            <SingleClient key={i} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
