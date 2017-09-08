function GetLane() {
    var i = 0;
    var c = 0;
    var lane = Math.floor(Math.random() * 89234879092);
    lane = lane % 3;
    if (lane == 0) {
        c = 10;
    } else if (lane == 1) {
        c = 0;
    } else {
        c = -10;
    }
    return c;
};
var interval = 5000;
var starttime = new Date().getTime();

function callback() {
    console.log('callback!');
    c = GetLane();
    pos1 = "-100 0 " + c;
    pos2 = "0 0 " + c;
    pos3 = "50 0 " + c;
    var curve1 = document.getElementById('curve1');
    curve1.setAttribute("position", pos1);
    var curve2 = document.getElementById('curve2');
    curve2.setAttribute("position", pos2);
    var curve3 = document.getElementById('curve3');
    curve3.setAttribute("position", pos3);
    console.log(starttime);
    updatetime = new Date().getTime();
    interval -= (updatetime - starttime) / 50; // actually this will kill your browser when goes to 0, but shows the idea
    starttime = updatetime;
    console.log(interval);
    loopdur = document.getElementById("moving-car");
    loopdur.setAttribute("alongpath", "curve: #track1; loop:true; triggerRadius:8; delay:0; dur:" + interval + ";");
    setTimeout(callback, interval);
}

setTimeout(callback, interval);