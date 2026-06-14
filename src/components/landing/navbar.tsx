"use client";
import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { IconMenu2 } from "@tabler/icons-react";

import { ASCII_TIOELVIS } from "@/lib/ascii";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { RenderTextASCII } from "@/components/render-text-ascii";

import { useIsMobile } from "@/hooks/use-mobile";
import { useIsMounted } from "@/hooks/use-is-mounted";

const ITEMS = ["about", "projects", "contact"];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({ behavior: "smooth" });
}
export function Navbar() {
  const isMobile = useIsMobile();
  const isMounted = useIsMounted();

  const [open, setOpen] = useState(false);

  if (!isMounted) return null;

  return (
    <nav className="flex items-center gap-1">
      {!isMobile && (
        <Fragment>
          {ITEMS.map((e) => {
            return (
              <Button key={e} onClick={() => scrollToSection(e)}>
                {e.toUpperCase()}
              </Button>
            );
          })}
        </Fragment>
      )}
      {isMobile && (
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button>
                <IconMenu2 />
              </Button>
            }
          />
          <SheetContent className="space-y-4">
            <SheetHeader>
              <RenderTextASCII
                ASCII_TEXT={ASCII_TIOELVIS}
                className="text-[3px] md:text-[4px]"
              />
            </SheetHeader>
            <section className="flex flex-col gap-2">
              {ITEMS.map((e) => {
                return (
                  <Button
                    variant="link"
                    key={e}
                    onClick={() => {
                      scrollToSection(e);
                      setOpen(false);
                    }}>
                    {e.toUpperCase()}
                  </Button>
                );
              })}
            </section>
          </SheetContent>
        </Sheet>
      )}
    </nav>
  );
}
