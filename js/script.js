$(function () {
    gsap.registerPlugin(ScrollTrigger);

    // visual
    gsap.timeline({
        scrollTrigger: {
            trigger: ".visual",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            pin: true,
            markers: true,
        },
    }).to(".visual h1", { opacity: "1", ease: "none", duration: 10 }, 5);
});
