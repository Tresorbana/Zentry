# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a personal portfolio website for **BANA EMMY TRESOR**, a software developer specializing in AI, IoT, and full-stack development. The site is built as a modern, animated React application showcasing projects, skills, and professional information.

**Key Technologies:**
- React 19 + Vite (development server & build tool)
- Tailwind CSS (styling framework)
- GSAP (GreenSock Animation Platform) with ScrollTrigger for advanced animations
- Custom fonts: Zentry, General Sans, Robert, Circular Web

## Development Commands

### Essential Commands
```powershell
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

### Linting
- ESLint is configured for React with hooks validation
- Always run `npm run lint` before committing changes
- Config: `eslint.config.js` with React Hooks and React Refresh plugins

## Architecture & Structure

### Component Hierarchy
The app follows a single-page layout structure:
```
App.jsx (main container)
├── Navbar (navigation)
├── Hero (landing section with video transitions)
├── About (intro with scroll animations)
├── Features (bento grid layout)
├── Story (narrative section)
├── Contact (contact form/info)
└── Footer
```

### Animation System (GSAP)
This codebase is **heavily animation-driven** using GSAP. Key patterns:

1. **ScrollTrigger Integration**: Most sections use scroll-based animations
   - `useGSAP` hook from `@gsap/react` for React integration
   - Always register plugins: `gsap.registerPlugin(ScrollTrigger)`
   - Common pattern: pin sections while animating (`pin: true`)

2. **Animation Timelines**: Complex animations use `gsap.timeline()`
   - Dependencies array in `useGSAP` triggers re-animation
   - `revertOnUpdate: true` cleans up previous animations

3. **Hero Section**: Features state-driven video transitions with GSAP scale/clip-path animations

### Styling Architecture

**Tailwind + Custom Utilities**:
- Base styles in `src/index.css`
- Custom utility classes defined in `@layer utilities`
- Key utilities:
  - `.absolute-center`: Centers elements absolutely
  - `.flex-center`: Flex centering
  - `.mask-clip-path`: Polygon clipping for visual effects
  - `.special-font`: Applies Zentry font with OpenType features
  - `.hero-heading`, `.bento-title`, `.animated-title`: Typography presets

**Custom Tailwind Theme** (tailwind.config.js):
- Custom color palette: `blue`, `violet`, `yellow` shades
- Custom font families: `zentry`, `general`, `robert-medium`, `robert-regular`, `circular-web`
- Fonts loaded from `/public/fonts/` directory

### Asset Organization
Public directory structure:
```
public/
├── fonts/     # Custom WOFF2 fonts
├── videos/    # Hero section videos (hero-1.mp4, hero-2.mp4, hero-3.mp4)
├── img/       # Images (about.webp, etc.)
└── audio/     # Audio assets
```

**Important**: All assets are referenced from the root (e.g., `/fonts/zentry-regular.woff2`, `videos/hero-${index}.mp4`)

## Key Development Patterns

### Component Structure
- Functional components with hooks
- Use `useRef` for DOM element references (especially for GSAP targets)
- Use `useGSAP` instead of `useEffect` for GSAP animations (better cleanup)

### AnimatedTitle Component
Reusable component for scroll-triggered text animations:
- Splits text by `<br />` and spaces
- Each word animates individually with stagger
- Uses `dangerouslySetInnerHTML` for HTML in titles (e.g., `<b>` tags)

### Video Loading Pattern (Hero)
- Tracks loaded videos with state to show/hide loader
- Uses `onCanPlay` event to increment load counter
- Implements click-to-transition between videos with GSAP scale animations

## Common Modifications

### Adding New Sections
1. Create component in `src/components/`
2. Import and add to `App.jsx` in desired order
3. Use `id` props for scroll navigation
4. Implement scroll animations with `useGSAP` and `ScrollTrigger`

### Updating Content
This is currently a **gaming-themed template** that needs to be converted to a **professional portfolio** for Tresor Bana:
- Replace "Gaming", "Zentry", "Metagame Layer" references
- Update Hero video content or replace with images
- Modify About section with professional bio
- Update Features with project showcases
- Add Projects/Skills sections for work portfolio
- Update Contact section with professional contact info

### Color Scheme Customization
Modify `tailwind.config.js` → `theme.extend.colors`:
- Current palette: blue/violet/yellow
- Consider professional palette for portfolio (blues, grays, accent colors)

## Important Notes

- **No TypeScript**: Project uses JavaScript (`.jsx` files)
- **No test suite**: No testing framework configured
- **Vite HMR**: Hot Module Replacement enabled for fast development
- **React 19**: Using latest React features
- **ESLint rules**: Enforces React Hooks best practices

## Portfolio Conversion Strategy

When converting this to Tresor's portfolio:
1. Replace theme/branding in Hero and About sections
2. Convert Features section to Projects showcase (MedConnect, AffordableHomes, SMEFlow, CitizenNews AI, Ubuzima Wallet)
3. Add Skills section highlighting technical stack
4. Update Contact with professional email/GitHub/LinkedIn
5. Replace video assets with appropriate portfolio media
6. Adjust color scheme to professional palette
7. Update meta tags and page title in `index.html`
