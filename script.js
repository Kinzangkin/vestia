// Lalu animasikan
gsap.to(".typewriter", {
  duration: 2,
  text: "V.camp is an editing community founded on July 21, 2022. The letter V stands for Vestia, derived from the VTuber character Vestia Zeta.",
  ease: "in"
});


let typeSplit = new SplitType('[animate]', {
  types: 'lines, words, chars',
  tagName: 'span'
})

gsap.from('[animate] .word', {
  y: '100%',
  opacity: 1,
  duration: 1,
  ease: 'power1.out',
  stagger: 0.1,
  
  scrollTrigger: {
    trigger: '[animate]',
    start: 'top center',
    
  }
})

window.addEventListener('load', () => {
            const timeline = gsap.timeline();
            timeline.to("#hero-title", { duration: 1, opacity: 1, y: -20, ease: "power3.out" });
            timeline.to("#hero-button", { duration: 0.8, opacity: 1, y: -10, ease: "power3.out" }, "-=0.5");
            timeline.to("#about-title", { duration: 1, opacity: 1, y: -20, ease: "power3.out" }, "-=0.3");
            timeline.to("#about-text", { duration: 1, opacity: 1, y: -10, ease: "power3.out" }, "-=0.7");
            timeline.to("#asset-title", { duration: 1, opacity: 1, y: -20, ease: "power3.out" }, "-=0.5");
            timeline.to("#asset-button", { duration: 0.8, opacity: 1, y: -10, ease: "power3.out" }, "-=0.5");
});