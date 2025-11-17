# Portfolio - Joaquín Roca Soler

Personal portfolio of Joaquín Roca Soler, Senior Software Engineer specialized in telecommunications provisioning systems and event-driven architectures.

## Description

This is a modern and responsive portfolio built with Astro that showcases:
- Professional experience
- Technical skills
- Professional certifications
- Contact information

## Technologies

- **Framework:** Astro v5.15.7
- **Language:** TypeScript (strict mode)
- **Fonts:** Space Grotesk (headings), JetBrains Mono (code)
- **Styling:** Modular CSS with CSS variables
- **Design:** Brutalist Web aesthetic

## Project Structure

```text
portfolio/
├── .vibe/                      # Project context and documentation
├── src/
│   ├── layouts/
│   │   └── Layout.astro        # Base layout with global styles
│   ├── components/
│   │   ├── Hero.astro          # Hero section with intro
│   │   ├── Skills.astro        # Technical skills grid
│   │   ├── Experience.astro    # Professional experience timeline
│   │   ├── Certifications.astro # Professional certifications
│   │   └── Contact.astro       # Contact information
│   └── pages/
│       └── index.astro         # Main page
├── public/                     # Static assets
└── package.json
```

## Commands

All commands are run from the root of the project:

| Command              | Action                                              |
| :------------------- | :-------------------------------------------------- |
| `npm install`        | Install dependencies                                |
| `npm run dev`        | Start development server at `localhost:4321`        |
| `npm run build`      | Build production site to `./dist/`                  |
| `npm run preview`    | Preview build locally before deploying              |

## Deployment

This site is automatically deployed to GitHub Pages via GitHub Actions when pushing to the main branch.

## Design Features

- **Brutalist Web Design**
- High contrast black and white theme
- Bold typography (Space Grotesk font)
- Thick borders and hard shadows
- Gold (#FFD700) accent color
- Minimalist, no-nonsense aesthetic
- Responsive design (mobile-first)
- Optimized accessibility

## License

© 2025 Joaquín Roca Soler. All rights reserved.
