var tl = gsap.timeline()

function time() {

    var a = 0
    setInterval(function () {


        a = a + Math.floor(Math.random() * 25)
        if (a < 100) {
            document.querySelector("#loader h1").innerHTML = a + "%"
        } else {
            a = 100
            document.querySelector("#loader h1").innerHTML = a + "%"
        }
    }, 150)
}

tl.to("#loader h1", {

    delay: 0.5,
    onStart: time()
})

tl.to("#loader", {
    top: "-100vh",
    duration: 1,
});

tl.from("#bg-page", {

    y: 700,
    duration: 1,
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