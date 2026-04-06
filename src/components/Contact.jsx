import { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Languages,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
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
      className="flow-section section-shell section-padding pb-24"
    >
      <SectionHeading
        eyebrow="Contact"
        title="Get In Touch"
        subtitle="Open to internships, project opportunities, and technical conversations around software, web, and IoT work."
      />

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="glass-card p-7 sm:p-8"
        >
          <div className="space-y-4 text-white/80">
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
              icon={Languages}
              label="Languages"
              value={contact.languages.join(", ")}
            />
          </div>

          <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 backdrop-blur-sm">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-400">
              Quick Links
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <a
                href={contact.socials.github}
                target="_blank"
                rel="noreferrer"
                className="premium-button"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={contact.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="premium-button"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a href={contact.socials.email} className="premium-button-solid">
                <Mail className="h-4 w-4" />
                Email
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={resumePath} download className="premium-button-solid">
              <Send className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="glass-card p-7 sm:p-8"
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
              className="mb-2 block text-sm font-medium text-white"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Write your message here..."
              className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-4 text-white placeholder:text-white/40 outline-none transition focus:border-white/30 focus:bg-white/10"
            />
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <p className="text-sm text-white/50">
              This form is frontend-only and shows a success state on submit.
            </p>
            <button type="submit" className="premium-button-solid">
              <Send className="h-4 w-4" />
              Submit
            </button>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 rounded-xl border border-violet-500/30 bg-violet-600/20 px-4 py-4 text-sm text-violet-300"
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
    <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.05] p-4 transition hover:border-white/30 hover:bg-white/10 backdrop-blur-sm">
      <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/[0.05] text-violet-400">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/50">
          {label}
        </p>
        <p className="mt-1 text-base text-white/90">{value}</p>
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
        className="mb-2 block text-sm font-medium text-white"
        htmlFor={props.name}
      >
        {label}
      </label>
      <input
        {...props}
        id={props.name}
        className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-4 text-white outline-none transition placeholder:text-white/40 focus:border-white/30 focus:bg-white/10"
      />
    </div>
  );
}
