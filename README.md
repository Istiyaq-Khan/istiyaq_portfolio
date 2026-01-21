# Istiyaq Khan Razin - Portfolio

> **"The Creative meets The Engineer."**

Welcome to the official portfolio codebase of **Istiyaq Khan Razin**, a Sylhet-based creative technologist and Founder of **IKK Studio**. This project represents the intersection of high-end motion graphics and robust software engineering—a custom-built CMS and portfolio designed to showcase the future of automated content creation.

![Istiyaq Khan Razin](/Istiyaq-Khan-Razin.png)

## 👨‍💻 About Me

**I am not just editing videos; I am building the systems that edit videos.**

My mission is to **solve efficiency problems for creators**. I bridge the gap between creative storytelling and technical automation, helping YouTubers and brands scale without burnout. By combining cinematic editing with Python and n8n automations, I transform manual workflows into scalable systems.

-   **Founder**: IKK Studio (Dec 2025 - Present)
-   **Focus**: AI Agents, Marketing Automation, High-Volume Content Pipelines.
-   **Location**: Sylhet, Bangladesh.

### Connect
-   [LinkedIn](https://www.linkedin.com/in/istiyaq-khan)
-   [GitHub](https://github.com/Istiyaq-Khan)
-   [YouTube](https://www.youtube.com/@istiyaq-khan10)
-   [Instagram](https://www.instagram.com/ist.iyaqkhan)
-   [Twitter](https://x.com/istiyaqkhanr)
-   [Portfolio](https://istiyaq.vercel.app)

---

## 🛠 Tech Stack

This portfolio is built on a cutting-edge stack, leveraging the latest in web performance and design capability.

### Core
-   **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Database**: [MongoDB](https://www.mongodb.com/) (Mongoose)
-   **Authentication**: [NextAuth.js](https://next-auth.js.org/)

### Styling & Animation
-   **CSS Engine**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **Animations**: [GSAP](https://gsap.com/) (GreenSock Animation Platform)
-   **Design System**: "The Creative Glitch" (Matte Black, Neon Purple, Acid Green)

### Content Management
-   **Rich Text**: `react-quill-new` (React 19 Compatible)
-   **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Key Features

### 1. Custom Admin CMS
A fully protected Admin Dashboard (`/admin`) allows for complete content management without touching code.
-   **Manage Projects**: Create, Edit, Delete portfolio items.
-   **Rich Text Support**: Write formatted case studies with properly embedded lists and headers.
-   **YouTube Integration**: Automatically converts YouTube links into embedded, responsive players.
-   **Service Management**: Update service offerings dynamically.

### 2. Interactive Work Gallery
The `/work` page features a client-side filtered gallery.
-   **Instant Filtering**: Switch between "Short-Form", "Motion Graphics", and "Automation" projects instantly.
-   **Dynamic Routing**: Each project gets a unique SEO-friendly slug (e.g., `/work/neon-genesis`).

### 3. "The Creative Glitch" Aesthetic
A bespoke design language built from scratch.
-   **Semantic CSS Variables**: Consistent theming across the app.
-   **Micro-interactions**: Hover effects, smooth transitions, and premium UI feel.

---

## ⚡ Getting Started

### Prerequisites
-   Node.js 20+
-   MongoDB Atlas URI

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/Istiyaq-Khan/istiyaq_portfolio.git
    cd istiyaq_portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install --legacy-peer-deps
    ```
    > Note: `--legacy-peer-deps` is required due to React 19 peer dependency management.

3.  **Configure Environment**:
    Create a `.env.local` file in the root:
    ```env
    MONGODB_URI=your_mongodb_connection_string
    NEXTAUTH_SECRET=your_generated_secret
    NEXTAUTH_URL=http://localhost:3000
    ADMIN_USER=admin
    ADMIN_PASSWORD=password
    ```

4.  **Run Development Server**:
    ```bash
    npm run dev
    ```

5.  **Build for Production**:
    ```bash
    npm run build
    ```

---

## 📄 License

© 2026 Istiyaq Khan Razin. All Rights Reserved.
