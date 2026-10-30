"use client";
import { useState } from "react";
import { IconCheck, IconCopy, IconMail } from "@tabler/icons-react";

import { Button, buttonVariants } from "@/components/ui/button";

interface Props {
  email: string;
}

export function CopyEmail({ email }: Props) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <div className="flex w-full gap-2">
      <a
        href={`mailto:${email}`}
        className={buttonVariants({
          variant: "solid",
          size: "lg",
          className: "flex-1 min-w-0",
        })}>
        <IconMail aria-hidden />
        <span className="truncate">{email}</span>
      </a>
      <Button
        variant="outline"
        size="icon-lg"
        onClick={copy}
        aria-label={copied ? "Email copied" : "Copy email"}>
        {copied ? <IconCheck className="text-primary" /> : <IconCopy />}
      </Button>
      <span role="status" className="sr-only">
        {copied ? "Email copied" : ""}
      </span>
    </div>
  );
}
