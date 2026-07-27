import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import img from "@/assets/projects/sales.jpg";

export const Route = createFileRoute("/services/petrol-station-equipment-supply")({
  component: PetrolStationEquipmentSupply,
  head: () => ({
    meta: [
      { title: "Petrol Station Equipment Supply & Maintenance Kenya | D'Zizi Petroleum" },
      {
        name: "description",
        content:
          "Complete supply, installation and lifecycle maintenance for petrol station equipment in Kenya. Tanks, pumps, dispensers and more. D'Zizi Petroleum +254 702 587 919.",
      },
      { property: "og:title", content: "Petrol Station Equipment Supply Kenya | D'Zizi Petroleum" },
      { property: "og:url", content: "https://dzizipetroleum.co.ke/services/petrol-station-equipment-supply" },
    ],
    links: [{ rel: "canonical", href: "https://dzizipetroleum.co.ke/services/petrol-station-equipment-supply" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Petrol Station Equipment Supply & Maintenance Kenya",
          description: "Comprehensive supply, installation and ongoing maintenance for all petrol station equipment in Kenya.",
          url: "https://dzizipetroleum.co.ke/services/petrol-station-equipment-supply",
          provider: {
            "@type": "LocalBusiness",
            name: "D'Zizi Petroleum Services Limited",
            url: "https://dzizipetroleum.co.ke",
            telephone: "+254702587919",
          },
          areaServed: { "@type": "Country", name: "Kenya" },
          serviceType: "Petrol Station Equipment Supply",
        }),
      },
    ],
  }),
});

function PetrolStationEquipmentSupply() {
  return (
    <ServicePage
      title="Petrol Station Equipment Supply & Maintenance Kenya"
      tagline="From initial supply through installation to ongoing maintenance - D'Zizi Petroleum Services is your single partner for all petrol station equipment across Kenya."
      description="Managing multiple suppliers for different equipment types adds complexity and risk. D'Zizi Petroleum Services provides a complete one-stop solution: we supply, install, commission and maintain all equipment types used in modern Kenyan petrol stations. One contract, one point of contact, full accountability."
      image={img}
      imageAlt="Petrol station equipment supply Kenya"
      bullets={[
        "Underground and above-ground storage tanks",
        "Fuel dispensers and accessories",
        "Submersible pumps and suction systems",
        "Automatic Tank Gauges (ATGs)",
        "Air compressors and accessories",
        "Standby generators",
        "Fire suppression and safety equipment",
        "Installation and commissioning of all supplied equipment",
        "Ongoing maintenance contracts",
        "Spare parts supply and stocking",
      ]}
      faqs={[
        {
          q: "Can you manage the full lifecycle of petrol station equipment?",
          a: "Yes. We handle supply, installation, commissioning, ongoing maintenance and eventual replacement - providing a complete lifecycle management service.",
        },
        {
          q: "Do you stock spare parts?",
          a: "Yes. We maintain stocks of common spare parts to minimise equipment downtime.",
        },
        {
          q: "How do I get a comprehensive quote for equipping my station?",
          a: "Call or WhatsApp +254 702 587 919 or fill in our contact form with your station details. We'll arrange a site visit and prepare a detailed equipment list and pricing.",
        },
      ]}
    />
  );
}
