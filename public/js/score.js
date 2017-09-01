localStorage.setItem('score_vr_race', 0);

document.getElementById('curve2').addEventListener('alongpath-trigger-activated', function() {
    localStorage.setItem('score_vr_race', parseInt(localStorage.getItem('score_vr_race')) + 1);
    console.log(localStorage.getItem('score_vr_race'));
});