import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import img from "@/assets/projects/equipment.jpg";

export const Route = createFileRoute("/services/petroleum-equipment-sales")({
  component: PetroleumEquipmentSales,
  head: () => ({
    meta: [
      { title: "Petroleum Equipment Sales Kenya | Tanks, Dispensers, Pumps | D'Zizi Petroleum" },
      {
        name: "description",
        content:
          "EPRA-aligned petroleum equipment supply in Kenya: underground tanks, fuel dispensers, submersible pumps, ATGs, generators and more. D'Zizi Petroleum +254 702 587 919.",
      },
      { property: "og:title", content: "Petroleum Equipment Sales Kenya | D'Zizi Petroleum" },
      { property: "og:url", content: "https://dzizipetroleum.co.ke/services/petroleum-equipment-sales" },
    ],
    links: [{ rel: "canonical", href: "https://dzizipetroleum.co.ke/services/petroleum-equipment-sales" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Petroleum Equipment Sales Kenya",
          description: "Supply of EPRA-aligned petroleum equipment in Kenya including underground tanks, fuel dispensers, pumps, ATGs and generators.",
          url: "https://dzizipetroleum.co.ke/services/petroleum-equipment-sales",
          provider: {
            "@type": "LocalBusiness",
            name: "D'Zizi Petroleum Services Limited",
            url: "https://dzizipetroleum.co.ke",
            telephone: "+254702587919",
          },
          areaServed: { "@type": "Country", name: "Kenya" },
          serviceType: "Petroleum Equipment Supply",
        }),
      },
    ],
  }),
});

function PetroleumEquipmentSales() {
  return (
    <ServicePage
      title="Petroleum Equipment Sales Kenya"
      tagline="We supply a complete range of EPRA-aligned petroleum equipment - tanks, dispensers, pumps, ATGs, compressors and generators - delivered nationwide across Kenya."
      description="D'Zizi Petroleum Services is a trusted supplier of petroleum equipment in Kenya. We source quality, EPRA-compliant products and can supply equipment only or as part of a full installation package. Our team advises on the right specification for your throughput, site size and budget."
      image={img}
      imageAlt="Petroleum equipment sales Kenya"
      bullets={[
        "Double-wall fibreglass underground storage tanks (USTs)",
        "Above-ground steel storage tanks (ASTs) - 5,000 L to 200,000 L",
        "Single and multi-product fuel dispensers",
        "Submersible and suction pumps",
        "Automatic Tank Gauges (ATGs) and probes",
        "Air compressors and tyre inflators",
        "Standby generators (diesel and petrol)",
        "Fuel management systems",
        "Fire safety equipment (extinguishers, foam systems)",
        "Manhole covers, spill buckets and overfill valves",
      ]}
      faqs={[
        {
          q: "Do you supply equipment only, or do you also install?",
          a: "Both. We can supply equipment only for clients with their own installation teams, or provide a complete turnkey package including supply, installation and commissioning.",
        },
        {
          q: "Are your tanks and dispensers EPRA approved?",
          a: "Yes. All equipment we supply meets EPRA technical specifications for petroleum storage and dispensing in Kenya.",
        },
        {
          q: "Can you deliver equipment to locations outside Nairobi?",
          a: "Yes. We arrange delivery of equipment to all towns and counties across Kenya.",
        },
        {
          q: "How do I get a price for petroleum equipment?",
          a: "Call or WhatsApp +254 702 587 919 or fill in our contact form. We'll prepare a detailed quotation based on your requirements.",
        },
      ]}
    />
  );
}
