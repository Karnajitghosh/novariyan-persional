import React, { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Layers,
  Monitor,
  Smartphone,
  Tablet,
} from 'lucide-react';
import { getServiceBySlug, SERVICES_DATA } from '../data/services';
import { PROJECTS_DATA } from '../data/projects';
import { useSEO } from '../lib/seo';
import { Button } from '../components/Button';
import { WhatsAppCTA } from '../components/WhatsAppButton';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { BookingCTA } from '../components/BookingCTA';
import { OrbitalSculpture3D } from '../components/3D/OrbitalSculpture3D';
import {
  MonumentMode,
  NovariyanMonument3D,
} from '../components/3D/NovariyanMonument3D';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [interactive3DMode, setInteractive3DMode] = useState<MonumentMode>('monolith');

  useSEO({
    title: service
      ? `${service.title} Agency Services | NOVARIYAN`
      : 'Service | NOVARIYAN',
    description: service
      ? `${service.shortDescription} Engineered by Novariyan for ambitious businesses.`
      : 'Novariyan digital engineering services.',
    path: `/services/${slug || ''}`,
  });

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedProjects = PROJECTS_DATA.slice(0, 2);

  return (
    <div className="bg-[#F5F5F2] text-[#0A0A0A]">
      {/* Breadcrumb & Top Navigation */}
      <div className="border-b border-[#0A0A0A]/10 bg-white">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-4 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-mono-tech text-xs uppercase tracking-wider text-neutral-600 hover:text-[#0A0A0A]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Services</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            {SERVICES_DATA.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className={`px-3 py-1 rounded-full font-mono-tech text-[11px] uppercase tracking-wider transition-colors ${
                  s.slug === service.slug
                    ? 'bg-[#0A0A0A] text-[#F5F5F2]'
                    : 'text-neutral-600 hover:text-[#0A0A0A]'
                }`}
              >
                {s.number} {s.shortTitle}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="py-16 lg:py-24 bg-architectural-grid border-b border-[#0A0A0A]/12">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 font-mono-tech text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">
                <span>Service {service.number}</span>
                <span aria-hidden="true">·</span>
                <span>{service.title}</span>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-tight text-[#0A0A0A] mb-6 text-balance">
                {service.heroHeadline}
              </h1>

              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-2xl mb-9">
                {service.heroSubheadline}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Button to="/book" variant="primary" size="lg">
                  Book a Consultation
                </Button>
                <WhatsAppCTA
                  variant="outline-dark"
                  size="lg"
                  label="Discuss on WhatsApp"
                />
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="p-7 rounded-2xl bg-[#0A0A0A] text-[#F5F5F2] border border-[#0A0A0A]/15">
                <p className="font-mono-tech text-xs uppercase tracking-widest text-neutral-400 mb-4">
                  Core Deliverables
                </p>
                <ul className="space-y-3 mb-6">
                  {service.deliverables.map((del) => (
                    <li
                      key={del}
                      className="flex items-start gap-2.5 text-sm text-neutral-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-white/10">
                  <p className="font-mono-tech text-[11px] uppercase tracking-wider text-neutral-400 mb-1.5">
                    Technology Stack
                  </p>
                  <p className="font-mono-tech text-xs text-white leading-relaxed">
                    {service.technologies.join(' · ')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM & SOLUTION CONTRAST SECTION */}
      <section className="py-20 lg:py-28 border-b border-[#0A0A0A]/12">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* The Problem */}
            <div className="lg:col-span-6 p-8 sm:p-10 rounded-2xl bg-white border border-[#0A0A0A]/12 flex flex-col justify-between">
              <div>
                <p className="font-mono-tech text-xs uppercase tracking-[0.2em] text-neutral-500 mb-3">
                  01 · The Challenge
                </p>
                <h2 className="font-display text-3xl sm:text-4xl text-[#0A0A0A] mb-4">
                  {service.problemStatement.headline}
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-8">
                  {service.problemStatement.description}
                </p>
              </div>

              <ul className="space-y-3 pt-6 border-t border-[#0A0A0A]/10">
                {service.problemStatement.painPoints.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-start gap-3 text-sm text-neutral-700"
                  >
                    <span className="font-mono-tech text-xs text-neutral-400 mt-0.5">
                      —
                    </span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Novariyan Solution */}
            <div className="lg:col-span-6 p-8 sm:p-10 rounded-2xl bg-[#0A0A0A] text-[#F5F5F2] border border-[#0A0A0A] flex flex-col justify-between">
              <div>
                <p className="font-mono-tech text-xs uppercase tracking-[0.2em] text-neutral-400 mb-3">
                  02 · The Novariyan Approach
                </p>
                <h2 className="font-display text-3xl sm:text-4xl text-white mb-4">
                  {service.solutionStatement.headline}
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-8">
                  {service.solutionStatement.description}
                </p>
              </div>

              <ul className="space-y-3 pt-6 border-t border-white/12">
                {service.solutionStatement.outcomes.map((out) => (
                  <li
                    key={out}
                    className="flex items-start gap-3 text-sm text-neutral-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                    <span>{out}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALIZED DOMAIN ARCHITECTURE SECTIONS */}
      {service.specializedSections.map((block) => (
        <section
          key={block.title}
          className="py-20 lg:py-28 bg-white border-b border-[#0A0A0A]/12"
        >
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
            <SectionHeading
              eyebrow={block.label}
              title={block.title}
              description={block.description}
            />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {block.items.map((item, idx) => (
                <div
                  key={item.title}
                  className="p-7 sm:p-8 rounded-2xl bg-[#F5F5F2] border border-[#0A0A0A]/10"
                >
                  <span className="font-mono-tech text-xs text-neutral-500 block mb-3">
                    0{idx + 1}
                  </span>
                  <h3 className="text-xl font-semibold text-[#0A0A0A] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* SERVICE-SPECIFIC INTERACTIVE SHOWCASE MODULES */}
      {service.slug === '3d-interactive' && (
        <section className="py-20 lg:py-28 bg-[#0A0A0A] text-[#F5F5F2] border-b border-white/10">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
            <SectionHeading
              eyebrow="Live Spatial Sandbox"
              title="INTERACTIVE WEBGL DEMONSTRATION"
              description="Test real-time shader and geometry state transitions below. All DOM text remains 100% semantic and accessible."
              theme="dark"
            />

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 h-[420px] rounded-2xl bg-[#F5F5F2] overflow-hidden">
                <NovariyanMonument3D mode={interactive3DMode} />
              </div>
              <div className="lg:col-span-4 space-y-4">
                <p className="font-mono-tech text-xs uppercase tracking-wider text-neutral-400">
                  Switch Geometry State
                </p>
                {(
                  [
                    { id: 'monolith', label: '01. Solid PBR Monolith' },
                    { id: 'wireframe', label: '02. Architectural Wireframe' },
                    { id: 'kinetic', label: '03. Kinetic Orbital Motion' },
                    { id: 'exploded', label: '04. Exploded Structural View' },
                  ] as { id: MonumentMode; label: string }[]
                ).map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setInteractive3DMode(m.id)}
                    className={`w-full p-4 rounded-xl border text-left font-mono-tech text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                      interactive3DMode === m.id
                        ? 'bg-white text-[#0A0A0A] border-white'
                        : 'bg-[#141414] text-neutral-300 border-white/12 hover:border-white/30'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {service.slug === 'web-design' && (
        <section className="py-20 lg:py-24 bg-[#F5F5F2] border-b border-[#0A0A0A]/12">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
            <SectionHeading
              eyebrow="Multi-Viewport Precision"
              title="INTENTIONAL RESPONSIVE DESIGN"
              description="We never simply shrink a desktop page. Every breakpoint has dedicated typographic scales and touch-first navigation."
            />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-7 rounded-2xl bg-white border border-[#0A0A0A]/10">
                <Monitor className="w-6 h-6 text-[#0A0A0A] mb-4" />
                <h3 className="font-display text-2xl mb-2">DESKTOP (1440PX+)</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  12-column asymmetric grids, expansive negative space, and spatial 3D viewports that command large displays.
                </p>
              </div>
              <div className="p-7 rounded-2xl bg-white border border-[#0A0A0A]/10">
                <Tablet className="w-6 h-6 text-[#0A0A0A] mb-4" />
                <h3 className="font-display text-2xl mb-2">TABLET &amp; LAPTOP (768PX–1439PX)</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Fluid column adaptation, balanced line measures (65ch), and touch-compatible interactive galleries.
                </p>
              </div>
              <div className="p-7 rounded-2xl bg-white border border-[#0A0A0A]/10">
                <Smartphone className="w-6 h-6 text-[#0A0A0A] mb-4" />
                <h3 className="font-display text-2xl mb-2">MOBILE (320PX–767PX)</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Thumb-zone action bars, zero horizontal overflow, full-screen drawer navigation, and simplified 3D rendering.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* PROCESS & EXECUTION */}
      <section className="py-20 lg:py-28 border-b border-[#0A0A0A]/12">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Service Workflow"
            title={`OUR ${service.title.toUpperCase()} PROCESS`}
            description="Structured milestones with transparent engineering and design checkpoints."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSummary.map((step) => (
              <div
                key={step.step}
                className="p-7 rounded-2xl bg-white border border-[#0A0A0A]/10 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono-tech text-xs text-neutral-400 block mb-4">
                    STEP {step.step}
                  </span>
                  <h3 className="text-lg font-semibold text-[#0A0A0A] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED PORTFOLIO WORK */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#0A0A0A]/12">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Proof of Craft"
            title="SELECTED CASE STUDIES"
            rightElement={
              <Link
                to="/work"
                className="inline-flex items-center gap-2 font-mono-tech text-xs uppercase tracking-wider text-[#0A0A0A] hover:underline"
              >
                <span>View Full Archive</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            }
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((proj) => (
              <ProjectCard key={proj.id} project={proj} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <p className="font-mono-tech text-xs uppercase tracking-[0.2em] text-neutral-500 mb-3">
                Frequently Asked Questions
              </p>
              <h2 className="font-display text-4xl sm:text-5xl text-[#0A0A0A] mb-4">
                COMMON QUESTIONS ABOUT {service.title.toUpperCase()}
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                Have a specific technical question not covered here? Reach out directly and speak with our lead engineer.
              </p>
              <OrbitalSculpture3D
                theme="light"
                variant="orbital"
                className="w-full h-48 hidden lg:block"
              />
            </div>

            <div className="lg:col-span-7 divide-y divide-[#0A0A0A]/12 border-t border-b border-[#0A0A0A]/12">
              {service.faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div key={faq.question} className="py-5">
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between gap-4 text-left font-semibold text-base sm:text-lg text-[#0A0A0A] cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed pr-8">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <BookingCTA />
    </div>
  );
};
