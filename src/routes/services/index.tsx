import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import equipImg from "@/assets/projects/equipment.jpg";
import hydroImg from "@/assets/projects/hydrotesting.jpg";
import installImg from "@/assets/projects/installation.jpg";
import maintImg from "@/assets/projects/maintenance.jpg";
import calibImg from "@/assets/projects/calibration.jpg";
import commImg from "@/assets/projects/commercial.jpg";
import canopyImg from "@/assets/projects/petrol-station.jpg";
import lineImg from "@/assets/projects/line.jpeg";
import salesImg from "@/assets/projects/sales.jpg";
import pumpImg from "@/assets/projects/pump.jpeg";
import tankerImg from "@/assets/projects/tanker.jpeg";
import petroImg from "@/assets/projects/petrol.jpeg";
import replaceImg from "@/assets/projects/replace.jpeg";
import standardsImg from "@/assets/projects/standards.jpeg";

export const Route = createFileRoute("/services/")({
  component: ServicesIndex,
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
    slug: "/services/petrol-station-installation",
    img: installImg,
    title: "Petrol Station Installation Kenya",
    intro: "Turnkey installation of complete petrol stations by EPRA-aligned site teams.",
  },
  {
    slug: "/services/underground-fuel-tank-installation",
    img: canopyImg,
    title: "Underground Fuel Tank Installation",
    intro: "Supply and installation of double-wall fibreglass and steel USTs to EPRA standards.",
  },
  {
    slug: "/services/fuel-dispenser-installation",
    img: pumpImg,
    title: "Fuel Dispenser Installation",
    intro: "Installation and commissioning of single and multi-product fuel dispensers.",
  },
  {
    slug: "/services/fuel-piping-systems",
    img: lineImg,
    title: "Fuel Piping Systems",
    intro: "Installation and upkeep of suction, vent and offloading lines.",
  },
  {
    slug: "/services/tank-calibration",
    img: calibImg,
    title: "Tank Calibration",
    intro: "Precision wet & dry calibration for accurate dispensing and WMA compliance.",
  },
  {
    slug: "/services/hydrotesting",
    img: hydroImg,
    title: "Hydrotesting",
    intro: "Pressure testing to guarantee tank integrity and EPRA-aligned safety.",
  },
  {
    slug: "/services/epra-compliance",
    img: standardsImg,
    title: "EPRA Compliance Support",
    intro: "Guidance through EPRA licensing, inspections and regulatory documentation.",
  },
  {
    slug: "/services/petrol-station-maintenance",
    img: maintImg,
    title: "Petrol Station Maintenance",
    intro: "Keep your station compliant, safe and profitable with scheduled and emergency servicing.",
  },
  {
    slug: "/services/petroleum-equipment-sales",
    img: equipImg,
    title: "Petroleum Equipment Sales",
    intro: "Genuine, EPRA-aligned equipment: tanks, dispensers, pumps, ATGs and generators.",
  },
  {
    slug: "/services/commercial-site-maintenance",
    img: commImg,
    title: "Commercial Site Maintenance",
    intro: "Maintenance contracts for depots, industrial yards and fleet fuelling points.",
  },
  {
    slug: "/services/tank-fabrication-repairs",
    img: replaceImg,
    title: "Tank Fabrication & Repairs",
    intro: "Custom fabrication and structural repairs for USTs and ASTs.",
  },
  {
    slug: "/services/canopy-fabrication-installation",
    img: canopyImg,
    title: "Canopy Fabrication & Installation",
    intro: "Design, fabrication and on-site installation of durable forecourt canopies.",
  },
  {
    slug: "/services/fuel-line-pressure-test",
    img: lineImg,
    title: "Fuel Line Pressure Test",
    intro: "Pressure testing and certification for fuel distribution and transfer lines.",
  },
  {
    slug: "/services/petrol-station-equipment-supply",
    img: salesImg,
    title: "Petrol Station Equipment Supply",
    intro: "Comprehensive supply and lifecycle support for all station equipment.",
  },
  {
    slug: "/services/pump-spare-parts",
    img: pumpImg,
    title: "Pump Spare Parts",
    intro: "Wide range of genuine pump spares, nozzles, hoses and consumables.",
  },
  {
    slug: "/services/transportation",
    img: tankerImg,
    title: "Transportation Services",
    intro: "Safe, insured logistics for petroleum equipment and heavy parts nationwide.",
  },
  {
    slug: "/services/electrical-installation",
    img: petroImg,
    title: "Station Electrical Installation",
    intro: "Electrical systems design, installation and commissioning for forecourts.",
  },
  {
    slug: "/services/branding-works",
    img: canopyImg,
    title: "Branding Works",
    intro: "Canopy signage, pump livery and forecourt branding across petrol stations.",
  },
];

function ServicesIndex() {
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
          <Link
            key={s.slug}
            // @ts-ignore - routeTree regenerates on npm run dev
            to={s.slug}
            className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
          >
            <div className="mb-4 overflow-hidden rounded-lg">
              <img
                src={s.img}
                alt={s.title}
                className="h-40 w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.intro}</p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Learn more <ArrowRight className="h-4 w-4" />
            </div>
            <div className="absolute right-0 top-0 h-1 w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-500 group-hover:w-full" />
          </Link>
        ))}
      </div>
    </div>
  );
}
