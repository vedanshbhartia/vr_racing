localStorage.setItem('score_vr_race', 0);
let collisionCar = false;
let collisionCoin = false;
let timerIdCar = 0;
let timerIdCoin = 0;

function checkCollision(z1, z2) {
    if (z1 >= z2 - 3 && z1 <= z2 + 3) {
        return true;
    }

    return false;
}

function updateDisplayScore() {
    var scoredisplay = document.getElementById("score_overlay");
    scoredisplay.setAttribute("text", "align: center; width: 100;color:red; height:100; value:" + localStorage.getItem('score_vr_race') + ";");
}

document.getElementById('curve2').addEventListener('alongpath-trigger-activated', function() {
    collisionCar = false;
    timerIdCar = setInterval(function() {
        coord_moving = document.getElementById('moving-car').getAttribute('position');
        coord_fixed = document.getElementById('fixed-car').getAttribute('position');
        collisionCar = checkCollision(coord_fixed.z, coord_moving.z)
        if (collisionCar) {
            var score = localStorage.getItem('score_vr_race');
            localStorage.setItem('score_vr_race', 0);
            alert('You Lost! Your Score is ' + score);
            starttime = updatetime;
            clearInterval(timerIdCar);
        }
    }, 1);
});

document.getElementById('curve2').addEventListener('alongpath-trigger-deactivated', function() {
    clearInterval(timerIdCar);
    if (collisionCar) {
        collisionCar = false;
    } else {
        localStorage.setItem('score_vr_race', parseInt(localStorage.getItem('score_vr_race')) + 1);
    }
    updateDisplayScore();
    console.log(localStorage.getItem('score_vr_race'));
});

document.getElementById('coin2').addEventListener('alongpath-trigger-activated', function() {
    collisionCoin = false;
    timerIdCoin = setInterval(function() {
        coord_fixed = document.getElementById('fixed-car').getAttribute('position');
        coord_coin = document.getElementById('coin').getAttribute('position');
        collisionCoin = checkCollision(coord_fixed.z, coord_coin.z)
        if (collisionCoin) {
            var score = localStorage.getItem('score_vr_race');
            localStorage.setItem('score_vr_race', parseInt(localStorage.getItem('score_vr_race')) + 5);
            clearInterval(timerIdCoin);
        }
    }, 1);
});

document.getElementById('coin2').addEventListener('alongpath-trigger-deactivated', function() {
    clearInterval(timerIdCoin);
    if (collisionCoin) {
        collisionCoin = false;
        updateDisplayScore();
        return;
    }
    console.log(localStorage.getItem('score_vr_race'));
});