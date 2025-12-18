"use client";

import * as React from "react";
import { SectionHeader } from "@/components/common/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section id="contact" className="bg-background py-16 md:py-20">
      <div className="container mx-auto">
        <Card className="mx-auto max-w-6xl border-border/80 bg-gradient-to-br from-background via-muted to-background">
          <CardContent className="p-6 md:p-8">
            {/* GRID: contact (left) + footer (right) */}
            <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
              {/* LEFT: CONTACT FORM */}
              <div>
                <SectionHeader
                  eyebrow="Contact"
                  title={
                    <>
                      Write to us.{" "}
                      <span className="text-primary">
                        We will get in touch soon
                      </span>
                    </>
                  }
                  subtitle="Tell us a bit about yourself, and we'll reach out to learn your goals and how we can help."
                  align="left"
                  className="max-w-xl -ml-1"
                />

                <form
                  onSubmit={handleSubmit}
                  className="mt-8 grid gap-4 md:grid-cols-2"
                >
                  <div className="space-y-2 md:col-span-1">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Your name" />
                  </div>

                  <div className="space-y-2 md:col-span-1">
                    <Label htmlFor="email">Work email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@studio.com"
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Write your message here..."
                    />
                  </div>

                  <div className="mt-2 flex flex-col gap-3 md:col-span-2 md:flex-row md:items-center md:justify-between">
                    <Button
                      type="submit"
                      size="lg"
                      className="rounded-full px-6 py-2.5"
                    >
                      <span className="mr-1.5">Submit brief</span>
                    </Button>
                    <p className="text-[11px] text-muted-foreground">
                      We typically reply within{" "}
                      <span className="font-medium text-foreground">
                        1–2 business days
                      </span>
                      . No spam, ever.
                    </p>
                  </div>
                </form>
              </div>

              {/* RIGHT: "FOOTER" COLUMN */}
              <div className="flex flex-col justify-between border-t border-border/40 pt-6 text-sm text-muted-foreground lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                      Studio
                    </p>
                    <h3 className="mt-1 text-base font-semibold text-foreground">
                      RWGameKraft
                    </h3>
                    <p className="mt-2 text-xs text-muted-foreground">
                      A blend of creative craft and business focus, we build
                      games that are immersive, entertaining, and
                      unforgettable—designed to stay with players long after the
                      credits roll.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="space-y-1">
                      <p className="font-semibold text-foreground">
                        Navigation
                      </p>
                      <button
                        type="button"
                        className="block text-left text-muted-foreground hover:text-primary"
                        onClick={() => {
                          const el = document.querySelector("#offerings");
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        Offerings
                      </button>

                      <button
                        type="button"
                        className="block text-left text-muted-foreground hover:text-primary"
                        onClick={() => {
                          const el = document.querySelector("#portfolio");
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        Portfolio
                      </button>
                    </div>

                    <div className="space-y-1">
                      <p className="font-semibold text-foreground">Contact</p>
                      <p>talk@readywealth.in</p>
                      <p>+91-937-144-4003</p>
                      <p className="text-[11px]">
                        Futura, Magarpatta road, Kirtane Baugh, Pune-411028
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-2 text-[11px] text-muted-foreground lg:mt-10">
                  <p>© {new Date().getFullYear()} 2019 Ready Wealth</p>
                  <p className="text-xs">
                    By submitting this form, you agree to be contacted about
                    your project. We don&apos;t share your details with third
                    parties.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
