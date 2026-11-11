// Site-wide settings. Anything left empty is simply not shown on the page — no placeholder text goes live.
// TODO (Udaan team): fill these in before launch.
import type { ImageMetadata } from 'astro';

export type TeamMember = {
	name: string;
	role: string;
	photo?: ImageMetadata; // optional: import from src/assets/team/
};

/** Public contact email, e.g. 'hello@yourdomain.org'. Shown in the footer when set. */
export const CONTACT_EMAIL = '';

/** Where "Donate" sends people once a payment provider (Stripe, Givebutter, Donorbox…) is set up. */
export const DONATE_URL = '#donate';

/** Where "Apply for funding" sends organizations (e.g. a Google Form or Tally form). */
export const APPLY_URL = '#apply';

/** Legal / registration line for the footer, e.g. 'Udaan Foundation is a registered 501(c)(3) nonprofit. EIN 00-0000000.' */
export const LEGAL_NOTE = '';

/** Social links shown in the footer when set. */
export const SOCIALS: { label: string; href: string }[] = [
	// { label: 'Instagram', href: 'https://instagram.com/…' },
];

/** Team members for the "Who we are" section. The team grid appears once this has entries. */
export const TEAM: TeamMember[] = [
	// { name: 'Full name', role: 'Founder' },
];

/** Suggested donation amounts (in USD) for the donate panel. */
export const DONATION_AMOUNTS = [25, 50, 100, 250];
export const DEFAULT_DONATION = 50;
