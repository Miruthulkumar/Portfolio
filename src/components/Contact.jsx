import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { contact, japaneseResumePath, resumePath } from "../data/portfolioData";
import { modeContent } from "../data/translations";
import { useLanguageTheme } from "../context/LanguageThemeContext";

export default function Contact() {
  const { mode, isJapanese } = useLanguageTheme();
  const copy = modeContent[mode];
  const currentResumePath = isJapanese ? japaneseResumePath : resumePath;

  const emailSubject = encodeURIComponent("Portfolio Inquiry");
  const emailBody = encodeURIComponent(
    "Hi Miruthul,\n\nI found your portfolio and would like to connect.\n\nThanks,",
  );
  const emailHref = `mailto:${contact.email}?subject=${emailSubject}&body=${emailBody}`;
  const gmailComposeHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    contact.email,
  )}&su=${emailSubject}&body=${emailBody}`;

  const openEmailHref =
    typeof window !== "undefined" &&
    window.navigator?.vendor?.includes("Google")
      ? gmailComposeHref
      : emailHref;

  const openEmailTarget =
    openEmailHref === gmailComposeHref ? "_blank" : undefined;
  const openEmailRel =
    openEmailHref === gmailComposeHref ? "noreferrer" : undefined;

  return (
    <section
      id="contact"
      className="flow-section section-space layout-wrap pb-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.56 }}
      >
        <p className="eyebrow">{copy.contact.eyebrow}</p>
        <h2 className="section-title max-w-6xl">{copy.contact.title}</h2>
      </motion.div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.56 }}
          className="surface-card p-7 sm:p-8"
        >
          <div className="space-y-3 text-[var(--paper-200)]/85">
            <ContactItem
              icon={MapPin}
              label={copy.contact.location}
              value={contact.location}
            />
            <ContactItem
              icon={Mail}
              label={copy.contact.email}
              value={contact.email}
              href={openEmailHref}
              target={openEmailTarget}
              rel={openEmailRel}
            />
            <ContactItem
              icon={Phone}
              label={copy.contact.phone}
              value={contact.phone}
              href={`tel:${contact.phone.replace(/\s+/g, "")}`}
            />
            <ContactItem
              icon={Mail}
              label={copy.contact.languages}
              value={contact.languages.join(", ")}
            />
          </div>

          <div className="mt-9 border-t border-[color:var(--line-faint)] pt-6">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-[var(--muted-500)]">
              {copy.contact.quickLinks}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={contact.socials.github}
                target="_blank"
                rel="noreferrer"
                className="btn-line"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={contact.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-line"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={openEmailHref}
                target={openEmailTarget}
                rel={openEmailRel}
                className="btn-line"
              >
                <Mail className="h-4 w-4" />
                {copy.contact.email}
              </a>
            </div>
          </div>

          <div className="mt-8">
            <a href={currentResumePath} download className="btn-line">
              {copy.contact.downloadResume}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.56, delay: 0.08 }}
          className="surface-card p-7 sm:p-8"
        >
          <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-[var(--muted-500)]">
            {copy.contact.locationMap}
          </p>
          <h3 className="mt-2 text-lg font-medium text-[var(--paper-100)]">
            Salem, Tamil Nadu
          </h3>
          <div className="mt-5 overflow-hidden rounded-xl border border-[color:var(--line-soft)]">
            <iframe
              title="Map of Salem, Tamil Nadu"
              src="https://www.google.com/maps?q=Salem,Tamil+Nadu&output=embed"
              className="h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactItem({ icon: Icon, label, value, href, target, rel }) {
  const content = (
    <div className="flex items-start gap-4 border-b border-[color:var(--line-faint)] py-4 transition hover:border-[var(--accent-400)]">
      <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center border border-[color:var(--line-soft)] bg-white/[0.02] text-[var(--accent-400)]">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted-500)]">
          {label}
        </p>
        <p className="mt-1 text-base text-[var(--paper-100)]">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className="block">
        {content}
      </a>
    );
  }

  return content;
}
