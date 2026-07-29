import { useEffect } from "react";
import { Outlet, useRouterState, Link } from "@tanstack/react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { AnimatedBg } from "./AnimatedBg";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { TickerBanner } from "./TickerBanner";

export function SiteLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.12 }
    );

    const timer = setTimeout(() => {
      document.querySelectorAll(".reveal:not(.revealed)").forEach((el) => observer.observe(el));
    }, 60);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <>
      <AnimatedBg />
      <div className="flex min-h-screen flex-col">
        <TickerBanner />
        <Navbar />
        <Link
          to="/projects/$slug"
          params={{ slug: "chaka-fuel-station" }}
          className="group relative flex items-center justify-center gap-2.5 overflow-hidden bg-brand-ink py-2 text-xs font-semibold text-white transition hover:bg-brand-ink/90"
          style={{ boxShadow: "0 0 18px 2px oklch(0.55 0.22 25 / 0.55)" }}
        >
          <span className="absolute inset-0 -translate-x-full animate-[shimmer_2.8s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/8 to-transparent" />
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-80" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="tracking-wide">
            New project underway in <span className="text-secondary font-bold">Chaka</span> — check out our ongoing build
          </span>
          <span className="translate-x-0 transition-transform duration-200 group-hover:translate-x-1">→</span>
        </Link>
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <WhatsAppFloat />
    </>
  );
}
