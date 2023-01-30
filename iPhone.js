gsap.timeline({
  scrollTrigger: {
    trigger: ".g-scroll",
    start: "top top",
    end: "bottom bottom",
    scrub: 1 } }).

fromTo(".bg", { y: 0 }, { y: "-75%" }, 0);