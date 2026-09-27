import { SITE_CONFIG } from '../config/site';

export interface BookingWhatsAppPayload {
  name: string;
  company?: string;
  projectType: string;
  budget?: string;
  preferredDate: string;
  preferredTime: string;
  description?: string;
}

export interface ContactWhatsAppPayload {
  name: string;
  company?: string;
  service: string;
  budget?: string;
  message?: string;
}

/**
 * Generates a dynamic WhatsApp message based on the current route path.
 */
export function getContextualWhatsAppMessage(pathname: string): string {
  if (pathname.startsWith('/services/web-development')) {
    return "Hi Novariyan, I'm interested in your custom Web Development services. I'd like to discuss my project.";
  }
  if (pathname.startsWith('/services/web-design')) {
    return "Hi Novariyan, I'm interested in your Web Design & UI/UX services. I'd like to discuss my project.";
  }
  if (pathname.startsWith('/services/ecommerce')) {
    return "Hi Novariyan, I'm looking to build or upgrade an E-Commerce store and would like to discuss my project.";
  }
  if (pathname.startsWith('/services/3d-interactive')) {
    return "Hi Novariyan, I'm interested in a 3D & Interactive web experience. Let's discuss what we can build.";
  }
  if (pathname.startsWith('/services/seo')) {
    return "Hi Novariyan, I'm interested in Technical SEO Optimization for my website.";
  }
  if (pathname.startsWith('/services/maintenance')) {
    return "Hi Novariyan, I'm looking for ongoing Website Maintenance & Support.";
  }
  if (pathname.startsWith('/work')) {
    return "Hi Novariyan, I just explored your portfolio work and would love to discuss a project for my business.";
  }
  if (pathname.startsWith('/book')) {
    return "Hi Novariyan, I'd like to schedule a discovery consultation call for my upcoming website project.";
  }
  return "Hi Novariyan, I'm interested in your web development services. I'd like to discuss my project.";
}

/**
 * Generates a pre-filled WhatsApp deep link for general or contextual CTAs.
 */
export function createWhatsAppUrl(customMessage?: string, pathname = '/'): string {
  const text = customMessage || getContextualWhatsAppMessage(pathname);
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encoded}`;
}

/**
 * Generates a structured WhatsApp deep link for a completed booking request.
 */
export function createBookingWhatsAppUrl(payload: BookingWhatsAppPayload): string {
  const lines = [
    'Hi Novariyan, I would like to confirm my consultation request:',
    '',
    `• Name: ${payload.name}${payload.company ? ` (${payload.company})` : ''}`,
    `• Project Type: ${payload.projectType}`,
    payload.budget ? `• Estimated Budget: ${payload.budget}` : null,
    `• Preferred Date: ${payload.preferredDate}`,
    `• Preferred Time: ${payload.preferredTime}`,
    payload.description ? `• Project Brief: ${payload.description}` : null,
  ].filter(Boolean);

  return createWhatsAppUrl(lines.join('\n'));
}

/**
 * Generates a structured WhatsApp deep link from the contact form.
 */
export function createContactWhatsAppUrl(payload: ContactWhatsAppPayload): string {
  const lines = [
    'Hi Novariyan, I am reaching out regarding a new project enquiry:',
    '',
    `• Name: ${payload.name}${payload.company ? ` (${payload.company})` : ''}`,
    `• Service Needed: ${payload.service}`,
    payload.budget ? `• Budget Range: ${payload.budget}` : null,
    payload.message ? `• Project Details: ${payload.message}` : null,
  ].filter(Boolean);

  return createWhatsAppUrl(lines.join('\n'));
}
