import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import img from "@/assets/projects/maintenance.jpg";

export const Route = createFileRoute("/services/petrol-station-maintenance")({
  component: PetrolStationMaintenance,
  head: () => ({
    meta: [
      { title: "Petrol Station Maintenance Kenya | 24/7 Emergency & Scheduled Servicing | D'Zizi Petroleum" },
      {
        name: "description",
        content:
          "Scheduled and 24/7 emergency petrol station maintenance across Kenya. Pump servicing, line testing, dispenser repairs and EPRA compliance support. D'Zizi Petroleum +254 702 587 919.",
      },
      { property: "og:title", content: "Petrol Station Maintenance Kenya | D'Zizi Petroleum" },
      { property: "og:url", content: "https://dzizipetroleum.co.ke/services/petrol-station-maintenance" },
    ],
    links: [{ rel: "canonical", href: "https://dzizipetroleum.co.ke/services/petrol-station-maintenance" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Petrol Station Maintenance Kenya",
          description:
            "Scheduled preventive maintenance and 24/7 emergency breakdown response for petrol stations across Kenya, including pump servicing, dispenser repair and EPRA compliance support.",
          url: "https://dzizipetroleum.co.ke/services/petrol-station-maintenance",
          provider: {
            "@type": "LocalBusiness",
            name: "D'Zizi Petroleum Services Limited",
            url: "https://dzizipetroleum.co.ke",
            telephone: "+254702587919",
          },
          areaServed: { "@type": "Country", name: "Kenya" },
          serviceType: "Petrol Station Maintenance",
        }),
      },
    ],
  }),
});

function PetrolStationMaintenance() {
  return (
    <ServicePage
      title="Petrol Station Maintenance Kenya"
      tagline="Keep your petrol station running safely and profitably with D'Zizi's scheduled maintenance contracts and 24/7 emergency response across Kenya."
      description="Unplanned downtime at a petrol station costs revenue. D'Zizi Petroleum Services offers scheduled preventive maintenance contracts and round-the-clock emergency response to keep your forecourt operational, compliant and profitable. Our trained technicians service all equipment brands and maintain stations across Kenya's major routes."
      image={img}
      imageAlt="Petrol station maintenance Kenya"
      bullets={[
        "Monthly and quarterly preventive maintenance contracts",
        "Fuel dispenser servicing and repair",
        "Submersible and suction pump servicing",
        "Fuel line inspection, testing and minor repairs",
        "Generator servicing and load testing",
        "ATG system checks and re-calibration",
        "Filter and nozzle replacement",
        "Air compressor servicing",
        "24/7 emergency breakdown response",
        "EPRA compliance inspection support",
      ]}
      process={[
        { step: "Contract Agreement", desc: "We agree a maintenance schedule tailored to your station size and equipment profile." },
        { step: "Scheduled Visits", desc: "Our technicians carry out planned preventive maintenance at agreed intervals - monthly or quarterly." },
        { step: "Reporting", desc: "After each visit we provide a written maintenance report and flag any equipment requiring attention." },
        { step: "Emergency Response", desc: "For breakdowns, call +254 702 587 919 any time. We respond across Kenya's major routes 24/7." },
      ]}
      faqs={[
        {
          q: "Do you offer emergency breakdown response for petrol stations?",
          a: "Yes. We provide 24/7 emergency response across Kenya. Call +254 702 587 919 any time for urgent pump failures, leaks or electrical faults.",
        },
        {
          q: "What's included in a petrol station maintenance contract?",
          a: "Our contracts cover scheduled visits for pump and dispenser servicing, line checks, generator testing, ATG calibration, filter replacement and minor repairs. Emergency callouts can be included at a preferential rate.",
        },
        {
          q: "Can you maintain a station you didn't install?",
          a: "Yes. We service petrol stations regardless of who installed them, and work on all major equipment brands used in Kenya.",
        },
        {
          q: "How do preventive maintenance contracts save money?",
          a: "Planned maintenance catches small faults before they become costly breakdowns. Stations on maintenance contracts typically have less unplanned downtime and longer equipment lifespan.",
        },
      ]}
    />
  );
}
