import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import img from "@/assets/projects/calibration.jpg";

export const Route = createFileRoute("/services/tank-calibration")({
  component: TankCalibration,
  head: () => ({
    meta: [
      { title: "Tank Calibration Kenya | WMA-Compliant Fuel Tank Calibration | D'Zizi Petroleum" },
      {
        name: "description",
        content:
          "Wet and dry tank calibration services in Kenya. WMA-compliant reports for UST and AST. Essential for EPRA licensing. D'Zizi Petroleum Services - +254 702 587 919.",
      },
      { property: "og:title", content: "Tank Calibration Kenya | D'Zizi Petroleum" },
      { property: "og:url", content: "https://dzizipetroleum.co.ke/services/tank-calibration" },
    ],
    links: [{ rel: "canonical", href: "https://dzizipetroleum.co.ke/services/tank-calibration" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Tank Calibration Kenya",
          description:
            "Wet and dry calibration services for underground and above-ground fuel storage tanks in Kenya, with WMA-compliant calibration certificates.",
          url: "https://dzizipetroleum.co.ke/services/tank-calibration",
          provider: {
            "@type": "LocalBusiness",
            name: "D'Zizi Petroleum Services Limited",
            url: "https://dzizipetroleum.co.ke",
            telephone: "+254702587919",
          },
          areaServed: { "@type": "Country", name: "Kenya" },
          serviceType: "Fuel Tank Calibration",
        }),
      },
    ],
  }),
});

function TankCalibration() {
  return (
    <ServicePage
      title="Tank Calibration Kenya"
      tagline="Precision wet and dry calibration for underground and above-ground fuel storage tanks - WMA-compliant reports required for EPRA licensing and accurate billing."
      description="Tank calibration is a legal requirement in Kenya under the Weights and Measures Act. Without a valid calibration certificate, a petrol station cannot legally operate. D'Zizi Petroleum Services carries out calibration for all UST and AST sizes, issues WMA-compliant strap charts and calibration reports, and provides re-calibration after any tank modification or repair."
      image={img}
      imageAlt="Tank calibration Kenya"
      bullets={[
        "Wet calibration (water-based, highest accuracy method)",
        "Dry calibration (dimensional measurement method)",
        "UST calibration for all tank sizes and shapes",
        "AST and bulk storage tank calibration",
        "Strap chart / dip chart generation",
        "ATG (automatic tank gauge) calibration and configuration",
        "Dispenser flow meter calibration",
        "WMA-compliant calibration certificates",
        "Re-calibration after tank repairs or modifications",
        "Calibration records and compliance documentation",
      ]}
      process={[
        { step: "Pre-Calibration Check", desc: "We inspect the tank condition, clean the calibration area and confirm the tank is safe to enter or measure." },
        { step: "Measurement", desc: "Using certified equipment, we take precise volume measurements at standard increments throughout the tank capacity." },
        { step: "Strap Chart Generation", desc: "We compile the calibration data into a WMA-accepted dip chart format for the specific tank." },
        { step: "Certificate Issuance", desc: "A calibration certificate is issued and submitted for WMA endorsement. ATG is configured to match calibration data." },
      ]}
      faqs={[
        {
          q: "Why is tank calibration required in Kenya?",
          a: "Calibration is mandated by the Weights and Measures Act of Kenya. It ensures that the volume shown on the ATG or dip stick accurately reflects actual fuel quantity. Without a valid calibration certificate, your EPRA licence cannot be issued or renewed.",
        },
        {
          q: "What is the difference between wet and dry calibration?",
          a: "Wet calibration uses measured water to fill the tank in increments - it is the most accurate method. Dry calibration uses dimensional measurements of the tank interior. We recommend wet calibration for all new USTs.",
        },
        {
          q: "How often must tanks be re-calibrated?",
          a: "WMA requires re-calibration when a tank is repaired, modified, or when calibration accuracy is questioned. Routine re-calibration is recommended every 5 years or as directed by EPRA inspectors.",
        },
        {
          q: "Can you calibrate tanks at any location in Kenya?",
          a: "Yes. We travel to all towns and counties in Kenya. Call +254 702 587 919 to schedule a calibration visit.",
        },
      ]}
    />
  );
}
