import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import img from "@/assets/projects/petrol-station.jpg";

export const Route = createFileRoute("/services/underground-fuel-tank-installation")({
  component: UndergroundFuelTankInstallation,
  head: () => ({
    meta: [
      { title: "Underground Fuel Tank Installation Kenya | D'Zizi Petroleum" },
      {
        name: "description",
        content:
          "Expert underground fuel storage tank (UST) installation in Kenya. Double-wall fibreglass and steel tanks, EPRA-compliant. D'Zizi Petroleum - call +254 702 587 919.",
      },
      { property: "og:title", content: "Underground Fuel Tank Installation Kenya | D'Zizi Petroleum" },
      { property: "og:url", content: "https://dzizipetroleum.co.ke/services/underground-fuel-tank-installation" },
    ],
    links: [{ rel: "canonical", href: "https://dzizipetroleum.co.ke/services/underground-fuel-tank-installation" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Underground Fuel Tank Installation Kenya",
          description:
            "Supply and installation of double-wall fibreglass and steel underground fuel storage tanks (USTs) compliant with EPRA and NEMA standards in Kenya.",
          url: "https://dzizipetroleum.co.ke/services/underground-fuel-tank-installation",
          provider: {
            "@type": "LocalBusiness",
            name: "D'Zizi Petroleum Services Limited",
            url: "https://dzizipetroleum.co.ke",
            telephone: "+254702587919",
          },
          areaServed: { "@type": "Country", name: "Kenya" },
          serviceType: "Underground Storage Tank Installation",
        }),
      },
    ],
  }),
});

function UndergroundFuelTankInstallation() {
  return (
    <ServicePage
      title="Underground Fuel Tank Installation Kenya"
      tagline="We supply and install double-wall fibreglass and steel underground storage tanks (USTs) that meet EPRA and NEMA requirements across Kenya."
      description="Proper underground tank installation is the foundation of every safe petrol station. D'Zizi Petroleum Services supplies tanks in sizes from 10,000 to 40,000 litres and beyond, installs them to manufacturer specifications, and ensures full EPRA compliance. We handle excavation coordination, bedding, backfill, manhole and sump installation."
      image={img}
      imageAlt="Underground fuel tank installation Kenya"
      bullets={[
        "Double-wall fibreglass USTs - 10,000 L to 40,000 L and custom sizes",
        "Steel underground storage tanks",
        "Tank pit excavation and bedding coordination",
        "Correct anti-buoyancy backfill and compaction",
        "Manhole cover, sump and spill bucket installation",
        "Tank vent, fill and product pipe connections",
        "Overfill prevention valve and ATG probe installation",
        "Pre-commissioning leak and pressure testing",
        "EPRA and NEMA documentation support",
        "Post-installation site restoration",
      ]}
      process={[
        { step: "Tank Selection", desc: "We advise on tank size, material and configuration based on your throughput and site layout." },
        { step: "Excavation & Bedding", desc: "Tank pit is excavated to correct depth, bedding material placed and compacted to specification." },
        { step: "Tank Installation", desc: "Tank is lowered, positioned, backfilled and anti-buoyancy measures applied where required." },
        { step: "Connections & Testing", desc: "All pipework, sumps and ATG probes are connected. Pre-commissioning hydrotest is performed and certified." },
      ]}
      faqs={[
        {
          q: "What size underground tanks do you install in Kenya?",
          a: "We install tanks from 10,000 litres to 40,000 litres as standard, and can source larger custom tanks for high-throughput sites.",
        },
        {
          q: "Double-wall or single-wall tanks - which do you recommend?",
          a: "Double-wall (twin-walled) fibreglass tanks are the EPRA-preferred standard for new installations in Kenya, as they provide leak containment in the interstitial space and meet modern environmental requirements.",
        },
        {
          q: "Do you also handle the excavation?",
          a: "We coordinate with civil contractors for excavation and oversee the bedding and backfill to ensure the tank is correctly installed.",
        },
        {
          q: "What testing do you carry out after installation?",
          a: "We perform a pre-commissioning hydrotest on the tank and pipework, generate a certified test report, and prepare EPRA documentation.",
        },
      ]}
    />
  );
}
