var scene = document.querySelector('a-scene');
var cylinder = document.createElement('a-cylinder');
cylinder.setAttribute('color', '#FF9500');
cylinder.setAttribute('height', '2');
cylinder.setAttribute('radius', '0.75');

var lane = Math.floor(Math.random() * 19);
lane=lane%3;

var x=0;


if(lane==0)
{
cylinder.setAttribute('position', '3 1 10' );
}
else if(lane==1)
{
cylinder.setAttribute('position', '3 1 0' );
}
else
{
cylinder.setAttribute('position', '3 1 -10' );
}
scene.appendChild(cylinder);