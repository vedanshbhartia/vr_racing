localStorage.setItem('score_vr_race', 0);

document.getElementById('curve2').addEventListener('alongpath-trigger-activated', function() {
	coord_moving = document.getElementById('moving-car').getAttribute('position');
    coord_fixed = document.getElementById('fixed-car').getAttribute('position');
    console.log(coord_fixed);
    console.log(coord_moving);
    if(coord_fixed.z >= coord_moving.z -3 && coord_fixed<= coord_moving + 3){
		alert('You Lost')
    }
    localStorage.setItem('score_vr_race', parseInt(localStorage.getItem('score_vr_race')) + 1);
    console.log(localStorage.getItem('score_vr_race'));
});
