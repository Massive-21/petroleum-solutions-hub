import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import img from "@/assets/projects/tanker.jpeg";

export const Route = createFileRoute("/services/transportation")({
  component: Transportation,
  head: () => ({
    meta: [
      { title: "Petroleum Equipment Transportation Kenya | D'Zizi Petroleum" },
      {
        name: "description",
        content:
          "Safe and insured transportation of petroleum equipment, tanks and heavy parts across Kenya. Logistics support for petrol station projects. D'Zizi Petroleum +254 702 587 919.",
      },
      { property: "og:title", content: "Petroleum Equipment Transportation Kenya | D'Zizi Petroleum" },
      { property: "og:url", content: "https://dzizipetroleum.co.ke/services/transportation" },
    ],
    links: [{ rel: "canonical", href: "https://dzizipetroleum.co.ke/services/transportation" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Petroleum Equipment Transportation Kenya",
          description: "Safe, insured logistics and transportation of petroleum equipment and heavy parts across Kenya.",
          url: "https://dzizipetroleum.co.ke/services/transportation",
          provider: {
            "@type": "LocalBusiness",
            name: "D'Zizi Petroleum Services Limited",
            url: "https://dzizipetroleum.co.ke",
            telephone: "+254702587919",
          },
          areaServed: { "@type": "Country", name: "Kenya" },
          serviceType: "Equipment Transportation",
        }),
      },
    ],
  }),
});

function Transportation() {
  return (
    <ServicePage
      title="Petroleum Equipment Transportation Kenya"
      tagline="Safe, insured transportation of petroleum equipment, underground tanks, dispensers and heavy parts to any location across Kenya."
      description="Moving large petroleum equipment requires specialist logistics. D'Zizi Petroleum Services coordinates safe transport of underground storage tanks, above-ground tanks, dispensers and heavy equipment to client sites across Kenya. We ensure correct handling, packaging and delivery."
      image={img}
      imageAlt="Petroleum equipment transportation Kenya"
      bullets={[
        "Underground tank transportation (10,000 L – 40,000 L)",
        "Above-ground tank logistics",
        "Fuel dispenser delivery and off-loading",
        "Heavy machinery transport",
        "Secure packaging and load restraint",
        "Equipment handling on delivery",
        "Nationwide delivery to all counties",
        "Coordination with installation teams",
        "Insured loads",
        "Emergency delivery for urgent projects",
      ]}
      process={[
        { step: "Enquiry & Booking", desc: "Contact us with the equipment type, size, origin and destination. We confirm vehicle availability, agree a collection date and arrange insurance cover for the load." },
        { step: "Load Planning", desc: "We select the right transport vehicle - flatbed, low-loader or crane truck - and plan the route, permits and handling equipment needed for safe movement." },
        { step: "Collection & Transit", desc: "Equipment is carefully loaded, secured with proper restraints and transported by our experienced drivers, with real-time coordination between our logistics and installation teams." },
        { step: "Delivery & Handover", desc: "We off-load at the destination site using appropriate equipment, confirm condition on arrival and hand over to your team or our installation crew ready to proceed." },
      ]}
      faqs={[
        {
          q: "Do you transport underground tanks across Kenya?",
          a: "Yes. We arrange specialist transport for fibreglass and steel underground tanks to any site in Kenya.",
        },
        {
          q: "Is the equipment insured during transit?",
          a: "Yes. We coordinate insured transport for all petroleum equipment deliveries.",
        },
        {
          q: "Can you deliver equipment to remote areas?",
          a: "Yes. We have experience delivering to remote construction sites, farms and facilities across Kenya's counties.",
        },
      ]}
    />
  );
}
