Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", {
    videos: ["./1.mp4", "./2.mp4", "./3.mp4"],
});

gsap.to(".fleftelem",{
    scrollTrigger: {
        trigger: "#fimages",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1
    },
    y: "-500%",
    ease: Power1,

})

let sections = document.querySelectorAll(".fleftelem");

Shery.imageEffect(".images", {
    style: 1,
    config: {onMouse : {value: 1}},
    slideStyle: (setScroll) => {
        sections.forEach(function(section,index){
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                scrub: 1,
                onUpdate: function(prog){
                    setScroll(prog.progress+index)
                }
            })
        })
    },
  });