import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin, MessageCircle, Loader2, CheckCircle2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact D'Zizi Petroleum | Petrol Station Services Kenya" },
      {
        name: "description",
        content:
          "Get in touch with D'Zizi Petroleum Services Limited. Call +254 702 587 919 or send us a message — petroleum services across Kenya.",
      },
      { property: "og:title", content: "Contact D'Zizi Petroleum" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(120),
  email: z.string().trim().email("Enter a valid email").max(200),
  phone: z.string().trim().min(7, "Enter a valid phone").max(30),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Please share a few details").max(2000),
});

const WHATSAPP_URL =
  "https://wa.me/254702587919?text=Hello%20D%27Zizi%20Petroleum%2C%20I%27d%20like%20to%20enquire%20about%20your%20services.";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      company: fd.get("company") ?? "",
      message: fd.get("message"),
    });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setLoading(true);
    const { error: supaErr } = await supabase
      .from("contact_submissions")
      .insert({
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone,
        company: parsed.data.company || null,
        message: parsed.data.message,
      });
    setLoading(false);
    if (supaErr) {
      setError(supaErr.message);
      return;
    }
    setSuccess(true);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</p>
      <h1 className="mt-2 max-w-3xl text-4xl font-extrabold sm:text-5xl">Let's talk about your project.</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Tell us what you need — quote, site visit, emergency call-out — and our team will respond within one business day.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-5">
        <aside className="space-y-4 md:col-span-2">
          <a
            href="tel:+254702587919"
            className="flex items-start gap-3 rounded-2xl border border-border bg-white p-5 shadow-sm transition hover:border-primary"
          >
            <Phone className="mt-1 h-5 w-5 text-primary" />
            <div>
              <div className="text-sm font-semibold">Call us</div>
              <div className="text-sm text-muted-foreground">+254 702 587 919</div>
            </div>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-2xl px-5 py-4 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            style={{ backgroundColor: "#25D366" }}
          >
            <MessageCircle className="h-5 w-5" fill="currentColor" /> Chat on WhatsApp
          </a>
          <a
            href="mailto:info@dzizipetroleum.co.ke"
            className="flex items-start gap-3 rounded-2xl border border-border bg-white p-5 shadow-sm transition hover:border-primary"
          >
            <Mail className="mt-1 h-5 w-5 text-primary" />
            <div>
              <div className="text-sm font-semibold">Email</div>
              <div className="text-sm text-muted-foreground">info@dzizipetroleum.co.ke</div>
            </div>
          </a>
          <div className="flex items-start gap-3 rounded-2xl border border-border bg-white p-5 shadow-sm">
            <MapPin className="mt-1 h-5 w-5 text-primary" />
            <div>
              <div className="text-sm font-semibold">Based in</div>
              <div className="text-sm text-muted-foreground">Nairobi, Kenya — serving nationwide</div>
            </div>
          </div>
        </aside>

        <form
          onSubmit={onSubmit}
          className="space-y-4 rounded-3xl border border-border bg-white p-6 shadow-sm md:col-span-3 md:p-8"
        >
          {success ? (
            <div className="flex flex-col items-center gap-3 py-10 text-center">
              <CheckCircle2 className="h-12 w-12 text-primary" />
              <h2 className="text-xl font-semibold">Thanks — we got your message!</h2>
              <p className="text-sm text-muted-foreground">
                Our team will be in touch within one business day.
              </p>
              <button
                type="button"
                onClick={() => setSuccess(false)}
                className="mt-2 rounded-full border border-border px-4 py-2 text-sm font-semibold hover:border-primary hover:text-primary"
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Phone" name="phone" type="tel" required placeholder="+254 7xx xxx xxx" />
                <Field label="Email" name="email" type="email" required />
                <Field label="Company (optional)" name="company" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-xl border border-border bg-white px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Tell us about your project, site location and timeline..."
                />
              </div>
              {error && (
                <p className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-60 sm:w-auto"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                {loading ? "Sending..." : "Send message"}
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-white px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
