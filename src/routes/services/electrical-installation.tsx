import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import img from "@/assets/projects/petrol.jpeg";

export const Route = createFileRoute("/services/electrical-installation")({
  component: ElectricalInstallation,
  head: () => ({
    meta: [
      { title: "Petrol Station Electrical Installation Kenya | D'Zizi Petroleum" },
      {
        name: "description",
        content:
          "Electrical installation, wiring and commissioning for petrol station forecourts in Kenya. Control panels, lighting and dispenser wiring. D'Zizi Petroleum +254 702 587 919.",
      },
      { property: "og:title", content: "Petrol Station Electrical Installation Kenya | D'Zizi Petroleum" },
      { property: "og:url", content: "https://dzizipetroleum.co.ke/services/electrical-installation" },
    ],
    links: [{ rel: "canonical", href: "https://dzizipetroleum.co.ke/services/electrical-installation" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Petrol Station Electrical Installation Kenya",
          description: "Electrical systems design, installation and commissioning for petrol station forecourts in Kenya.",
          url: "https://dzizipetroleum.co.ke/services/electrical-installation",
          provider: {
            "@type": "LocalBusiness",
            name: "D'Zizi Petroleum Services Limited",
            url: "https://dzizipetroleum.co.ke",
            telephone: "+254702587919",
          },
          areaServed: { "@type": "Country", name: "Kenya" },
          serviceType: "Electrical Installation",
        }),
      },
    ],
  }),
});

function ElectricalInstallation() {
  return (
    <ServicePage
      title="Petrol Station Electrical Installation Kenya"
      tagline="Electrical systems design, installation and commissioning for petrol station forecourts - wiring, control panels, lighting and generator integration across Kenya."
      description="A petrol station's electrical system must meet EPRA safety requirements and provide reliable power to dispensers, pumps, ATGs and lighting. D'Zizi Petroleum Services installs complete electrical systems for new stations and upgrades existing systems for refurbishments."
      image={img}
      imageAlt="Petrol station electrical installation Kenya"
      bullets={[
        "Forecourt electrical design and load calculation",
        "Main distribution board installation",
        "Dispenser power supply and earthing",
        "Submersible pump control panel supply and installation",
        "Canopy and forecourt lighting installation",
        "Generator transfer switch installation",
        "ATG and monitoring system wiring",
        "Emergency cut-off switch installation",
        "Earthing and lightning protection",
        "Electrical testing, certification and commissioning",
      ]}
      process={[
        { step: "Load Assessment & Design", desc: "We calculate the total electrical load for your forecourt - dispensers, pumps, ATG, lighting and generator - and produce a wiring layout and panel schedule." },
        { step: "Material Supply", desc: "We procure the correct cable sizes, distribution boards, conduits, isolators and control panels, specifying explosion-proof fittings wherever required in hazardous zones." },
        { step: "Installation", desc: "Our qualified electricians install the main distribution board, run cabling, wire dispensers and pump panels, fit lighting and connect the generator transfer switch." },
        { step: "Testing & Commissioning", desc: "All circuits are tested for continuity, insulation resistance and correct operation. We certify the installation and commission each system before handover." },
      ]}
      faqs={[
        {
          q: "Do petrol station electrical installations require a licensed electrician?",
          a: "Yes. Electrical installations at petrol stations in Kenya must be carried out by qualified personnel and comply with the IEE Wiring Regulations and EPRA safety requirements.",
        },
        {
          q: "Can you upgrade the electrical system at an existing station?",
          a: "Yes. We carry out electrical upgrades and additions to existing petrol stations, including new dispenser circuits and generator integration.",
        },
        {
          q: "Do you install generator automatic transfer switches?",
          a: "Yes. We install automatic and manual transfer switches to connect standby generators to the forecourt electrical system.",
        },
      ]}
    />
  );
}
