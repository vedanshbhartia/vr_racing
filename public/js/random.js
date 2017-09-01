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