# Multilingual Astro Website

This project is built with Astro and includes multilingual support, TailwindCSS for styling, and GSAP for animations.

## Features

- Multilingual support (Italian and English)
- Content management through JSON files
- Full-screen navigation menu with GSAP animations
- TailwindCSS for styling
- Prepared for Strapi CMS integration

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
  components/      # Reusable components
  layouts/         # Page layouts
  pages/          # Route pages
  styles/         # Global styles
  content/        # Content files
    i18n/         # Translation files
    faq/          # FAQ content
```

## Adding New Languages

1. Create a new translation file in `src/content/i18n/`
2. Add the language to `astro.config.mjs`
3. Create corresponding pages in `src/pages/[lang]/`

## Strapi Integration

Comments are placed throughout the code where Strapi integration will be implemented. Key areas:

- Content fetching in page components
- Dynamic routing setup
- Media handling