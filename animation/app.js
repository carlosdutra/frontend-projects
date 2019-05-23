const fishOne = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {y: -10},
        {y: 60},
        {y: 80},
    ]
}

const fishTwo = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {y: -10},
        {y: 30},
        {y: -10},
    ]
}

const fishThree = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {y: 10},
        {y: -20},
        {y: 40},
    ]
}

const fishFour = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {y: -10},
        {y: 60},
        {y: -10},
    ]
}

const fishFive = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {y: 20},
        {y: -60},
        {y: 10},
    ]
}

const fishSix = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {y: -40},
        {y: 50},
        {y: -10},
    ]
}

const fish1 = new TimelineMax({repeat: -1});
const fish2 = new TimelineMax({repeat: -1});
const fish3 = new TimelineMax({repeat: -1});
const fish4 = new TimelineMax({repeat: -1});
const fish5 = new TimelineMax({repeat: -1});
const fish6 = new TimelineMax({repeat: -1});

fish1.add(
    TweenLite.to('.fish1', 20, {
        right: "100%",
        bezier: fishOne,
        ease: Linear.easeNone
    })
)

fish2.add(
    TweenLite.to('.fish2', 30, {
        bezier: fishTwo,
        left: "100%",
        ease: Linear.easeNone
    })
)

fish3.add(
    TweenLite.to('.fish3', 25, {
        bezier: fishThree,
        right: "100%",
        ease: Linear.easeNone
    })
)

fish4.add(
    TweenLite.to('.fish4', 40, {
        bezier: fishFour,
        left: "100%",
        ease: Linear.easeNone
    })
)

fish5.add(
    TweenLite.to('.fish5', 15, {
        bezier: fishFive,
        left: "100%",
        ease: Linear.easeNone
    })
)

fish6.add(
    TweenLite.to('.fish6', 35, {
        bezier: fishSix,
        left: "100%",
        ease: Linear.easeNone
    })
)

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: 'footer',
    triggerHook: 0.2
})
.setClassToggle('.thank-you', 'fade-in')
.addTo(controller);