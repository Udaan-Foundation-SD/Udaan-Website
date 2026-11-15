# Udaan Foundation website

The website for Udaan Foundation, a student-led group that vets grassroots organizations in India and raises funds for them. Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## Running it

You need Node.js 22.12 or newer.

```sh
npm install      # once
npm run dev      # local preview at http://localhost:4321
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Where to change things

Most day-to-day updates don't need any code — just these files:

| What | Where |
|---|---|
| Contact email, donation checkout link (e.g. Givebutter), application form link, legal / tax lines, social links | `src/data/site.ts` |
| Team members (names, roles, grade, photos) | `TEAM` in `src/data/site.ts` |
| Donation amounts, "what we look for" criteria | `src/data/site.ts` |
| Partner organizations | one Markdown file each in `src/content/partners/` (copy `gurukulam.md`) |
| Photos | `src/assets/` (partner photos in `src/assets/partners/`) |
| Live domain (for share previews) | `site` in `astro.config.mjs` |

Anything left empty in `src/data/site.ts` is simply hidden on the site, so no placeholder text goes live.

- **Team page:** names and roles only shows a masthead list; once anyone has a photo it switches to a portrait grid.
- **Donate page:** shows a "Donations opening soon" preview until `DONATE_CHECKOUT_URL` is set.
- **Apply page:** shows "Our application form is opening soon" until `APPLY_FORM_URL` is set.

## Pages

`/` home · `/donate` · `/partners` and `/partners/<name>` · `/apply` · `/team` · `/privacy` · custom 404

## Design system (short version)

- **Type:** EB Garamond for headlines and body copy; Manrope for buttons, navigation, and small labels; Tiro Devanagari Hindi for Hindi text.
- **Colors** (in `src/styles/global.css`): `ink` (text), `leaf` (buttons/accents), `canopy` (dark panels).
- **Shared pieces:** `Button`, `Wordmark`, `DonateForm`, `PressCard` in `src/components/`.
- **Scroll motion:** add `data-reveal`, `data-read-along`, `data-count`, `data-scroll`, or `data-widen` to elements — see `src/scripts/motion.ts`. Everything is skipped for visitors who prefer reduced motion.

## Before launch / still to do

- Set `site` in `astro.config.mjs` to the real domain.
- Add `DONATE_CHECKOUT_URL` (Givebutter) and `APPLY_FORM_URL` when ready.
- Add a public `CONTACT_EMAIL`, and the fiscal sponsor's legal line (`LEGAL_NOTE`, `TAX_NOTE`) once confirmed.
- Confirm partner facts and process copy, and parent/guardian consent for photos of children.
