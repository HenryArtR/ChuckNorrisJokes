"use strict";
// urls
const url1 = 'https://icanhazdadjoke.com/';
const url2 = 'https://api.openweathermap.org/data/2.5/weather?q=barcelona,es&appid=21c127bb06111bdb9012ed3611eb5b2b';
const url3 = 'https://api.chucknorris.io/jokes/random';
// html getters
const info = document.getElementById('info');
const p = document.getElementById('joke');
// objects
const option = {
    headers: {
        Accept: 'application/json',
    },
};
// Arrays
const random = [];
const acudits = [];
const reportJokes = [];
// joke
function promise() {
    fetch(url1, option)
        .then((response) => response.json())
        .then((jokes) => random.push(jokes.joke))
        .catch((err) => alert(err));
}
// weather
let country = '';
let nom = '';
let icon = '';
let grados = '';
function weather() {
    fetch(url2)
        .then((response) => response.json())
        .then((data) => {
        grados = (data.main.temp - 273.15).toFixed(1);
        nom = data.name;
        icon = data.weather[0].icon;
        country = data.sys.country;
        info.innerHTML = `
      <img src="http://openweathermap.org/img/wn/${icon}@2x.png" width="50" height="50">
      <span>${grados}ºC ${nom}, ${country}</span>
      `;
    })
        .catch((err) => alert(err));
}
window.onload = weather;
// chuckNorris
function jokeNorris() {
    fetch(url3)
        .then((response) => response.json())
        .then((joke) => random.push(joke.value))
        .catch((err) => alert(err));
}
// functions
function getRandomJoke(rdm) {
    const randomItem = Math.floor(Math.random() * rdm.length);
    item = rdm[randomItem];
    return item;
}
window.addEventListener('load', getRandomJoke(random));
function rateJoke(scoreJoke) {
    const d = new Date();
    d.setHours(d.getHours() + 1);
    const textDate = d.toISOString();
    const rate = {
        joke: getRandomJoke(random),
        score: scoreJoke,
        date: textDate,
    };
    acudits.push(rate);
}
function finalRate() {
    let final = acudits.pop();
    reportJokes.push(final);
    console.log(reportJokes);
}
function nextJoke() {
    promise();
    jokeNorris();
    finalRate();
    if (p.textContent == null) {
        return p.textContent = getRandomJoke(random);
    }
    else {
    }
}
//# sourceMappingURL=index.js.map