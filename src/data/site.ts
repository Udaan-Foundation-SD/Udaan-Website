// Site-wide settings. Anything left empty is simply not shown on the page — no placeholder text goes live.
// TODO (Udaan team): fill these in before launch.
import type { ImageMetadata } from 'astro';

export type TeamMember = {
	name: string;
	role: string;
	grade?: string; // any text, e.g. 'Class of 2027' (never goes stale) or '11th grade'
	bio?: string; // one or two sentences in their own words
	photo?: ImageMetadata; // optional: import from src/assets/team/
	focus?: string; // where the face is, for cropping: CSS position like '50% 30%' (default: centre, slightly high)
	adult?: boolean; // adult leadership — listed after the students, under its own label
};

/** Official name, as search engines and link previews should show it. */
export const ORG_NAME = 'Udaan Foundation SD';

/** One-sentence mission, used in structured data for search engines. */
export const ORG_MISSION =
	"Udaan Foundation is a student-led nonprofit that vets grassroots organizations across India and raises the funds they can't reach on their own, so more children get the support they need.";

/** Public contact email, e.g. 'hello@yourdomain.org'. Shown in the footer, privacy page, and apply page when set. */
export const CONTACT_EMAIL = 'udaanfoundation.admin@gmail.com';

/**
 * Checkout link from your payment provider (Givebutter, Donorbox, Stripe Payment Link…).
 * The donate form sends people there with ?amount=50&frequency=monthly — rename the fields in DonateForm.astro
 * if your provider expects different names. While empty, /donate shows the form as a "Donations opening soon" preview.
 */
export const DONATE_CHECKOUT_URL = '';

/** Application form for organizations (Google Form, Tally…). The /apply page links to it when set. */
export const APPLY_FORM_URL = '';

/** Legal / registration line for the footer, e.g. 'Udaan Foundation is a registered 501(c)(3) nonprofit. EIN 00-0000000.' */
export const LEGAL_NOTE = '';

/** Answer to "Is my donation tax-deductible?" on /donate. The question only appears once this is set. */
export const TAX_NOTE = '';

/** Social links shown in the footer when set. */
export const SOCIALS: { label: string; href: string }[] = [
	// { label: 'Instagram', href: 'https://instagram.com/…' },
];

/**
 * Team members for the /team page, in display order.
 * Names + roles only -> a masthead layout. Once anyone has a photo -> the portrait grid. No other changes needed.
 */
export const TEAM: TeamMember[] = [
	{ name: 'Ishan K.', role: 'Finance & Tech Lead' },
	{ name: 'Ennishka T.', role: 'Fundraising Lead' },
	{ name: 'Samia Z.', role: 'Marketing Lead' },
	{ name: 'Bhawna D.', role: 'Advisor', adult: true },
	// { name: 'First L.', role: 'Founder' },
	// { name: 'First L.', role: 'Founder', grade: 'Class of 2027', bio: 'Why I am part of Udaan…', photo: firstPhoto, focus: '50% 30%' },
	// (import photos at the top: import firstPhoto from '../assets/team/first.jpg';)
];

/** Suggested donation amounts (in USD) for the donate form. */
export const DONATION_AMOUNTS = [25, 50, 100, 250];
export const DEFAULT_DONATION = 50;

/** What we look for in partner organizations — used on the home page and /apply. */
export const APPLY_CRITERIA = [
	{ title: 'Community-led', body: 'Run by people from the community it serves, who know its needs firsthand.' },
	{ title: 'Real, visible work', body: 'Programs we can see and verify, through photos, references, or local coverage.' },
	{ title: 'A clear need', body: 'A specific gap, from supplies to staff, that funding can directly fill.' },
];
