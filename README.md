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
| Contact email, donation checkout link (e.g. Givebutter), application form link, legal / tax lines, social links, analytics code | `src/data/site.ts` |
| Team members (names, roles, grade, photos) | `TEAM` in `src/data/site.ts` |
| Donation amounts, "what we look for" criteria | `src/data/site.ts` |
| Partner organizations | one Markdown file each in `src/content/partners/` (copy `gurukulam.md`) |
| Photos | `src/assets/` (partner photos in `src/assets/partners/`) |
| Live domain (canonical links, sitemap, share previews) | `site` in `astro.config.mjs` and `public/CNAME` |

Anything left empty in `src/data/site.ts` is simply hidden on the site, so no placeholder text goes live.

- **Team page:** everyone in `TEAM` is listed in rows by their `group` (e.g. "Team leads", "Team members", "Adult leadership"), with name, role, and an optional one-line `bio`. The headline's small number counts the students automatically. To add a team photo under the intro, save it as `src/assets/team/group.jpg` (or `.png`/`.webp`); it appears automatically.
- **Donate page:** shows a "Donations opening soon" preview until `DONATE_CHECKOUT_URL` is set.
- **Apply page:** shows "Our application form is opening soon" until `APPLY_FORM_URL` is set.
- **Analytics:** set `GOATCOUNTER_CODE` to your GoatCounter site code (the `yourcode` in `yourcode.goatcounter.com`) to count visits. It has no cookies and collects no personal data. It only runs on the live site, not on `npm run dev`. The privacy page automatically switches to wording that describes it.

## Pages

`/` home · `/donate` · `/partners` and `/partners/<name>` · `/apply` · `/team` · `/privacy` · custom 404

## Design system (short version)

- **Type:** EB Garamond for headlines and body copy; Manrope for buttons, navigation, and small labels; Tiro Devanagari Hindi for Hindi text.
- **Colors** (in `src/styles/global.css`): `ink` (text), `leaf` (buttons/accents), `canopy` (dark panels).
- **Shared pieces:** `Button`, `Wordmark`, `DonateForm`, `PressCard` in `src/components/`.
- **Scroll motion:** add `data-reveal`, `data-read-along`, `data-count`, `data-scroll`, or `data-widen` to elements — see `src/scripts/motion.ts`. Everything is skipped for visitors who prefer reduced motion.

## Deploying (GitHub Pages)

The site is published to **https://www.udaanfoundationsd.org** by GitHub Actions (`.github/workflows/deploy.yml`): every push to `main` builds the site and publishes `dist/`.

- `public/CNAME` holds the custom domain; `public/robots.txt` points crawlers to `/sitemap-index.xml` (generated at build time by `@astrojs/sitemap`).
- URLs end in a slash (`/donate/`), matching how GitHub Pages serves folders — keep internal links in that form.
- Every page passes its own `title` (under 60 characters) and `description` (150–160 characters) to `Layout`; canonical, Open Graph, and Twitter tags are generated from them. The home page also carries Schema.org `NGO` structured data.

## Still to do

- Add `DONATE_CHECKOUT_URL` (Givebutter) and `APPLY_FORM_URL` when ready.
- Add the fiscal sponsor's legal line (`LEGAL_NOTE`, `TAX_NOTE`) once confirmed, and social links (`SOCIALS`) — they also flow into the structured data.
- Confirm partner facts and process copy, and parent/guardian consent for photos of children.
- Upgrade Node.js to 22.23.4+ and then Astro (`npm install astro@latest`) to pick up security fixes.
