import { cn } from "@/lib/utils";

import { RenderTextASCII } from "./render-text-ascii";

interface Props {
  id: string;
  title: string;
  ascii: string[][];
  className?: string;
}

// Readable heading on phones; the ASCII art only where it is big enough to read
export function SectionHeading({ id, title, ascii, className }: Props) {
  return (
    <div className={cn("flex justify-center", className)}>
      <h2 id={id} className="text-2xl md:sr-only">
        <span className="text-primary">&gt;</span> {title}
      </h2>
      <div
        aria-hidden
        className="hidden md:flex items-center justify-center gap-4 text-[6px] lg:text-[8px]">
        {ascii.map((text, index) => (
          <RenderTextASCII key={index} ASCII_TEXT={text} />
        ))}
      </div>
    </div>
  );
}
