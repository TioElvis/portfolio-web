import { cn } from "@/lib/utils";

type Props = React.PropsWithChildren<React.ComponentProps<"pre">>;

export function PreASCII({ children, className, ...props }: Props) {
  return (
    <pre className={cn("text-primary", className)} {...props}>
      {children}
    </pre>
  );
}
