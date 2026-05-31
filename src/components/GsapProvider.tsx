"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { 
  CustomEase, 
  RoughEase, 
  ExpoScaleEase, 
  SlowMo,
  Draggable,
  EaselPlugin,
  Flip,
  MotionPathPlugin,
  Observer,
  PixiPlugin,
  ScrollToPlugin,
  ScrollTrigger,
  TextPlugin
} from "gsap/all";

if (typeof window !== "undefined") {
  gsap.registerPlugin(
    useGSAP,
    CustomEase, 
    RoughEase, 
    ExpoScaleEase, 
    SlowMo,
    Draggable,
    EaselPlugin,
    Flip,
    MotionPathPlugin,
    Observer,
    PixiPlugin,
    ScrollToPlugin,
    ScrollTrigger,
    TextPlugin
  );
}

export function GsapProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Setup global configurations if needed
  }, []);

  return <>{children}</>;
}
