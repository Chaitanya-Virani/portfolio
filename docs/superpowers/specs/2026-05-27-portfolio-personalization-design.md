# Portfolio Personalization — Chaitanya Virani

## Context
Personalization of an existing portfolio template. Do NOT rebuild component 
structure, animations, or styles. Replace content and data only.

## Skills
/ui-ux-pro-max — all visual and spacing decisions
/emilkowal.ski — all animation timing and motion polish  
/impeccable.style — run after every file change, catch anti-patterns
/taste-skill — final aesthetic filter before marking complete

---

## STEP 1 — GENERATE IMAGES (Higgsfield MCP)

Generate all 10 images before touching any code. Save each URL with its label.

### HERO PORTRAIT (1 image)

**hero_portrait:**
Young South Asian male, short black hair swept upward, medium-dark warm skin 
tone, clear transparent rectangular-frame glasses, light black beard and 
mustache. Stylized 3D character render — Blender/Cinema4D aesthetic. Void 
black background (#0a0a0f). Facing slightly left, full upper body visible. 
Dark minimal techwear jacket. Iris purple (#7c6fff) rim lighting on shoulders 
and hair edge. Sharp, clean render — not cartoon, not hyperrealistic. 
Confidence in expression.

### ABOUT DECORATIVES (4 images)

**about_topleft:**
3D neural network node cluster — interconnected glowing spheres and lines. 
Holographic iridescent material, shifting purple-to-teal. Void black 
background. Floating with subtle depth. Soft iris purple (#7c6fff) glow 
emanating from center node.

**about_bottomleft:**
Friendly small robot character — compact, rounded body, simple face with 
glowing eyes. Neon iris purple (#7c6fff) outline stroke. Dark background 
(#0a0a0f). Slight tilt suggesting curiosity. Clean 3D render.

**about_topright:**
Glass cube 3D icon — perfectly geometric, crystal/glass material. Internal 
mint green (#34d399) light refracting through faces. Dark background. Sharp 
edges, clean reflections. Floating slightly.

**about_bottomright:**
Lightning bolt 3D icon — solid, bold shape. Chrome/brushed metallic material 
with high specular highlights. Dark background (#0a0a0f). Electric energy feel. 
Clean render, no bloom or excessive glow.

### PROJECT 01 — Customer Insight Triage System (3 images)

**proj1_img1:**
Dark analytics dashboard on a widescreen monitor. Deep charcoal background. 
UI shows review cards with colored urgency badges — red for HIGH priority, 
green for NORMAL. Purple and teal accent colors. Dramatic side rim lighting. 
Cinematic product shot angle. No people visible — product only.

**proj1_img2:**
Close-up of a sentiment analysis data visualization. Bar charts and score 
meters on dark UI. Colored badges: urgent red, neutral grey, positive green. 
Purple (#7c6fff) primary chart color. Clean data-dense layout. Dark mode. 
Shallow depth of field, focus on the charts.

**proj1_main:**
Wide cinematic hero shot. Split-screen dark UI — left panel shows raw customer 
review text input in Hinglish, right panel shows real-time ML triage output 
with urgency classification. Void black background. Iris purple (#7c6fff) 
glowing highlights on active elements. Mint green (#34d399) for NORMAL status 
indicators. Dramatic, editorial lighting. 16:9 wide format.

### PROJECT 02 — ESP32 Wireless Walkie-Talkie (3 images)

**proj2_img1:**
Two ESP32 development boards on a dark matte black surface. Dramatic overhead 
lighting — single light source creating sharp shadows. Electronic components 
clearly visible: microphone modules, buttons, jumper wires. Teal/mint green 
LED glow from boards. Clean product photography aesthetic. No clutter.

**proj2_img2:**
Close-up of an audio waveform on a dark oscilloscope-style display. Mint 
green (#34d399) waveform lines on black background. Embedded systems aesthetic. 
Slight screen glow reflecting on surrounding surface. Data readout: 
"8000 Hz / 80 pkt/s / latency: 340ms" visible in monospace font.

**proj2_main:**
Wide cinematic hero shot. Two ESP32 devices on dark surface, connected by 
visible wireless signal arc visualization — animated-feel arcs in mint green 
(#34d399). Signal strength indicator between them. Void black background. 
Clean embedded hardware aesthetic. 16:9 wide format. Dramatic lighting from below.

---

Confirm all 10 image URLs are ready before proceeding to Step 2.

---

## STEP 2 — UPDATE CONTENT

### index.html
```
<title>Chaitanya Virani — Building AI that thinks</title>
```
Keep Google Fonts (Kanit) unchanged.

### HeroSection.tsx
- Navbar links: `About` / `Projects` / `Skills` / `Contact`
- h1 heading: `Hi, i'm chaitanya`
  → keep lowercase i, keep gradient class, keep all sizing
- Bottom-left tagline: `AN AI ENGINEER OBSESSED WITH AGENTS THAT ACT`
- Hero portrait src: → `hero_portrait` URL

### AboutSection.tsx
- Heading: `About me` (unchanged)
- AnimatedText body (keep within 150–250 chars):
  `An ICT student obsessed with building AI systems that don't just predict — 
  they act. i focus on agentic pipelines, real-time automation, and embedded 
  intelligence. Let's build something that thinks together!`
- Corner images:
  - top-left src: → `about_topleft` URL
  - bottom-left src: → `about_bottomleft` URL
  - top-right src: → `about_topright` URL
  - bottom-right src: → `about_bottomright` URL

### ServicesSection.tsx
Replace 5 service items (keep 01–05 numbering and border structure):

```
01 — Agentic AI Systems
"Design and build multi-agent pipelines that plan, reason, and act 
autonomously on real-world tasks."

02 — Real-Time ML Backends
"FastAPI + scikit-learn inference systems with live retraining, drift 
detection, and admin dashboards."

03 — Embedded AI
"Deploy intelligence onto constrained hardware — ESP32, edge devices, 
and custom communication protocols."

04 — Automation Pipelines
"End-to-end workflow automation connecting APIs, models, and databases 
into self-running systems."

05 — Interactive AI Interfaces
"Live, streaming front-ends that make AI output legible, beautiful, 
and actually usable."
```

### ProjectsSection.tsx
Replace 3 project cards. For the 3rd card use the placeholder below:

```
Project 01:
  number: "01"
  category: "Personal"
  name: "Customer Insight Triage System"
  col1_img1: → proj1_img1 URL
  col1_img2: → proj1_img2 URL
  col2_img:  → proj1_main URL

Project 02:
  number: "02"
  category: "Personal"
  name: "ESP32 Wireless Walkie-Talkie"
  col1_img1: → proj2_img1 URL
  col1_img2: → proj2_img2 URL
  col2_img:  → proj2_main URL

Project 03:
  number: "03"
  category: "In Progress"
  name: "Multi-Agent Research Assistant"
  col1_img1: → proj3_img1 URL   [reuse proj1_img1 as temp placeholder]
  col1_img2: → proj3_img2 URL   [reuse proj2_img1 as temp placeholder]
  col2_img:  → proj3_main URL   [reuse proj1_main as temp placeholder]
```

---

## STEP 3 — VERIFY

/impeccable.style — full anti-pattern check on all modified files
/taste-skill — flag anything generic, off-brand, or inconsistent

Checklist:
- [ ] All 10 image URLs resolve (no broken images)
- [ ] Hero heading keeps .hero-heading gradient class
- [ ] AnimatedText bio: 150–250 characters
- [ ] All 5 service items render with borders intact
- [ ] All 3 project cards scale correctly on scroll
- [ ] No TypeScript errors introduced
- [ ] Page title updated in browser tab
- [ ] Mobile layout unaffected at 375px viewport
- [ ] No glassmorphism, gradient backgrounds, or skill bars added
- [ ] Iris purple (#7c6fff) and mint green (#34d399) remain the only accents

Do not touch: animation code, Tailwind classes, component structure,
FadeIn / Magnet / AnimatedText logic, or global styles.