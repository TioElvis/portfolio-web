"use client";
import { Fragment, useRef, useEffect } from "react";

import { cn } from "@/lib/utils";

import { useInteractiveShell } from "@/hooks/use-interactive-shell";

import { TerminalAlert } from "./terminal-alert";

import { ScrollArea } from "./ui/scroll-area";
import { Card, CardContent, CardFooter } from "./ui/card";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";

type Props = React.ComponentProps<"div">;

export function InteractiveShell({ className, ...props }: Props) {
  const { input, setInput, display, handleKeyDown } = useInteractiveShell();

  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (endRef.current) {
      const scrollContainer = endRef.current.closest(
        "[data-radix-scroll-area-viewport]",
      ) as HTMLDivElement;

      if (scrollContainer) {
        scrollContainer.scrollTo({
          top: scrollContainer.scrollHeight,
          behavior: "smooth",
        });
      } else {
        const parent = endRef.current.parentElement;
        if (parent) {
          parent.scrollTop = parent.scrollHeight;
        }
      }
    }
  }, [display]);

  return (
    <Card className={cn("w-full flex-1", className)} {...props}>
      <CardContent className="flex-1 overflow-hidden min-h-0">
        <ScrollArea className="h-full">
          {display.map((e, index) => {
            return (
              <Fragment key={index}>
                {e.type === "alert" && <TerminalAlert alert={{ ...e.c }} />}
                {e.type === "command" && (
                  <p className="text-sm">
                    <span className="text-primary">$</span> {e.c.return}
                  </p>
                )}
              </Fragment>
            );
          })}
          <div ref={endRef} />
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <InputGroup className="border-none has-[[data-slot=input-group-control]:focus-visible]:ring-0">
          <InputGroupInput
            autoFocus
            className="caret-transparent [caret-shape:block] text-primary"
            style={{ caretColor: "currentColor" }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <InputGroupAddon className="text-primary">/$</InputGroupAddon>
        </InputGroup>
      </CardFooter>
    </Card>
  );
}
