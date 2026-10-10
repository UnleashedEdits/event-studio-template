# Forme — independent event studio template

A buildless, responsive website for event production, planning, styling and rental businesses. Forme is an editable sample brand, not a real business. No client projects, endorsements or business capabilities have been verified.

## Preview

Run `npm run dev` in this folder and open http://127.0.0.1:5178. No install or build required. Upload the folder to any static host when ready. `npm run check` validates JavaScript syntax.

## Personalize from one file

Edit `business.js`. It controls the name, wordmark or logo, city, service area, contacts, headline, photos and alt text, services, project data, team, testimonials, process, policy answers, palette colors and publication state. Set each service's `enabled` flag. Service summaries, form choices and filters follow enabled services. Remove unsupported service IDs from each project's `services` list. Add independent service entries with unique IDs for any specialty.

The preview uses warm styling; set `theme: 'cinematic'` to start dark. The footer switches palettes without persisting preferences or setting cookies. Keep custom colors readable and check contrast after editing.

The seven requested areas are navigable sections on one page. Each service expands to show deliverables and event fit. Each portfolio card opens an accessible native dialog with multiple photos, event type, service list and editable approved location. Project filters combine event type and service. No backend or booking confirmation is simulated.

## Exact owner checklist

- **Identity:** legal/trading name, short descriptor, logo SVG or transparent PNG, brand colors, owner-controlled domain, real city and confirmed service area. Decide whether to publish an address; never invent one.
- **Contacts:** monitored email, business phone with country code, Instagram HTTPS URL, WhatsApp number if supported. Empty contacts appear as placeholders; a valid email enables the draft link.
- **Hero:** one landscape finished-room image at least 1800px wide, plus an 800px mobile crop. This template leads with a photo; a video requires owner-approved footage, a lightweight poster, user-initiated playback and captions when speech conveys information.
- **Details:** one portrait photo of actual florals, lighting, equipment or styling details, at least 1000px wide.
- **Behind the scenes:** one real team/setup image, with people's names, roles, short approved biographies and releases where needed. Put it in `team.src` and describe it in `team.alt`. Replace the About placeholder with the owner’s real story.
- **Portfolio:** for each project, 3–6 approved images (finished room, close detail, installation/setup), approved title, wedding/corporate/private celebration category, exact services supplied, factual description, approved venue/city, descriptive alt text per photo and credits. Set `inspiration: false` only for verified owner work. Remove sample projects rather than implying stock images are the business’s portfolio.
- **Services:** enable only actual offerings; confirm deliverables, inventory/capacity limits, typical event fit, crew/operator scope, venue and power needs. Remove all bracketed service copy. Event support is conditional on the proposal.
- **Proof:** permission to publish each testimonial’s exact words, approved name/context and attribution. Add to `testimonials`; do not invent reviews, ratings, clients, awards, years, prices or guarantees.
- **Policies:** availability/booking confirmation, travel area and fees if applicable, access/loading/power and fixing restrictions, setup/collection windows, handling and damage rules, deposits/payment schedule, cancellation/rescheduling, quote validity, scope changes and customization. Replace all FAQ brackets.
- **Privacy:** legal identity, privacy contact, use of enquiry data, retention, rights and any providers. Replace the editable privacy notice in `index.html`. Revisit it if adding email delivery or tracking.

## Enquiries

The form validates name, contact preference and contact detail, event type/date, venue/city, guest count, services and description. Budget is optional. It creates a copyable draft. With a configured email, “Open email draft” opens a `mailto:` draft with those details. The visitor must send it from their email app. Nothing is sent, stored or confirmed by the site. The preferred contact method describes how the owner should respond; email remains the enquiry delivery method. The optional direct WhatsApp link works when configured.

A real delivery integration needs server-side validation, delivery error handling and verified receipt before displaying a success state. Never put secrets in this static source. Verify direct phone, email, Instagram and WhatsApp destinations with the owner before launch.

## SEO and launch

The preview is deliberately noindex. Titles/descriptions use the central business data. LocalBusiness/Service JSON-LD and canonical URL are emitted only when `published` is true, an HTTPS domain and email exist and city is no longer bracketed. No ratings, hours, prices or addresses are fabricated.

Before production: finish the checklist, set `published: true`, set `domain` to the final canonical HTTPS URL, replace the initial title/description in `index.html` with the same final business values for crawlers that do not run JavaScript, replace robots.txt's Disallow rule with `Allow: /`, and add a sitemap for the final URL. Keep robots policy and canonical domain synchronized. Review HTML source, rendered metadata and JSON-LD on the real domain. Set the social sharing image/title/description for your owner’s approved assets in the HTML head. Test keyboard focus, image crops, color contrast, navigation, gallery and email drafts after personalization.

## Media provenance

Local optimized WebP preview images were retrieved on 2026-10-10 from free Unsplash photo pages:

- `assets/room.webp`, `assets/room-small.webp`: Jennifer Kalenberg, “Wedding reception tables set with candles and greenery” — https://unsplash.com/photos/wedding-reception-tables-set-with-candles-and-greenery-ROOE-zHpZYU
- `assets/detail.webp`: Ben Atkins, “A beautifully set table for a wedding reception” — https://unsplash.com/photos/a-beautifully-set-table-for-a-wedding-reception-zjJiX9txwRU
- `assets/stage.webp`: kavinga dias, “A dimly lit stage with a curtain and lights” — https://unsplash.com/photos/a-dimly-lit-stage-with-a-curtain-and-lights-kDKH77RO0rE

Each source page identifies the image as free under the Unsplash license: https://unsplash.com/license. These are licensed illustrative moodboard photographs, not evidence of the owner’s work. No remote photo embeds, web fonts, tracking, form service or runtime dependencies load. Obtain rights and any necessary releases for replacement assets; retain the permissions and original photographer credits.

## Delivery state

Completed local template; not publicly deployed. `QA.md` records checks. Owner content and contact configuration are needed before real enquiries or publication.

## Design and motion

The editorial design uses staggered headline entrances, one-time section and card reveals, asymmetric/arched imagery, interactive photo arrows, a circular seal, dialog transitions and a native scroll progress line. CSS transforms and opacity provide the motion; IntersectionObserver activates sections once. There is no animation dependency, autoplay media or continuous JavaScript scroll loop. Reduced-motion preferences keep content visible and remove the decorative movement. Newly filtered project cards use the same reveal behavior.
