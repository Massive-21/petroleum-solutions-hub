import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import img from "@/assets/projects/pump.jpeg";

export const Route = createFileRoute("/services/fuel-dispenser-installation")({
  component: FuelDispenserInstallation,
  head: () => ({
    meta: [
      { title: "Fuel Dispenser Installation Kenya | D'Zizi Petroleum Services" },
      {
        name: "description",
        content:
          "Professional fuel dispenser installation in Kenya. Single and multi-product dispensers installed and commissioned by certified technicians. D'Zizi Petroleum - +254 702 587 919.",
      },
      { property: "og:title", content: "Fuel Dispenser Installation Kenya | D'Zizi Petroleum" },
      { property: "og:url", content: "https://dzizipetroleum.co.ke/services/fuel-dispenser-installation" },
    ],
    links: [{ rel: "canonical", href: "https://dzizipetroleum.co.ke/services/fuel-dispenser-installation" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Fuel Dispenser Installation Kenya",
          description: "Supply and installation of single and multi-product fuel dispensers for petrol stations across Kenya.",
          url: "https://dzizipetroleum.co.ke/services/fuel-dispenser-installation",
          provider: {
            "@type": "LocalBusiness",
            name: "D'Zizi Petroleum Services Limited",
            url: "https://dzizipetroleum.co.ke",
            telephone: "+254702587919",
          },
          areaServed: { "@type": "Country", name: "Kenya" },
          serviceType: "Fuel Dispenser Installation",
        }),
      },
    ],
  }),
});

function FuelDispenserInstallation() {
  return (
    <ServicePage
      title="Fuel Dispenser Installation Kenya"
      tagline="We supply, install and commission fuel dispensers for petrol stations across Kenya - single-product, multi-product and high-flow commercial units."
      description="Fuel dispensers are the revenue-generating heart of your petrol station. D'Zizi Petroleum Services installs and commissions dispensers to manufacturer specifications, ensures correct sub-pump connection, flow calibration and electronic configuration. We service all major brands used in Kenya and provide training for station staff."
      image={img}
      imageAlt="Fuel dispenser installation Kenya"
      bullets={[
        "Single-nozzle and twin-nozzle dispenser installation",
        "Multi-product dispensers (petrol, diesel, kerosene)",
        "High-flow dispensers for commercial and fleet sites",
        "Sub-pump connection and hydraulic commissioning",
        "Flow meter calibration to WMA standards",
        "Electronic display and pulse output configuration",
        "Fuel management system integration",
        "Nozzle, hose and breakaway fitting supply",
        "Staff training on dispenser operation",
        "Ongoing service and spares supply",
      ]}
      process={[
        { step: "Survey & Spec", desc: "We assess your throughput requirements and recommend the right dispenser model and number of nozzles." },
        { step: "Supply", desc: "We procure EPRA-aligned dispensers from trusted brands and deliver to site." },
        { step: "Installation", desc: "Dispensers are installed on concrete islands, connected to sub-pumps and wired to the electrical panel." },
        { step: "Calibration & Handover", desc: "Flow meters are calibrated to WMA standards, electronic settings configured and staff briefed." },
      ]}
      faqs={[
        {
          q: "Which dispenser brands do you install in Kenya?",
          a: "We install all major dispenser brands used in Kenya. Contact us to discuss your preferred brand or let us recommend based on your throughput and budget.",
        },
        {
          q: "Can you service and repair existing dispensers?",
          a: "Yes. We service, repair and recalibrate dispensers of all brands. We also stock common spare parts - nozzles, hoses, filters and internal components.",
        },
        {
          q: "How do you calibrate a fuel dispenser?",
          a: "We use certified test measures to check dispensed volume against the electronic reading, then adjust the pulse factor until accuracy is within WMA tolerances.",
        },
        {
          q: "Do you supply and install pre-payment dispensers?",
          a: "Yes. We can supply and configure pre-payment and fuel management system-linked dispensers for fleet and commercial sites.",
        },
      ]}
    />
  );
}
