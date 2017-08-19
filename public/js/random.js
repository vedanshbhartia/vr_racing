// var scene = document.querySelector('a-scene');
// var box = document.createElement('a-box');
// box.setAttribute('rotation', '0 90 0');
// box.setAttribute('scale','3 3 3');


//  scene.appendChild(box);
function GetLane(){
	var i = 0;
	var c = 0;
	// for(i=0;i<10;i++)
	// {
		// setTimeout(function () {}, 3000);
	var lane = Math.floor(Math.random() * 89234879092);
	console.log(lane);
	lane = lane % 3;

	if (lane==0) { 
		c=5;
	} else if (lane==1) {
		c=-2;
	} else {
		c=-8;
	}
	return c;
};

// 	console.log(document.querySelector('a-box').getAttribute('position'));
// var a = document.querySelector('a-box').getAttribute('position');
// console.log(a.x == 50);
// if(a.x == 50){
// 	multiple();


// function multiple(){
// 	c=GetLane();
// pos1="-100 5 "+c;
// pos2="0 5 "+c;
// pos3="50 5 "+c;

// var curve1 = document.getElementById('curve1');
// curve1.setAttribute("position", pos1);
// var curve2 = document.getElementById('curve2');
// curve2.setAttribute("position", pos2);
// var curve3 = document.getElementById('curve3');
// curve3.setAttribute("position", pos3);
// }
