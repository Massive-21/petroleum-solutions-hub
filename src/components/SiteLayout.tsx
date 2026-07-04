import { useEffect } from "react";
import { Outlet, useRouterState } from "@tanstack/react-router";
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
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <WhatsAppFloat />
    </>
  );
}
