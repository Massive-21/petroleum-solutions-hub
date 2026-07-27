import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import img from "@/assets/projects/line.jpeg";

export const Route = createFileRoute("/services/fuel-line-pressure-test")({
  component: FuelLinePressureTest,
  head: () => ({
    meta: [
      { title: "Fuel Line Pressure Testing Kenya | Pipeline Integrity Certification | D'Zizi Petroleum" },
      {
        name: "description",
        content:
          "Fuel line pressure testing and integrity certification for petrol stations in Kenya. Pre-commissioning and periodic tests. EPRA-accepted reports. D'Zizi Petroleum +254 702 587 919.",
      },
      { property: "og:title", content: "Fuel Line Pressure Testing Kenya | D'Zizi Petroleum" },
      { property: "og:url", content: "https://dzizipetroleum.co.ke/services/fuel-line-pressure-test" },
    ],
    links: [{ rel: "canonical", href: "https://dzizipetroleum.co.ke/services/fuel-line-pressure-test" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Fuel Line Pressure Testing Kenya",
          description: "Pre-commissioning and periodic pressure testing of fuel distribution lines for petrol stations in Kenya with certified reports.",
          url: "https://dzizipetroleum.co.ke/services/fuel-line-pressure-test",
          provider: {
            "@type": "LocalBusiness",
            name: "D'Zizi Petroleum Services Limited",
            url: "https://dzizipetroleum.co.ke",
            telephone: "+254702587919",
          },
          areaServed: { "@type": "Country", name: "Kenya" },
          serviceType: "Fuel Line Pressure Testing",
        }),
      },
    ],
  }),
});

function FuelLinePressureTest() {
  return (
    <ServicePage
      title="Fuel Line Pressure Testing Kenya"
      tagline="Pre-commissioning and periodic pressure testing for fuel distribution pipework at petrol stations across Kenya - certified reports accepted by EPRA."
      description="Fuel line integrity is critical to site safety and EPRA compliance. Undetected leaks in underground pipework cause environmental contamination and fuel losses. D'Zizi Petroleum Services uses calibrated pressure testing equipment to test all fuel line types and issue EPRA-accepted certification."
      image={img}
      imageAlt="Fuel line pressure testing Kenya"
      bullets={[
        "Pre-commissioning pressure testing of all new pipe runs",
        "Periodic integrity testing for in-service lines",
        "Suction line, product line and fill pipe testing",
        "Test pressure application and hold duration monitoring",
        "Leak identification and location",
        "EPRA-accepted pressure test certificates",
        "Test reports with pressure readings and observations",
        "Re-testing after line repairs",
        "Emergency integrity testing",
        "Nationwide service across Kenya",
      ]}
      process={[
        { step: "Site Briefing & Isolation", desc: "We review the pipework layout with you, identify all line sections to be tested and isolate them from tanks and dispensers to create a closed test section." },
        { step: "Pressure Application", desc: "Using calibrated test equipment, we pressurize each line to the required test pressure and begin the hold period, recording gauge readings at set intervals." },
        { step: "Monitoring & Leak Finding", desc: "We monitor for pressure drop throughout the test duration. If a drop is detected, we use pressure isolation and probing techniques to locate the exact failure point." },
        { step: "Certification & Reporting", desc: "Passing lines are certified with an EPRA-accepted pressure test certificate. Failing lines are documented with leak location details so repairs can be made before re-test." },
      ]}
      faqs={[
        {
          q: "Is fuel line pressure testing required by EPRA?",
          a: "Yes. EPRA requires pressure test certificates for pipework as part of the commissioning documentation for new petrol stations, and recommends periodic testing for in-service pipework.",
        },
        {
          q: "What pressure is used to test fuel lines?",
          a: "Test pressure depends on the pipe specification and EPRA/manufacturer requirements. We apply the correct test pressure for your system and hold it for the required duration.",
        },
        {
          q: "How do you find a leak in an underground pipe?",
          a: "Pressure drop during the test indicates a leak. We then use pressure monitoring and isolation methods to locate the specific failure point.",
        },
      ]}
    />
  );
}
