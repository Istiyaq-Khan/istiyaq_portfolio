"use client";

import { useState, useCallback, ReactNode } from "react";
import { LoadingScreen } from "./loading-screen";

export function PageTransitionWrapper({ children }: { children: ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoadComplete = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={handleLoadComplete} />}
      <div
        className={`transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  );
}
