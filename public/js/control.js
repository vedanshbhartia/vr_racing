//selects car
var car = document.querySelector('.control-this');

//function that controls car position based on device orientation
function handleOrientation(event) {
    //selects the beta angle to be detected
    var alpha = event.beta;
    
    //handles the case of user turning too much
    if (alpha > 90) { alpha = 90 };
    if (alpha < -90) { alpha = -90 };
    
    //decides how far the car moves
    const maxwidth =40;
    
    //changes car position depending on angle
    var new_z = (maxwidth * (alpha / 180));
    var temp_pos = "0 0 " + new_z;

    document.getElementsByClassName('control-this')[0].setAttribute("position", temp_pos);

}

window.addEventListener('deviceorientation', handleOrientation);
