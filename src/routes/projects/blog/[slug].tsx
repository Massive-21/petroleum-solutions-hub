import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import station from "@/assets/projects/petrol-station.jpg";
import hydro from "@/assets/projects/hydrotesting.jpg";
import overhaul from "@/assets/projects/overhaul.jpg";

export const Route = createFileRoute("/projects/blog/slug")({
  component: BlogPost,
  head: ({ params }) => ({
    meta: [{ title: `Project Post — ${params.slug}` }],
  }),
});

const posts = [
  { slug: "petrol-station-install", title: "Building a compliant petrol station", date: "2026-05-10", img: station, content: "Full case study: foundations, dispenser selection, fuel management and commissioning. We coordinated with local authorities and delivered on schedule." },
  { slug: "hydrotesting-works", title: "Hydrotesting at scale", date: "2026-04-22", img: hydro, content: "Step-by-step hydrotesting procedure, safety measures and results for a multi-tank site." },
  { slug: "maintenance-overhaul", title: "Maintenance overhaul case study", date: "2026-03-14", img: overhaul, content: "A detailed account of the overhaul project, including parts replaced and performance improvements." },
];

function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <p className="mt-2 text-muted-foreground">We couldn't find the requested blog post.</p>
        <div className="mt-4">
          <Link to="/projects/blog" className="text-primary hover:underline">Back to blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="overflow-hidden rounded-2xl">
        <img src={post.img} alt={post.title} className="w-full object-cover" />
      </div>
      <div className="mt-4 text-sm text-muted-foreground">{post.date}</div>
      <h1 className="mt-2 text-3xl font-extrabold">{post.title}</h1>
      <p className="mt-4 text-muted-foreground">{post.content}</p>
      <div className="mt-6">
        <Link to="/projects/blog" className="text-primary hover:underline">← Back to blog</Link>
      </div>
    </div>
  );
}

export default BlogPost;
