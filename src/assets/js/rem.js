/* eslint-disable */

function onRem() {
    let iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    let iw = (iOS) ? screen.width : window.innerWidth, ih = (iOS) ? screen.height : window.innerHeight;
    let container_width = 1920;

    let mobile_width = 320;
    switch (true) {
        case (iw > 650):
            document.documentElement.style.fontSize = iw / container_width + 'px'
            break
        case (iw < 650):
            document.documentElement.style.fontSize = iw / mobile_width + 'px'
            break
    }
}

window.addEventListener('resize', onRem)

onRem()
