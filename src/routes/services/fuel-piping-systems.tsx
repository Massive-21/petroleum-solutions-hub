import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import img from "@/assets/projects/line.jpeg";

export const Route = createFileRoute("/services/fuel-piping-systems")({
  component: FuelPipingSystems,
  head: () => ({
    meta: [
      { title: "Fuel Piping Systems Kenya | Suction, Vent & Offloading Lines | D'Zizi Petroleum" },
      {
        name: "description",
        content:
          "Fuel piping installation, repairs and maintenance in Kenya. Suction lines, vent lines, offloading lines - EPRA-compliant installation and pressure testing. D'Zizi Petroleum +254 702 587 919.",
      },
      { property: "og:title", content: "Fuel Piping Systems Kenya | D'Zizi Petroleum" },
      { property: "og:url", content: "https://dzizipetroleum.co.ke/services/fuel-piping-systems" },
    ],
    links: [{ rel: "canonical", href: "https://dzizipetroleum.co.ke/services/fuel-piping-systems" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Fuel Piping Systems Kenya",
          description:
            "Installation, repair and maintenance of suction lines, vent lines and offloading pipework for petrol stations and fuel storage facilities in Kenya.",
          url: "https://dzizipetroleum.co.ke/services/fuel-piping-systems",
          provider: {
            "@type": "LocalBusiness",
            name: "D'Zizi Petroleum Services Limited",
            url: "https://dzizipetroleum.co.ke",
            telephone: "+254702587919",
          },
          areaServed: { "@type": "Country", name: "Kenya" },
          serviceType: "Fuel Piping Installation",
        }),
      },
    ],
  }),
});

function FuelPipingSystems() {
  return (
    <ServicePage
      title="Fuel Piping Systems Kenya"
      tagline="We install, repair and maintain suction lines, vent lines and offloading pipework for petrol stations and fuel storage facilities across Kenya."
      description="Correct pipe routing and installation is critical to petrol station safety and performance. D'Zizi Petroleum uses HDPE and flexible double-wall pipe systems installed to EPRA specifications. We handle all line types - suction, product, vent, offloading and fill - and carry out pressure testing and leak detection on completion."
      image={img}
      imageAlt="Fuel piping system installation Kenya"
      bullets={[
        "Suction line installation from tank to dispenser",
        "Product line and manifold installation",
        "Vent and breather line installation",
        "Offloading / fill pipe installation and fittings",
        "HDPE and double-wall flexible piping systems",
        "Tank sump and dispenser sump installation",
        "Pipe pressure testing and leak detection",
        "Existing line repairs and partial replacement",
        "Line marking and EPRA-compliant labelling",
        "Planned maintenance and periodic inspections",
      ]}
      process={[
        { step: "Survey", desc: "We map existing or planned pipe routes, identify material requirements and plan the installation sequence." },
        { step: "Installation", desc: "Pipes are trenched, laid, connected and backfilled to specification." },
        { step: "Pressure Test", desc: "All lines are pressure-tested before commissioning. We issue a certified test report." },
        { step: "Handover", desc: "Lines are labelled, documented and handed over with as-built drawings where required." },
      ]}
      faqs={[
        {
          q: "What pipe materials do you use for petrol station lines in Kenya?",
          a: "We use EPRA-approved materials: double-wall HDPE for underground product lines and standard HDPE for vent and fill lines, with flexible pipe systems for connections at tank sumps and dispenser sumps.",
        },
        {
          q: "Can you repair a leaking fuel line?",
          a: "Yes. We diagnose the leak, isolate the affected section and carry out repair or replacement. We re-test after repair and issue a new pressure test certificate.",
        },
        {
          q: "How often should fuel lines be pressure tested?",
          a: "EPRA recommends periodic pressure testing. We carry out pre-commissioning tests on new lines and periodic integrity checks on existing systems as part of maintenance contracts.",
        },
      ]}
    />
  );
}
