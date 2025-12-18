import { OFFERINGS } from "@/lib/content";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/common/section-header";

export function OfferingsSection() {
  return (
    <section id="offerings" className="bg-background py-14 md:py-16">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow="Why RWGameKraft"
          title={
            <>
              Because great games aren’t just played — they’re{" "}
              <span className="text-primary">felt</span>,<br />
              <span className="text-primary">remembered, and shared.</span>
            </>
          }
          subtitle="We build with long-term momentum in mind: clean production, reliable releases, and player-first choices that scale from a strong launch to a lasting franchise."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {OFFERINGS.map((offering) => (
            <Card
              key={offering.id}
              className="flex h-full flex-col border-border/80 bg-card/90"
            >
              <CardContent>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
                  {offering.label}
                </p>
                <h3 className="mt-2 text-base font-semibold text-foreground md:text-lg">
                  {offering.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                  {offering.description}
                </p>
                <ul className="mt-4 space-y-2 text-[13px] text-foreground/90">
                  {offering.items.map((item) => (
                    <li key={item} className="relative pl-4">
                      <span className="absolute left-0 top-2 h-2 w-2 rotate-45 rounded-[2px] bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
