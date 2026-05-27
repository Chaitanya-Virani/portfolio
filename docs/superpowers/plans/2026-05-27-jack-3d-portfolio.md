# Jack 3D Creator Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-grade 3D Creator portfolio landing page for "Jack" with React 18, TypeScript, Tailwind CSS 3.4, Framer Motion 12, and Lucide React, implementing all specified sections and reusable components with premium design aesthetics.

**Architecture:** Single-page React application with reusable UI components (ContactButton, LiveProjectButton, FadeIn, Magnet, AnimatedText) and five main sections (HeroSection, MarqueeSection, AboutSection, ServicesSection, ProjectsSection). Uses Vite for bundling, follows mobile-first responsive design with scroll-driven animations and magnetic hover effects.

**Tech Stack:** React 18, TypeScript, Tailwind CSS 3.4, Framer Motion 12, Lucide React, Vite, Google Fonts (Kanit)

---

### Task 1: Project Setup and Configuration

**Files:**
- Create: `index.html`
- Create: `src/index.css`
- Create: `src/main.tsx`
- Create: `tsconfig.json`
- Create: `vite.config.ts`
- Create: `package.json`
- Create: `tailwind.config.cjs`
- Create: `postcss.config.cjs`

- [ ] **Step 1: Initialize package.json**

```json
{
  "name": "jack-3d-portfolio",
  "version": "1.0.0",
  "description": "3D Creator portfolio landing page for Jack",
  "main": "src/main.tsx",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "framer-motion": "^12.0.0",
    "lucide-react": "^0.300.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "@vitejs/plugin-react": "^4.0.0",
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.24",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.0.0",
    "vite": "^4.4.0"
  }
}
```

- [ ] **Step 2: Run npm install to install dependencies**

Run: `npm install`
Expected: All dependencies installed successfully

- [ ] **Step 3: Create tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

- [ ] **Step 4: Create tsconfig.node.json**

```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["vite.config.ts"]
}
```

- [ ] **Step 5: Create vite.config.ts**

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  }
});
```

- [ ] **Step 6: Create tailwind.config.cjs**

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- [ ] **Step 7: Create postcss.config.cjs**

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

- [ ] **Step 8: Create index.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Jack — 3D Creator</title>
    <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <style>
      html, body, #root, .main-wrapper {
        background: #0C0C0C;
        font-family: 'Kanit', sans-serif;
      }
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      .hero-heading {
        background: linear-gradient(180deg, #646973 0%, #BBCCD7 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      .main-wrapper {
        overflow-x: clip;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 9: Create src/index.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- [ ] **Step 10: Create src/main.tsx**

```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

- [ ] **Step 11: Commit initial setup**

Run: `git add .`
Run: `git commit -m "feat: initialize project with Vite, React, TypeScript, Tailwind"`

### Task 2: Create Reusable Components

**Files:**
- Create: `src/components/ContactButton.tsx`
- Create: `src/components/LiveProjectButton.tsx`
- Create: `src/components/FadeIn.tsx`
- Create: `src/components/Magnet.tsx`
- Create: `src/components/AnimatedText.tsx`

- [ ] **Step 1: Create ContactButton component**

