# Orbit Point One - CEO Masterclass

A premium landing page for CEO Masterclass seminars, built with Nuxt 3 and Nuxt UI.

## Tech Stack

- **Framework**: Nuxt 3
- **UI Library**: Nuxt UI (includes TailwindCSS)
- **Package Manager**: pnpm
- **Language**: TypeScript
- **Icons**: Nuxt Icon (Heroicons, MDI)
- **AI Integration**: Google Generative AI (Gemini)

## Getting Started

### Prerequisites

- Node.js 18+ or 20+
- pnpm (install with `npm install -g pnpm`)

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Environment Variables

Create a `.env` file in the root directory:

```env
API_KEY=your_google_gemini_api_key_here
```

## Project Structure

```
├── assets/
│   └── css/
│       └── main.css          # Custom CSS (glassmorphism, orbit patterns)
├── components/
│   └── EnrollmentModal.vue   # Enrollment form modal
├── composables/
│   └── useGemini.ts          # Gemini AI integration
├── layouts/
│   └── default.vue           # Default layout with navbar & footer
├── pages/
│   ├── index.vue             # Home page
│   ├── about.vue             # About page
│   ├── payment.vue           # Payment page
│   └── success.vue           # Success confirmation page
├── types/
│   └── index.ts              # TypeScript type definitions
├── utils/
│   └── constants.ts          # App constants (speakers, rundown, etc.)
├── app.config.ts             # Nuxt UI theme configuration
├── nuxt.config.ts            # Nuxt configuration
└── tailwind.config.ts        # Tailwind custom theme
```

## Features

- 🎨 **Premium Design**: Glassmorphism effects, gradient text, and orbit patterns
- 📱 **Fully Responsive**: Mobile-first design approach
- 🎯 **Enrollment Flow**: Modal-based enrollment with form validation
- 💳 **Payment Integration**: Payment page with multiple payment methods
- 🤖 **AI Consultation**: Gemini AI integration for course consultation
- 🎭 **Smooth Animations**: Hover effects and transitions throughout
- 🌙 **Dark Mode**: Beautiful dark theme with custom colors

## Custom Theme Colors

```css
orbit-primary: #A80606  /* Red */
orbit-beige: #F5F5DC    /* Beige/Cream */
orbit-gold: #E9C46A     /* Gold */
orbit-black: #1E1E1E    /* Dark Gray */
```

## Development

The app uses Nuxt 3's file-based routing. Pages are automatically generated from the `pages/` directory.

### Adding a New Page

1. Create a new `.vue` file in `pages/`
2. The file name becomes the route (e.g., `pages/contact.vue` → `/contact`)

### Modifying the Theme

Edit `tailwind.config.ts` to customize colors, fonts, and other design tokens.

## License

Private - All rights reserved
