import React from "react";
import {
  TabContent,
  TabList,
  TabRoot,
  TabTrigger,
} from "@/components/tailgrids/core/tabs";
import { cn } from "@/utils/cn";
import Clients from "@/components/Clients";

type Props = object;

const VendorTabs = (props: Props) => {
  return (
    <>
      <section className="bg-white">
          <p className="mx-auto pt-12 max-w-175 text-center text-base font-medium text-body-color">
          Let&apos;s deal Values collaborates with renowned Original Equipment
          Manufacturers (OEMs) and leading global IT firms, celebrated for their
          superior quality and performance-driven products and solutions.
        </p>
        <div className="container py-12 text-black">
          <TabRoot defaultValue="Cybersecurity" variant="default" className="border-none">
            <TabList>
              {["Cybersecurity", "Fashion"].map((tab) => (
              // {["Cybersecurity", "Infrastructure", "Fashion"].map((tab) => (
                <TabTrigger
                  key={tab}
                  value={tab}
                  className={cn(
                    "py-2 px-5 text-sm font-medium transition-all text-gray-600 border-none rounded-sm data-[active=true]:bg-gray-100 data-[active=true]:shadow-none data-[active=true]:text-gray-800 hover:text-gray-500",
                  )}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </TabTrigger>
              ))}
            </TabList>
            <TabContent value="Cybersecurity">
              <Clients clientType="Cybersecurity" />
            </TabContent>
            {/* <TabContent value="Infrastructure">
              <Clients clientType="Infrastructure" />
            </TabContent> */}
            <TabContent value="Fashion">
              <Clients clientType="Fashion" />
            </TabContent>
          </TabRoot>
        </div>
      </section>
    </>
  );
};

export default VendorTabs;
