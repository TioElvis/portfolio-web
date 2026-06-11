import { PreASCII } from "./pre-ascii";

import { ASCII_TIOELVIS, cn } from "@/lib/utils";

type Props = React.PropsWithChildren<React.ComponentProps<"pre">>;

export function TioElvisASCII({ className, ...props }: Props) {
  return (
    <article className="flex">
      {ASCII_TIOELVIS.map((e, index) => {
        return (
          <PreASCII
            key={index}
            className={cn("text-[4px] text-primary", className)}
            {...props}>
            {e}
          </PreASCII>
        );
      })}
    </article>
  );
}
