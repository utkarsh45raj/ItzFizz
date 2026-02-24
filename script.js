/* ─── PLUGIN REGISTRATION ─── */
gsap.registerPlugin(ScrollTrigger);

/* ─── ELEMENT REFERENCES ─── */
const headlineWrap = document.querySelector('.hero__headline-wrap');
const headlineSub  = document.querySelector('.hero__sub');
const words        = document.querySelectorAll('.hero__headline .word');
const stats        = document.querySelectorAll('.stat');
const rings        = document.querySelectorAll('.ring');
const emblem       = document.querySelector('.emblem');
const orbitDot     = document.querySelector('.orbit-dot');
const mainVisual   = document.querySelector('#mainVisual');
const statsGroup   = document.querySelector('#stats');

/* ─── INITIAL LOAD TIMELINE ─────────*/
const loadTl = gsap.timeline({
  defaults: { ease: 'power3.out' },
  onComplete: () => {
    gsap.to(orbitDot, { opacity: 1, duration: 0.6 });
  },
});

loadTl
  /* Rings expand from center */
  .from(rings, {
    scale: 0,
    opacity: 0,
    duration: 1.4,
    stagger: 0.15,
    ease: 'expo.out',
    transformOrigin: 'center center',
  }, 0.4)

  /* Emblem bounces in */
  .to(emblem, {
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: 'back.out(1.4)',
  }, 0.7);


/* SCROLL-DRIVEN ANIMATIONS */
const SCROLL_END = '+=200%'; 

ScrollTrigger.create({
  trigger : '#hero',
  start   : 'top top',
  end     : SCROLL_END,
  pin     : true,    

  onUpdate: (self) => {
    const p = self.progress; 

    /* ── Object: sweeps left → right ── */
    const xVw = -50 + p * 100; 
    gsap.set(mainVisual, { x: xVw + 'vw' });

    /* ── Text wipe: clip-path reveals left → right ──*/
    const rightClip = (1 - p) * 100;
    const clip = `inset(0 ${rightClip.toFixed(2)}% 0 0)`;

    /* Headline wipes as a whole block */
    headlineWrap.style.clipPath = clip;

    /* Stats wipe as one group — not individual stats —
       so each stat fully appears before the next one starts */
    statsGroup.style.clipPath = clip;
  },
});
