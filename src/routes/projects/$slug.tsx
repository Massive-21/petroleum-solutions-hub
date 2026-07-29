import { createFileRoute, Link } from "@tanstack/react-router";
import station from "@/assets/projects/petrol.jpeg";
import calib from "@/assets/projects/tanker.jpeg";
import hydro from "@/assets/projects/hydrotesting.jpg";
import overhaul from "@/assets/projects/overhaul.jpg";
import install from "@/assets/projects/line.jpeg";
import maint from "@/assets/projects/pump.jpeg";
import tank from "@/assets/projects/replace.jpeg";
import chaka1 from "@/assets/projects/31.jpg";
import chaka2 from "@/assets/projects/32.jpg";
import chaka3 from "@/assets/projects/33.jpg";
import chaka4 from "@/assets/projects/34.jpg";
import chaka5 from "@/assets/projects/35.jpg";
import chaka6 from "@/assets/projects/36.jpg";
import chaka7 from "@/assets/projects/37.jpg";
import chaka8 from "@/assets/projects/38.jpg";
import chaka9 from "@/assets/projects/39.jpg";
import chaka10 from "@/assets/projects/40.jpg";
import chakaVideo from "@/assets/projects/41.mp4";

export const Route = createFileRoute("/projects/$slug")({
  component: ProjectDetail,
  head: ({ params }) => ({
    meta: [
      { title: `${params.slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} | D'Zizi Petroleum Projects` },
      { name: "description", content: "Project details — D'Zizi Petroleum Services Limited, Kenya." },
    ],
  }),
});

type GalleryItem = { src: string; type: "image" | "video" };

type Project = {
  slug: string;
  img: string;
  title: string;
  badge?: string;
  location?: string;
  content: string;
  highlights?: string[];
  gallery?: GalleryItem[];
};

const projects: Project[] = [
  {
    slug: "chaka-fuel-station",
    img: chaka4,
    title: "Chaka Fuel Station",
    badge: "Ongoing",
    location: "Chaka, Kenya",
    content:
      "What began as bare forecourt paving and raw steel is now a fully equipped petroleum station — and every step of the journey has been handled by our team. This project in Chaka stands as a testament to what end-to-end petroleum infrastructure looks like when done right. Our crew mobilized with heavy equipment, precision-fabricated tanks, and purpose-built dispensing units to transform a newly constructed commercial complex into a fully operational fueling facility.",
    highlights: [
      "Supply and installation of multiple large-capacity underground storage tanks, each precision-coated with high-grade corrosion-resistant black paint.",
      "In-house fabrication of a bespoke above-ground stainless steel tank — complete with access ladder, top platform and safety railings.",
      "Full fuel dispenser supply and assembly: flow meters, vane pumps, drive motors and digital display units installed and calibrated from scratch.",
      "Site preparation and civil works coordination including road-roller compaction of the forecourt ahead of tank burial.",
      "End-to-end project management from equipment fabrication through to on-site commissioning.",
    ],
    gallery: [
      { src: chaka1, type: "image" },
      { src: chaka2, type: "image" },
      { src: chaka3, type: "image" },
      { src: chaka4, type: "image" },
      { src: chaka5, type: "image" },
      { src: chaka6, type: "image" },
      { src: chaka7, type: "image" },
      { src: chaka8, type: "image" },
      { src: chaka9, type: "image" },
      { src: chaka10, type: "image" },
      { src: chakaVideo, type: "video" },
    ],
  },
  {
    slug: "petrol-station-installation",
    img: station,
    title: "Petrol Station Installation",
    content:
      "Full project write-up: foundations, piping, dispensers, and commissioning. We handled site preparation, coordination with EPRA, and final testing to bring the site online.",
  },
  {
    slug: "tank-calibration-project",
    img: calib,
    title: "Tank Calibration Project",
    content:
      "Detailed calibration process, wet and dry methods, accuracy checks and reporting for the client to maintain compliance.",
  },
  {
    slug: "hydrotesting-services",
    img: hydro,
    title: "Hydrotesting Services",
    content:
      "Hydrotesting methodology, safety procedures, pressure logs and corrective actions performed during the job.",
  },
  {
    slug: "maintenance-overhaul",
    img: overhaul,
    title: "Maintenance Overhaul",
    content:
      "Scope of overhaul works including pump replacements, pipework refurbishment and system recommissioning.",
  },
  {
    slug: "line-installation",
    img: install,
    title: "Line Installation",
    content:
      "Installation of suction, breather and offloading lines with pressure testing and line marking.",
  },
  {
    slug: "pump-servicing",
    img: maint,
    title: "Pump Servicing",
    content:
      "Routine service schedule, parts replaced, and performance improvements achieved after service.",
  },
  {
    slug: "tank-replacement",
    img: tank,
    title: "Tank Replacement",
    content:
      "Decommissioning, safe removal and replacement of underground tank with modern certified unit.",
  },
];

function ProjectDetail() {
  const { slug } = Route.useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <p className="mt-2 text-muted-foreground">
          We couldn't find the requested project.
        </p>
        <div className="mt-4">
          <Link to="/projects" className="text-primary hover:underline">
            Back to projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      {/* Header */}
      <div className="mb-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
        >
          ← Back to projects
        </Link>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          {project.badge && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>
              {project.badge}
            </span>
          )}
          {project.location && (
            <span className="text-sm font-medium text-muted-foreground">
              {project.location}
            </span>
          )}
        </div>
        <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">
          {project.title}
        </h1>
      </div>

      {/* Hero image */}
      <div className="overflow-hidden rounded-2xl">
        <img
          src={project.img}
          alt={project.title}
          className="max-h-[520px] w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="mt-8 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <p className="text-base leading-relaxed text-muted-foreground">
            {project.content}
          </p>

          {project.highlights && (
            <div className="mt-8">
              <h2 className="text-xl font-bold">What We Delivered</h2>
              <ul className="mt-4 space-y-3">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-primary/10 text-center text-xs font-bold leading-5 text-primary">
                      {i + 1}
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="h-fit rounded-2xl border border-border bg-white p-6 shadow-sm">
          <h3 className="font-semibold">Interested in a similar project?</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            We deliver full turnkey petroleum station builds across Kenya — from
            equipment supply to commissioning.
          </p>
          <Link
            to="/contact"
            className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Get a free consultation
          </Link>
          <a
            href="https://wa.me/254702587919"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition hover:border-primary hover:text-primary"
          >
            WhatsApp us
          </a>
        </div>
      </div>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <div className="mt-14">
          <h2 className="text-xl font-bold">Project Gallery</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            From fabrication yard to forecourt — the build in pictures.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {project.gallery.map((item, i) => (
              <div
                key={i}
                className={`group overflow-hidden rounded-xl border border-border bg-muted ${item.type === "video" ? "col-span-2 sm:col-span-3 lg:col-span-2" : "aspect-square"}`}
              >
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    controls
                    playsInline
                    className="h-full w-full object-cover"
                    style={{ maxHeight: "340px" }}
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={`${project.title} – photo ${i + 1}`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-10">
        <Link to="/projects" className="text-primary hover:underline">
          ← Back to all projects
        </Link>
      </div>
    </div>
  );
}

export default ProjectDetail;
