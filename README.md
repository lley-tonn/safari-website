## Safari Website – Next.js + Tailwind starter

This is a clean, scalable [Next.js](https://nextjs.org) app router project with [Tailwind CSS](https://tailwindcss.com) set up using a feature‑based architecture. It is intended as a starting point for a safari / travel style marketing site or application.

### Tech stack

- **Framework**: Next.js 16 (app router, `src` directory)
- **Styling**: Tailwind CSS 4 (PostCSS plugin, `@theme inline` tokens)
- **Language**: TypeScript
- **Linting**: ESLint with `eslint-config-next`

### Project structure

- **`src/app`**: Route segments, layouts and pages (Next.js app router).
- **`src/components`**: Reusable, framework‑agnostic UI and layout building blocks.
  - **`src/components/ui`**: Generic UI primitives such as `Button`.
  - **`src/components/layout`**: Global layout pieces like `SiteHeader` and `SiteFooter`.
- **`src/features`**: Feature‑oriented modules that group UI, logic and hooks by domain.
  - **`src/features/home`**: Example home feature with a `HeroSection` component.
- **`src/lib`**: Shared utilities and configuration.
  - **`src/lib/config/site.ts`**: Site‑wide metadata and navigation items.
  - **`src/lib/utils.ts`**: Small utility helpers (e.g. `cn` for className composition).

This layout lets you grow the app by adding new features under `src/features/*` without bloating `src/app` or duplicating UI.

### Local development

From the `web` directory:

```bash
npm install
npm run dev
```

Then open `http://localhost:3000` in your browser.

### Linting

```bash
npm run lint
```

