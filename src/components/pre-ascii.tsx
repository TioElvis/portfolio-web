import { cn } from "@/lib/utils";

type Props = React.PropsWithChildren<React.ComponentProps<"pre">>;

export function PreASCII({ children, className, ...props }: Props) {
  return (
    <pre className={cn(className)} {...props}>
      {children}
    </pre>
  );
}
