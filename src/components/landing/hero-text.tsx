import {
  ASCII_BACKEND,
  ASCII_DEVELOPER,
  ASCII_ETHICAL,
  ASCII_HACKER,
} from "@/lib/ascii";

import { PreASCII } from "@/components/pre-ascii";

export function HeroText() {
  return (
    <section className="w-full flex items-center gap-4">
      <div>
        <article className="flex">
          {ASCII_BACKEND.map((e, index) => {
            return (
              <PreASCII key={index} className="text-[4px] text-secondary">
                {e}
              </PreASCII>
            );
          })}
        </article>
        <article className="flex">
          {ASCII_DEVELOPER.map((e, index) => {
            return (
              <PreASCII key={index} className="text-[4px] text-secondary">
                {e}
              </PreASCII>
            );
          })}
        </article>
      </div>
      <div>
        <article className="flex">
          {ASCII_ETHICAL.map((e, index) => {
            return (
              <PreASCII key={index} className="text-[4px] text-accent">
                {e}
              </PreASCII>
            );
          })}
        </article>
        <article className="flex">
          {ASCII_HACKER.map((e, index) => {
            return (
              <PreASCII key={index} className="text-[4px] text-accent">
                {e}
              </PreASCII>
            );
          })}
        </article>
      </div>
    </section>
  );
}
