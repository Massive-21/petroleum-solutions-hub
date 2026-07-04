import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const staticPaths = [
  { path: "/",         priority: "1.0", changefreq: "weekly"  },
  { path: "/about",    priority: "0.8", changefreq: "monthly" },
  { path: "/services", priority: "0.9", changefreq: "weekly"  },
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
