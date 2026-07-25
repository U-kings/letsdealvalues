"use client";

import { useEffect } from "react";
import "animate.css/animate.compat.css"; 

export default function WowInit({ children }: { children: React.ReactNode }) {
    useEffect(() => {
    // Dynamically load wowjs only in the browser
    
    // @ts-expect-error - wowjs does not have official npm types
    import("wowjs").then((module) => {   
      const WOW = module.WOW;
      new WOW({
        live: false, 
    }).init();
});
}, []);

  return <>{children}</>;
}
