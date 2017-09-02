var car = document.querySelector('.control-this');

function handleOrientation(event) {
    var alpha    = event.beta;
    
    if (alpha >  90) {alpha =  90};
    if (alpha < -90) {alpha = -90};

    const maxwidth=55;

    var new_z = (maxwidth*(alpha/180));
    var temp_pos = "0 0 "+new_z;

    document.getElementsByClassName('control-this')[0].setAttribute("position", temp_pos);
    
    }

window.addEventListener('deviceorientation', handleOrientation);
