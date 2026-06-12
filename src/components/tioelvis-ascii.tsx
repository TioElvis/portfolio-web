import { PreASCII } from "./pre-ascii";

import { cn } from "@/lib/utils";
import { ASCII_TIOELVIS } from "@/lib/ascii";

type Props = React.PropsWithChildren<React.ComponentProps<"pre">>;

export function TioElvisASCII({ className, ...props }: Props) {
  return (
    <article className="flex">
      {ASCII_TIOELVIS.map((e, index) => {
        return (
          <PreASCII
            key={index}
            className={cn("text-[4px]", className)}
            {...props}>
            {e}
          </PreASCII>
        );
      })}
    </article>
  );
}
