"use client";
import { useId } from "react";

import { PreASCII } from "./pre-ascii";

interface Props extends React.ComponentProps<"pre"> {
  ASCII_TEXT: string[];
}

export function RenderTextASCII({ ASCII_TEXT, ...props }: Props) {
  const id = useId();

  return (
    <article className="flex">
      {ASCII_TEXT.map((e, index) => {
        return (
          <PreASCII key={`${id}-${index}`} {...props}>
            {e}
          </PreASCII>
        );
      })}
    </article>
  );
}
