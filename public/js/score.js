localStorage.setItem('score_vr_race', 0);
    //setInterval(function(){
//document.getElementById('moving-car').addEventListener('alongpath-curve1-activated',
setInterval(
	function(){
coord_moving = document.getElementById('moving-car').getAttribute('position');
coord_fixed = document.getElementById('fixed-car').getAttribute('position');
//if(coord_fixed[0] === coord_moving[0]){
//	localStorage.setItem('score_vr_race',localStorage.getItem('score_vr_race')+1);
//	console.log("here");
//	}
console.log(coord_fixed.x);
console.log(coord_moving.x);
},1);
