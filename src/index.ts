// urls
const url1 = 'https://icanhazdadjoke.com/';
const url2 =
  'https://api.openweathermap.org/data/2.5/weather?q=barcelona,es&appid=21c127bb06111bdb9012ed3611eb5b2b';
const url3 = 'https://api.chucknorris.io/jokes/random';
// html getters
const info = document.getElementById('info');
const p = document.getElementById('joke');
const fondo = document.getElementById('fondo');
// objects
const option: object = {
  headers: {
    Accept: 'application/json',
  },
};
// interface
interface RateJoke {
  joke: string;
  score: number;
  date: string;
}
// Arrays
let jokesArr: string[] = [];
let acudits: object[] = [];
const reportJokes: object[] = [];

// random
let item: number = 0;
function random(): string {
  item = Math.floor(Math.random() * 2);
  return jokesArr[item];
}
let num: number = 0;
function randomFondo() {
  num = Math.ceil(Math.random() * 5);
  fondo!.classList.add(`fondo${num}`);
}
randomFondo();

// joke
function promise(): any {
  fetch(url1, option)
    .then((response) => response.json())
    .then((jokes) => jokesArr.push(jokes.joke))
    .catch((err) => err);
}
promise();
// chuckNorris
function jokeNorris(): any {
  fetch(url3)
    .then((response) => response.json())
    .then((joke) => {
      jokesArr.push(joke.value);
      p!.textContent = jokesArr[item];
    })
    .catch((err) => err);
}
jokeNorris();
// weather
let country: string = '';
let nom: string = '';
let icon: string = '';
let grados: string = '';

function weather(): any {
  fetch(url2)
    .then((response) => response.json())
    .then((data) => {
      grados = (data.main.temp - 273.15).toFixed();
      nom = data.name;
      icon = data.weather[0].icon;
      country = data.sys.country;
      info!.innerHTML = `
      <img src="http://openweathermap.org/img/wn/${icon}@2x.png" width="50" height="50">
      <span>${grados}ºC ${nom}, ${country}</span>
      `;
    })
    .catch((err) => err);
}
weather();

// functions
function rateJoke(scoreJoke: number) {
  const d = new Date();
  d.setHours(d.getHours() + 1);
  const textDate = d.toISOString();
  const rate: RateJoke = {
    joke: jokesArr[item],
    score: scoreJoke,
    date: textDate,
  };
  acudits.push(rate);
}

function finalRate(): any {
  const final: any = acudits.pop();
  reportJokes.push(final);
  acudits = [];
  console.log(reportJokes);
}

function nextJoke(): any {
  promise();
  jokeNorris();
  finalRate();
  fondo!.classList.remove(`fondo${num}`);
  randomFondo();
  p!.textContent = random();
  jokesArr = [];
}
