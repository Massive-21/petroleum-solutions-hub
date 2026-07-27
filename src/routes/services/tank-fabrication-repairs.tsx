import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import img from "@/assets/projects/replace.jpeg";

export const Route = createFileRoute("/services/tank-fabrication-repairs")({
  component: TankFabricationRepairs,
  head: () => ({
    meta: [
      { title: "Tank Fabrication & Repairs Kenya | UST & AST Structural Repairs | D'Zizi Petroleum" },
      {
        name: "description",
        content:
          "Custom fuel tank fabrication and structural repairs for USTs and ASTs in Kenya. Coating, lining and repair services. D'Zizi Petroleum Services +254 702 587 919.",
      },
      { property: "og:title", content: "Tank Fabrication & Repairs Kenya | D'Zizi Petroleum" },
      { property: "og:url", content: "https://dzizipetroleum.co.ke/services/tank-fabrication-repairs" },
    ],
    links: [{ rel: "canonical", href: "https://dzizipetroleum.co.ke/services/tank-fabrication-repairs" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Tank Fabrication & Repairs Kenya",
          description: "Custom fabrication and structural repairs for underground and above-ground petroleum storage tanks in Kenya.",
          url: "https://dzizipetroleum.co.ke/services/tank-fabrication-repairs",
          provider: {
            "@type": "LocalBusiness",
            name: "D'Zizi Petroleum Services Limited",
            url: "https://dzizipetroleum.co.ke",
            telephone: "+254702587919",
          },
          areaServed: { "@type": "Country", name: "Kenya" },
          serviceType: "Tank Fabrication and Repair",
        }),
      },
    ],
  }),
});

function TankFabricationRepairs() {
  return (
    <ServicePage
      title="Tank Fabrication & Repairs Kenya"
      tagline="Custom steel tank fabrication and structural repairs for underground and above-ground petroleum storage tanks across Kenya."
      description="When tanks are damaged, corroded or need structural modification, D'Zizi Petroleum Services provides expert assessment and repair. We also fabricate custom above-ground steel tanks to specification for sites where standard sizes are unsuitable."
      image={img}
      imageAlt="Tank fabrication and repairs Kenya"
      bullets={[
        "Custom AST steel tank fabrication to specification",
        "Structural crack and weld repairs",
        "Corrosion assessment and patching",
        "Internal and external tank lining and coating",
        "Tank decommissioning and safe removal",
        "Manhole, sump and fitting replacements",
        "Post-repair hydrotesting and certification",
        "Tank relocation and reinstallation",
        "Compliance documentation for repaired tanks",
        "Emergency repair response",
      ]}
      faqs={[
        {
          q: "Can a leaking underground tank be repaired or must it be replaced?",
          a: "It depends on the nature of the leak. Minor weld failures can sometimes be repaired. Double-wall fibreglass tanks that fail structurally typically require replacement. We assess each case and give an honest recommendation.",
        },
        {
          q: "Do you fabricate tanks to custom sizes?",
          a: "Yes. We fabricate above-ground steel tanks to client-specified dimensions where standard sizes are not suitable for the site.",
        },
        {
          q: "Is a repaired tank re-calibrated?",
          a: "Yes. Any structural repair or modification to a storage tank requires re-calibration. We carry out post-repair hydrotesting and calibration and issue updated certificates.",
        },
      ]}
    />
  );
}
