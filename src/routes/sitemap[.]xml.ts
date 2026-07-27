import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const staticPaths = [
  { path: "/",         priority: "1.0", changefreq: "weekly"  },
  { path: "/about",    priority: "0.8", changefreq: "monthly" },
  { path: "/services", priority: "0.9", changefreq: "weekly"  },
  { path: "/services/petrol-station-installation",         priority: "0.9", changefreq: "monthly" },
  { path: "/services/underground-fuel-tank-installation",  priority: "0.8", changefreq: "monthly" },
  { path: "/services/fuel-dispenser-installation",         priority: "0.8", changefreq: "monthly" },
  { path: "/services/fuel-piping-systems",                 priority: "0.8", changefreq: "monthly" },
  { path: "/services/tank-calibration",                    priority: "0.8", changefreq: "monthly" },
  { path: "/services/hydrotesting",                        priority: "0.8", changefreq: "monthly" },
  { path: "/services/epra-compliance",                     priority: "0.8", changefreq: "monthly" },
  { path: "/services/petrol-station-maintenance",          priority: "0.8", changefreq: "monthly" },
  { path: "/services/petroleum-equipment-sales",           priority: "0.7", changefreq: "monthly" },
  { path: "/services/commercial-site-maintenance",         priority: "0.7", changefreq: "monthly" },
  { path: "/services/tank-fabrication-repairs",            priority: "0.7", changefreq: "monthly" },
  { path: "/services/canopy-fabrication-installation",     priority: "0.7", changefreq: "monthly" },
  { path: "/services/fuel-line-pressure-test",             priority: "0.7", changefreq: "monthly" },
  { path: "/services/petrol-station-equipment-supply",     priority: "0.7", changefreq: "monthly" },
  { path: "/services/pump-spare-parts",                    priority: "0.6", changefreq: "monthly" },
  { path: "/services/transportation",                      priority: "0.6", changefreq: "monthly" },
  { path: "/services/electrical-installation",             priority: "0.7", changefreq: "monthly" },
  { path: "/services/branding-works",                      priority: "0.6", changefreq: "monthly" },
  { path: "/projects", priority: "0.8", changefreq: "weekly"  },
  { path: "/contact",  priority: "0.7", changefreq: "monthly" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = new URL(request.url).origin;
        const paths = staticPaths;

        const urls = paths
          .map(
            ({ path, priority, changefreq }) =>
              `  <url>\n    <loc>${origin}${path}</loc>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`,
          )
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
