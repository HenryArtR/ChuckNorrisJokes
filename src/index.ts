let url: string = 'https://icanhazdadjoke.com/'
let option: object = {
  headers: {
    Accept: 'application/json'
  }
}

function nextJoke() {
  fetch(url, option)
  .then(response => response.json())
  .then(joke => console.log(joke.joke))
  .catch(err => console.log(err))
}