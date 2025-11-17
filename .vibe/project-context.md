# Portfolio Website - Project Context

## Overview
This is a static landing page/portfolio website built with Astro for Joaquín Roca Soler, a Senior Software Engineer. The website showcases his professional experience, skills, certifications, and contact information in an attractive, modern, and responsive design.

## Project Details

### Client Information
- **Name:** Joaquín Roca Soler
- **Title:** Senior Software Engineer
- **Location:** Alcalá de Henares, Madrid

### Technologies Used
- **Framework:** Astro v5.15.7
- **Language:** TypeScript (strict mode)
- **Template:** Minimal
- **Fonts:** Inter (UI), JetBrains Mono (code)
- **Styling:** Scoped CSS with CSS variables

## Project Structure

```
portfolio/
├── .vibe/                          # Project context and documentation
│   └── project-context.md          # This file
├── src/
│   ├── layouts/
│   │   └── Layout.astro            # Base layout with global styles
│   ├── components/
│   │   ├── Hero.astro              # Hero section with intro and code block
│   │   ├── Skills.astro            # Technical skills grid
│   │   ├── Experience.astro        # Professional experience timeline
│   │   ├── Certifications.astro    # Professional certifications
│   │   └── Contact.astro           # Contact info and footer
│   └── pages/
│       └── index.astro             # Main page composing all components
├── cv_Joaquin_Roca_Soler.pdf       # Source CV document
├── package.json
├── astro.config.mjs
└── tsconfig.json
```

## Components Description

### 1. Layout.astro
Base layout component that provides:
- HTML structure with meta tags
- Google Fonts integration (Inter & JetBrains Mono)
- Global CSS variables for theming
- Dark color scheme with gradients
- Responsive utilities
- Animation keyframes (fadeIn, slideIn, float)
- Scrollbar styling

**Color Scheme (Brutalist Web Design):**
- Background: #ffffff (white)
- Text: #000000 (black)
- Accent: #FFD700 (gold/yellow)
- Secondary backgrounds: #f5f5f5 (light gray), #000000 (black for contrast sections)

### 2. Hero.astro
First section of the page featuring:
- Greeting and name with gradient text
- Professional title: Senior Software Engineer
- Description of expertise in telecom provisioning and event-driven systems
- Two CTA buttons (Get in Touch, View Work)
- Location display
- Animated code block showing Java 21 code with reactive programming
- Floating animation effect
- Scroll indicator
- **Issue resolved:** Fixed JSX parsing error with code block by using `set:html` directive

### 3. Skills.astro
Technical skills section with:
- 9 skill categories displayed in a grid
- Categories: Backend (Java 11 & 21, Vert.x), Event-Driven & Messaging (Kafka, Uber Cadence), Big Data (Spark, BigQuery), Cloud (Google Cloud, AWS), Databases, API & Integration (OpenAPI, gRPC), CI/CD (Bazel, Jenkins), AI-Powered Development (GitHub Copilot, Claude Code), Methodologies
- Interactive skill tags with hover effects
- Core competencies section with progress bars
- Gradient background effect

### 4. Experience.astro
Professional experience timeline featuring:
- 4 positions (Grupo MasOrange, BBVA Next Technologies x2, Odilo)
- Timeline visualization with dots and connecting lines
- Current position badge with pulse animation (Grupo MasOrange)
- Project descriptions
- Achievement lists with checkmarks
- Technology tags
- Hover effects and transitions
- **Issue resolved:** Fixed "Current" badge overlapping with date by adding padding-right to header

### 5. Certifications.astro
Professional certifications display with:
- 5 certifications with custom icons
- Validation numbers included
- Color-coded icons for each cert
- Badge star on hover
- Grid layout (responsive)

**Certifications included:**
1. Certified Kubernetes Administrator (CKA) - LF-gdax2f9va0
2. MongoDB Certified Developer - 476214740
3. Professional Scrum Developer - 639688
4. Professional Scrum Master - 592581
5. Professional Scrum Product Owner - 604613

### 6. Contact.astro
Contact section and footer with:
- Email, phone, and location cards
- Education information (Universidad Politécnica de Cartagena)
- Availability status with pulse indicator
- Quick facts section (10+ years, 5 certs, 3 projects)
- Footer with copyright

## Professional Background

