import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { contact, resumePath } from "../data/portfolioData";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

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
        <p className="eyebrow">Contact</p>
        <h2 className="section-title max-w-6xl">
          Let&apos;s build something meaningful together.
        </h2>
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
              label="Location"
              value={contact.location}
            />
            <ContactItem
              icon={Mail}
              label="Email"
              value={contact.email}
              href={`mailto:${contact.email}`}
            />
            <ContactItem
              icon={Phone}
              label="Phone"
              value={contact.phone}
              href={`tel:${contact.phone.replace(/\s+/g, "")}`}
            />
            <ContactItem
              icon={Mail}
              label="Languages"
              value={contact.languages.join(", ")}
            />
          </div>

          <div className="mt-9 border-t border-[color:var(--line-faint)] pt-6">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-[var(--muted-500)]">
              Quick Links
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
              <a href={contact.socials.email} className="btn-solid">
                <Mail className="h-4 w-4" />
                Email
              </a>
            </div>
          </div>

          <div className="mt-8">
            <a href={resumePath} download className="btn-line">
              Download Resume
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.56, delay: 0.08 }}
          className="surface-card p-7 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <InputField label="Name" name="name" placeholder="Your name" />
            <InputField
              label="Email"
              name="email"
              placeholder="you@example.com"
              type="email"
            />
          </div>
          <div className="mt-4">
            <label
              className="mb-2 block text-sm font-medium text-[var(--paper-100)]"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Write your message here..."
              className="w-full rounded-xl border border-[color:var(--line-soft)] bg-white/[0.02] px-4 py-4 text-[var(--paper-100)] placeholder:text-[var(--muted-500)] outline-none transition focus:border-[var(--accent-400)]"
            />
          </div>

          <div className="mt-6 flex justify-end">
            <button type="submit" className="btn-solid">
              Submit
            </button>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 rounded-xl border border-[var(--accent-400)]/40 bg-[var(--accent-500)]/18 px-4 py-4 text-sm text-[var(--paper-100)]"
            >
              Message ready. Please use the email button or send a direct mail
              to continue the conversation.
            </motion.div>
          ) : null}
        </motion.form>
      </div>
    </section>
  );
}

function ContactItem({ icon: Icon, label, value, href }) {
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
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}

function InputField({ label, ...props }) {
  return (
    <div>
      <label
        className="mb-2 block text-sm font-medium text-[var(--paper-100)]"
        htmlFor={props.name}
      >
        {label}
      </label>
      <input
        {...props}
        id={props.name}
        className="w-full rounded-xl border border-[color:var(--line-soft)] bg-white/[0.02] px-4 py-4 text-[var(--paper-100)] outline-none transition placeholder:text-[var(--muted-500)] focus:border-[var(--accent-400)]"
      />
    </div>
  );
}
