import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/dzizi-logo.jpg";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-brand-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="inline-flex rounded-lg bg-white p-2">
            <img src={logo} alt="D'Zizi Petroleum" className="h-10 w-auto" />
          </div>
          <p className="mt-4 max-w-md text-sm text-white/70">
            D'Zizi Petroleum Services Limited — Kenya's trusted partner for
            petroleum equipment sales, installation, hydrotesting, calibration
            and petrol station maintenance.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li><Link to="/about" className="hover:text-secondary">About</Link></li>
            <li><Link to="/services" className="hover:text-secondary">Services</Link></li>
            <li><Link to="/projects" className="hover:text-secondary">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-secondary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4" /><a href="tel:+254702587919">+254 702 587 919</a></li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4" /><a href="mailto:info@dzizipetroleum.co.ke">info@dzizipetroleum.co.ke</a></li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" /> Nairobi, Kenya</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-xs text-white/50 sm:px-6">
          © {new Date().getFullYear()} D'Zizi Petroleum Services Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
