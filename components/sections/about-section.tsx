// import { ABOUT_HIGHLIGHTS } from "@/lib/content";
import { SectionHeader } from "@/components/common/section-header";
// import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-14 md:py-16">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow="About us"
          title={
            <>
              A production partner that{" "}
              <span className="text-primary">plays long-term</span>.
            </>
          }
          subtitle="We treat every project like the start of a franchise — stable builds, future-proof pipelines, and player-first design decisions baked in from day one."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {/* {ABOUT_HIGHLIGHTS.map((card) => (
            <Card
              key={card.title}
              className="flex h-full flex-col border-border/80 bg-card/90"
            >
              <CardContent className="flex h-full flex-col">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/60 bg-muted/80 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-foreground">
                    Key
                  </div>
                  <h3 className="text-sm font-semibold text-foreground md:text-base">
                    {card.title}
                  </h3>
                </div>
                <p className="text-[13px] leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))} */}
        </div>
      </div>
    </section>
  );
}
