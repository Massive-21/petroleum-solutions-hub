import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

function TikTokIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path
        d="M14.4 2h2.2c.6 0 1.1.5 1.1 1.1v2.2c0 .6-.5 1.1-1.1 1.1h-.2a4.9 4.9 0 0 1-4.8 4.1h-1.1v4.1c0 2.1-1.7 3.8-3.8 3.8S2 17.4 2 15.3c0-2.1 1.7-3.8 3.8-3.8.4 0 .8 0 1.2.1v-4c-.4-.1-.8-.1-1.2-.1A7.8 7.8 0 0 0 2 15.3c0 4.3 3.5 7.8 7.8 7.8S17.6 19.6 17.6 15.3V9.5c1.4.9 3.1 1.4 4.8 1.4v-3.6c-1.5 0-2.9-.4-4.1-1.2V2Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

const socials = [
  { name: "TikTok", href: "https://www.tiktok.com/@dzizi.petroleum.s?_r=1&_t=ZS-96ufWYLJg1f", icon: TikTokIcon },
  { name: "Instagram", href: "https://www.instagram.com/dzizi_petroleum?igsh=MXFwaWw5YjRqazFnOQ==", icon: Instagram },
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=100088303376953", icon: Facebook },
  { name: "YouTube", href: "https://www.youtube.com/@dzizienergy", icon: Youtube },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/david-githara-a131b0414/", icon: Linkedin },
];

export function SocialLinks({ className = "", compact = false }: { className?: string; compact?: boolean }) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`.trim()}>
      {socials.map(({ name, href, icon: Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit our ${name} page`}
          className={
            compact
              ? "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white/90 text-foreground shadow-sm transition hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              : "inline-flex items-center gap-2 rounded-full border border-border bg-white/90 px-3 py-2 text-sm font-semibold text-foreground shadow-sm transition hover:-translate-y-0.5 hover:border-primary hover:text-primary"
          }
        >
          <Icon className={compact ? "h-4 w-4" : "h-4 w-4"} />
          {!compact && <span>{name}</span>}
        </a>
      ))}
    </div>
  );
}
