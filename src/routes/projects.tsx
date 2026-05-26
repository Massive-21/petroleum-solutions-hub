import { createFileRoute } from "@tanstack/react-router";
import station from "@/assets/projects/petrol-station.jpg";
import calib from "@/assets/projects/calibration.jpg";
import hydro from "@/assets/projects/hydrotesting.jpg";
import overhaul from "@/assets/projects/overhaul.jpg";
import install from "@/assets/projects/installation.jpg";
import maint from "@/assets/projects/maintenance.jpg";
import tank from "@/assets/projects/tank.jpg";

export const Route = createFileRoute("/projects")({
  component: Projects,
  head: () => ({
    meta: [
      { title: "Our Recent Projects | D'Zizi Petroleum Kenya" },
      {
        name: "description",
        content:
          "A showcase of recent D'Zizi Petroleum projects in Kenya — petrol station installations, hydrotesting, tank calibration and maintenance overhauls.",
      },
      { property: "og:title", content: "Recent Projects — D'Zizi Petroleum" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
});

const projects = [
  { img: station, title: "Petrol Station Installation", desc: "Complete setup and installation of a petrol station, ensuring regulatory compliance and efficiency." },
  { img: calib, title: "Tank Calibration Project", desc: "Precision calibration of underground tanks to maintain compliance and safety standards." },
  { img: hydro, title: "Hydrotesting Services", desc: "Hydrotesting conducted for a major client, ensuring operational safety and equipment integrity." },
  { img: overhaul, title: "Maintenance Overhaul", desc: "Comprehensive maintenance across multiple commercial sites, enhancing operational efficiency." },
  { img: install, title: "Line Installation", desc: "Suction, breather and offloading lines installed and tested for a new forecourt." },
  { img: maint, title: "Pump Servicing", desc: "Scheduled servicing of fuel dispensers and submersible pumps." },
  { img: tank, title: "Tank Replacement", desc: "Decommissioning and replacement of an underground storage tank to current standards." },
];

function Projects() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-primary">Portfolio</p>
      <h1 className="mt-2 max-w-3xl text-4xl font-extrabold sm:text-5xl">Recent projects across Kenya.</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        A selection of recent installations, calibrations and maintenance projects delivered by our team.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
