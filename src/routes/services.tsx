import { createFileRoute, Link } from "@tanstack/react-router";
import hydro from "@/assets/projects/hydrotesting.jpg";
import tank from "@/assets/projects/tank.jpg";
import install from "@/assets/projects/installation.jpg";
import maint from "@/assets/projects/maintenance.jpg";
import station from "@/assets/projects/petrol-station.jpg";
import calib from "@/assets/projects/calibration.jpg";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Petroleum Services in Kenya | Installation, Hydrotesting & More" },
      {
        name: "description",
        content:
          "Full-service petroleum solutions in Kenya: equipment sales, petrol station installation, hydrotesting, tank calibration, maintenance & commercial site servicing.",
      },
      { property: "og:title", content: "Petroleum Services in Kenya" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const items = [
  {
    img: hydro,
    title: "Petroleum Equipment Sales",
    intro: "Genuine, EPRA-aligned equipment for any forecourt size.",
    bullets: [
      "Underground (UST) and above-ground (AST) storage tanks",
      "Fuel dispensers, submersible & suction pumps",
      "Air compressors, tyre inflators and air-gauge units",
      "Standby generators and ATGs (automatic tank gauges)",
    ],
  },
  {
    img: tank,
    title: "Hydrotesting Services",
    intro: "Pressure testing for new and in-service petroleum tanks.",
    bullets: [
      "Pre-commissioning hydrotesting for new tanks",
      "Periodic integrity testing for in-service tanks",
      "Test certification and documented reports",
      "Leak detection and corrective recommendations",
    ],
  },
  {
    img: install,
    title: "Installation Services",
    intro: "Turnkey installation by experienced site teams.",
    bullets: [
      "Suction, vent and offloading line installation",
      "Dispenser plumbing and electrical wiring",
      "Canopy works and forecourt civils coordination",
      "Commissioning, testing and handover",
    ],
  },
  {
    img: maint,
    title: "Petrol Station Maintenance",
    intro: "Keep your station compliant, safe and profitable.",
    bullets: [
      "Scheduled preventive maintenance contracts",
      "Pump and dispenser servicing & spares",
      "Emergency breakdown response 24/7",
      "Compliance and EPRA inspection support",
    ],
  },
  {
    img: calib,
    title: "Tank Calibration",
    intro: "Precision calibration that protects your margins.",
    bullets: [
      "Wet and dry calibration for UST and AST",
      "Strap-chart generation and recalibration",
      "ATG calibration and configuration",
      "WMA-compliant calibration reports",
    ],
  },
  {
    img: station,
    title: "Commercial Site Maintenance",
    intro: "For depots, factories, fleet yards and farms.",
    bullets: [
      "Fleet refuelling systems servicing",
      "Bulk storage maintenance",
      "Pump and metering system upkeep",
      "Routine inspections and reporting",
    ],
  },
];

function Services() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-primary">Services</p>
      <h1 className="mt-2 max-w-3xl text-4xl font-extrabold sm:text-5xl">
        End-to-end petroleum services for Kenyan operators.
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        From new petrol station builds to keeping your existing site running, we deliver every stage in-house.
      </p>

      <div className="mt-12 space-y-10">
        {items.map((s, i) => (
          <article
            key={s.title}
            className={`grid gap-8 rounded-3xl border border-border bg-white p-6 shadow-sm md:grid-cols-2 md:items-center md:p-8 ${
              i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div>
              <img
                src={s.img}
                alt={s.title}
                className="aspect-[4/3] w-full rounded-2xl object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">{s.title}</h2>
              <p className="mt-2 text-muted-foreground">{s.intro}</p>
              <ul className="mt-5 space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                Enquire about this service
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
