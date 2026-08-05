import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import img from "@/assets/projects/replace.jpeg";

export const Route = createFileRoute("/services/tank-fabrication-repairs")({
  component: TankFabricationRepairs,
  head: () => ({
    meta: [
      { title: "Tank Fabrication Kenya | Custom Fuel Tank Fabrication & Steel Tank Repairs | D'Zizi" },
      {
        name: "description",
        content:
          "Professional tank fabrication in Kenya. Custom steel AST fabrication, UST structural repairs, internal lining and post-repair hydrotesting. D'Zizi Petroleum Services — call +254 702 587 919.",
      },
      { property: "og:title", content: "Tank Fabrication Kenya | Custom Fuel Tanks & Repairs | D'Zizi Petroleum" },
      { property: "og:url", content: "https://dzizipetroleum.co.ke/services/tank-fabrication-repairs" },
    ],
    links: [{ rel: "canonical", href: "https://dzizipetroleum.co.ke/services/tank-fabrication-repairs" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Tank Fabrication Kenya",
          alternateName: ["Fuel Tank Fabrication Kenya", "Steel Tank Fabrication Kenya", "Tank Repairs Kenya"],
          description: "Custom steel tank fabrication and structural repairs for underground (UST) and above-ground (AST) petroleum storage tanks in Kenya. Includes internal lining, coating, post-repair hydrotesting and calibration.",
          url: "https://dzizipetroleum.co.ke/services/tank-fabrication-repairs",
          provider: {
            "@type": "LocalBusiness",
            name: "D'Zizi Petroleum Services Limited",
            url: "https://dzizipetroleum.co.ke",
            telephone: "+254702587919",
          },
          areaServed: { "@type": "Country", name: "Kenya" },
          serviceType: "Tank Fabrication and Repair",
          offers: {
            "@type": "Offer",
            description: "Custom above-ground steel tank fabrication and UST structural repairs. Competitive pricing. Call for a free assessment.",
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
            { "@type": "ListItem", position: 3, name: "Tank Fabrication Kenya", item: "https://dzizipetroleum.co.ke/services/tank-fabrication-repairs" },
          ],
        }),
      },
    ],
  }),
});

function TankFabricationRepairs() {
  return (
    <ServicePage
      title="Tank Fabrication Kenya"
      tagline="Custom steel tank fabrication and structural repairs for underground and above-ground petroleum storage tanks across Kenya — competitive pricing, certified results."
      description="When tanks are damaged, corroded or need structural modification, D'Zizi Petroleum Services provides expert assessment and repair. We also fabricate custom above-ground steel tanks to specification for sites where standard sizes are unsuitable. As one of Kenya's experienced petroleum engineering companies, our tank fabrication work includes post-repair hydrotesting and re-calibration with full EPRA-accepted certification."
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
      process={[
        { step: "Site Inspection", desc: "We visit your site to inspect the tank, assess the damage or fabrication requirement, and document the scope of work before any cutting or welding begins." },
        { step: "Assessment & Quotation", desc: "We analyse our findings, advise on repair versus replacement where relevant, and issue a detailed quotation with timeline." },
        { step: "Fabrication or Repair", desc: "Our welders carry out structural repairs, internal lining, custom fabrication or fitting replacements using the correct materials for petroleum service." },
        { step: "Testing & Certification", desc: "All repaired or fabricated tanks undergo hydrotesting and, where required, re-calibration. We issue updated compliance certificates ready for EPRA submission." },
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
        {
          q: "What is the cost of tank fabrication in Kenya?",
          a: "Tank fabrication costs depend on the tank size, material specification and complexity of the job. D'Zizi Petroleum Services provides competitive pricing with no-obligation quotes. Call +254 702 587 919 with your tank size and requirements for an accurate price.",
        },
        {
          q: "Do you offer tank fabrication outside Nairobi?",
          a: "Yes. D'Zizi Petroleum Services carries out tank fabrication and repair work across Kenya including Mombasa, Kisumu, Eldoret, Nakuru and all major towns. We transport fabricated tanks to site and handle installation.",
        },
      ]}
    />
  );
}
