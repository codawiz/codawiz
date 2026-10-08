# CODAWIZ

Next.js App Router implementation of the neighboring `codawiz-design` reference. The original pages, content, responsive styling, illustrations, and interactions are retained.

## Development

```sh
npm install
npm run dev
```

```sh
npm run lint
npm run build
npm run format:check
```

## Structure

- `app/`: server-rendered pages and root layout. Service and project detail pages use static parameters, individual metadata, and proper 404 responses.
- `content/`: navigation, services, projects, and company content, separated by purpose.
- `components/`: shared presentation components. The header, workflow diagram, contact form, and motion system use client-side state.
- `components/ui/`: shared button and link styling, without a general-purpose UI framework.
- `app/globals.css`: the reference design tokens, responsive layouts, and custom CSS illustrations. Sora and Manrope are self-hosted by `next/font`.

The implementation uses Next.js routing and server components. It does not include the reference's TanStack router/query providers, Lovable runtime, or unused component library. FAQs use native accessible disclosure elements; form selectors use native controls.

## Content and contact delivery

The three project entries are explicitly labeled placeholders. Contact details remain “To be provided,” matching the reference. The contact form validates required fields and previews the prepared state; it does not transmit or store submissions. Connect an approved backend or email provider before enabling real delivery, and replace the placeholder case studies with verified material.

## Motion

GSAP/ScrollTrigger choreographs entrances, scroll reveals, chart animations, and pointer interactions. Lenis smooths desktop wheel scrolling; touch scrolling stays native. A dynamically imported Three.js network enhances the hero, pauses when offscreen or the tab is hidden, and disposes its GPU resources on unmount. The original HTML/SVG remains visible without WebGL or JavaScript.

The floating motion control pauses the effects. The system automatically respects `prefers-reduced-motion`, including changes while the page is open. Route transitions clean up animation contexts, scroll instances, and pointer listeners.

Implementation references: [GSAP matchMedia](<https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/>), [Lenis](https://github.com/darkroomengineering/lenis), and [Three.js](https://threejs.org/docs/).

## Static hosting

Static export is enabled in `next.config.ts`. Build with:

```sh
npm ci
npm run build
```

Upload the **contents of `out/`** to the web root of your static host, including `_next/`, the HTML files, and all route folders. No Node.js process, `npm run dev`, or Next.js server is needed on the host. Deploy at the domain root; hosting under a subdirectory requires configuring `basePath` before building.

Each route has an `index.html` for direct visits and refreshes. Configure the host to serve directory index files and use `404.html` for missing URLs, without an SPA fallback to the homepage.

To preview the exported build locally:

```sh
npm start
```

This serves `out/` as ordinary static files. Rebuild after changing content or code. Browser animations work in the export. The contact form still requires an external delivery endpoint before it can send messages.
