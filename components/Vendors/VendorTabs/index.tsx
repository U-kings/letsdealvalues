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
          {/* Let&apos;s deal Values collaborates with renowned Original Equipment
          Manufacturers (OEMs) and leading global IT firms, celebrated for their
          superior quality and performance-driven products and solutions. */}
          At <span className="font-bold">Let&apos;s Deal Values</span>, we deliver end-to-end IT infrastructure, digital
          solutions, and enterprise protection by partnering with global
          technology leaders. Our independent, multi-vendor approach ensures
          your organization receives best-in-class hardware, intelligent
          operations management, and threat intelligence.
        </p>
        <div className="lg:container py-12 text-black">
          <TabRoot
            defaultValue="Cybersecurity"
            variant="default"
            className="border-none"
          >
            <TabList>
              {/* {["Cybersecurity", "Valo"].map((tab) => ( */}
              {["Cybersecurity", "IT Infrastructure", "Valo"].map((tab) => (
                <TabTrigger
                  key={tab}
                  value={tab}
                  className={cn(
                    "py-2 px-5 text-sm cursor-pointer font-medium transition-all text-gray-600 border-none rounded-sm data-[active=true]:bg-gray-100 data-[active=true]:shadow-none data-[active=true]:text-gray-800 hover:text-gray-500",
                  )}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </TabTrigger>
              ))}
            </TabList>
            <TabContent value="Cybersecurity">
              <Clients clientType="Cybersecurity" />
            </TabContent>
            <TabContent value="IT Infrastructure">
              <Clients clientType="IT Infrastructure" />
            </TabContent>
            <TabContent value="Valo">
              <Clients clientType="Valo" />
            </TabContent>
          </TabRoot>
        </div>
      </section>
    </>
  );
};

export default VendorTabs;
