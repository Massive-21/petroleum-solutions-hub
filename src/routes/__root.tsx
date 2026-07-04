import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => {
    const siteUrl = "https://dzizipetroleum.co.ke";
    const ogImage = `${siteUrl}/og-image.png`;
    const ogImageAlt = "D'Zizi Petroleum Services Limited preview image";

    return {
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "D'Zizi Petroleum Services Limited | Petroleum Equipment Kenya" },
      {
        name: "description",
        content:
          "D'Zizi Petroleum Services Limited — Kenya's trusted supplier and installer of petroleum equipment: tanks, pumps, hydrotesting, calibration and petrol station maintenance.",
      },
      { name: "author", content: "D'Zizi Petroleum Services Limited" },
      { name: "keywords", content: "petroleum equipment Kenya, petrol station installation Nairobi, fuel tank calibration Kenya, hydrotesting Kenya, fuel pump suppliers Kenya, petrol station maintenance" },
      { property: "og:title", content: "D'Zizi Petroleum Services Limited" },
      { property: "og:description", content: "Petroleum equipment, installation, hydrotesting and maintenance across Kenya." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_KE" },
      { property: "og:url", content: siteUrl },
      { property: "og:image", content: ogImage },
      { property: "og:image:alt", content: ogImageAlt },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:site_name", content: "D'Zizi Petroleum Services Limited" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "D'Zizi Petroleum Services Limited" },
      { name: "twitter:description", content: "Petroleum equipment, installation, hydrotesting and maintenance across Kenya." },
      { name: "twitter:image", content: ogImage },
      { name: "twitter:image:alt", content: ogImageAlt },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "shortcut icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "preconnect", href: "https://gteipjszrtnvkabqhaiq.supabase.co" },
      { rel: "canonical", href: siteUrl },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "ProfessionalService"],
          name: "D'Zizi Petroleum Services Limited",
          alternateName: "D'Zizi Petroleum",
          description: "Kenya's trusted supplier and installer of petroleum equipment. Petrol station installation, hydrotesting, tank calibration and full-site maintenance across Kenya.",
          url: "https://dzizipetroleum.co.ke",
          logo: "https://dzizipetroleum.co.ke/og-image.png",
          image: "https://dzizipetroleum.co.ke/og-image.png",
          telephone: "+254702587919",
          email: "info@dzizipetroleum.co.ke",
          priceRange: "KSh",
          currenciesAccepted: "KES",
          paymentAccepted: "Cash, Bank Transfer, M-Pesa",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Nairobi",
            addressRegion: "Nairobi County",
            addressCountry: "KE",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "-1.2921",
            longitude: "36.8219",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:00",
              closes: "17:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Saturday",
              opens: "08:00",
              closes: "13:00",
            },
          ],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+254702587919",
            contactType: "customer service",
            areaServed: "KE",
            availableLanguage: ["English", "Swahili"],
          },
          areaServed: [
            { "@type": "City", name: "Nairobi" },
            { "@type": "City", name: "Mombasa" },
            { "@type": "City", name: "Kisumu" },
            { "@type": "City", name: "Eldoret" },
            { "@type": "City", name: "Nakuru" },
            { "@type": "City", name: "Thika" },
            { "@type": "City", name: "Nyeri" },
            { "@type": "City", name: "Meru" },
            { "@type": "City", name: "Machakos" },
            { "@type": "City", name: "Kitale" },
            { "@type": "City", name: "Malindi" },
            { "@type": "City", name: "Garissa" },
            { "@type": "Country", name: "Kenya" },
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Petroleum Services Kenya",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Petrol Station Installation Kenya" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Petroleum Equipment Sales Kenya" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tank Hydrotesting Kenya" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fuel Tank Calibration Kenya" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Petrol Station Maintenance Kenya" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Site Fuel System Maintenance Kenya" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fuel Line Installation Kenya" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "EPRA Compliance Support Kenya" } },
            ],
          },
          keywords: "petroleum equipment Kenya, petrol station installation Nairobi, fuel tank calibration Kenya, hydrotesting Kenya, EPRA compliance Kenya, petrol station maintenance Kenya, fuel dispenser supplier Kenya, underground tank Kenya",
          sameAs: [
            "https://wa.me/254702587919",
          ],
        }),
      },
      {
        // Google Ads Global Site Tag
    src: "https://www.googletagmanager.com/gtag/js?id=AW-18179351603",
    async: true,
  },
  {
    children: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-18179351603');
    `,
  },
    ],
    };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteLayout />
    </QueryClientProvider>
  );
}