### Current Position
**Grupo MasOrange - Senior Software Engineer (Provision Squad)**
- January 2024 - Present
- Provisioning systems for telecommunications services (connectivity, TV, mobile)
- Event-driven architectures with Kafka
- Reactive programming with Vert.x
- Workflow orchestration with Uber Cadence
- Google Cloud Platform (BigQuery, Cloud Storage)
- Build management with Bazel
- Tech: Java 21, Vert.x, Kafka, Kubernetes, Google Cloud, Bazel, OpenAPI

### Previous Positions

**BBVA Next Technologies - Software Architect (LRBA Project)**
- March 2020 - January 2024
- ETL architecture using Apache Spark on Kubernetes
- Multiple data system integrations (Oracle, DB2, MongoDB, ElasticSearch, S3, HDFS)
- CI/CD with Jenkins pipelines
- Tech: Java, Python, Go

**BBVA Next Technologies - Software Architect (APX Project)**
- June 2018 - March 2020
- Critical banking architecture handling 80% of transactions
- Microservices migration using gRPC
- OSGI-based architecture
- Deployment on Docker/OpenShift/Kubernetes

**Odilo - Full Stack Developer**
- March 2014 - June 2018
- Microservices with Spring Boot and AngularJS
- AWS services integration
- Agile environment with full CI/CD

### Education
**Universidad Politécnica de Cartagena**
- Telecommunications Engineering
- 2009 - 2014

## Key Skills

### Backend Development
Java 11 & 21, Vert.x, Python, Spring Boot, Hibernate, Groovy

### Event-Driven & Messaging
Kafka, Event-Driven Architecture, Reactive Programming, Uber Cadence

### Big Data & Processing
Apache Spark, BigQuery, ETL Pipelines, Data Processing

### Cloud & Infrastructure
Google Cloud (BigQuery, Cloud Storage), AWS (S3, SQS, SNS), Docker, Kubernetes, OpenShift

### Databases
Oracle, MySQL, PostgreSQL, MongoDB, ElasticSearch, Neo4j

### API & Integration
OpenAPI, gRPC, REST, SOAP, Microservices Architecture

### CI/CD & DevOps
Bazel, Jenkins Pipelines, Maven, Gradle, Git, SonarQube

### AI-Powered Development
GitHub Copilot, Claude Code, AI-Assisted Coding

### Methodologies
Scrum, Kanban, TDD, BDD, Agile

## Design Features

