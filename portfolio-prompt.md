You are personalizing an already-built portfolio site. Do NOT rebuild anything — 
only replace content/data. The component structure, animations, and styles stay 
exactly the same.

/full-output-enforcement Output every modified file completely. No truncation.

/impeccable After every change, verify no animation, layout, or TypeScript 
error was introduced.

---

## SKILLS TO USE

Before making any changes, load and apply these skills:

/ui-ux-pro-max — Apply for all visual decisions, color choices, and layout spacing
/emilkowal.ski — Apply for all animation timing, easing, and motion polish
/impeccable.style — Run after every file change to catch anti-patterns
/taste-skill — Apply as the final aesthetic filter before completing each section

---

## STEP 1 — GENERATE IMAGES FIRST (Higgsfield MCP)

Before touching any code, use the Higgsfield MCP to generate all required 
images. Save each URL and label it exactly as shown below.

Generate these images in one batch:

### HERO PORTRAIT
- hero_portrait: A stylized 3D character portrait of Chaitanya, young South 
  Asian male, short black hair swept upward, medium-dark warm skin tone, 
  clear transparent-frame rectangular glasses, light black beard and mustache, 
  rendered in Blender/Cinema4D aesthetic, void black background (#0a0a0f), 
  facing slightly left, full upper body visible, wearing a dark minimal 
  techwear jacket, iris purple (#7c6fff) rim lighting on shoulders

### ABOUT SECTION — 4 CORNER DECORATIVES
- about_topleft: neural network node 3D icon, holographic iridescent material, 
  dark background (#0a0a0f), floating, subtle iris purple glow
- about_bottomleft: small robot character 3D icon, neon iris purple outline, 
  dark background, friendly expression
- about_topright: glass cube 3D icon, crystal/glass material, internal mint 
  green (#34d399) light refraction, dark background
- about_bottomright: lightning bolt 3D icon, chrome/metallic material, 
  dark background, electric feel

### PROJECT 01 — "Customer Insight Triage System"
- proj1_img1: dark analytics dashboard UI on a monitor, dramatic side lighting, 
  deep charcoal background, purple and teal accent colors, cinematic product shot
- proj1_img2: close-up of a sentiment analysis chart with colored badges 
  (red urgent, green normal), dark UI aesthetic, data visualization focus
- proj1_main: hero wide shot of an AI triage system dashboard, split-screen 
  showing review input and real-time ML output, void black background, 
  iris purple highlights, cinematic wide format

### PROJECT 02 — "ESP32 Wireless Walkie-Talkie"
- proj2_img1: two ESP32 circuit boards on a dark matte surface, dramatic 
  overhead lighting, electronic components visible, teal accent glow
- proj2_img2: close-up of audio waveform visualization on a dark oscilloscope 
  screen, green waveform lines, embedded systems aesthetic
- proj2_main: hero wide shot of wireless communication system, two devices 
  connected by visible signal arcs, void black background, mint green 
  (#34d399) signal wave animation feel, cinematic wide format

### PROJECT 03 — "Multi-Agent Research Assistant" (Placeholder)
- proj3_img1: abstract visualization of multiple AI agents as glowing nodes 
  connected by data streams, deep dark background, iris purple and mint colors
- proj3_img2: close-up of a streaming text output panel, dark terminal 
  aesthetic, token-by-token text appearing with mint green cursor
- proj3_main: hero wide shot of an agentic pipeline diagram, nodes labeled 
  Planner / Researcher / Synthesizer connected by animated paths, void black 
  background, iris purple glow, cinematic wide format

Confirm all 13 image URLs are ready before proceeding to Step 2.

---

## STEP 2 — UPDATE CONTENT IN CODE

Now update ONLY the data/content in these files:

### index.html
- <title>: Change to "Chaitanya Virani — Building AI that thinks"
- Google Fonts link: keep Kanit, no change needed

### HeroSection.tsx
- Navbar links: Replace with: About / Projects / Skills / Contact
- h1 heading: Change to "Hi, i'm chaitanya"
  (keep lowercase i, keep gradient class, keep all sizing)
- Bottom-left tagline: Change to "AN AI ENGINEER OBSESSED WITH AGENTS THAT ACT"
- Hero portrait image src: → hero_portrait URL from Step 1

### AboutSection.tsx
- Heading: keep "About me"
- Body text (AnimatedText): Replace with:
  "A CS student obsessed with building AI systems that don't just predict — 
  they act. i focus on agentic pipelines, real-time automation, and embedded 
  intelligence. Let's build something that thinks together!"
  (190 chars — within 150–250 limit)
- Corner image srcs: → about_topleft, about_bottomleft, about_topright, 
  about_bottomright URLs from Step 1

### ServicesSection.tsx
Replace the 5 service items with:

01 — Agentic AI Systems — "Design and build multi-agent pipelines that plan, 
     reason, and act autonomously on real-world tasks."

02 — Real-Time ML Backends — "FastAPI + scikit-learn inference systems with 
     live retraining, drift detection, and admin dashboards."

03 — Embedded AI — "Deploy intelligence onto constrained hardware — ESP32, 
     edge devices, and custom communication protocols."

04 — Automation Pipelines — "End-to-end workflow automation connecting APIs, 
     models, and databases into self-running systems."

05 — Interactive AI Interfaces — "Live, streaming front-ends that make AI 
     output legible, beautiful, and actually usable."

### ProjectsSection.tsx
Replace the 3 project cards with:

Project 01:
- Number: "01"
- Category: "Personal"
- Name: "Customer Insight Triage System"
- col1_img1 src: → proj1_img1 URL
- col1_img2 src: → proj1_img2 URL
- col2_img src: → proj1_main URL

Project 02:
- Number: "02"
- Category: "Personal"
- Name: "ESP32 Wireless Walkie-Talkie"
- col1_img1 src: → proj2_img1 URL
- col1_img2 src: → proj2_img2 URL
- col2_img src: → proj2_main URL

Project 03:
- Number: "03"
- Category: "In Progress"
- Name: "Multi-Agent Research Assistant"
- col1_img1 src: → proj3_img1 URL
- col1_img2 src: → proj3_img2 URL
- col2_img src: → proj3_main URL

---

## STEP 3 — VERIFY

/impeccable.style Run full anti-pattern check across all modified files.
/taste-skill Final aesthetic review — flag anything that feels generic or off-brand.

/superpowers:verification-before-completion Check:
- [ ] All 13 image URLs resolve (no broken images)
- [ ] Hero heading still uses .hero-heading gradient class
- [ ] AnimatedText bio length is between 150–250 characters
- [ ] All 5 service items render with borders intact
- [ ] All 3 project cards scale correctly on scroll
- [ ] No TypeScript errors introduced
- [ ] Page title updated in browser tab
- [ ] Mobile layout unaffected (test at 375px)
- [ ] Iris purple (#7c6fff) and mint green (#34d399) are the only accent colors
- [ ] No glassmorphism, no gradient backgrounds, no skill bars introduced

Do not touch: any animation code, Tailwind classes, component structure, 
FadeIn/Magnet/AnimatedText logic, or global styles.
