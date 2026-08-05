import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Fuel,
  Wrench,
  ShieldCheck,
  Gauge,
  Hammer,
  Droplets,
  ArrowRight,
  CheckCircle2,
  Phone,
} from "lucide-react";
import hero from "@/assets/install.jpg";
import petrolStation from "@/assets/projects/sales.jpg";
import hydrotestingImg from "@/assets/projects/hydrotesting.jpg";
import installationImg from "@/assets/projects/installation.jpg";
import maintenanceImg from "@/assets/projects/inst.jpeg";
import calibrationImg from "@/assets/projects/petrol-station.jpg";
import overhaulImg from "@/assets/projects/commercial.jpg";
import { SocialLinks } from "@/components/SocialLinks";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { property: "og:image", content: "https://dzizipetroleum.co.ke/favicon.ico" },
      { property: "og:image:alt", content: "D'Zizi Petroleum Services Limited preview image" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/png" },
      { name: "twitter:image", content: "https://dzizipetroleum.co.ke/favicon.ico" },
      { name: "twitter:image:alt", content: "D'Zizi Petroleum Services Limited preview image" },
      { title: "D'Zizi Petroleum | Petrol Station Installation Company in Kenya" },
      {
        name: "description",
        content:
          "One of Kenya's leading petrol station installation companies. We supply, install and maintain complete petrol stations across all 47 counties. EPRA-compliant, affordable pricing. Free quote: +254 702 587 919.",
      },
      { property: "og:title", content: "D'Zizi Petroleum Services Limited" },
      { property: "og:description", content: "One of Kenya's leading petrol station installation companies. Equipment supply, installation, hydrotesting, calibration and maintenance across all 47 counties of Kenya." },
      { property: "og:url", content: "https://dzizipetroleum.co.ke/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://dzizipetroleum.co.ke/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Do you install petrol stations across all of Kenya?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. D'Zizi Petroleum Services installs complete petrol stations in Nairobi, Mombasa, Kisumu, Eldoret, Nakuru, Thika, Nyeri and all major towns across Kenya.",
              },
            },
            {
              "@type": "Question",
              name: "What petroleum equipment do you supply in Kenya?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We supply underground (UST) and above-ground (AST) storage tanks, fuel dispensers, submersible and suction pumps, air compressors, automatic tank gauges (ATGs) and standby generators - all EPRA-aligned.",
              },
            },
            {
              "@type": "Question",
              name: "Are you EPRA-licensed to operate in Kenya?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. D'Zizi Petroleum Services operates in full compliance with the Energy and Petroleum Regulatory Authority (EPRA) requirements and supports clients through EPRA inspection processes.",
              },
            },
            {
              "@type": "Question",
              name: "How quickly can you respond to a breakdown?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We offer 24/7 emergency response for breakdowns and urgent maintenance across all major routes in Kenya. Call us any time on +254 702 587 919.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer tank calibration and hydrotesting services?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We carry out wet and dry tank calibration for USTs and ASTs, issue WMA-compliant calibration reports, and perform pre-commissioning and periodic hydrotesting with full certification.",
              },
            },
            {
              "@type": "Question",
              name: "How do I get a quote for petrol station installation in Kenya?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Call or WhatsApp us on +254 702 587 919, or fill in the contact form on our website. We will assess your site and provide a detailed quote at no obligation.",
              },
            },
            {
              "@type": "Question",
              name: "Which companies install petrol stations in Kenya?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "D'Zizi Petroleum Services Limited is one of Kenya's leading petrol station installation companies, with over 10 years of industry experience. We handle complete turnkey projects from site survey, underground tank installation and piping through to EPRA commissioning. Call +254 702 587 919 to discuss your project.",
              },
            },
            {
              "@type": "Question",
              name: "I want to install a petrol station in Kenya — where do I start?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Start by contacting a licensed petrol installation company like D'Zizi Petroleum Services. We will assess your proposed site, advise on EPRA and NEMA requirements, recommend the right tanks and dispensers, coordinate civil works, carry out the full installation, and prepare all documentation for EPRA commissioning and licensing. Call us on +254 702 587 919 for a free site consultation anywhere in Kenya.",
              },
            },
            {
              "@type": "Question",
              name: "How much does petrol station installation cost in Kenya? Is affordable installation available?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "D'Zizi Petroleum Services offers competitive, transparent pricing for petrol station installation across Kenya. Costs depend on the number of tanks, dispensers, site size and equipment specifications. We offer flexible packages — from equipment supply only to full turnkey projects — so clients can choose what fits their budget. Call +254 702 587 919 for a free, no-obligation quote.",
              },
            },
          ],
        }),
      },
    ],
  }),
});

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setCount(Math.round(eased * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const services = [
  { icon: Fuel, title: "Petroleum Equipment Sales", desc: "Underground & above-ground tanks, pumps, compressors, air gauges and generators.", img: petrolStation, href: "/services/petroleum-equipment-sales" },
  { icon: Droplets, title: "Hydrotesting", desc: "Pressure testing to guarantee tank integrity and EPRA-aligned safety.", img: hydrotestingImg, href: "/services/hydrotesting" },
  { icon: Hammer, title: "Petrol Station Installation", desc: "Suction, breather and offloading lines installed by certified technicians.", img: installationImg, href: "/services/petrol-station-installation" },
  { icon: Wrench, title: "Station Maintenance", desc: "Keep your forecourt operational, compliant and profitable around the clock.", img: maintenanceImg, href: "/services/petrol-station-maintenance" },
  { icon: Gauge, title: "Tank Calibration", desc: "Precision wet & dry calibration for accurate dispensing and compliance.", img: calibrationImg, href: "/services/tank-calibration" },
  { icon: ShieldCheck, title: "Commercial Site Maintenance", desc: "Maintenance contracts for depots, industrial yards and fleet sites.", img: overhaulImg, href: "/services/commercial-site-maintenance" },
];

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:items-center md:py-20">
          <div className="fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-semibold text-primary">
              <span className="h-2 w-2 rounded-full bg-primary" /> Trusted across Kenya
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-foreground sm:text-5xl md:text-6xl">
              Kenya's Leading{" "}
              <span className="brand-gradient-text">Petrol Station Installation Company</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              D'Zizi Petroleum Services Limited is one of Kenya's most trusted petrol station installation companies. We supply, install and maintain complete petrol stations across all 47 counties — from Nairobi to Mombasa, Kisumu, Eldoret and beyond.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
              >
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+254702587919"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
              >
                <Phone className="h-4 w-4" /> +254 702 587 919
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold text-foreground/80">Follow us:</span>
              <SocialLinks />
            </div>
            <div className="mt-8 grid max-w-md grid-cols-2 gap-4 text-sm">
              {[
                "EPRA-aligned safety",
                "Certified installers",
                "Nationwide coverage",
                "Rapid response",
              ].map((t) => (
                <div key={t} className="flex items-center gap-2 text-foreground/80">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> {t}
                </div>
              ))}
            </div>
          </div>
          <div className="fade-up relative">
            <div className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-tr from-secondary/40 to-primary/30 blur-2xl" />
            <img
              src={hero}
              alt="Modern petrol station forecourt at dusk"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">What we do</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Services that keep stations running</h2>
          </div>
          <Link to="/services" className="hidden text-sm font-semibold text-primary hover:underline sm:inline">
            View all →
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc, img, href }, idx) => (
            <a
              key={title}
              href={href}
              className={`reveal reveal-delay-${idx + 1} group relative overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg`}
            >
              <div className="mb-4 overflow-hidden rounded-lg">
                <img src={img} alt={title} className="h-40 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" decoding="async" />
              </div>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              <div className="absolute right-0 top-0 h-1 w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-brand-ink py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-4">
          {[
            { display: <CountUp target={10} suffix="+" />, v: "Years industry experience" },
            { display: <CountUp target={50} suffix="+" />, v: "Stations served" },
            { display: <span>24/7</span>, v: "Emergency response" },
            { display: <CountUp target={100} suffix="%" />, v: "Compliance focus" },
          ].map((s, i) => (
            <div key={s.v} className={`reveal reveal-delay-${i + 1}`}>
              <div className="text-4xl font-extrabold text-secondary">{s.display}</div>
              <div className="mt-1 text-sm text-white/70">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Locations */}
      <section className="border-y border-border bg-white/60 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Serving petroleum operators across Kenya
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-foreground/80">
            {[
              "Nairobi", "Mombasa", "Kisumu", "Eldoret", "Nakuru",
              "Thika", "Nyeri", "Meru", "Machakos", "Kitale",
              "Malindi", "Garissa", "Kisii", "Kakamega", "Embu",
            ].map((city, i, arr) => (
              <span key={city} className="flex items-center gap-6">
                {city}
                {i < arr.length - 1 && <span className="text-border">·</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="reveal text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">FAQ</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Common questions</h2>
        </div>
        <div className="mt-10 space-y-4">
          {[
            {
              q: "Do you install petrol stations across all of Kenya?",
              a: "Yes. We cover Nairobi, Mombasa, Kisumu, Eldoret, Nakuru, Thika, Nyeri and all major towns. Call us to discuss your location.",
            },
            {
              q: "What petroleum equipment do you supply?",
              a: "Underground and above-ground storage tanks, fuel dispensers, submersible and suction pumps, air compressors, automatic tank gauges (ATGs) and standby generators - all EPRA-aligned.",
            },
            {
              q: "Are you EPRA-licensed?",
              a: "Yes. We operate in full compliance with EPRA requirements and actively support clients through the EPRA inspection and licensing process.",
            },
            {
              q: "How quickly can you respond to a breakdown?",
              a: "We offer 24/7 emergency response across all major Kenyan routes. Call +254 702 587 919 any time.",
            },
            {
              q: "Do you offer tank calibration and hydrotesting?",
              a: "Yes. We carry out wet and dry calibration for USTs and ASTs with WMA-compliant reports, and pre-commissioning or periodic hydrotesting with full certification.",
            },
            {
              q: "How do I get a quote?",
              a: "Call or WhatsApp +254 702 587 919, or fill in the contact form. We assess your site and provide a detailed quote at no obligation.",
            },
            {
              q: "Which companies install petrol stations in Kenya?",
              a: "D'Zizi Petroleum Services Limited is one of Kenya's leading petrol station installation companies, with over 10 years of experience. We handle complete turnkey petrol station projects from site survey and tank installation through to EPRA commissioning. Call +254 702 587 919 to discuss your project.",
            },
            {
              q: "I want to install a petrol station in Kenya — where do I start?",
              a: "Contact D'Zizi Petroleum Services first. We will assess your site, advise on EPRA and NEMA requirements, recommend the right equipment, coordinate civil works, carry out the full installation, and prepare all EPRA commissioning documentation. Call +254 702 587 919 for a free consultation anywhere in Kenya.",
            },
            {
              q: "Is affordable petrol station installation available in Kenya?",
              a: "Yes. D'Zizi Petroleum Services offers competitive, transparent pricing for petrol station installation across Kenya. We offer flexible packages from equipment-only supply through to full turnkey projects, so clients can choose what fits their budget. Call +254 702 587 919 for a free, no-obligation quote.",
            },
          ].map(({ q, a }, i) => (
            <details
              key={q}
              className={`reveal reveal-delay-${(i % 4) + 1} group rounded-2xl border border-border bg-white px-6 py-4 shadow-sm`}
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-foreground marker:content-none">
                {q}
                <span className="ml-auto shrink-0 text-primary transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="reveal relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-[oklch(0.45_0.18_25)] p-10 text-white shadow-xl md:p-14">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-secondary/30 blur-3xl" />
          <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">
            Building a new station or upgrading an existing one?
          </h2>
          <p className="mt-3 max-w-2xl text-white/85">
            Talk to our engineers today - we'll scope your project, recommend the right equipment and deliver end-to-end.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-secondary hover:text-foreground"
            >
              Get a free consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://wa.me/254702587919"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
