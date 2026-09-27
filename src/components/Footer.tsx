import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ArrowUpRight, X } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { SERVICES_DATA } from '../data/services';
import { createWhatsAppUrl } from '../lib/whatsapp';

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] text-[#F5F5F2] border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pt-20 pb-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link
              to="/"
              className="inline-block font-display text-3xl sm:text-4xl tracking-tight text-[#F5F5F2]"
            >
              {SITE_CONFIG.name}
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              {SITE_CONFIG.description}
            </p>
            <div className="flex items-center gap-3 pt-2">
              {SITE_CONFIG.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono-tech uppercase tracking-wider text-neutral-300 hover:text-white border border-white/15 rounded-full px-3.5 py-1.5 hover:border-white/40 transition-colors"
                >
                  <span>{social.label}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="lg:col-span-2">
            <h3 className="font-mono-tech text-xs uppercase tracking-[0.2em] text-neutral-400 mb-5">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm text-neutral-300">
              {SITE_CONFIG.navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div className="lg:col-span-2">
            <h3 className="font-mono-tech text-xs uppercase tracking-[0.2em] text-neutral-400 mb-5">
              Services
            </h3>
            <ul className="space-y-3 text-sm text-neutral-300">
              {SERVICES_DATA.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div className="lg:col-span-2">
            <h3 className="font-mono-tech text-xs uppercase tracking-[0.2em] text-neutral-400 mb-5">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Studio
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-white transition-colors">
                  Client Reviews
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Insights &amp; Articles
                </Link>
              </li>
              <li>
                <Link to="/book" className="hover:text-white transition-colors">
                  Book a Consultation
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="lg:col-span-2">
            <h3 className="font-mono-tech text-xs uppercase tracking-[0.2em] text-neutral-400 mb-5">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp Concierge
                </a>
              </li>
              <li className="text-neutral-400 text-xs leading-relaxed pt-1">
                {SITE_CONFIG.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Back to Top Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-neutral-400">
          <div>© 2026 Novariyan. All rights reserved.</div>

          <div className="flex flex-wrap items-center gap-6">
            <button
              type="button"
              onClick={() => setLegalModal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setLegalModal('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 font-mono-tech uppercase tracking-wider text-neutral-300 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Clean Legal Modal for Privacy Policy & Terms */}
      {legalModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#121212] border border-white/15 rounded-2xl max-w-xl w-full p-6 sm:p-8 text-[#F5F5F2]">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
              <h4 className="font-display text-2xl tracking-wide">
                {legalModal === 'privacy' ? 'PRIVACY POLICY' : 'TERMS & CONDITIONS'}
              </h4>
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                aria-label="Close legal notice"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#0A0A0A] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-4 text-sm text-neutral-300 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    Novariyan respects your privacy. Information submitted through our consultation booking or contact forms (such as your name, company, email address, and project brief) is used strictly to evaluate and respond to your enquiry.
                  </p>
                  <p>
                    We do not sell, rent, or trade client contact details to third parties. Replace this placeholder privacy policy with your organization’s formal legal counsel documentation prior to commercial deployment.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    All digital design systems, custom code architectures, and case study materials presented on this website are the intellectual property of Novariyan unless otherwise stated in a signed Master Services Agreement.
                  </p>
                  <p>
                    Project timelines, deliverables, and payment milestones are governed by individual client proposals. Replace this placeholder notice with your formal studio terms of service.
                  </p>
                </>
              )}
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="rounded-full bg-[#F5F5F2] text-[#0A0A0A] px-5 py-2 text-xs font-medium uppercase tracking-wider hover:bg-white transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
