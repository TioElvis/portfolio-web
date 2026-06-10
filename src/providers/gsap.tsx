"use client";
import { gsap } from "gsap";
import { Fragment } from "react/jsx-runtime";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  children: React.ReactNode;
}

export function GSAPProvider({ children }: Props) {
  return <Fragment>{children}</Fragment>;
}
