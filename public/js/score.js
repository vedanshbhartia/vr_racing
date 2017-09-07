localStorage.setItem('score_vr_race', 0);

document.getElementById('curve2').addEventListener('alongpath-trigger-activated', function() {
	coord_moving = document.getElementById('moving-car').getAttribute('position');
    coord_fixed = document.getElementById('fixed-car').getAttribute('position');
    if(coord_fixed.z >= coord_moving.z -3 && coord_fixed.z<= coord_moving.z + 3){
			
    console.log("moving"+JSON.stringify(coord_moving));
	    console.log("fixed"+JSON.stringify(coord_fixed));
	    alert('You Lost! Your Score is '+localStorage.getItem('score_vr_race'));
	    localStorage.setItem('score_vr_race', 0);
		return;
    }
    localStorage.setItem('score_vr_race', parseInt(localStorage.getItem('score_vr_race')) + 1);
    var scoredisplay=document.getElementById("score_overlay");
console.log(scoredisplay);
    scoredisplay.setAttribute("text","align: center; width: 100;color:red; height:100; value:"+localStorage.getItem('score_vr_race')+";");
	console.log(scoredisplay);
    	console.log(localStorage.getItem('score_vr_race'));
});
