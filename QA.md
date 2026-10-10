# Verification — 2026-10-10

Passed:
- `npm run check`: JavaScript syntax.
- Installed Chromium browser: no horizontal overflow at 320, 390, 768, 1280 and 1920px; local images loaded.
- Event and service filters, project dialog open/Escape close, mobile menu open/close, warm/cinematic palette switch.
- Required form validation and copyable enquiry draft; truthful unsent state with no configured recipient.
- With a test configuration: email draft includes recipient and enquiry fields; enabled services propagate to the service list, form and LocalBusiness Service structured data.
- Reduced-motion mode removes smooth scrolling and CSS transitions.
- Local WebP media: desktop hero 496 KB, mobile hero 108 KB, detail 156 KB, stage 68 KB.
- Desktop/mobile screenshots inspected for hierarchy, photo crops, form spacing and layout.

Browser QA used the already installed Playwright and Chromium outside the shipped folder. The website has no runtime dependencies.

Not configured: public deployment, real recipient receipt, owner facts/media approval, production privacy and policies. Preview remains noindex. Recheck contrast when changing brand colors.

## Design and motion revision

- Redesigned hero type, circular seal, photo notes, asymmetric portfolio, arched detail photography, process typography, contact ornament and oversized footer.
- CSS entrance/hover/dialog animations and once-only IntersectionObserver reveals; native CSS scroll progress where supported. No animation library or per-frame JavaScript listener added.
- Rechecked 320/390/768/1280/1920px: no horizontal overflow or clipped headline text, all reveal elements became visible after scrolling.
- Reduced-motion mode keeps every reveal visible and removes entrance/transformation motion. Warm and cinematic palettes checked.
- Event/service filters, gallery/Escape, enquiry draft, mobile navigation and JavaScript syntax rechecked: passed.
