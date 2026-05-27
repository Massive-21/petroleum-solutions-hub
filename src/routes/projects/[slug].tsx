import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import station from "@/assets/projects/petrol.jpeg";
import calib from "@/assets/projects/tanker.jpeg";
import hydro from "@/assets/projects/hydrotesting.jpg";
import overhaul from "@/assets/projects/overhaul.jpg";
import install from "@/assets/projects/line.jpeg";
import maint from "@/assets/projects/pump.jpeg";
import tank from "@/assets/projects/replace.jpeg";

export const Route = createFileRoute("/projects/slug")({
  component: ProjectDetail,
  head: ({ params }) => ({
    meta: [{ title: `Project — ${params.slug}` }],
  }),
});

const projects = [
  { slug: "petrol-station-installation", img: station, title: "Petrol Station Installation", content: "Full project write-up: foundations, piping, dispensers, and commissioning. We handled site preparation, coordination with EPRA, and final testing to bring the site online." },
  { slug: "tank-calibration-project", img: calib, title: "Tank Calibration Project", content: "Detailed calibration process, wet and dry methods, accuracy checks and reporting for the client to maintain compliance." },
  { slug: "hydrotesting-services", img: hydro, title: "Hydrotesting Services", content: "Hydrotesting methodology, safety procedures, pressure logs and corrective actions performed during the job." },
  { slug: "maintenance-overhaul", img: overhaul, title: "Maintenance Overhaul", content: "Scope of overhaul works including pump replacements, pipework refurbishment and system recommissioning." },
  { slug: "line-installation", img: install, title: "Line Installation", content: "Installation of suction, breather and offloading lines with pressure testing and line marking." },
  { slug: "pump-servicing", img: maint, title: "Pump Servicing", content: "Routine service schedule, parts replaced, and performance improvements achieved after service." },
  { slug: "tank-replacement", img: tank, title: "Tank Replacement", content: "Decommissioning, safe removal and replacement of underground tank with modern certified unit." },
];

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <p className="mt-2 text-muted-foreground">We couldn't find the requested project.</p>
        <div className="mt-4">
          <Link to="/projects" className="text-primary hover:underline">Back to projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="overflow-hidden rounded-2xl">
        <img src={project.img} alt={project.title} className="w-full object-cover" />
      </div>
      <h1 className="mt-6 text-3xl font-extrabold">{project.title}</h1>
      <p className="mt-4 text-muted-foreground">{project.content}</p>
      <div className="mt-6">
        <Link to="/projects" className="text-primary hover:underline">← Back to projects</Link>
      </div>
    </div>
  );
}

export default ProjectDetail;
