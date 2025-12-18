"use client";

import Image from "next/image";
import { PLATFORM_META, PORTFOLIO_ITEMS } from "@/lib/content";
import { SectionHeader } from "@/components/common/section-header";
import { Card, CardContent } from "@/components/ui/card";

export function PortfolioSection() {
  // Chunk items into rows of 3 so last row is centered nicely
  const rows: (typeof PORTFOLIO_ITEMS)[] = [];
  for (let i = 0; i < PORTFOLIO_ITEMS.length; i += 3) {
    rows.push(PORTFOLIO_ITEMS.slice(i, i + 3));
  }

  return (
    <section id="portfolio" className="bg-background py-14 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          eyebrow="Selected work"
          title={
            <>
              Explore our{" "}
              <span className="text-primary">
                games, prototypes &amp; case studies
              </span>
              .
            </>
          }
          subtitle="A snapshot of what we’ve shipped and what we’re building — from polished releases to rapid prototypes, with clear outcomes and learnings behind each."
        />

        <div className="mt-8 space-y-5">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-col items-center gap-5 md:flex-row md:justify-center"
            >
              {row.map((item) => (
                <Card
                  key={item.title}
                  className="group relative flex h-full w-full max-w-xs flex-col overflow-hidden border-border/80 bg-card/90 text-left transition hover:-translate-y-1 hover:border-primary/70 hover:shadow-soft-lg md:max-w-sm"
                >
                  {/* IMAGE + HOVER OVERLAY */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted/70">
                    {item.imageUrl ? (
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        // fill
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center px-4 text-center">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                          Project key art placeholder
                        </p>
                      </div>
                    )}

                    {/* Dim background on hover */}
                    <div className="pointer-events-none absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100" />

                    {/* PLATFORM BUTTONS ON HOVER */}
                    {item.platforms?.length ? (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                        <div className="flex flex-wrap justify-center gap-2 px-4">
                          {item.platforms.map((p) => {
                            const meta = PLATFORM_META[p.platform];
                            const href = p.href ?? meta.href;

                            return (
                              <a
                                key={p.platform}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground shadow-sm hover:bg-primary hover:text-primary-foreground"
                              >
                                <span className="relative h-4 w-4 overflow-hidden rounded-full">
                                  <img
                                    src={meta.iconUrl}
                                    alt={meta.name}
                                    // fill
                                    className="object-contain"
                                  />
                                </span>
                                <span>{meta.name}</span>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    ) : null}
                  </div>

                  <CardContent className="space-y-1 pb-3 pt-2">
                    <h3 className="text-sm font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground group-hover:text-primary">
                      {item.tag}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
