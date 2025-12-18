import * as React from "react";
import { cn } from "@/lib/utils";

export type SectionHeaderProps = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
