"use client";
import { useState } from "react";
import { IconMenu2 } from "@tabler/icons-react";

import { cn } from "@/lib/utils";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/logo";
import { Button, buttonVariants } from "@/components/ui/button";

import { useActiveSection } from "@/hooks/use-active-section";

const ITEMS = ["about", "projects", "contact"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ITEMS);

  return (
    <nav aria-label="Main" className="flex items-center gap-1">
      <ul className="hidden md:flex items-center gap-1">
        {ITEMS.map((e) => {
          return (
            <li key={e}>
              <a
                href={`#${e}`}
                aria-current={active === e ? "location" : undefined}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "uppercase text-muted-foreground aria-[current]:text-primary",
                )}>
                {e}
              </a>
            </li>
          );
        })}
      </ul>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          render={
            <Button variant="ghost" size="icon" className="md:hidden">
              <IconMenu2 />
              <span className="sr-only">Open menu</span>
            </Button>
          }
        />
        <SheetContent className="space-y-4">
          <SheetHeader>
            <SheetTitle render={<Logo onClick={() => setOpen(false)} />} />
          </SheetHeader>
          <ul className="flex flex-col gap-2 px-4">
            {ITEMS.map((e) => {
              return (
                <li key={e}>
                  <a
                    href={`#${e}`}
                    aria-current={active === e ? "location" : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "lg" }),
                      "w-full justify-start uppercase text-muted-foreground aria-[current]:text-primary",
                    )}>
                    <span className="text-primary">&gt;</span> {e}
                  </a>
                </li>
              );
            })}
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
