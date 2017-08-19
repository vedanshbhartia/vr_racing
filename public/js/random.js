// var scene = document.querySelector('a-scene');
// var box = document.createElement('a-box');
// box.setAttribute('rotation', '0 90 0');
// box.setAttribute('scale','3 3 3');
var i=0;
for(i=0;i<10;i++)
{
	setTimeout(function () {}, 3000);
var lane = Math.floor(Math.random() * 19);
lane=lane%3;

var c=0;

if(lane==0)
{c=5;}
else if(lane==1)
{c=0;}
else
{c=-5;}


// scene.appendChild(box);
function GetLane(){
return c;
	}

}