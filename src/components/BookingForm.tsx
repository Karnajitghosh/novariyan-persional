import React, { useMemo, useState } from 'react';
import {
  Calendar,
  CheckCircle2,
  Clock,
  MessageCircle,
  RotateCcw,
} from 'lucide-react';
import { createBookingWhatsAppUrl } from '../lib/whatsapp';

const PROJECT_TYPES = [
  'New Website',
  'Website Redesign',
  'E-Commerce',
  '3D / Interactive Website',
  'SEO',
  'Maintenance',
  'Other',
] as const;

const BUDGET_OPTIONS = [
  'Under ₹50,000',
  '₹50,000–₹1,00,000',
  '₹1,00,000–₹2,50,000',
  '₹2,50,000+',
] as const;

const TIME_SLOTS = [
  '10:00 AM IST',
  '11:30 AM IST',
  '02:00 PM IST',
  '04:00 PM IST',
  '06:00 PM IST',
  '08:00 PM IST',
] as const;

function getUpcomingBusinessDays(count = 6): { iso: string; label: string; dayName: string }[] {
  const days: { iso: string; label: string; dayName: string }[] = [];
  const cursor = new Date();
  cursor.setDate(cursor.getDate() + 1);

  while (days.length < count) {
    const dayOfWeek = cursor.getDay();
    if (dayOfWeek !== 0) {
      const iso = cursor.toISOString().split('T')[0];
      const dayName = cursor.toLocaleDateString('en-US', { weekday: 'short' });
      const label = cursor.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      });
      days.push({ iso, label, dayName });
    }
    cursor.setDate(cursor.getDate() + 1);
  }
  return days;
}

