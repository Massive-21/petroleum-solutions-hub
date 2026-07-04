import { createFileRoute, Link } from "@tanstack/react-router";
import hydro from "@/assets/projects/sales.jpg";
import tank from "@/assets/projects/hydrotesting.jpg";
import install from "@/assets/projects/install.jpg";
import maint from "@/assets/projects/inst.jpeg";
import station from "@/assets/projects/petrol-station.jpg";
import calib from "@/assets/projects/commercial.jpg";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Petroleum Services Kenya | Installation, Hydrotesting, Calibration – D'Zizi" },
      {
        name: "description",
        content:
          "D'Zizi Petroleum Services: petrol station installation, hydrotesting, tank calibration, equipment sales and maintenance across Nairobi, Mombasa, Kisumu and all of Kenya.",
      },
      { property: "og:title", content: "Petroleum Services Kenya | D'Zizi Petroleum" },
      { property: "og:url", content: "https://dzizipetroleum.co.ke/services" },
    ],
    links: [{ rel: "canonical", href: "https://dzizipetroleum.co.ke/services" }],
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
    img: station,
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
    img: calib,
    title: "Commercial Site Maintenance",
    intro: "For depots, factories, fleet yards and farms.",
    bullets: [
      "Fleet refuelling systems servicing",
      "Bulk storage maintenance",
      "Pump and metering system upkeep",
      "Routine inspections and reporting",
    ],
  },
  {
    img: calib,
    title: "Tank Fabrication & Repairs",
    intro: "Custom fabrication and structural repairs for UST and AST.",
    bullets: ["Fabrication to spec", "Structural repairs and patching", "Coating and lining services"],
  },
  {
    img: station,
    title: "Canopy Fabrication & Installation",
    intro: "Design, fabrication and installation of durable forecourt canopies.",
    bullets: ["Custom canopy design", "Steel fabrication", "On-site installation and finishing"],
  },
  {
    img: install,
    title: "Fuel Line Installation, Repairs & Maintenance",
    intro: "Installation and upkeep of suction, vent and offloading lines.",
    bullets: ["New line installation", "Leak repairs and replacement", "Planned maintenance"],
  },
  {
    img: tank,
    title: "Fuel Line Pressure Test",
    intro: "Pressure testing and certification for fuel distribution lines.",
    bullets: ["Pre-commissioning pressure tests", "Periodic integrity checks", "Test reports and recommendations"],
  },
  {
    img: hydro,
    title: "Supply, Installation & Maintenance of Assorted Petrol Station Equipment",
    intro: "Comprehensive supply and lifecycle support for station equipment.",
    bullets: ["Equipment supply", "Installation & commissioning", "Ongoing maintenance contracts"],
  },
  {
    img: maint,
    title: "Assorted Pump Spare Parts",
    intro: "Wide range of genuine pump spares and consumables.",
    bullets: ["Dispenser nozzles & hoses", "Pump internals & seals", "Filters and electrical components"],
  },
  {
    img: station,
    title: "Transportation Services",
    intro: "Safe, insured transportation of fuel-related equipment and parts.",
    bullets: ["Logistics for heavy equipment", "Secure packaging and transit", "Nationwide delivery"],
  },
  {
    img: calib,
    title: "Station Electrical Installation Works",
    intro: "Electrical systems installation and commissioning for forecourts.",
    bullets: ["Site electrical design", "Installation and testing", "Control panel supply"],
  },
  {
    img: hydro,
    title: "Branding Works",
    intro: "Signage, livery and brand installation across forecourts.",
    bullets: ["Canopy signage", "Pump livery", "Site wayfinding and decals"],
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

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((s) => (
          <div
            key={s.title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
          >
            <div className="mb-4 overflow-hidden rounded-lg">
              <img src={s.img} alt={s.title} className="h-40 w-full object-cover" loading="lazy" />
            </div>
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.intro}</p>
            <div className="mt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                Enquire
              </Link>
            </div>
            <div className="absolute right-0 top-0 h-1 w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-500 group-hover:w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
