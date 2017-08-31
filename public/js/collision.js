var playerEl = document.getElementById('fixed-car');
playerEl.addEventListener('collide', function (e) {
  console.log('Player has collided with body #' + e.detail.body.id);
  if(e.detail.body.id == 1){
	alert("You Lost");
  }

});