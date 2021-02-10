window.onscroll = scrollUpdater;
console.log("yes");

function scrollUpdater() {
    let percentage = getScrollPercent();
    console.log(percentage);
    document.getElementById('list').style.background = "linear-gradient(90deg, rgba(254, 36, 53, 1) 0%, rgba(255, 0, 96, 1)" +
        percentage + "%, rgba(255, 255, 255,1)" + percentage + "%, rgba(255,255,255,1) 100%)";

    document.getElementById('Gradient').style.background = "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1)" +
        percentage + "%, rgba(0, 0, 0,1)" + percentage + "%, rgba(0,0,0,1) 100%)";


    // Array.from(document.getElementsByClassName('gradientChange')).forEach(element => {

    //     element.style.background = "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1)" +
    //         percentage + "%, rgba(0, 0, 0,1)" + percentage + "%, rgba(0,0,0,1) 100%)";
    // });
}

function getScrollPercent() {
    var h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
}