import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import img from "@/assets/projects/standards.jpeg";

export const Route = createFileRoute("/services/epra-compliance")({
  component: EpraCompliance,
  head: () => ({
    meta: [
      { title: "EPRA Compliance Support Kenya | Petrol Station Licensing | D'Zizi Petroleum" },
      {
        name: "description",
        content:
          "EPRA compliance and licensing support for petrol stations in Kenya. Technical documentation, inspection readiness and regulatory guidance. D'Zizi Petroleum +254 702 587 919.",
      },
      { property: "og:title", content: "EPRA Compliance Support Kenya | D'Zizi Petroleum" },
      { property: "og:url", content: "https://dzizipetroleum.co.ke/services/epra-compliance" },
    ],
    links: [{ rel: "canonical", href: "https://dzizipetroleum.co.ke/services/epra-compliance" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "EPRA Compliance Support Kenya",
          description:
            "Technical compliance support for petrol station operators in Kenya - EPRA licensing documentation, inspection readiness, equipment certification and regulatory guidance.",
          url: "https://dzizipetroleum.co.ke/services/epra-compliance",
          provider: {
            "@type": "LocalBusiness",
            name: "D'Zizi Petroleum Services Limited",
            url: "https://dzizipetroleum.co.ke",
            telephone: "+254702587919",
          },
          areaServed: { "@type": "Country", name: "Kenya" },
          serviceType: "EPRA Compliance Consulting",
        }),
      },
    ],
  }),
});

function EpraCompliance() {
  return (
    <ServicePage
      title="EPRA Compliance Support Kenya"
      tagline="We guide petrol station owners and operators through Kenya's EPRA licensing process - from equipment selection to inspection day, ensuring everything is in order."
      description="The Energy and Petroleum Regulatory Authority (EPRA) regulates all petroleum retail operations in Kenya under the Petroleum Act 2019. Meeting EPRA's technical requirements - correct equipment, proper installation, valid test certificates - is mandatory. D'Zizi Petroleum Services has extensive experience helping clients achieve and maintain EPRA compliance across Kenya."
      image={img}
      imageAlt="EPRA compliance support Kenya"
      bullets={[
        "EPRA technical requirement assessment for new sites",
        "Equipment selection to meet EPRA specifications",
        "Hydrotest certificates for tanks and pipework",
        "WMA calibration certificates for storage tanks",
        "Dispenser calibration documentation",
        "Site layout drawings and technical file preparation",
        "Pre-inspection walk-through and snag list resolution",
        "Support on EPRA inspection day",
        "Compliance remediation for failing sites",
        "Ongoing regulatory guidance and advisory",
      ]}
      process={[
        { step: "Compliance Audit", desc: "We assess your existing site or plans against current EPRA technical requirements and identify gaps." },
        { step: "Remediation Plan", desc: "We prepare a prioritised action plan covering equipment, documentation and installation corrections needed." },
        { step: "Implementation", desc: "We carry out or coordinate required works: hydrotesting, calibration, equipment replacement and documentation." },
        { step: "Inspection Support", desc: "We attend or brief your team for the EPRA inspection, ensuring all required documents are present and deficiencies resolved." },
      ]}
      faqs={[
        {
          q: "What does EPRA stand for in Kenya?",
          a: "EPRA stands for Energy and Petroleum Regulatory Authority. It is Kenya's regulator for the energy and petroleum sector, established under the Energy Act 2019 and Petroleum Act 2019.",
        },
        {
          q: "What documents does EPRA require to license a petrol station?",
          a: "EPRA requires, among other things: a hydrotest certificate for tanks, a WMA calibration certificate, a site plan, evidence of NEMA environmental clearance, NCA contractor registration and a county business permit. Requirements may be updated - we stay current and guide clients accordingly.",
        },
        {
          q: "My petrol station failed an EPRA inspection - can you help?",
          a: "Yes. We carry out compliance audits, identify the specific deficiencies and implement corrective works to prepare you for re-inspection. Call +254 702 587 919.",
        },
        {
          q: "Are you registered with EPRA?",
          a: "D'Zizi Petroleum Services operates in full compliance with EPRA requirements. Contact us to discuss your specific compliance situation.",
        },
      ]}
    />
  );
}
