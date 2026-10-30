"use client";
import { Fragment, useRef, useEffect } from "react";

import { cn } from "@/lib/utils";

import {
  SUGGESTED_COMMANDS,
  useInteractiveShell,
} from "@/hooks/use-interactive-shell";

import { TerminalAlert } from "./terminal-alert";

import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Card, CardContent, CardFooter } from "./ui/card";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";

type Props = React.ComponentProps<"div">;

export function InteractiveShell({ className, ...props }: Props) {
  const { input, setInput, display, handleKeyDown, run } =
    useInteractiveShell();

  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const viewport = endRef.current?.closest<HTMLElement>(
      "[data-slot=scroll-area-viewport]",
    );

    viewport?.scrollTo({ top: viewport.scrollHeight, behavior: "smooth" });
  }, [display]);

  // Clicking anywhere in the terminal types into it, unless text is being selected
  const focusInput = () => {
    if (window.getSelection()?.toString()) return;
    inputRef.current?.focus({ preventScroll: true });
  };

  return (
    <div className={cn("w-full flex flex-col gap-3", className)} {...props}>
      <Card className="w-full flex-1 min-h-0" onClick={focusInput}>
        <CardContent className="flex-1 overflow-hidden min-h-0">
          <ScrollArea className="h-full" aria-live="polite">
            {display.map((e, index) => {
              return (
                <Fragment key={index}>
                  {e.type === "alert" && <TerminalAlert alert={{ ...e.c }} />}
                  {e.type === "command" && (
                    <p className="text-sm break-words">
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
            <InputGroupAddon className="text-primary">/$</InputGroupAddon>
            <InputGroupInput
              ref={inputRef}
              aria-label="Shell command"
              autoComplete="off"
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck={false}
              enterKeyHint="send"
              placeholder="type help"
              className="caret-transparent [caret-shape:block] text-base md:text-sm text-primary placeholder:text-ghost-foreground"
              style={{ caretColor: "currentColor" }}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </InputGroup>
        </CardFooter>
      </Card>
      <div className="flex flex-wrap gap-2" aria-label="Try a command">
        {SUGGESTED_COMMANDS.map((command) => (
          <Button
            key={command}
            variant="outline"
            size="sm"
            onClick={() => run(command)}>
            <span className="text-primary">$</span> {command}
          </Button>
        ))}
      </div>
    </div>
  );
}
