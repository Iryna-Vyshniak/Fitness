if(gsap.registerPlugin(ScrollTrigger,ScrollSmoother),1!==ScrollTrigger.isTouch){ScrollSmoother.create({wrapper:".wrapper",content:".content",smooth:1.5,effects:!0}),gsap.fromTo(".hero-section",{opacity:1},{opacity:0,scrollTrigger:{trigger:".hero-section",start:"center",end:"820",scrub:!0}}),gsap.utils.toArray(".gallery__left .gallery__item").forEach((r=>{gsap.fromTo(r,{opacity:0,x:-50},{opacity:1,x:0,scrollTrigger:{trigger:r,start:"-850",end:"-100",scrub:!0}})})),gsap.utils.toArray(".gallery__right .gallery__item").forEach((r=>{gsap.fromTo(r,{opacity:0,x:50},{opacity:1,x:0,scrollTrigger:{trigger:r,start:"-750",end:"top",scrub:!0}})}))}
//# sourceMappingURL=index.194166c2.js.map
