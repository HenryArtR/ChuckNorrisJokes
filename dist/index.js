"use strict";
var url = 'https://icanhazdadjoke.com/';
var option = {
    headers: {
        Accept: 'application/json'
    }
};
var p = document.getElementById('joke');
var newJokes = [];
function randomJoke() {
    fetch(url, option)
        .then(function (response) { return response.json(); })
        .then(function (jokes) {
        newJokes.push(jokes.joke);
        return p === null || p === void 0 ? void 0 : p.textContent = newJokes.join();
    })
        .catch(function (err) { return console.log(err); });
}
randomJoke();
function nextJoke() {
    newJokes.pop();
    randomJoke();
}
//# sourceMappingURL=index.js.map