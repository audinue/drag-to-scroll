(function () {
    var drag = false

    addEventListener('contextmenu', function (e) {
        e.preventDefault()
    })

    addEventListener('mousedown', function (e) {
        var RIGHT_BUTTON = 2
        if (e.button === RIGHT_BUTTON) {
            drag = true
        }
        e.preventDefault()
    })

    addEventListener('mouseup', function (e) {
        drag = false
    })

    addEventListener('mousemove', function (e) {
        if (drag) {
            document.body.scrollLeft -= e.movementX / devicePixelRatio
            document.body.scrollTop -= e.movementY / devicePixelRatio
        }
    })
})()
