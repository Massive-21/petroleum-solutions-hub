import { createFileRoute } from "@tanstack/react-router";
import farmImg from "@/assets/projects/installation.jpg";

export const Route = createFileRoute("/projects/farms")({
  component: Farms,
  head: () => ({
    meta: [
      { title: "Farms & Agribusiness | D'Zizi Petroleum" },
      {
        name: "description",
        content: "How we support farms and agribusinesses with fuel infrastructure, bulk storage and reliable on-site delivery.",
      },
      { property: "og:title", content: "Farms — D'Zizi Petroleum" },
      { property: "og:url", content: "/projects/farms" },
    ],
    links: [{ rel: "canonical", href: "/projects/farms" }],
  }),
});

function Farms() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-primary">Farms & Agribusiness</p>
      <h1 className="mt-2 max-w-3xl text-4xl font-extrabold sm:text-5xl">Fuel infrastructure for productive farms</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">We design and install bulk fuel storage, dispensing and delivery systems tailored for large farms and agribusiness operations.</p>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div>
          <div className="overflow-hidden rounded-2xl">
            <img src={farmImg} alt="Farm fuel installation" className="w-full object-cover" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold">What we deliver</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted-foreground">
            <li>Bulk tank supply and installation sized to your consumption profile</li>
            <li>Secure forecourt and dispensing points for tractors, harvesters and fleet vehicles</li>
            <li>Automated delivery scheduling and site calibration for accurate inventory</li>
            <li>Maintenance contracts and emergency response to avoid downtime</li>
          </ul>

          <h3 className="mt-6 text-xl font-semibold">Case study</h3>
          <p className="mt-2 text-muted-foreground">We recently fitted a 50,000L bulk tank and dual dispensers for a large horticulture farm, reducing delivery frequency and improving fuel security across the estate.</p>

          <div className="mt-6">
            <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">Talk to our agribusiness team</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Farms;
