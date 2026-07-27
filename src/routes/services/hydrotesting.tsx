import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import img from "@/assets/projects/hydrotesting.jpg";

export const Route = createFileRoute("/services/hydrotesting")({
  component: Hydrotesting,
  head: () => ({
    meta: [
      { title: "Tank Hydrotesting Kenya | Pre-Commissioning & Periodic Pressure Testing | D'Zizi Petroleum" },
      {
        name: "description",
        content:
          "Hydrotesting services for petroleum tanks in Kenya - pre-commissioning and periodic pressure testing with certified reports. EPRA-accepted. D'Zizi Petroleum +254 702 587 919.",
      },
      { property: "og:title", content: "Tank Hydrotesting Kenya | D'Zizi Petroleum" },
      { property: "og:url", content: "https://dzizipetroleum.co.ke/services/hydrotesting" },
    ],
    links: [{ rel: "canonical", href: "https://dzizipetroleum.co.ke/services/hydrotesting" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Tank Hydrotesting Kenya",
          description:
            "Pre-commissioning and periodic pressure testing (hydrotesting) of underground and above-ground petroleum storage tanks in Kenya, with EPRA-accepted certificates.",
          url: "https://dzizipetroleum.co.ke/services/hydrotesting",
          provider: {
            "@type": "LocalBusiness",
            name: "D'Zizi Petroleum Services Limited",
            url: "https://dzizipetroleum.co.ke",
            telephone: "+254702587919",
          },
          areaServed: { "@type": "Country", name: "Kenya" },
          serviceType: "Tank Hydrotesting",
        }),
      },
    ],
  }),
});

function Hydrotesting() {
  return (
    <ServicePage
      title="Tank Hydrotesting Kenya"
      tagline="Pre-commissioning and periodic pressure testing for petroleum storage tanks across Kenya - certified reports accepted by EPRA, NEMA and insurance providers."
      description="Hydrotesting verifies that storage tanks are leak-free and structurally sound before fuel is introduced, and confirms ongoing integrity for in-service tanks. D'Zizi Petroleum Services uses calibrated pressure testing equipment to conduct hydrotests on USTs and ASTs of all sizes, issuing detailed test reports that satisfy EPRA inspection requirements."
      image={img}
      imageAlt="Tank hydrotesting Kenya"
      bullets={[
        "Pre-commissioning hydrotesting for new USTs and ASTs",
        "Periodic integrity testing for in-service tanks",
        "Hydrotesting of fuel pipework and distribution lines",
        "Calibrated pressure gauges and certified test equipment",
        "Leak detection and identification of failure points",
        "Documented test reports accepted by EPRA and NEMA",
        "Corrective recommendations when failures are detected",
        "Re-testing after repairs",
        "Testing at any location across Kenya",
        "Emergency hydrotesting for urgent commissioning",
      ]}
      process={[
        { step: "Pre-Test Preparation", desc: "Tank is cleaned, inspected and all connections blanked off. Test equipment is connected." },
        { step: "Pressure Application", desc: "Water pressure is applied to the tank at the specified test pressure and held for the required duration." },
        { step: "Monitoring & Recording", desc: "Pressure gauge readings are monitored and recorded throughout the test period." },
        { step: "Report & Certificate", desc: "A detailed test report is issued confirming pass or fail with pressure readings, and corrective recommendations if needed." },
      ]}
      faqs={[
        {
          q: "Is hydrotesting compulsory before commissioning a new petrol station in Kenya?",
          a: "Yes. EPRA requires a hydrotest certificate for all new petroleum storage tanks before fuel can be introduced. The certificate is a mandatory document for EPRA commissioning inspection.",
        },
        {
          q: "How long does a hydrotest take?",
          a: "A standard UST hydrotest takes 2–4 hours on site. We issue the test report the same day or the following day.",
        },
        {
          q: "What happens if a tank fails the hydrotest?",
          a: "We identify the point of failure, provide a written corrective recommendation, and carry out or coordinate repairs. The tank is then re-tested until it passes.",
        },
        {
          q: "Do you also do hydrotesting for fuel pipework?",
          a: "Yes. We pressure-test suction lines, product lines and offloading pipework as part of our commissioning and periodic inspection services.",
        },
        {
          q: "Are your hydrotest reports accepted by EPRA?",
          a: "Yes. Our test reports include all information required by EPRA inspectors and are produced on company-headed documentation.",
        },
      ]}
    />
  );
}
