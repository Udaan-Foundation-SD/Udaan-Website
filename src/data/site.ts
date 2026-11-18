// Site-wide settings. Anything left empty is simply not shown on the page — no placeholder text goes live.
// TODO (Udaan team): fill these in before launch.
import type { ImageMetadata } from 'astro';
import ishanPhoto from '../assets/team/ishan.png';
import rohanPhoto from '../assets/team/rohan.png';

export type TeamMember = {
	name: string; // first name + last initial, e.g. 'Ishan K.'
	role: string; // a title ('Marketing Lead') or focus areas ('Marketing & Finance')
	group: string; // the row they appear in on /team, e.g. 'Team leads'; rows show in the order they first appear here
	bio?: string; // optional one-liner (about 15 words), shown under the role
	photo?: ImageMetadata; // optional small round headshot (leads only): a square cut-out PNG in src/assets/team/ (made with tools/portraits)
	color?: string; // leads: the bright colour behind their headshot (or behind their initials if there is no photo)
	grade?: string; // optional, e.g. 'Class of 2027'
	adult?: boolean; // adults aren't counted in the "students behind Udaan" number
};

/** Official name, as search engines and link previews should show it. */
export const ORG_NAME = 'Udaan Foundation SD';

/** One-sentence mission, used in structured data for search engines. */
export const ORG_MISSION =
	"Udaan Foundation is a San Diego student-led nonprofit that vets grassroots organizations across India and raises the funds they can't reach on their own, so more children get the support they need.";

/** Public contact email, e.g. 'hello@yourdomain.org'. Shown in the footer, privacy page, and apply page when set. */
export const CONTACT_EMAIL = 'udaanfoundation.admin@gmail.com';

/**
 * Checkout link from your payment provider (Givebutter, Donorbox, Stripe Payment Link…).
 * The donate form sends people there with ?amount=50&frequency=monthly — rename the fields in DonateForm.astro
 * if your provider expects different names. While empty, /donate shows the form as a "Donations opening soon" preview.
 */
export const DONATE_CHECKOUT_URL = '';

/** Application form for organizations (Google Form, Tally…). The /apply page links to it when set. */
export const APPLY_FORM_URL = 'https://tally.so/r/9NZqV4';

/** Legal / registration line for the footer, e.g. 'Udaan Foundation is a registered 501(c)(3) nonprofit. EIN 00-0000000.' */
export const LEGAL_NOTE = '';

/** Answer to "Is my donation tax-deductible?" on /donate. The question only appears once this is set. */
export const TAX_NOTE = '';

/**
 * GoatCounter site code — the "yourcode" in yourcode.goatcounter.com (free account at goatcounter.com).
 * When set, the live site counts visits with GoatCounter (no cookies, no personal data) and the privacy page says so.
 * Leave empty to turn analytics off.
 */
export const GOATCOUNTER_CODE = '';

/** Social links shown in the footer when set. */
export const SOCIALS: { label: string; href: string }[] = [
	{ label: 'Instagram', href: 'https://www.instagram.com/udaanfoundationsd/' },
];

/**
 * Everyone on the /team page, grouped into rows by `group` (rows appear in the order they first show up below).
 * Focus areas come from the workstream sign-up sheet. Keep it to first names and last initials.
 * For a team photo at the top of the page, save it as src/assets/team/group.jpg (or .png/.webp).
 */
export const TEAM: TeamMember[] = [
	{ name: 'Ennishka T.', role: 'Partnerships Lead', group: 'Team leads', color: '#ff4d9d' },
	{ name: 'Ishan K.', role: 'Finance & Tech Lead', group: 'Team leads', color: '#1fc463', photo: ishanPhoto, bio: "I joined to put my tech skills to work helping a nonprofit grow, starting with the site you're reading now." },
	{ name: 'Rohan S.', role: 'Fundraising Lead', group: 'Team leads', color: '#3b6cff', photo: rohanPhoto, bio: 'Life Scout working toward Eagle Scout; plays piano and French horn.' },
	{ name: 'Samia Z.', role: 'Marketing Lead', group: 'Team leads', color: '#ff7a1a' },

	{ name: 'Ahran T.', role: 'Marketing & Finance', group: 'Team members' },
	{ name: 'Ishanvi D.', role: 'Fundraising & Partnerships', group: 'Team members' },
	{ name: 'Lasya V.', role: 'Marketing & Fundraising', group: 'Team members' },
	{ name: 'Nikhil S.', role: 'Marketing & Partnerships', group: 'Team members' },
	{ name: 'Sania R.', role: 'Marketing & Finance', group: 'Team members' },
	{ name: 'Smaran M.', role: 'Tech', group: 'Team members' },
	{ name: 'Vivaan R.', role: 'Marketing & Tech', group: 'Team members' },

	{ name: 'Bhawna D.', role: 'Advisor', group: 'Adult leadership', adult: true },
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
