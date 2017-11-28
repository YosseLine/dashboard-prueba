var region = document.getElementById('region');
var ulRegion = document.getElementById('list-region');
var lima;
var chile;
var mexico;
window.addEventListener('load',function(){
    region.addEventListener('click',showRegion);
});
function showRegion(){
    ulRegion.classList.toggle('hidden');
};

AQP162 = data.AQP["2016-2"];
LIM172 = data.LIM["2017-2"];
console.log(LIM172);