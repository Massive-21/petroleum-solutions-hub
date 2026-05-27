import { createFileRoute, Link } from "@tanstack/react-router";
import station from "@/assets/projects/petrol-station.jpg";
import hydro from "@/assets/projects/hydrotesting.jpg";
import overhaul from "@/assets/projects/overhaul.jpg";

export const Route = createFileRoute("/projects/blog")({
  component: Blog,
  head: () => ({
    meta: [
      { title: "Projects Blog | D'Zizi Petroleum" },
      {
        name: "description",
        content: "Stories from our recent projects — installations, hydrotesting and maintenance across Kenya.",
      },
      { property: "og:title", content: "Projects Blog — D'Zizi Petroleum" },
      { property: "og:url", content: "/projects/blog" },
    ],
    links: [{ rel: "canonical", href: "/projects/blog" }],
  }),
});

const posts = [
  { slug: "petrol-station-install", title: "Building a compliant petrol station", date: "2026-05-10", img: station, excerpt: "From foundation to commissioning — how we delivered a modern forecourt under tight timelines." },
  { slug: "hydrotesting-works", title: "Hydrotesting at scale", date: "2026-04-22", img: hydro, excerpt: "Pressure testing to guarantee integrity — process, safety and lessons learned." },
  { slug: "maintenance-overhaul", title: "Maintenance overhaul case study", date: "2026-03-14", img: overhaul, excerpt: "A depot-wide overhaul that reduced downtime and improved throughput." },
];

function Blog() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-primary">Projects Blog</p>
      <h1 className="mt-2 max-w-3xl text-4xl font-extrabold sm:text-5xl">Stories from our field teams</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">Read in-depth rundowns of recent projects, techniques we use and how we solve common site challenges.</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <article key={p.slug} className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={p.img} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
            </div>
            <div className="p-5">
              <div className="text-sm text-muted-foreground">{p.date}</div>
              <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
              <div className="mt-4">
                <Link to={`/projects/blog/${p.slug}`} className="text-sm font-semibold text-primary hover:underline">Read more →</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Blog;
