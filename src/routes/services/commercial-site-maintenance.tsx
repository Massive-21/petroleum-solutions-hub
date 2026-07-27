import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import img from "@/assets/projects/commercial.jpg";

export const Route = createFileRoute("/services/commercial-site-maintenance")({
  component: CommercialSiteMaintenance,
  head: () => ({
    meta: [
      { title: "Commercial Site Fuel System Maintenance Kenya | D'Zizi Petroleum" },
      {
        name: "description",
        content:
          "Fuel system maintenance for depots, fleet yards, factories and industrial sites in Kenya. Bulk storage, pump servicing and compliance. D'Zizi Petroleum +254 702 587 919.",
      },
      { property: "og:title", content: "Commercial Site Fuel System Maintenance Kenya | D'Zizi Petroleum" },
      { property: "og:url", content: "https://dzizipetroleum.co.ke/services/commercial-site-maintenance" },
    ],
    links: [{ rel: "canonical", href: "https://dzizipetroleum.co.ke/services/commercial-site-maintenance" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Commercial Site Fuel System Maintenance Kenya",
          description: "Maintenance contracts for fuel storage and dispensing systems at commercial depots, fleet yards, factories and industrial sites across Kenya.",
          url: "https://dzizipetroleum.co.ke/services/commercial-site-maintenance",
          provider: {
            "@type": "LocalBusiness",
            name: "D'Zizi Petroleum Services Limited",
            url: "https://dzizipetroleum.co.ke",
            telephone: "+254702587919",
          },
          areaServed: { "@type": "Country", name: "Kenya" },
          serviceType: "Commercial Fuel System Maintenance",
        }),
      },
    ],
  }),
});

function CommercialSiteMaintenance() {
  return (
    <ServicePage
      title="Commercial Site Fuel System Maintenance Kenya"
      tagline="Maintenance contracts for fuel depots, fleet yards, factories, farms and industrial sites - keeping your bulk fuel storage and dispensing systems reliable across Kenya."
      description="Commercial operators who maintain their own fuel infrastructure face the same maintenance challenges as petrol stations, often with more stringent operational requirements. D'Zizi Petroleum Services provides scheduled and emergency maintenance for commercial fuel systems at any scale, across Kenya."
      image={img}
      imageAlt="Commercial site fuel system maintenance Kenya"
      bullets={[
        "Fuel depot bulk storage tank maintenance",
        "Fleet refuelling point servicing",
        "Commercial pump and meter calibration",
        "Transfer pump and suction system maintenance",
        "Bulk storage ATG checks and calibration",
        "Fuel line inspection and pressure testing",
        "Emergency breakdown response 24/7",
        "Routine compliance and safety inspections",
        "Maintenance reporting and records",
        "Generator and backup power system servicing",
      ]}
      process={[
        { step: "Site Audit", desc: "We carry out a thorough audit of your fuel storage tanks, pipework, dispensing points and safety systems, documenting equipment condition and any immediate risks." },
        { step: "Maintenance Plan", desc: "Based on the audit, we agree a scheduled maintenance plan with you - setting visit frequency, scope of each service and response time commitments for breakdowns." },
        { step: "Scheduled Servicing", desc: "Our technicians carry out planned visits: pump servicing, filter changes, calibration checks, ATG verification and safety inspections on the agreed schedule." },
        { step: "Reporting & Review", desc: "After each visit we provide a written service report. We review the plan with you periodically, updating scope as your site's needs or compliance requirements change." },
      ]}
      faqs={[
        {
          q: "Do you maintain fuel systems at mining and construction sites?",
          a: "Yes. We service fuel storage and dispensing infrastructure at remote sites across Kenya, including mining, construction and agricultural operations.",
        },
        {
          q: "Can you maintain systems installed by other contractors?",
          a: "Yes. We take over maintenance contracts from other providers and service equipment of all brands and ages.",
        },
        {
          q: "Do you offer annual maintenance contracts?",
          a: "Yes. We offer annual contracts with scheduled visits and priority emergency response. Contact us for a tailored quote.",
        },
      ]}
    />
  );
}