```tsx
import { motion } from "framer-motion";

interface ContactButtonProps {
  className?: string;
}

export const ContactButton = ({ className = "" }: ContactButtonProps) => {
  return (
    <motion.button
      className={`${className} rounded-full bg-gradient-to-tr from-[#18011F] via-[#B600A8] to-[#7621B0] bg-[linear-gradient(123deg,#18011F_7%,#B600A8_37%,#7621B0_72%,#BE4C00_100%)] 
      shadow-[0px_4px_4px_rgba(181,1,167,0.25)] inset-shadow-[4px_4px_12px_#7721B1] 
      outline-outline-offset-[-3px] outline-2 outline-white 
      text-white font-medium uppercase tracking-widest 
      px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 
      text-xs sm:text-sm md:text-base`}
    >
      Contact Me
    </motion.button>
  );
};
```

- [ ] **Step 2: Create LiveProjectButton component**

```tsx
import { motion } from "framer-motion";

interface LiveProjectButtonProps {
  className?: string;
}

export const LiveProjectButton = ({ className = "" }: LiveProjectButtonProps) => {
  return (
    <motion.button
      className={`${className} rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] 
      font-medium uppercase tracking-widest 
      hover:bg-[#D7E2EA]/10 
      px-8 py-3 sm:px-10 sm:py-3.5 
      text-sm sm:text-base`}
    >
      Live Project
    </motion.button>
  );
};
```

- [ ] **Step 3: Create FadeIn component**

```tsx
import { motion, UseViewportProps } from "framer-motion";
import { useEffect } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
}

export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
}: FadeInProps) => {
  const viewport: UseViewportProps = {
    once: true,
    margin: "50px",
    amount: 0,
  };

  return (
    <motion.div
      whileInView="viewport"
      viewport={viewport}
      initial={{ x, y, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1, transition: { delay, duration, ease: [0.25, 0.1, 0.25, 1] } }}
    >
      {children}
    </motion.div>
  );
};
```

- [ ] **Step 4: Create Magnet component**

```tsx
import { motion, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
}

export const Magnet = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
}: MagnetProps) => {
  const [style, setStyle] = useState({ transform: "translate3d(0, 0, 0)" });
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const distance = Math.sqrt(x * x + y * y);
      if (distance < padding) {
        const translateX = (x * strength) / distance;
        const translateY = (y * strength) / distance;
        setStyle({
          transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
          transition: activeTransition,
        });
      } else {
        setStyle({
          transform: "translate3d(0, 0, 0)",
          transition: inactiveTransition,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [padding, strength, activeTransition, inactiveTransition]);

  return (
    <motion.div ref={elementRef} style={style}>
      {children}
    </motion.div>
  );
};
```

- [ ] **Step 5: Create AnimatedText component**

```tsx
import { useRef, useEffect } from "react";
import { useScroll, useTransform } from "framer-motion";

interface AnimatedTextProps {
  children: string;
  className?: string;
}

export const AnimatedText = ({ children, className = "" }: AnimatedTextProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const charSpans = children.split("").map((char, index) => {
    const charIndex = useTransform(
      scrollYProgress,
      [0, 1],
      [0.2, 1]
    );
    
    return (
      <motion.span
        key={index}
        style={{ opacity: charIndex }}
        className="inline-block"
      >
        {char}
      </motion.span>
    );
  });

  useEffect(() => {
    if (ref.current) {
      ref.current.style.visibility = "hidden";
      ref.current.style.position = "relative";
    }
  }, []);

  return (
    <motion.div ref={ref} className={className}>
      <span aria-hidden="true">{charSpans}</span>
    </motion.div>
  );
};
```

- [ ] **Step 6: Commit reusable components**

Run: `git add src/components/`
Run: `git commit -m "feat: create reusable components (ContactButton, LiveProjectButton, FadeIn, Magnet, AnimatedText)"`

### Task 3: Create HeroSection

**Files:**
- Create: `src/components/HeroSection.tsx`

- [ ] **Step 1: Create HeroSection component**

```tsx
import { FadeIn } from "./FadeIn";
import { Magnet } from "./Magnet";
import { ContactButton } from "./ContactButton";

export const HeroSection = () => {
  return (
    <div className="h-screen flex flex-col overflow-x-clip main-wrapper">
      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav className="px-6 md:px-10 pt-6 md:pt-8 flex justify-between">
          <div className="flex space-x-8">
            <a href="#about" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">
              About
            </a>
            <a href="#price" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">
              Price
            </a>
            <a href="#projects" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">
              Projects
            </a>
            <a href="#contact" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">
              Contact
            </a>
          </div>
        </nav>
      </FadeIn>

      {/* Heading */}
      <FadeIn delay={0.15} y={40}>
        <div className="overflow-hidden">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5">
            Hi, i&apos;m jack
          </h1>
        </div>
      </FadeIn>

      {/* Bottom bar */}
      <FadeIn delay={0.35} y={20}>
        <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10">
          <div className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px] clamp(0.75rem,1.4vw,1.5rem)">
            a 3d creator driven by crafting striking and unforgettable projects
          </div>
          <ContactButton className="" />
        </div>
      </FadeIn>

      {/* Portrait */}
      <FadeIn delay={0.6} y={30}>
        <div className="relative">
          <Magnent padding={150} strength={3}>
            <img 
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
              alt="Jack portrait"
              className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
            />
          </Magnent>
        </div>
      </FadeIn>
    </div>
  );
};
```

- [ ] **Step 2: Commit HeroSection**

Run: `git add src/components/HeroSection.tsx`
Run: `git commit -m "feat: create HeroSection component"`

### Task 4: Create MarqueeSection

**Files:**
- Create: `src/components/MarqueeSection.tsx`

- [ ] **Step 1: Create MarqueeSection component**

```tsx
import { useEffect, useRef } from "react";

const gifUrls = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif"
];

export const MarqueeSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const sectionTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
      const scrollY = window.scrollY;
      const innerHeight = window.innerHeight;
      
      const newOffset = (scrollY - sectionTop + innerHeight) * 0.3;
      setOffset(newOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Triple the GIFs for seamless looping
  const tripledGifs = [...gifUrls, ...gifUrls, ...gifUrls];

  return (
    <section className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10">
      <div ref={containerRef} className="relative overflow-hidden">
        {/* Row 1 */}
        <div className="flex gap-3 will-change-transform" 
             style={{ transform: `translateX(${offset - 200}px)` }}>
          {tripledGifs.slice(0, 33).map((url, index) => (
            <img 
              key={index} 
              src={url} 
              alt="" 
              className="w-[420px] h-[270px] rounded-2xl object-cover loading-lazy"
            />
          ))}
        </div>
        
        {/* Row 2 */}
        <div className="flex gap-3 will-change-transform" 
             style={{ transform: `translateX(${-offset + 200}px)` }}>
          {tripledGifs.slice(11, 44).map((url, index) => (
            <img 
              key={index} 
              src={url} 
              alt="" 
              className="w-[420px] h-[270px] rounded-2xl object-cover loading-lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
```

- [ ] **Step 2: Commit MarqueeSection**

Run: `git add src/components/MarqueeSection.tsx`
Run: `git commit -m "feat: create MarqueeSection component"`

### Task 5: Create AboutSection

**Files:**
- Create: `src/components/AboutSection.tsx`

- [ ] **Step 1: Create AboutSection component**

```tsx
import { FadeIn } from "./FadeIn";

export const AboutSection = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center px-5 sm:px-8 md:px-10 py-20">
      {/* Corner decorative images */}
      <FadeIn delay={0.1} duration={0.9} x={-80}>
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="moon"
          className="absolute w-[120px] sm:w-[160px] md:w-[210px] top-[4%] left-[1%] sm:left-[2%] md:left-[4%]"
        />
      </FadeIn>
      
      <FadeIn delay={0.25} duration={0.9} x={-80}>
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="p59"
          className="absolute w-[100px] sm:w-[140px] md:w-[180px] bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]"
        />
      </FadeIn>
      
      <FadeIn delay={0.15} duration={0.9} x={80}>
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="lego"
          className="absolute w-[120px] sm:w-[160px] md:w-[210px] top-[4%] right-[1%] sm:right-[2%] md:right-[4%]"
        />
      </FadeIn>
      
      <FadeIn delay={0.3} duration={0.9} x={80}>
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="group"
          className="absolute w-[130px] sm:w-[170px] md:w-[220px] bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]"
        />
      </FadeIn>

      {/* Center content */}
      <div className="flex col items-center gap-10 sm:gap-14 md:gap-16 z-10">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center clamp(3rem,12vw,160px)">
            About me
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.1} y={20}>
          <AnimatedText 
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] clamp(1rem,2vw,1.35rem)"
          >
            With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!
          </AnimatedText>
        </FadeIn>
        
        <FadeIn delay={0.2} y={10}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};
```

- [ ] **Step 2: Commit AboutSection**

Run: `git add src/components/AboutSection.tsx`
Run: `git commit -m "feat: create AboutSection component"`

### Task 6: Create ServicesSection

**Files:**
- Create: `src/components/ServicesSection.tsx`

- [ ] **Step 1: Create ServicesSection component**

```tsx
import { FadeIn } from "./FadeIn";

const servicesData = [
  { id: 1, number: "01", title: "3D Modeling", description: "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations." },
  { id: 2, number: "02", title: "Rendering", description: "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life." },
  { id: 3, number: "03", title: "Motion Design", description: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences." },
  { id: 4, number: "04", title: "Branding", description: "Crafting cohesive visual identities — from logos to full brand systems — that communicate a clear and memorable presence." },
  { id: 5, number: "05", title: "Web Design", description: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience." }
];

export const ServicesSection = () => {
  return (
    <section className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0} y={20}>
        <h2 className="text-[#0C0C0C] font-black uppercase text-center clamp(3rem,12vw,160px) mb-16 sm:mb-20 md:mb-28">
          Services
        </h2>
      </FadeIn>
      
      <div className="max-w-5xl mx-auto">
        {servicesData.map((service, index) => (
          <div key={service.id} className="border-b border-[rgba(12,12,12,0.15)]">
            <FadeIn delay={index * 0.1} y={10}>
              <div className="flex items-start gap-8 py-8 sm:py-10 md:py-12">
                <div className="font-black text-[#0C0C0C] leading-none clamp(3rem,10vw,140px)">
                  {service.number}
                </div>
                <div className="flex col">
                  <h3 className="font-medium uppercase clamp(1rem,2.2vw,2.1rem)">
                    {service.title}
                  </h3>
                  <p className="font-light leading-relaxed max-w-2xl clamp(0.85rem,1.6vw,1.25rem) opacity-60">
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        ))}
      </div>
    </section>
  );
};
```

- [ ] **Step 2: Commit ServicesSection**

Run: `git add src/components/ServicesSection.tsx`
Run: `git commit -m "feat: create ServicesSection component"`

### Task 7: Create ProjectsSection

**Files:**
- Create: `src/components/ProjectsSection.tsx`

- [ ] **Step 1: Create ProjectsSection component**

```tsx
import { FadeIn } from "./FadeIn";
import { LiveProjectButton } from "./LiveProjectButton";
import { useEffect, useState } from "react";

const projectsData = [
  {
    id: 1,
    number: "01",
    category: "Client",
    title: "Nextlevel Studio",
    images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85"
    ]
  },
  {
    id: 2,
    number: "02",
    category: "Personal",
    title: "Aura Brand Identity",
    images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85"
    ]
  },
  {
    id: 3,
    number: "03",
    category: "Client",
    title: "Solaris Digital",
    images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85"
    ]
  }
];

export const ProjectsSection = () => {
  return (
    <section className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0} y={20}>
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight clamp(3rem,12vw,160px) mb-16 sm:mb-20 md:mb-28">
          Project
        </h2>
      </FadeIn>
      
      <div className="relative">
        {projectsData.map((project, index) => (
          <div key={project.id} className="h-[85vh]">
            <div className="sticky top-24 md:top-32">
              <div className={`rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8`}>
                {/* Top row */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="font-black text-white clamp(3rem,10vw,140px) leading-none">
                    {project.number}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[rgba(215,226,234,0.6)] text-xs uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-white font-black text-xl tracking-tight">
                      {project.title}
                    </h3>
                    <LiveProjectButton className="mt-2" />
                  </div>
                </div>
                
                {/* Bottom row */}
                <div className="flex gap-4">
                  {/* Left column with 2 stacked images */}
                  <div className="w-[40%] flex flex-col gap-3">
                    <img 
                      src={project.images[0]} 
                      alt="" 
                      className="w-full h-[clamp(130px,16vw,230px)] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
                    />
                    <img 
                      src={project.images[1]} 
                      alt="" 
                      className="w-full h-[clamp(160px,22vw,340px)] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
                    />
                  </div>
                  
                  {/* Right column with 1 tall image */}
                  <div className="w-[60%]">
                    <img 
                      src={project.images[2]} 
                      alt="" 
                      className="w-full h-[clamp(260px,35vw,480px)] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
```

- [ ] **Step 2: Commit ProjectsSection**

Run: `git add src/components/ProjectsSection.tsx`
Run: `git commit -m "feat: create ProjectsSection component"`

### Task 8: Create Main App Component

**Files:**
- Create: `src/App.tsx`

- [ ] **Step 1: Create App component**

```tsx
import { HeroSection } from "./components/HeroSection";
import { MarqueeSection } from "./components/MarqueeSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { ProjectsSection } from "./components/ProjectsSection";

const App = () => {
  return (
    <div className="main-wrapper">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </div>
  );
};

export default App;
```

- [ ] **Step 2: Commit App component**

Run: `git add src/App.tsx`
Run: `git commit -m "feat: create main App component"`

### Task 9: Verification and Testing

**Files:**
- Modify: `package.json` (add verification scripts)

- [ ] **Step 1: Add verification scripts to package.json**

```json
{
  "name": "jack-3d-portfolio",
  "version": "1.0.0",
  "description": "3D Creator portfolio landing page for Jack",
  "main": "src/main.tsx",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "type-check": "tsc --noEmit",
    "lint": "eslint src --ext .ts,.tsx",
    "verify": "npm run type-check && npm run build"
  },
  "dependencies": {
    "framer-motion": "^12.0.0",
    "lucide-react": "^0.300.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "@vitejs/plugin-react": "^4.0.0",
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.24",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.0.0",
    "vite": "^4.4.0"
  }
}
```

- [ ] **Step 2: Run type checking**

Run: `npm run type-check`
Expected: No TypeScript errors

- [ ] **Step 3: Run build to verify no compilation errors**

Run: `npm run build`
Expected: Successful build with optimized assets in dist/

- [ ] **Step 4: Start development server for manual verification**

Run: `npm run dev`
Expected: Vite dev server running on http://localhost:3000

- [ ] **Step 5: Final commit**

Run: `git add .`
Run: `git commit -m "feat: complete Jack 3D Creator portfolio landing page"`