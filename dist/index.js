"use strict";
//html getters
var p = document.getElementById('joke');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
//objects
var option = {
    headers: {
        Accept: 'application/json'
    }
};
//promesa
var promise = function () { return fetch('https://icanhazdadjoke.com/', option)
    .then(function (response) { return response.json(); })
    .then(function (jokes) {
    textJoke = jokes.joke;
    p.textContent = textJoke;
})
    .catch(function (err) { return alert('Ha habido un problema ' + err); }); };
window.onload = promise;
var textJoke = "";
//arrays
var acudits = [];
var reportAcudits = [];
//functions
function rateJoke(scoreJoke) {
    var newDate = new Date();
    var textDate = newDate.toISOString();
    var rate = {
        joke: textJoke,
        score: scoreJoke,
        date: textDate
    };
    acudits.push(rate);
}
function selectFinalRate() {
    var finalRate = acudits.pop();
    reportAcudits.push(finalRate);
    acudits = [];
    return console.log(reportAcudits);
}
function nextJoke() {
    promise();
    selectFinalRate();
    return p.textContent = textJoke;
}
//# sourceMappingURL=index.js.map