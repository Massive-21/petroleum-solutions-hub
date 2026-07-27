import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import img from "@/assets/projects/pump.jpeg";

export const Route = createFileRoute("/services/pump-spare-parts")({
  component: PumpSpareParts,
  head: () => ({
    meta: [
      { title: "Fuel Pump & Dispenser Spare Parts Kenya | D'Zizi Petroleum" },
      {
        name: "description",
        content:
          "Genuine fuel pump and dispenser spare parts in Kenya: nozzles, hoses, filters, seals and internals. Fast supply across Kenya. D'Zizi Petroleum +254 702 587 919.",
      },
      { property: "og:title", content: "Pump Spare Parts Kenya | D'Zizi Petroleum" },
      { property: "og:url", content: "https://dzizipetroleum.co.ke/services/pump-spare-parts" },
    ],
    links: [{ rel: "canonical", href: "https://dzizipetroleum.co.ke/services/pump-spare-parts" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Fuel Pump Spare Parts Kenya",
          description: "Supply of genuine spare parts for fuel dispensers and submersible pumps across Kenya.",
          url: "https://dzizipetroleum.co.ke/services/pump-spare-parts",
          provider: {
            "@type": "LocalBusiness",
            name: "D'Zizi Petroleum Services Limited",
            url: "https://dzizipetroleum.co.ke",
            telephone: "+254702587919",
          },
          areaServed: { "@type": "Country", name: "Kenya" },
          serviceType: "Pump Spare Parts Supply",
        }),
      },
    ],
  }),
});

function PumpSpareParts() {
  return (
    <ServicePage
      title="Fuel Pump & Dispenser Spare Parts Kenya"
      tagline="We stock and supply a wide range of genuine spare parts for fuel dispensers and submersible pumps across Kenya - minimising your station downtime."
      description="When a dispenser or submersible pump fails, speed of repair depends on parts availability. D'Zizi Petroleum Services maintains stock of common consumables and spares for major equipment brands used in Kenya. We can supply parts only or supply with installation."
      image={img}
      imageAlt="Pump spare parts Kenya"
      bullets={[
        "Dispenser nozzles (automatic and manual)",
        "Fuel delivery hoses and swivel joints",
        "Breakaway couplings",
        "Flow meters and pulse units",
        "Dispenser internal filters and strainers",
        "Dispenser display boards and electronics",
        "Submersible pump motors and impellers",
        "Pump couplers and foot valves",
        "Check valves and solenoid valves",
        "ATG probes and sensor components",
      ]}
      process={[
        { step: "Parts Identification", desc: "Tell us your dispenser or pump brand, model and the specific fault or part needed. If you're unsure, describe the symptom and our technicians will help identify the correct component." },
        { step: "Stock Check & Quote", desc: "We check our stock and, if the part is not on the shelf, source it from our supplier network. We confirm availability, price and estimated delivery time before you commit." },
        { step: "Dispatch to Site", desc: "In-stock parts are dispatched same day or next day to your location across Kenya. Urgent orders can be prioritised - call us directly on +254 702 587 919 for fast-track requests." },
        { step: "Fitment (Optional)", desc: "If you need the part installed, our field technicians can travel to your site to fit and test the component, getting your dispenser or pump back in service as quickly as possible." },
      ]}
      faqs={[
        {
          q: "Do you supply parts for all dispenser brands?",
          a: "We stock parts for the most common dispenser brands in Kenya. Contact us with your brand and model to check availability.",
        },
        {
          q: "Can you supply parts and also fit them?",
          a: "Yes. We can supply parts only, or supply and install - whatever suits your team's capability.",
        },
        {
          q: "How fast can you deliver spare parts in Kenya?",
          a: "For stocked items, we can often arrange same-day or next-day dispatch. Call +254 702 587 919 to check availability of the part you need.",
        },
      ]}
    />
  );
}
