import { cn } from "@/lib/utils";

type Props = React.ComponentProps<"a">;

export function Logo({ className, ...props }: Props) {
  return (
    <a
      href="#hero"
      aria-label="TioElvis, back to the top"
      className={cn(
        "flex h-11 items-center font-bold tracking-tight text-foreground",
        className,
      )}
      {...props}>
      <span className="text-primary">~/</span>tio
      <span className="text-primary">elvis</span>
      <span className="animate-pulse text-primary">_</span>
    </a>
  );
}