### Visual Design (Brutalist Web)
- High contrast black and white theme
- Bold, heavy typography (Space Grotesk font)
- No gradients - pure flat colors
- Thick borders (4px-8px)
- Hard shadow effects (offset box-shadows)
- Minimalist, no-nonsense aesthetic
- Yellow (#FFD700) accent color for emphasis
- Card-based layouts with sharp edges and hover transforms

### Responsive Design
- Mobile-first approach
- Breakpoints: 640px, 768px, 968px
- Flexible grid layouts
- Stack on mobile, side-by-side on desktop
- Adjusted font sizes for different screens

### Animations
- Fade-in effects on scroll
- Floating animations (code block, scroll indicator)
- Pulse animation (current badge, availability status)
- Hover effects (cards, buttons, tags)
- Smooth transitions throughout

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Alt text considerations
- Focus states on interactive elements
- Readable color contrast

## Issues Resolved

### 1. Code Block Parsing Error
**Problem:** JSX parsing error with nested quotes and braces in Hero component code block
**Solution:** Used template literal in frontmatter with `set:html` directive to inject HTML safely

### 2. Current Badge Overlap
**Problem:** "Current" badge in Experience timeline overlapping with the date
**Solution:** Added `padding-right: 120px` to `.exp-header` and removed it in mobile view

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Server Information
- **Dev Server:** http://localhost:4321/
- **Hot Reload:** Enabled
- **Watch Mode:** Active

## Future Enhancements (Potential)
- Add a projects/portfolio section
- Include blog functionality
- Add social media links (LinkedIn, GitHub, etc.)
- Implement dark/light theme toggle
- Add contact form with email integration
- Include resume/CV download button
- Add animations library (AOS, Framer Motion)
- Implement SEO optimizations
- Add analytics (Google Analytics, Plausible)
- Create case studies for major projects

## Notes
- Source CV is in PDF format: `cv_Joaquin_Roca_Soler.pdf`
- All content is in English (translated from Spanish CV)
- Design emphasizes technical expertise and modern telecom/event-driven systems
- Code block in Hero showcases Java 21 with reactive programming (Vert.x)
- Color scheme chosen to represent tech/cloud industry
- All animations are performance-optimized with CSS
- Includes AI-powered development tools in skillset

## GitHub Pages Deployment

### Configuration Files

#### astro.config.mjs
Configured for GitHub Pages deployment:
- `site`: Set to GitHub Pages URL (needs user's GitHub username)
- `base`: Commented out, needs to be configured based on repo name
  - If deploying to `username.github.io`, leave commented
  - If deploying to `username.github.io/repo-name`, uncomment and set to `/repo-name`

#### .gitignore
Updated with comprehensive ignore rules:
- Build output (dist/, .astro/)
- Dependencies (node_modules/)
- Environment files (.env, .env.production, .env.local)
- IDE settings (.idea/, .vscode/, Vim swap files)
- OS-specific files (.DS_Store, Thumbs.db)
- Deployment platforms (.vercel, .netlify)
- Logs (npm, yarn, pnpm, lerna)

#### GitHub Actions Workflow
Location: `.github/workflows/deploy.yml`

**Triggers:**
- Push to main/master branch
- Manual workflow dispatch

**Jobs:**
1. **Build Job:**
   - Checkout repository
   - Setup Node.js 20
   - Install dependencies with `npm ci`
   - Build Astro site with `npm run build`
   - Upload build artifact

2. **Deploy Job:**
   - Deploy to GitHub Pages
   - Outputs deployment URL

**Permissions:**
- Read contents
- Write to GitHub Pages
- ID token for deployment

### Deployment Steps
1. Configure `astro.config.mjs` with your GitHub username and repo name
2. Enable GitHub Pages in repository settings:
   - Go to Settings > Pages
   - Source: GitHub Actions
3. Push to main/master branch
4. GitHub Actions will automatically build and deploy

## Project Status
✅ Completed - Ready for GitHub Pages deployment
- All sections implemented
- Responsive design tested
- Issues resolved
- Development server running successfully
- README updated with project information
- .gitignore configured for Astro
- GitHub Actions workflow created
- Astro config prepared for GitHub Pages

## Recent Fixes and Improvements

### Mobile Responsiveness (November 15, 2024)
**Issue:** Hero section not displaying correctly on mobile devices
- Content was too close to screen edges
- Code block (engineer.java) was too wide, forcing horizontal scroll
- Typography sizes not optimized for mobile

**Solution implemented in Hero.astro:**
- Added horizontal padding to hero section on mobile (`padding: var(--spacing-2xl) var(--spacing-md)`)
- Reduced code block font size to 0.65rem on mobile
- Set max-width for code block to prevent overflow: `max-width: calc(100vw - 2 * var(--spacing-md))`
- Made code content scrollable internally with `overflow-x: auto`
- Adjusted typography for mobile: name (2rem), title (1.5rem), description (1rem)
- Reduced code block padding on mobile for better space usage
- Hidden scroll indicator on mobile to prevent overlap with location text (`display: none`)

### Footer Update
- Updated copyright year from 2024 to 2025 in Contact.astro

## Deployment Configuration

### Repository Information
- **GitHub Username:** joaquin021
- **Repository Name:** portfolio
- **Deployment URL:** https://joaquin021.github.io/portfolio/

### astro.config.mjs
Configured with:
```javascript
site: 'https://joaquin021.github.io',
base: '/portfolio',
```

## Last Updated
November 17, 2025
- **MAJOR REDESIGN: Brutalist Web Style**
  - Complete visual overhaul from dark gradients to brutalist design
  - High contrast black/white color scheme with gold accent (#FFD700)
  - Bold typography using Space Grotesk font family
  - Thick borders (4-8px), hard shadows, no gradients
  - Minimalist, direct aesthetic
- Removed all "available for opportunities" messaging from Contact section
- Updated all components (Hero, Skills, Experience, Certifications, Contact) with brutalist design
- Updated Layout.astro with brutalist theme variables
- Changed from emojis to text-based labels in certifications
- Updated fonts from Inter to Space Grotesk for headings
- Simplified all hover effects to use offset box-shadows
- Footer redesigned with black background and gold accents
