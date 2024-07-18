gsap.fromTo(
    "svg",
    {rotate:0},
    {rotate:180, duration:0.2,repeat:-1,repeatDelay:1,ease:"power3"}
);

gsap.fromTo(
    ".i",
    {rotateX: 0},
    {rotateX: 360, duration: 0.5, repeat: -1, repeatDelay: 1, ease: "power1.out"}
);
// gsap.fromTo(
//     ".any",
//     {y: 0},
//     {y: -100, duration: 0.5, yoyo: true, repeat: -1, repeatDelay: 1, ease: "power3"}
// );

const spans = document.querySelectorAll('span');
        spans.forEach((el) => {
            el.addEventListener('mouseover', () => {
                gsap.fromTo(
                    el,
                    { rotateX: 180 },
                    { rotateX: 0, duration: 0.5, ease: "power1" }
                );
            });
        });


document.querySelector('button').addEventListener('mouseover', () => {
                gsap.fromTo(
                    "button",
                    { rotateX: 180 },
                    { rotateX: 0, duration: 0.5, ease: "power1" }
                );
            });
