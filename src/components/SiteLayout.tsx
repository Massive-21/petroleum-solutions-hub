import { Outlet } from "@tanstack/react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { AnimatedBg } from "./AnimatedBg";
import { WhatsAppFloat } from "./WhatsAppFloat";

export function SiteLayout() {
  return (
    <>
      <AnimatedBg />
      <div className="flex min-h-screen flex-col">
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
