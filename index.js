var tl = gsap.timeline()

tl.from("#bg-page", {

    y: 700,
    duration: 1,
    delay: 0.4,
    scale: 0,
})

tl.from("#pastery", {

    y: 700,
    duration: 0.5,
    scale: 0,
})

tl.from("#a-nav", {

    y: -100,
    duration: 0.4,
    scale: 0,
    stagger: 0.4,
})

tl.from("#dish-img", {

    x: 500,
    duration: 1,
    scale: 0,
    rotate: 360,

})
tl.from("#main-h", {
    y: 400,
    duration: 1,
    scale: 0,
    stagger: 0.5,

})
tl.from("#pp", {

    y: 200,
    duration: 1,
    scale: 0,
    stagger: 0.3,
})