# Villa Mosta - Boutique Villa Booking Site

A sophisticated boutique villa booking website built with Next.js 15, featuring a complete admin dashboard, Stripe payment integration, and Supabase backend.

## Tech Stack

- **Framework**: Next.js 15 (App Router) with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Payments**: Stripe
- **Animations**: GSAP, Framer Motion
- **Forms**: React Hook Form + Zod

## Features

- 🏠 Elegant editorial design inspired by premium villa websites
- 📱 Fully responsive (mobile-first approach)
- ⚡ Smooth scroll animations with reduced-motion support
- 🎨 Custom design system with CSS variables
- 📝 CMS-driven content (all content from database)
- 📅 Real-time availability calendar
- 💳 Stripe payment integration
- 🔐 Admin dashboard for content management

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account
- Stripe account

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd villa-booking-site
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Fill in your environment variables in `.env.local`:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── admin/              # Admin dashboard
│   ├── api/                # API routes
│   ├── book/               # Booking flow
│   ├── rooms/              # Rooms listing & details
│   └── ...
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Page sections
│   └── ui/                 # Reusable UI components
├── lib/                    # Utilities and helpers
└── styles/                 # Global styles
```

## Design System

- **Colors**: Warm cream/beige palette with stone accents
- **Typography**: Playfair Display (serif) + Inter (sans-serif)
- **Spacing**: 8px grid system
- **Animations**: Smooth transitions with reduced-motion support

## License

Private - All rights reserved
