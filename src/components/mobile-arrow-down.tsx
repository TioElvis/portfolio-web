"use client";
import { Fragment } from "react/jsx-runtime";

import { ASCII_ARROW_DOWN } from "@/lib/ascii";

import { useIsMobile } from "@/hooks/use-mobile";

import { RenderTextASCII } from "./render-text-ascii";

export function MobileArrowDown() {
  const isMobile = useIsMobile();

  return (
    <Fragment>
      {isMobile && (
        <div className="w-full h-48 flex items-center justify-center">
          <RenderTextASCII
            ASCII_TEXT={ASCII_ARROW_DOWN}
            className="text-[6px]"
          />
        </div>
      )}
    </Fragment>
  );
}
