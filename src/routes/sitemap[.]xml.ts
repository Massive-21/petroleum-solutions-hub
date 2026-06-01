import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const staticPaths = [
  "/",
  "/about",
  "/services",
  "/projects",
  "/contact",
  "/blog",
  "/farms",
];

const projectSlugs = [
  "petrol-station-installation",
  "tank-calibration-project",
  "hydrotesting-services",
  "maintenance-overhaul",
  "line-installation",
  "pump-servicing",
  "tank-replacement",
];

const blogSlugs = [
  "petrol-station-install",
  "hydrotesting-works",
  "maintenance-overhaul",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = new URL(request.url).origin;
        const paths = [
          ...staticPaths,
          ...projectSlugs.map((slug) => `/projects/${slug}`),
          ...blogSlugs.map((slug) => `/projects/blog/${slug}`),
        ];

        const urls = paths
          .map(
            (path) =>
              `  <url>\n    <loc>${origin}${path}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${path === "/" ? "1.0" : "0.8"}</priority>\n  </url>`,
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
