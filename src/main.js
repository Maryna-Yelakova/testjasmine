document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnUpdateTime").onclick = showTime;
    showTime();
});

function showTime(){
    var now = new Date();
    document.getElementById("pTime").innerHTML = now;
}
function getWeight() {
    return 45;
}
function updateWeight() {
    var newWeight = getWeight()-5;
    return newWeight;
}
