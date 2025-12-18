"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type HeaderProps = {
  className?: string;
};

type MobileNavItemProps = {
  href: string;
  label: string;
  onClick?: () => void;
};

export function SiteHeader({ className }: HeaderProps) {
  const [open, setOpen] = React.useState(false);

  const handleNavClick = React.useCallback((hash: string) => {
    if (typeof document !== "undefined") {
      const el = document.querySelector(hash) as HTMLElement | null;
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-gradient-to-b from-background/95 via-background/80 to-transparent backdrop-blur",
        className
      )}
    >
      <div className="container mx-auto flex items-center justify-between gap-4 py-3">
        <button
          onClick={() => handleNavClick("#hero")}
          className="flex items-center gap-3"
          aria-label="Go to top"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl  text-lg font-bold text-primary-foreground shadow-soft-lg  bg-transparent">
            <svg
              width="354"
              height="248"
              viewBox="0 0 354 248"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_5853_15222)">
                <path
                  d="M219.406 59.4883C225.368 67.824 230.24 75.1817 235.692 82.0505C239.335 86.6374 236.249 89.7575 234.486 93.4131C216.576 130.598 198.688 167.806 180.824 205.013C179.85 207.039 179.084 209.158 178.179 211.3C196.67 215.165 196.647 215.165 204.21 198.54C218.919 166.246 233.674 133.974 248.916 100.538C255.76 109.968 261.746 118.886 268.497 127.198C272.14 131.692 269.588 135.231 268.172 138.91C259.913 160.541 251.7 182.172 242.931 203.593C240.193 210.276 239.66 213.349 248.545 212.953C261.236 212.371 273.972 212.814 287.544 212.814C284.227 201.032 270.075 194.931 271.652 183.126C273.16 171.927 278.891 161.286 283.299 148.945C307.056 181.799 330.07 213.605 353.943 246.645C275.852 246.645 199.036 246.645 120.898 246.645C153.611 184.43 186.067 122.774 219.406 59.4883Z"
                  fill="white"
                />
                <path
                  d="M0 247.451C59.7866 164.117 118.251 82.6 177.527 -0.0117188C189.382 16.939 200.704 33.331 212.281 49.5367C215.041 53.3785 212.93 55.8699 211.167 58.8503C202.722 73.1234 194.417 87.4896 185.949 101.739C182.028 108.352 181.889 108.282 158.99 114.336C158.897 115.035 158.503 116.059 158.828 116.385C171.518 129.028 171.518 129.028 163.027 144.838C146.23 176.109 129.271 207.286 112.776 238.696C109.272 245.379 105.328 248.312 97.5795 247.637C88.4387 246.822 79.1818 247.451 67.7442 247.451C91.3851 207.635 114.26 169.1 137.205 130.472C122.96 126.351 122.125 126.653 114.562 138.179C92.7539 171.452 70.7138 204.585 49.3002 238.114C44.7993 245.169 40.1129 248.312 31.6913 247.614C22.0865 246.845 12.412 247.451 0 247.451ZM179.545 39.9669C168.572 54.892 158.572 68.5132 147.947 82.9725C169.755 82.1576 186.598 59.1763 179.545 39.9669Z"
                  fill="#42E6E9"
                />
              </g>
              <defs>
                <clipPath id="clip0_5853_15222">
                  <rect width="353.917" height="247.742" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className=" flex-col items-start hidden md:flex">
            <span className="text-base font-semibold tracking-wide text-foreground">
              RWGameKraft
            </span>
            <span className="text-sm ">Bold, modern game production</span>
          </div>
        </button>

        <nav className="hidden items-center gap-6 text-base font-semibold uppercase tracking-[0.18em]  lg:flex">
          <HeaderLink href="#offerings" label="Offerings" />
          <HeaderLink href="#team" label="Team" />
          {/* <HeaderLink href="#about" label="About" /> */}
          <HeaderLink href="#portfolio" label="Portfolio" />

          <Button
            size="lg"
            className="rounded-full bg-primary px-5 py-2 text-sm "
          >
            <Link href="#contact" aria-label="Contact">
              <span className="mr-1.5">Contact</span>
              {/* <ArrowRight className="h-3.5 w-3.5" /> */}
            </Link>
          </Button>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <Button
            variant="outline"
            size="sm"
            className="rounded-full px-4 py-1.5 text-[11px]"
            onClick={() => handleNavClick("#contact")}
          >
            <span className="mr-1.5">Let&apos;s talk</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="rounded-md border-border"
            aria-label="Toggle navigation"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 lg:hidden">
          <div className="container mx-auto space-y-2 py-3 text-sm">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.24em] ">
              Navigation
            </p>
            <MobileNavItem
              href="#offerings"
              label="Offerings"
              onClick={() => handleNavClick("#offerings")}
            />
            <MobileNavItem
              href="#team"
              label="Team"
              onClick={() => handleNavClick("#team")}
            />
            <MobileNavItem
              href="#portfolio"
              label="Portfolio"
              onClick={() => handleNavClick("#portfolio")}
            />
            <MobileNavItem
              href="#contact"
              label="Contact"
              onClick={() => handleNavClick("#contact")}
            />
          </div>
        </div>
      )}
    </header>
  );
}

function HeaderLink({ href, label }: { href: string; label: string }) {
  return (
    <button
      onClick={() => {
        if (typeof document !== "undefined") {
          const el = document.querySelector(href) as HTMLElement | null;
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }
      }}
      className=" transition-colors hover:text-accent"
    >
      {label}
    </button>
  );
}

function MobileNavItem({ href, label, onClick }: MobileNavItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-foreground hover:bg-muted/60"
    >
      <span>{label}</span>
    </button>
  );
}
