document.addEventListener('DOMContentLoaded', function () {

    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });
    
    function raf(time) {
        lenis.raf(time);
        ScrollTrigger.update();
        requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
    

    // Starting the animation
    const tl = gsap.timeline()

    tl.to('.home__bg', {
        scale: 1,
        duration: 1.7,
        opacity: 1,
        ease: "circ.inOut"
    })

    tl.to('.home__image', {
        scale: 1,
        duration: 1.7,
        opacity: 1,
        ease: "circ.inOut",
    })

    tl.to('.home__shadow', {
        y: 0,
        duration: 1.7,
        opacity: 1,
        ease: "power4.inOut",
    })

    tl.to('.home__title', {
        x: 0,
        duration: 1.7,
        opacity: 1,
        stagger: .1,
        ease: "power4.inOut",
    }, 0)

    tl.to('.home__button', {
        y: 0,
        duration: 1.7,
        opacity: 1,
        ease: "bounce",
    })


    // This is for New Section
    const tlNew = gsap.timeline({scrollTrigger: {
        trigger: "#new",
        start: "50% center",
        end: "bottom center",
        scrub: 2,
    }})

    tlNew.to(".new__bg", {
        opacity: 1,
        duration: 15,
        ease: "power4.inOut",
        y: 500,
    })

    const newImgElements = document.querySelectorAll(".new__img");

    newImgElements.forEach((newImg, index) => {
        tlNew.to(newImg, {
            y: 200,
            skewX: 15,
            duration: 4, // Adjust the duration as needed
            delay: index * 0.2, // Add a delay for staggered animation
        }, 1);
    });



    // This is for About Section
    const tlAbout = gsap.timeline({scrollTrigger: {
        trigger: "#about",
        start: "top center",
        end: "bottom center",
        scrub: 2,
    }})

    tlAbout.to(".about__bg", {
        opacity: 1.5,
        scale: 1,
        duration: 9,
        ease: "power4.inOut",
        y: 0,
    })

    tlAbout.to(".about__description", {
        x: 0,
        ease: "power4.inOut",
        duration: 4,
        scale: 1,
        opacity: 1
    }, "-=-2")

    tlAbout.to(".about__img", {
        x: 0,
        ease: "power4.inOut",
        duration: 4,
        scale: 1,
        opacity: 1
    }, "-=-2")


    // This is for New Favorite
    const tlFavorite = gsap.timeline({scrollTrigger: {
        trigger: "#favorite",
        start: "top center",
        end: "bottom center",
        scrub: 2,
    }})

    tlFavorite.to(".favorite__bg-1", {
        opacity: 1,
        x: -100,
        scale: .7,
        skewX: 20,
        duration: 2,
        ease: "power4.inOut",
    })

    tlFavorite.to(".favorite__bg-2", {
        opacity: 1,
        x: 100,
        scale: .7,
        skewX: 20,
        duration: 2,
        ease: "power4.inOut",
    }, 8.9)
})