import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import img from "@/assets/projects/petrol-station.jpg";

export const Route = createFileRoute("/services/canopy-fabrication-installation")({
  component: CanopyFabricationInstallation,
  head: () => ({
    meta: [
      { title: "Petrol Station Canopy Fabrication & Installation Kenya | D'Zizi Petroleum" },
      {
        name: "description",
        content:
          "Custom forecourt canopy design, fabrication and installation for petrol stations in Kenya. Durable steel canopies. D'Zizi Petroleum Services +254 702 587 919.",
      },
      { property: "og:title", content: "Canopy Fabrication & Installation Kenya | D'Zizi Petroleum" },
      { property: "og:url", content: "https://dzizipetroleum.co.ke/services/canopy-fabrication-installation" },
    ],
    links: [{ rel: "canonical", href: "https://dzizipetroleum.co.ke/services/canopy-fabrication-installation" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Petrol Station Canopy Fabrication & Installation Kenya",
          description: "Design, fabrication and on-site installation of petrol station forecourt canopies in Kenya.",
          url: "https://dzizipetroleum.co.ke/services/canopy-fabrication-installation",
          provider: {
            "@type": "LocalBusiness",
            name: "D'Zizi Petroleum Services Limited",
            url: "https://dzizipetroleum.co.ke",
            telephone: "+254702587919",
          },
          areaServed: { "@type": "Country", name: "Kenya" },
          serviceType: "Canopy Fabrication and Installation",
        }),
      },
    ],
  }),
});

function CanopyFabricationInstallation() {
  return (
    <ServicePage
      title="Canopy Fabrication & Installation Kenya"
      tagline="Custom forecourt canopy design, steel fabrication and on-site installation for petrol stations and commercial fuel sites across Kenya."
      description="A well-designed forecourt canopy protects customers and equipment while projecting a professional brand image. D'Zizi Petroleum Services designs, fabricates and installs durable steel canopies for new and existing petrol station forecourts across Kenya."
      image={img}
      imageAlt="Petrol station canopy installation Kenya"
      bullets={[
        "Custom canopy design to forecourt dimensions",
        "Structural steel fabrication",
        "Column and beam installation on concrete footings",
        "Roof sheeting and waterproofing",
        "Canopy lighting installation (LED and fluorescent)",
        "Brand signage integration on canopy fascia",
        "Canopy repair and refurbishment",
        "Painting and anti-corrosion finishing",
        "Coordination with civil works and electrical teams",
        "Nationwide installation across Kenya",
      ]}
      faqs={[
        {
          q: "How long does canopy fabrication and installation take?",
          a: "Fabrication typically takes 2–4 weeks depending on size and complexity. On-site installation takes 3–7 days. We can give a more precise timeline after a site survey.",
        },
        {
          q: "Can you match our oil company brand canopy specifications?",
          a: "Yes. We fabricate to client drawings and brand specifications for oil marketing company livery.",
        },
        {
          q: "Do you repair or refurbish existing canopies?",
          a: "Yes. We repair structural damage, replace roof sheeting and repaint canopies as part of refurbishment projects.",
        },
      ]}
    />
  );
}
