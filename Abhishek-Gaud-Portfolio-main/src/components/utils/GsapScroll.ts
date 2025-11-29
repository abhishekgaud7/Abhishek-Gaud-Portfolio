import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimations() {
  const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });
  tl.to('.hero-title', { y: 0, opacity: 1, duration: 0.8 });

  const mesh = document.querySelector('.character-mesh') as any;
  let emissiveTl: gsap.core.Tween | null = null;
  if (mesh && mesh.material) {
    emissiveTl = gsap.to(mesh.material, { emissiveIntensity: 1.4, duration: 1.2, yoyo: true, repeat: -1, ease: 'sine.inOut' });
  }

  const st = ScrollTrigger.create({
    trigger: '.projects',
    start: 'top center',
    end: 'bottom top',
    onEnter: () => { /* custom logic */ },
  });

  return {
    kill: () => {
      tl.kill();
      if (emissiveTl) emissiveTl.kill();
      st.kill();
      ScrollTrigger.getAll().forEach((s) => s.kill());
    },
  };
}

export function refreshScroll() {
  ScrollTrigger.refresh();
}
