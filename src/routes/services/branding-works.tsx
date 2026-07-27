import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import img from "@/assets/projects/petrol-station.jpg";

export const Route = createFileRoute("/services/branding-works")({
  component: BrandingWorks,
  head: () => ({
    meta: [
      { title: "Petrol Station Branding & Signage Kenya | D'Zizi Petroleum" },
      {
        name: "description",
        content:
          "Forecourt branding, canopy signage, pump livery and site wayfinding for petrol stations in Kenya. Professional brand installation. D'Zizi Petroleum +254 702 587 919.",
      },
      { property: "og:title", content: "Petrol Station Branding Works Kenya | D'Zizi Petroleum" },
      { property: "og:url", content: "https://dzizipetroleum.co.ke/services/branding-works" },
    ],
    links: [{ rel: "canonical", href: "https://dzizipetroleum.co.ke/services/branding-works" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Petrol Station Branding Works Kenya",
          description: "Forecourt branding, canopy signage, pump livery and wayfinding installation for petrol stations in Kenya.",
          url: "https://dzizipetroleum.co.ke/services/branding-works",
          provider: {
            "@type": "LocalBusiness",
            name: "D'Zizi Petroleum Services Limited",
            url: "https://dzizipetroleum.co.ke",
            telephone: "+254702587919",
          },
          areaServed: { "@type": "Country", name: "Kenya" },
          serviceType: "Petrol Station Branding",
        }),
      },
    ],
  }),
});

function BrandingWorks() {
  return (
    <ServicePage
      title="Petrol Station Branding Works Kenya"
      tagline="Professional forecourt branding installation - canopy signage, pump livery, totem signs and site wayfinding for petrol stations across Kenya."
      description="First impressions matter at the forecourt. D'Zizi Petroleum Services installs complete branding packages for new petrol stations and carries out rebranding works for operators changing flags or refreshing their image. We work to oil company brand manuals and independent operator specifications."
      image={img}
      imageAlt="Petrol station branding Kenya"
      bullets={[
        "Canopy fascia signage and branding panels",
        "Illuminated totem and pylon signs",
        "Dispenser and pump island livery",
        "Price sign boards (LED and illuminated)",
        "Site entrance and wayfinding signs",
        "Forecourt floor marking and lane delineation",
        "Kiosk and shop front branding",
        "Oil company brand manual compliance",
        "Rebranding and flag change works",
        "Signage maintenance and bulb replacement",
      ]}
      faqs={[
        {
          q: "Can you work to our oil company's brand guidelines?",
          a: "Yes. We work to brand manuals and technical drawings from oil marketing companies, ensuring all signage meets brand specifications.",
        },
        {
          q: "Do you do rebranding when a station changes its flag?",
          a: "Yes. We remove old brand elements and install new brand identity as part of flag change projects.",
        },
        {
          q: "Can you supply the signage as well as install it?",
          a: "Yes. We can procure signage from approved suppliers or work with materials supplied by the client.",
        },
      ]}
    />
  );
}
