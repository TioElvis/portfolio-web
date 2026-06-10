import { Fragment } from "react/jsx-runtime";

import { TIOELVIS_ASCII } from "@/lib/utils";

import { PreASCII } from "@/components/pre-ascii";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

export default function Page() {
  return (
    <Fragment>
      <MaxWidthWrapper className="min-h-screen grid place-content-center">
        <article className="flex">
          {TIOELVIS_ASCII.map((e, index) => {
            return (
              <PreASCII key={index} className="text-[9px] text-primary">
                {e}
              </PreASCII>
            );
          })}
        </article>
      </MaxWidthWrapper>
    </Fragment>
  );
}
