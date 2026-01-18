import React from "react";
import { cn } from "@/lib/utils";

export default function CardWrapper({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      {...props}
      className={cn(
        "group overflow-hidden rounded-[12px]",
        "h-49.5 cursor-pointer border-2 border-transparent",
        className,
      )}
    >
      {children}
    </div>
  );
}
