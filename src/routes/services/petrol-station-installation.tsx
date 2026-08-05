import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import img from "@/assets/projects/installation.jpg";

export const Route = createFileRoute("/services/petrol-station-installation")({
  component: PetrolStationInstallation,
  head: () => ({
    meta: [
      { title: "Petrol Station Installation Kenya | Leading Petrol Installation Company | D'Zizi" },
      {
        name: "description",
        content:
          "D'Zizi Petroleum Services is one of Kenya's leading petrol installation companies. Complete petrol station installation: tanks, dispensers, piping, canopy and EPRA commissioning. Free quote: +254 702 587 919.",
      },
      { property: "og:title", content: "Petrol Station Installation Kenya | Petrol Installation Company | D'Zizi" },
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
          alternateName: ["Petrol Installation Kenya", "Petrol Station Setup Kenya"],
          description:
            "End-to-end petrol station installation in Kenya by one of the country's leading petrol installation companies. Includes underground tank supply, fuel line laying, dispenser installation, canopy works and EPRA commissioning.",
          url: "https://dzizipetroleum.co.ke/services/petrol-station-installation",
          provider: {
            "@type": "LocalBusiness",
            name: "D'Zizi Petroleum Services Limited",
            url: "https://dzizipetroleum.co.ke",
            telephone: "+254702587919",
            description: "One of Kenya's leading petrol station installation companies with 10+ years experience.",
          },
          areaServed: [
            { "@type": "Country", name: "Kenya" },
            { "@type": "City", name: "Nairobi" },
            { "@type": "City", name: "Mombasa" },
            { "@type": "City", name: "Kisumu" },
            { "@type": "City", name: "Eldoret" },
            { "@type": "City", name: "Nakuru" },
          ],
          serviceType: "Petrol Station Installation",
          offers: {
            "@type": "Offer",
            description: "Complete petrol station installation from site survey to EPRA commissioning. Competitive pricing. Free site assessment.",
            areaServed: { "@type": "Country", name: "Kenya" },
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://dzizipetroleum.co.ke" },
            { "@type": "ListItem", position: 2, name: "Services", item: "https://dzizipetroleum.co.ke/services" },
            { "@type": "ListItem", position: 3, name: "Petrol Station Installation Kenya", item: "https://dzizipetroleum.co.ke/services/petrol-station-installation" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Which petrol installation companies operate in Kenya?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "D'Zizi Petroleum Services Limited is one of Kenya's leading petrol station installation companies. With over 10 years of experience, we have successfully installed complete petrol stations for independent fuel retailers, oil marketing companies and commercial entities across Nairobi, Mombasa, Kisumu, Eldoret, Nakuru and all major towns in Kenya. Call +254 702 587 919 to get started.",
              },
            },
            {
              "@type": "Question",
              name: "I want to install a petrol station in Kenya — what are the steps?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "To install a petrol station in Kenya: (1) Contact a licensed petrol installation company like D'Zizi Petroleum Services for a site assessment. (2) Obtain NEMA environmental clearance and a county business permit. (3) Choose your tanks, dispensers and equipment. (4) We coordinate civil works, install underground tanks, lay fuel piping, fit dispensers and set up the canopy. (5) We carry out hydrotesting and calibration. (6) We prepare your EPRA documentation and support you through the EPRA inspection. Call +254 702 587 919 to start the process.",
              },
            },
            {
              "@type": "Question",
              name: "How affordable is petrol station installation in Kenya?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "D'Zizi Petroleum Services offers competitive, transparent pricing for petrol station installation in Kenya. We provide flexible packages from equipment-only supply to full turnkey builds, so clients can work within their budget. Call +254 702 587 919 for a free, detailed quote with no obligation.",
              },
            },
          ],
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
        {
          q: "Which petrol installation companies operate in Kenya?",
          a: "D'Zizi Petroleum Services Limited is one of Kenya's leading petrol station installation companies, with over 10 years of experience delivering complete turnkey petrol station projects across Nairobi, Mombasa, Kisumu, Eldoret, Nakuru and all major towns in Kenya. Call +254 702 587 919 to discuss your project.",
        },
        {
          q: "I want to install a petrol station in Kenya — what do I do first?",
          a: "Call D'Zizi Petroleum Services on +254 702 587 919 for a free site assessment. We will advise on EPRA and NEMA requirements, recommend the right equipment, and give you a detailed quote. We then handle all stages from civil works coordination and tank installation to EPRA commissioning documentation.",
        },
        {
          q: "Is affordable petrol station installation available in Kenya?",
          a: "Yes. D'Zizi Petroleum Services provides competitive, transparent pricing with flexible packages — from equipment-only supply to full turnkey builds — so the installation can fit your budget. Call +254 702 587 919 for a free, no-obligation quote.",
        },
      ]}
    />
  );
}
