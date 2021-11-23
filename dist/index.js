"use strict";
var url = 'https://icanhazdadjoke.com/';
var option = {
    headers: {
        Accept: 'application/json'
    }
};
function nextJoke() {
    fetch(url, option)
        .then(function (response) { return response.json(); })
        .then(function (joke) { return console.log(joke.joke); })
        .catch(function (err) { return console.log(err); });
}
//# sourceMappingURL=index.js.map