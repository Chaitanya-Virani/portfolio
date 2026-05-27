import React, { useState, useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";

export const InteractiveCanvas3D: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const hideWatermark = () => {
      // 1. Target standard DOM elements on the entire page linking to spline.design
      const anchors = document.querySelectorAll("a");
      anchors.forEach((a) => {
        if (a.href && a.href.includes("spline.design")) {
          a.style.setProperty("display", "none", "important");
          a.style.setProperty("opacity", "0", "important");
          a.style.setProperty("visibility", "hidden", "important");
          a.style.setProperty("pointer-events", "none", "important");
        }
      });

      // 2. Target logo divs, spline-watermark elements
      const elements = document.querySelectorAll("#logo, #spline-logo, .spline-watermark");
      elements.forEach((el) => {
        (el as HTMLElement).style.setProperty("display", "none", "important");
        (el as HTMLElement).style.setProperty("opacity", "0", "important");
        (el as HTMLElement).style.setProperty("visibility", "hidden", "important");
      });

      // 3. Query all elements on the page that might contain a shadow root
      const allElements = document.querySelectorAll("*");
      allElements.forEach((el) => {
        if (el.shadowRoot) {
          const shadowLogo = el.shadowRoot.querySelector("#logo") || 
                             el.shadowRoot.querySelector("a[href*='spline.design']") ||
                             el.shadowRoot.querySelector(".spline-watermark");
          if (shadowLogo) {
            (shadowLogo as HTMLElement).style.setProperty("display", "none", "important");
            (shadowLogo as HTMLElement).style.setProperty("opacity", "0", "important");
            (shadowLogo as HTMLElement).style.setProperty("visibility", "hidden", "important");
            (shadowLogo as HTMLElement).style.setProperty("pointer-events", "none", "important");
          }
        }
      });
    };

    // Run interval to continuously catch the watermark as the Spline runtime loads elements
    const interval = setInterval(hideWatermark, 50);
    
    // Run once immediately
    hideWatermark();

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center overflow-hidden"
    >
      {/* Premium Loader */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-10 transition-all duration-500">
          <div className="relative w-8 h-8">
            <span className="absolute inset-0 rounded-full border-2 border-[#7c6fff]/20" />
            <span className="absolute inset-0 rounded-full border-2 border-t-[#7c6fff] border-r-transparent border-b-transparent border-l-transparent animate-spin" />
          </div>
        </div>
      )}
      {/* Spline scene stretched taller than parent; parent clips bottom strip containing watermark */}
      <div className={`w-full h-[160%] absolute -top-[15%] left-0 transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <Spline
          scene="https://prod.spline.design/rL1B7zSpAz7Sjt95/scene.splinecode"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
};
