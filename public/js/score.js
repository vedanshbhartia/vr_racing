//coord-moving = $('#moving-car').getAttributes('position');
localStorage.setItem('score_vr_race', 0);
    //setInterval(function(){
document.getElementById('moving-car').addEventListener('alongpath-trigger-activated',
function(){
	localStorage.setItem('score_vr_race',localStorage.getItem('score_vr_race')+1);
	console.log("here");
});
