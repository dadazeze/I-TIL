import { cn } from "@/shared/lib/style/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-grayScale-300 dark:bg-slate-800", className)}
      {...props}
    />
  )
}

export { Skeleton }