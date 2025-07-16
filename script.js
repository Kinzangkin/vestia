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
