# Abhishek Gaud — Portfolio

Animation-first frontend portfolio showcasing work built with React, TypeScript, GSAP and Three.js. Features an interactive 3D character, smooth scroll-driven motion, and performance-minded engineering.

Tech stack
- React
- TypeScript
- Vite
- GSAP (ScrollTrigger)
- Three.js (GLTF)

Dev setup
1. Install dependencies
```bash
npm install
```
2. Run dev server
```bash
npm run dev
```
3. Build for production
```bash
npm run build
npm run preview
```

Known caveats
- 3D scenes are GPU-intensive; mobile devices may struggle.
- Use feature-gating to disable or simplify 3D on low-end devices.
- Compress GLTFs (DRACO/KTX2) and optimize textures for faster loads.

Deployment notes
- Build static assets with `npm run build` and deploy to Vercel, Netlify, or any static host.
- Serve compressed assets (Brotli/Gzip) and use long-term caching for models/textures.
