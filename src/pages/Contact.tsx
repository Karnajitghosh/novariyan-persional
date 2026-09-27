import React, { useState } from 'react';
import { CheckCircle2, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { useSEO } from '../lib/seo';
import { createContactWhatsAppUrl } from '../lib/whatsapp';
import { Button } from '../components/Button';
import { WhatsAppCTA } from '../components/WhatsAppButton';

export const Contact: React.FC = () => {
  useSEO({
    title: 'Contact Novariyan — Start Your Website Project',
    description:
      'Get in touch with Novariyan to discuss custom web development, web design, e-commerce, 3D interactive experiences, or technical SEO.',
    path: '/contact',
  });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState('Web Development');
  const [budget, setBudget] = useState('₹1,00,000–₹2,50,000');
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please enter your name, email address, and project message.');
      return;
    }

    // TODO: Connect email/CRM backend endpoint (e.g., POST /api/contact)
    setSubmitted(true);
  };

  const whatsappDispatchUrl = createContactWhatsAppUrl({
    name: name.trim() || 'Prospective Client',
    company: company.trim() || undefined,
    service,
    budget,
    message: message.trim() || undefined,
  });

  return (
    <div className="bg-[#F5F5F2] text-[#0A0A0A]">
      <section className="py-16 lg:py-24 bg-architectural-grid">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Editorial Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <p className="font-mono-tech text-xs uppercase tracking-[0.2em] text-neutral-500 mb-3">
                  Direct Studio Contact
                </p>
                <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl tracking-tight text-[#0A0A0A] mb-5">
                  LET&apos;S TALK.
                </h1>
                <p className="text-base text-neutral-700 leading-relaxed">
                  Have a new website, redesign, e-commerce flagship, or interactive 3D concept in mind? Send us an enquiry or schedule a discovery call directly.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <Button to="/book" variant="primary" size="md">
                  Book a Call
                </Button>
                <WhatsAppCTA variant="outline-dark" size="md" />
              </div>

              {/* Agency Contact Details (Clearly Marked Placeholders) */}
              <div className="p-7 rounded-2xl bg-white border border-[#0A0A0A]/10 space-y-5">
                <div className="flex items-center justify-between border-b border-[#0A0A0A]/10 pb-3">
                  <span className="font-mono-tech text-xs uppercase tracking-wider text-neutral-500">
                    Studio Coordinates
                  </span>
                  <span className="font-mono-tech text-[10px] uppercase text-neutral-400">
                    Replaceable Placeholders
                  </span>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-4 h-4 text-[#0A0A0A] shrink-0 mt-1" />
                  <div>
                    <p className="font-mono-tech text-[11px] uppercase text-neutral-500">
                      Email
                    </p>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-sm font-medium text-[#0A0A0A] hover:underline"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-4 h-4 text-[#0A0A0A] shrink-0 mt-1" />
                  <div>
                    <p className="font-mono-tech text-[11px] uppercase text-neutral-500">
                      WhatsApp / Phone
                    </p>
                    <p className="text-sm font-medium text-[#0A0A0A]">
                      {SITE_CONFIG.whatsappDisplay}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <MapPin className="w-4 h-4 text-[#0A0A0A] shrink-0 mt-1" />
                  <div>
                    <p className="font-mono-tech text-[11px] uppercase text-neutral-500">
                      Location
                    </p>
                    <p className="text-sm font-medium text-[#0A0A0A]">
                      {SITE_CONFIG.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Enquiry Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="p-8 sm:p-12 rounded-2xl bg-[#0A0A0A] text-[#F5F5F2]">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="font-display text-4xl sm:text-5xl text-white mb-4">
                    ENQUIRY PREPARED.
                  </h2>
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-8">
                    Thank you, {name}. Because this frontend preview is not yet connected to a live mail server, you can send your formatted enquiry immediately via WhatsApp or Email below.
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href={whatsappDispatchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 rounded-full bg-[#F5F5F2] text-[#0A0A0A] px-7 py-4 text-xs font-semibold uppercase tracking-wider hover:bg-white transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send via WhatsApp Now</span>
                    </a>
                    <a
                      href={`mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(
                        `Project Enquiry: ${service} (${name})`
                      )}&body=${encodeURIComponent(
                        `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nWhatsApp: ${whatsapp}\nService: ${service}\nBudget: ${budget}\n\nMessage:\n${message}`
                      )}`}
                      className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-4 text-xs font-mono-tech uppercase tracking-wider text-white hover:bg-white hover:text-[#0A0A0A] transition-colors"
                    >
                      <span>Open in Email Client</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="p-7 sm:p-10 rounded-2xl bg-white border border-[#0A0A0A]/12 space-y-6"
                >
                  {error && (
                    <div
                      role="alert"
                      className="p-4 rounded-xl bg-[#0A0A0A] text-[#F5F5F2] text-xs font-mono-tech"
                    >
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-medium uppercase tracking-wider text-[#0A0A0A] mb-2"
                      >
                        Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your full name"
                        className="w-full rounded-xl bg-[#F5F5F2] border border-[#0A0A0A]/15 px-4 py-3.5 text-sm text-[#0A0A0A]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-medium uppercase tracking-wider text-[#0A0A0A] mb-2"
                      >
                        Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full rounded-xl bg-[#F5F5F2] border border-[#0A0A0A]/15 px-4 py-3.5 text-sm text-[#0A0A0A]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-whatsapp"
                        className="block text-xs font-medium uppercase tracking-wider text-[#0A0A0A] mb-2"
                      >
                        WhatsApp
                      </label>
                      <input
                        id="contact-whatsapp"
                        type="tel"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl bg-[#F5F5F2] border border-[#0A0A0A]/15 px-4 py-3.5 text-sm text-[#0A0A0A]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-company"
                        className="block text-xs font-medium uppercase tracking-wider text-[#0A0A0A] mb-2"
                      >
                        Company
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Company or brand name"
                        className="w-full rounded-xl bg-[#F5F5F2] border border-[#0A0A0A]/15 px-4 py-3.5 text-sm text-[#0A0A0A]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-service"
                        className="block text-xs font-medium uppercase tracking-wider text-[#0A0A0A] mb-2"
                      >
                        Service
                      </label>
                      <select
                        id="contact-service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full rounded-xl bg-[#F5F5F2] border border-[#0A0A0A]/15 px-4 py-3.5 text-sm text-[#0A0A0A]"
                      >
                        <option value="Web Development">Web Development</option>
                        <option value="Web Design">Web Design</option>
                        <option value="E-Commerce">E-Commerce</option>
                        <option value="3D & Interactive">3D &amp; Interactive</option>
                        <option value="SEO Optimization">SEO Optimization</option>
                        <option value="Website Maintenance">Website Maintenance</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-budget"
                        className="block text-xs font-medium uppercase tracking-wider text-[#0A0A0A] mb-2"
                      >
                        Budget
                      </label>
                      <select
                        id="contact-budget"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full rounded-xl bg-[#F5F5F2] border border-[#0A0A0A]/15 px-4 py-3.5 text-sm text-[#0A0A0A]"
                      >
                        <option value="Under ₹50,000">Under ₹50,000</option>
                        <option value="₹50,000–₹1,00,000">₹50,000–₹1,00,000</option>
                        <option value="₹1,00,000–₹2,50,000">₹1,00,000–₹2,50,000</option>
                        <option value="₹2,50,000+">₹2,50,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-medium uppercase tracking-wider text-[#0A0A0A] mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your project timeline, goals, and requirements..."
                      className="w-full rounded-xl bg-[#F5F5F2] border border-[#0A0A0A]/15 p-4 text-sm text-[#0A0A0A]"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <button
                      type="submit"
                      className="rounded-full bg-[#0A0A0A] text-[#F5F5F2] px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-[#1F1F1F] transition-colors cursor-pointer"
                    >
                      Send Enquiry
                    </button>

                    <WhatsAppCTA variant="outline-dark" size="lg" />

                    <Button to="/book" variant="outline-dark" size="lg">
                      Book a Call
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
