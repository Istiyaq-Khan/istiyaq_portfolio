# Project Todo List: Personal Portfolio Website

Based on `prd.md`, `desing doc.md`, and `tach stack.md`.

## 1. Project Setup & Config
- [ ] Initialize Next.js App (App Router, TypeScript)
- [ ] Setup Tailwind CSS (Custom colors/fonts from Design Doc)
- [ ] Setup GSAP (Animation)
- [ ] Setup MongoDB Atlas & Mongoose
- [ ] Configure Environment Variables

## 2. Core Structure & Components
- [ ] `Layout.tsx` (Root layout with SEO)
- [ ] `Navbar.tsx` (Responsive, Glassmorphism)
- [ ] `Footer.tsx` (Socials, Copyright)
- [ ] `Button.tsx` (Primary/Secondary styles)
- [ ] `Card.tsx` (Base card component)

## 3. Home Page (`/`)
- [ ] Hero Section (Headline, Subhead, CTAs, GSAP Entry)
- [ ] What I Do Section (Services Snapshot)
- [ ] Why Choose Me Section (Value Props)
- [ ] Soft "Future Automation" Note

## 4. Portfolio Page (`/work`)
- [ ] `Project` Model (Schema)
- [ ] Project Card Component (Thumbnail, Title, Skill)
- [ ] Portfolio Grid Layout
- [ ] Category Filter (Short-form, Motion, etc.)
- [ ] Project Detail View (Video loop, Process, Results)

## 5. Services Page (`/services`)
- [ ] Service Listing (Cards)
- [ ] Pricing Philosophy Text (No tables)
- [ ] "Let's Talk" CTAs

## 6. About Page (`/about`)
- [ ] Personal Intro & Identity Block
- [ ] Belief/Vision Statements
- [ ] Skills & Tools Grid

## 7. Contact Page (`/contact`)
- [ ] Contact Form (Client Component)
- [ ] Form Validation
- [ ] API Route (`POST /api/contact`)
- [ ] Save to MongoDB
- [ ] (Optional) Email Notifications

## 8. Admin Panel (`/admin`)
- [ ] Admin Login Page
- [ ] NextAuth.js Configuration
- [ ] Dashboard (View Inquiries)
- [ ] Message Management (Read/Delete)

## 9. Polish & Launch
- [ ] SEO Metadata (Dynamic)
- [ ] Sitemap & Robots.txt
- [ ] Mobile Responsiveness Check
- [ ] Performance Optimization (Image/Font loading)
- [ ] Deploy to Vercel
