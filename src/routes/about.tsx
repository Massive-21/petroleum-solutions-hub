import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Award, Users, Target } from "lucide-react";
import petrolStation from "@/assets/projects/equipment.jpg";
import installationImg from "@/assets/projects/team.jpeg";
import hydrotestingImg from "@/assets/projects/standards.jpeg";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About D'Zizi Petroleum | Kenya's Trusted Petroleum Services Company" },
      {
        name: "description",
        content:
          "D'Zizi Petroleum Services Limited — a fully Kenyan-owned company delivering petroleum equipment, petrol station installation, hydrotesting, calibration and maintenance nationwide.",
      },
      { property: "og:title", content: "About D'Zizi Petroleum | Kenya Petroleum Services" },
      { property: "og:url", content: "https://dzizipetroleum.co.ke/about" },
    ],
    links: [{ rel: "canonical", href: "https://dzizipetroleum.co.ke/about" }],
  }),
});

function About() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-primary">About us</p>
      <h1 className="mt-2 max-w-3xl text-4xl font-extrabold sm:text-5xl">
        A Kenyan partner you can trust with your fuel infrastructure.
      </h1>
      <p className="mt-5 max-w-3xl text-lg text-muted-foreground">
        D'Zizi Petroleum Services Limited is a fully Kenyan-owned company specialising
        in petroleum equipment supply, installation, hydrotesting, tank calibration
        and full-service petrol station maintenance. We work with independent dealers,
        oil marketing companies and commercial sites across the country.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          { icon: Award, t: "Quality Equipment", d: "Only top-tier petroleum equipment selected for Kenyan operating conditions.", img: petrolStation },
          { icon: Users, t: "Experienced Team", d: "Engineers and technicians with hands-on petrol station expertise.", img: installationImg },
          { icon: Target, t: "Safety & Compliance", d: "We work to EPRA, OSHA and county regulator standards.", img: hydrotestingImg },
        ].map(({ icon: Icon, t, d, img }) => (
          <div key={t} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <div className="mb-4 overflow-hidden rounded-lg">
              <img src={img} alt={t} className="h-40 w-full object-cover" />
            </div>
            <Icon className="h-8 w-8 text-primary" />
            <h3 className="mt-4 text-lg font-semibold">{t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-10 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-2 md:p-12">
        <div>
          <h2 className="text-2xl font-bold">Our mission</h2>
          <p className="mt-3 text-muted-foreground">
            To deliver safe, reliable and profitable fuel-handling infrastructure
            to every corner of Kenya — backed by responsive after-sales support.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Why clients choose us</h2>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            {[
              "End-to-end project delivery — from design to commissioning",
              "Transparent pricing and clear timelines",
              "Genuine equipment with full warranty support",
              "24/7 emergency response across major routes",
            ].map((x) => (
              <li key={x} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /> {x}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <Link to="/services" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
          See our services
        </Link>
        <Link to="/contact" className="rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold hover:border-primary hover:text-primary">
          Get in touch
        </Link>
      </div>
    </div>
  );
}
