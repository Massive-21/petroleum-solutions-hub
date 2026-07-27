import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import img from "@/assets/projects/installation.jpg";

export const Route = createFileRoute("/services/petrol-station-installation")({
  component: PetrolStationInstallation,
  head: () => ({
    meta: [
      { title: "Petrol Station Installation Kenya | D'Zizi Petroleum Services" },
      {
        name: "description",
        content:
          "D'Zizi Petroleum Services installs complete petrol stations across Kenya - tanks, dispensers, piping, canopy and EPRA commissioning. Call +254 702 587 919 for a free quote.",
      },
      { property: "og:title", content: "Petrol Station Installation Kenya | D'Zizi Petroleum" },
      { property: "og:url", content: "https://dzizipetroleum.co.ke/services/petrol-station-installation" },
    ],
    links: [{ rel: "canonical", href: "https://dzizipetroleum.co.ke/services/petrol-station-installation" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Petrol Station Installation Kenya",
          description:
            "End-to-end petrol station installation in Kenya including underground tank supply, fuel line laying, dispenser installation, canopy works and EPRA commissioning.",
          url: "https://dzizipetroleum.co.ke/services/petrol-station-installation",
          provider: {
            "@type": "LocalBusiness",
            name: "D'Zizi Petroleum Services Limited",
            url: "https://dzizipetroleum.co.ke",
            telephone: "+254702587919",
          },
          areaServed: { "@type": "Country", name: "Kenya" },
          serviceType: "Petrol Station Installation",
        }),
      },
    ],
  }),
});

function PetrolStationInstallation() {
  return (
    <ServicePage
      title="Petrol Station Installation Kenya"
      tagline="D'Zizi Petroleum Services builds complete petrol stations from the ground up - from site survey through EPRA commissioning - across all of Kenya."
      description="We handle every stage of petrol station installation in Kenya: civil works coordination, underground tank installation, fuel line laying, dispenser fitting, canopy setup and EPRA inspection readiness. Our certified technicians have delivered successful builds in Nairobi, Mombasa, Kisumu, Eldoret, Nakuru and towns across Kenya."
      image={img}
      imageAlt="Petrol station installation Kenya"
      bullets={[
        "Site survey and feasibility assessment",
        "Civil works and tank pit excavation coordination",
        "Underground storage tank (UST) installation",
        "Above-ground storage tank (AST) installation",
        "Fuel line (suction, breather, offloading) installation",
        "Fuel dispenser installation and commissioning",
        "Canopy and forecourt layout coordination",
        "Generator and electrical system connection",
        "Automatic Tank Gauge (ATG) system setup",
        "EPRA inspection readiness and documentation support",
      ]}
      process={[
        { step: "Site Assessment", desc: "We visit your site, assess soil conditions, layout and regulatory requirements before any work begins." },
        { step: "Design & Procurement", desc: "We finalise the equipment list, prepare drawings and procure EPRA-aligned tanks and dispensers." },
        { step: "Installation", desc: "Our certified teams install tanks, pipework, dispensers and electrical systems to specification." },
        { step: "Commissioning", desc: "We test all systems, carry out hydrotesting and calibration, and prepare your EPRA documentation." },
      ]}
      faqs={[
        {
          q: "How long does petrol station installation take in Kenya?",
          a: "A standard petrol station installation takes 4–12 weeks depending on site complexity, civil works and equipment availability. EPRA licensing timelines vary and we help clients prepare to minimise delays.",
        },
        {
          q: "What is the cost of installing a petrol station in Kenya?",
          a: "Costs depend on site size, number of tanks, number of dispensers and equipment specifications. Contact us on +254 702 587 919 for a detailed, no-obligation quote.",
        },
        {
          q: "Do you install petrol stations outside Nairobi?",
          a: "Yes. We cover all 47 counties including Mombasa, Kisumu, Eldoret, Nakuru, Thika, Nyeri, Meru and all major towns across Kenya.",
        },
        {
          q: "Are your installations EPRA compliant?",
          a: "Yes. All our installations meet EPRA (Energy and Petroleum Regulatory Authority) technical standards and we support clients through the full EPRA inspection and licensing process.",
        },
        {
          q: "Do you also supply the equipment you install?",
          a: "Yes. We are a one-stop shop - we supply EPRA-aligned tanks, dispensers, pumps and accessories, and install them ourselves.",
        },
      ]}
    />
  );
}
