import { Link } from "@tanstack/react-router";
import { CheckCircle2, Phone, ArrowRight } from "lucide-react";

interface Faq {
  q: string;
  a: string;
}

interface ProcessStep {
  step: string;
  desc: string;
}

interface Props {
  title: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  bullets: string[];
  process?: ProcessStep[];
  faqs?: Faq[];
}

export function ServicePage({ title, tagline, description, image, imageAlt, bullets, process, faqs }: Props) {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-primary">Services</Link>
            <span>/</span>
            <span className="font-medium text-foreground">{title}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:items-center md:py-20">
          <div className="fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-semibold text-primary">
              <span className="h-2 w-2 rounded-full bg-primary" /> D'Zizi Petroleum Services Kenya
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">{tagline}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
              >
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+254702587919"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
              >
                <Phone className="h-4 w-4" /> +254 702 587 919
              </a>
            </div>
          </div>
          <div className="fade-up relative">
            <div className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-tr from-secondary/40 to-primary/30 blur-2xl" />
            <img
              src={image}
              alt={imageAlt}
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">What's included</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{title} - scope of work</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">{description}</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 rounded-xl border border-border bg-white p-4 shadow-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-foreground">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      {process && process.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">How it works</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Our process</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((p, i) => (
                <div key={p.step} className="reveal relative rounded-2xl border border-border bg-white p-6 shadow-sm">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {i + 1}
                  </div>
                  <h3 className="font-semibold">{p.step}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faqs && faqs.length > 0 && (
        <section className="bg-muted/30 py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">FAQ</p>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Common questions</h2>
            </div>
            <div className="mt-10 space-y-4">
              {faqs.map(({ q, a }) => (
                <details key={q} className="group rounded-2xl border border-border bg-white px-6 py-4 shadow-sm">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-foreground marker:content-none">
                    {q}
                    <span className="ml-auto shrink-0 text-primary transition-transform duration-200 group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-[oklch(0.45_0.18_25)] p-10 text-white shadow-xl md:p-14">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-secondary/30 blur-3xl" />
          <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">Ready to get started?</h2>
          <p className="mt-3 max-w-2xl text-white/85">
            Contact D'Zizi Petroleum Services today for a free consultation and no-obligation quote anywhere in Kenya.
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