export const BookingForm: React.FC = () => {
  const upcomingDays = useMemo(() => getUpcomingBusinessDays(6), []);

  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [projectType, setProjectType] = useState<string>(PROJECT_TYPES[0]);
  const [budget, setBudget] = useState<string>(BUDGET_OPTIONS[2]);
  const [preferredDate, setPreferredDate] = useState<string>(upcomingDays[0]?.iso || '');
  const [preferredTime, setPreferredTime] = useState<string>(TIME_SLOTS[1]);
  const [description, setDescription] = useState('');

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!name.trim() || !email.trim() || !whatsapp.trim() || !preferredDate || !preferredTime) {
      setErrorMessage('Please complete all required fields (Name, Email, WhatsApp, Date, and Time).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // TODO: Connect booking backend / calendar API endpoint (e.g. POST /api/bookings or Cal.com webhook)
    setSubmitted(true);
  };

  const whatsappConfirmUrl = createBookingWhatsAppUrl({
    name: name.trim(),
    company: company.trim() || undefined,
    projectType,
    budget,
    preferredDate,
    preferredTime,
    description: description.trim() || undefined,
  });

  if (submitted) {
    return (
      <div className="p-8 sm:p-12 rounded-2xl bg-[#0A0A0A] text-[#F5F5F2] border border-[#0A0A0A]">
        <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-6">
          <CheckCircle2 className="w-6 h-6 text-white" />
        </div>

        <p className="font-mono-tech text-xs uppercase tracking-[0.2em] text-neutral-400 mb-2">
          Consultation Summary Ready
        </p>

        <h2 className="font-display text-4xl sm:text-5xl text-white mb-4">
          CONFIRM YOUR CALL SLOT.
        </h2>

        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xl mb-8">
          Your consultation brief has been prepared on the frontend. Because no live calendar database is connected yet, please click <strong className="text-white">Confirm on WhatsApp</strong> below to dispatch your slot request directly to our studio lead.
        </p>

        {/* Summary Card */}
        <div className="p-6 rounded-xl bg-[#141414] border border-white/12 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-8">
          <div>
            <span className="font-mono-tech text-[11px] uppercase text-neutral-400 block">
              Client
            </span>
            <span className="font-medium text-white">
              {name} {company ? `(${company})` : ''}
            </span>
          </div>
          <div>
            <span className="font-mono-tech text-[11px] uppercase text-neutral-400 block">
              Project Type &amp; Budget
            </span>
            <span className="font-medium text-white">
              {projectType} · {budget}
            </span>
          </div>
          <div>
            <span className="font-mono-tech text-[11px] uppercase text-neutral-400 block">
              Preferred Date
            </span>
            <span className="font-mono-tech text-white">{preferredDate}</span>
          </div>
          <div>
            <span className="font-mono-tech text-[11px] uppercase text-neutral-400 block">
              Preferred Time
            </span>
            <span className="font-mono-tech text-white">{preferredTime}</span>
          </div>
          {description && (
            <div className="sm:col-span-2 pt-3 border-t border-white/10">
              <span className="font-mono-tech text-[11px] uppercase text-neutral-400 block mb-1">
                Project Brief
              </span>
              <p className="text-neutral-300 text-xs sm:text-sm">{description}</p>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={whatsappConfirmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#F5F5F2] text-[#0A0A0A] px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-white transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Confirm on WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-4 text-xs font-mono-tech uppercase tracking-wider text-neutral-300 hover:text-white hover:border-white transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Edit Details</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="p-7 sm:p-10 rounded-2xl bg-white border border-[#0A0A0A]/12 space-y-8"
    >
      {errorMessage && (
        <div
          role="alert"
          className="p-4 rounded-xl bg-[#0A0A0A] text-[#F5F5F2] text-xs sm:text-sm font-mono-tech"
        >
          {errorMessage}
        </div>
      )}

      {/* Step 1: Contact Details */}
      <div>
        <h3 className="font-mono-tech text-xs uppercase tracking-[0.2em] text-neutral-500 mb-5">
          01 · Your Details
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="booking-name"
              className="block text-xs font-medium uppercase tracking-wider text-[#0A0A0A] mb-2"
            >
              Full Name *
            </label>
            <input
              id="booking-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Aarav Mehta"
              className="w-full rounded-xl bg-[#F5F5F2] border border-[#0A0A0A]/15 px-4 py-3.5 text-sm text-[#0A0A0A] placeholder:text-neutral-400 focus:outline-none focus:border-[#0A0A0A]"
            />
          </div>

          <div>
            <label
              htmlFor="booking-company"
              className="block text-xs font-medium uppercase tracking-wider text-[#0A0A0A] mb-2"
            >
              Company / Brand
            </label>
            <input
              id="booking-company"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="e.g. Aurelia Developments"
              className="w-full rounded-xl bg-[#F5F5F2] border border-[#0A0A0A]/15 px-4 py-3.5 text-sm text-[#0A0A0A] placeholder:text-neutral-400 focus:outline-none focus:border-[#0A0A0A]"
            />
          </div>

          <div>
            <label
              htmlFor="booking-email"
              className="block text-xs font-medium uppercase tracking-wider text-[#0A0A0A] mb-2"
            >
              Email Address *
            </label>
            <input
              id="booking-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full rounded-xl bg-[#F5F5F2] border border-[#0A0A0A]/15 px-4 py-3.5 text-sm text-[#0A0A0A] placeholder:text-neutral-400 focus:outline-none focus:border-[#0A0A0A]"
            />
          </div>

          <div>
            <label
              htmlFor="booking-whatsapp"
              className="block text-xs font-medium uppercase tracking-wider text-[#0A0A0A] mb-2"
            >
              WhatsApp Number *
            </label>
            <input
              id="booking-whatsapp"
              type="tel"
              required
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              placeholder="+91 98765 43210"
              className="w-full rounded-xl bg-[#F5F5F2] border border-[#0A0A0A]/15 px-4 py-3.5 text-sm text-[#0A0A0A] placeholder:text-neutral-400 focus:outline-none focus:border-[#0A0A0A]"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="booking-website"
              className="block text-xs font-medium uppercase tracking-wider text-[#0A0A0A] mb-2"
            >
              Current Website URL (Optional)
            </label>
            <input
              id="booking-website"
              type="url"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              placeholder="https://yourcompany.com"
              className="w-full rounded-xl bg-[#F5F5F2] border border-[#0A0A0A]/15 px-4 py-3.5 text-sm text-[#0A0A0A] placeholder:text-neutral-400 focus:outline-none focus:border-[#0A0A0A]"
            />
          </div>
        </div>
      </div>

      {/* Step 2: Project Type & Budget */}
      <div className="pt-6 border-t border-[#0A0A0A]/10">
        <h3 className="font-mono-tech text-xs uppercase tracking-[0.2em] text-neutral-500 mb-5">
          02 · Scope &amp; Investment
        </h3>

        <div className="mb-6">
          <label className="block text-xs font-medium uppercase tracking-wider text-[#0A0A0A] mb-3">
            Project Type *
          </label>
          <div className="flex flex-wrap gap-2">
            {PROJECT_TYPES.map((type) => {
              const active = projectType === type;
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => setProjectType(type)}
                  className={`px-4 py-2.5 rounded-full text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    active
                      ? 'bg-[#0A0A0A] text-[#F5F5F2]'
                      : 'bg-[#F5F5F2] text-[#0A0A0A] border border-[#0A0A0A]/15 hover:border-[#0A0A0A]'
                  }`}
                >
                  {type}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-[#0A0A0A] mb-3">
            Estimated Budget *
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {BUDGET_OPTIONS.map((option) => {
              const active = budget === option;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setBudget(option)}
                  className={`px-4 py-3 rounded-xl font-mono-tech text-xs text-center transition-colors cursor-pointer ${
                    active
                      ? 'bg-[#0A0A0A] text-[#F5F5F2]'
                      : 'bg-[#F5F5F2] text-[#0A0A0A] border border-[#0A0A0A]/15 hover:border-[#0A0A0A]'
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Step 3: Polished Date & Time Selection */}
      <div className="pt-6 border-t border-[#0A0A0A]/10">
        <h3 className="font-mono-tech text-xs uppercase tracking-[0.2em] text-neutral-500 mb-5">
          03 · Preferred Consultation Date &amp; Time
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Date Selector */}
          <div className="lg:col-span-7">
            <label className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#0A0A0A] mb-3">
              <Calendar className="w-3.5 h-3.5" />
              <span>Select Preferred Date *</span>
            </label>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-3">
              {upcomingDays.map((d) => {
                const active = preferredDate === d.iso;
                return (
                  <button
                    key={d.iso}
                    type="button"
                    onClick={() => setPreferredDate(d.iso)}
                    className={`p-3 rounded-xl border text-center transition-colors cursor-pointer ${
                      active
                        ? 'bg-[#0A0A0A] text-[#F5F5F2] border-[#0A0A0A]'
                        : 'bg-[#F5F5F2] text-[#0A0A0A] border-[#0A0A0A]/15 hover:border-[#0A0A0A]'
                    }`}
                  >
                    <span className="block font-mono-tech text-[10px] uppercase opacity-70">
                      {d.dayName}
                    </span>
                    <span className="block font-semibold text-xs mt-1">
                      {d.label}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              <span className="font-mono-tech text-[11px] text-neutral-500">
                Or pick custom date:
              </span>
              <input
                type="date"
                aria-label="Custom preferred date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="rounded-lg bg-[#F5F5F2] border border-[#0A0A0A]/15 px-3 py-1.5 text-xs font-mono-tech text-[#0A0A0A]"
              />
            </div>
          </div>

          {/* Time Slot Selector */}
          <div className="lg:col-span-5">
            <label className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#0A0A0A] mb-3">
              <Clock className="w-3.5 h-3.5" />
              <span>Preferred Time Slot *</span>
            </label>

            <div className="grid grid-cols-2 gap-2">
              {TIME_SLOTS.map((slot) => {
                const active = preferredTime === slot;
                return (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setPreferredTime(slot)}
                    className={`py-3 px-3 rounded-xl font-mono-tech text-xs border transition-colors cursor-pointer ${
                      active
                        ? 'bg-[#0A0A0A] text-[#F5F5F2] border-[#0A0A0A]'
                        : 'bg-[#F5F5F2] text-[#0A0A0A] border-[#0A0A0A]/15 hover:border-[#0A0A0A]'
                    }`}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Step 4: Project Description */}
      <div className="pt-6 border-t border-[#0A0A0A]/10">
        <label
          htmlFor="booking-description"
          className="block text-xs font-medium uppercase tracking-wider text-[#0A0A0A] mb-2"
        >
          04 · Project Description &amp; Goals
        </label>
        <textarea
          id="booking-description"
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Tell us about your business, what you want to build or improve, and your target launch window..."
          className="w-full rounded-xl bg-[#F5F5F2] border border-[#0A0A0A]/15 p-4 text-sm text-[#0A0A0A] placeholder:text-neutral-400 focus:outline-none focus:border-[#0A0A0A]"
        />
      </div>

      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <button
          type="submit"
          className="rounded-full bg-[#0A0A0A] text-[#F5F5F2] px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-[#1F1F1F] transition-colors cursor-pointer"
        >
          Prepare Consultation Request
        </button>

        <span className="font-mono-tech text-[11px] text-neutral-500">
          30-Minute Discovery Call · No Obligation
        </span>
      </div>
    </form>
  );
};
