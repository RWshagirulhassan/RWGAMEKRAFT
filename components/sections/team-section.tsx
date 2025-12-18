"use client";

import * as React from "react";
import { SectionHeader } from "@/components/common/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { TEAM_MEMBERS, TeamMember } from "@/lib/content";

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <Card className="group relative w-[280px] shrink-0 overflow-hidden border-border/80 bg-card/90 transition hover:-translate-y-1 hover:border-primary/70 hover:shadow-soft-lg sm:w-[320px]">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted/70">
        {member.avatarUrl ? (
          <img
            src={member.avatarUrl}
            alt={member.name}
            // fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-muted via-card to-muted" />
        )}

        <div className="pointer-events-none absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100" />

        <div className="pointer-events-none absolute inset-0 flex items-end p-4 opacity-0 transition-opacity group-hover:opacity-100">
          <div className="w-full rounded-2xl border border-border/60 bg-background/70 p-3 backdrop-blur">
            <p className="">
              <span className="   text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {member.role}
              </span>
            </p>
            <p className="mt-1 font-normal text-xs text-muted-foreground">
              {member.fun}
            </p>
          </div>
        </div>
      </div>

      <CardContent className="flex items-center justify-between gap-3 py-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">
            {member.name}
          </p>
          <p className="truncate text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            {member.role}
          </p>
        </div>
        <span className="rounded-full border border-border/70 bg-muted/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {member.tag}
        </span>
      </CardContent>
    </Card>
  );
}

export function TeamSection() {
  return (
    <section id="team" className="bg-background py-14 md:py-16">
      <div className="container px-4 md:px-6 mx-auto">
        <SectionHeader
          eyebrow="Meet our team"
          title={
            <>
              Humans behind the <span className="text-primary">magic</span>.
            </>
          }
          subtitle="A small squad obsessed with feel, polish, and shipping. Hover a card for a fun intro — and swipe through."
        />

        <div className="mt-8 overflow-x-hidden w-full lg:w-[120%] lg:-mx-[10%]">
          <div className="relative">
            {/* <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-background to-transparent" /> */}

            <div
              className="team-belt no-scrollbar mx-4 flex gap-5 overflow-x-auto px-4 py-2 md:-mx-6 md:px-6"
              aria-label="Team carousel"
            >
              {TEAM_MEMBERS.map((m) => (
                <div key={`${m.name}-${m.role}`} className="snap-center">
                  <TeamCard member={m} />
                </div>
              ))}
            </div>
          </div>

          <p className="mt-3 text-center text-[11px] text-muted-foreground">
            Tip: use trackpad / touch to swipe horizontally.
          </p>
        </div>
      </div>

      <style jsx>{`
        .team-belt {
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
        }
      `}</style>
    </section>
  );
}
