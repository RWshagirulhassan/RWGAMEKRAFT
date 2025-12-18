"use client";

import { PLATFORM_CTAS, PLATFORM_META } from "@/lib/content";
import { Button } from "@/components/ui/button";
// import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import Image from "next/image";
import hero from "@/app/assets/hero.webp";

export function HeroSection() {
  const scrollToId = (id: string) => {
    if (typeof document === "undefined") return;
    const el = document.querySelector(id) as HTMLElement | null;
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  const reviews = {
    count: 200,
    rating: 4.9,
    avatars: [
      {
        src: "https://www.crazygames.com/images/logo/logo-ziggy.svg",
        alt: "Avatar 1",
      },
      {
        src: "https://jiogames.com/assets/logo.png",
        alt: "Avatar 2",
      },
      {
        src: "https://www.gstatic.com/android/market_images/web/favicon_v3.ico",
        alt: "Avatar 3",
      },
    ],
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-background px-4 py-20 md:px-6 md:py-36"
    >
      <Image
        width={1200}
        height={500}
        alt="hero image"
        className="pointer-events-none absolute inset-0  object-fill w-full "
        src={hero}
      ></Image>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />

      <div className="relative container mx-auto flex flex-col items-center ">
        <div className="max-w-3xl text-center pb-4">
          <h1 className="mt-4 text-3xl font-black lg:text-6xl  leading-tight text-foreground sm:text-4xl md:text-5xl">
            We design and build{" "}
            <span className="text-primary">games players remember</span>.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-white md:text-lg font-semibold">
            From fast prototypes to full-scale production, we partner with teams
            to ship high-impact titles across mobile, PC, console, and XR.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <span className="mx-4 inline-flex items-center space-x-1 ">
              {reviews.avatars.map((avatar, index) => (
                <div
                  key={index}
                  className="rounded-full  min-h-11 min-w-11 flex items-center justify-center "
                >
                  <img
                    className="object-contain min-h-11 min-w-11rounded-full "
                    src={avatar.src}
                    alt={avatar.alt}
                  />
                </div>
              ))}
            </span>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className="size-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="mr-1 font-semibold">
                  {reviews.rating?.toFixed(1)}
                </span>
              </div>

              <p className="text-slate-50 text-left font-semibold">
                from various Platforms
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 md:mt-10 md:grid-cols-3 ">
            {Object.entries(PLATFORM_META).map(([platform, meta]) => (
              <Button
                key={platform}
                variant="outline"
                className="h-auto rounded-2xl border-border/80 bg-card/70 px-4 py-3 hover:bg-card/90"
                // asChild
              >
                <a
                  href={meta.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center gap-2 text-center"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl">
                    <img
                      src={meta.iconUrl}
                      alt={meta.name}
                      className="h-6 w-6 object-contain"
                    />
                  </span>
                  <span className="block truncate text-sm font-semibold text-foreground">
                    {meta.name}
                  </span>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
