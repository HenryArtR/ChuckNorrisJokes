let url: string = 'https://icanhazdadjoke.com/'
let option: object = {
  headers: {
    Accept: 'application/json'
  }
}

let p = document.getElementById('joke')

let newJokes: string[] = [];

function randomJoke() {
  
  fetch(url, option)
  .then(response => response.json())
  .then(jokes => {
    newJokes.push(jokes.joke);
    return p?.textContent = newJokes.join()
  })
  .catch(err => console.log(err))
  
}
randomJoke()



function nextJoke() {
  newJokes.pop();
  randomJoke()
  
}