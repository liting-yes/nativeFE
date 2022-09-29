const floatingBall = document.querySelector('#floating-ball')

let moveController = new AbortController()
floatingBall.addEventListener('mousedown', (e) => {
    const floatingBallData = floatingBall.getBoundingClientRect()

    let mouseClickX = e.pageX
    let mouseClickY = e.pageY

    floatingBall.addEventListener('mousemove', (e) => {
        floatingBall.style.left = floatingBallData.left + (e.pageX - mouseClickX) + 'px'
        floatingBall.style.top = floatingBallData.top + (e.pageY - mouseClickY) + 'px'
    }, {
        signal: moveController.signal
    })
})
document.addEventListener('mouseup', () => {
    moveController.abort()
    moveController = new AbortController()
    const floatingBallData = floatingBall.getBoundingClientRect()
    const screenWidth = document.body.clientWidth

    if (floatingBallData.left + floatingBallData.width / 2 < screenWidth / 2) {
        floatingBall.style.left = -floatingBallData.width / 2 + 'px'
    } else {
        floatingBall.style.left = screenWidth - floatingBallData.width / 2 + 'px'
    }
})
