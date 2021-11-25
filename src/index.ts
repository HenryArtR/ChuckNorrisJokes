//urls
let url1 = 'https://icanhazdadjoke.com/';
let url2 =
  'https://api.openweathermap.org/data/2.5/weather?q=barcelona,es&appid=21c127bb06111bdb9012ed3611eb5b2b';
//html getters
let info = document.getElementById('info');
let p = document.getElementById('joke');
//objects
let option: object = {
  headers: {
    Accept: 'application/json',
  },
};
//promesas
let textJoke: string = '';
function promise() {
  fetch(url1, option)
    .then((response) => response.json())
    .then((jokes) => {
      textJoke = jokes.joke;
      p!.textContent = textJoke;
    })
    .catch((err) => alert(err));
}

promise();

//weather variables
let description: string = '';
let country: string = '';
let nom: string = '';
let icon: string = '';
let main: string = '';
function weather() {
  fetch(url2)
    .then((response) => response.json())
    .then((data) => {
      nom = data.name;
      icon = data.weather[0].icon;
      main = data.weather[0].main;
      country = data.sys.country;
      description = data.weather[0].description;
      info!.innerHTML = `
      <img src="http://openweathermap.org/img/wn/${icon}@2x.png" width="50" height="50">
      <span>${nom}, ${country}: ${main}(${description})</span>
      `;
    })
    .catch((err) => alert(err));
}

window.onload = weather;
//interface
interface RateJoke {
  joke: string;
  score: number;
  date: string;
}

//arrays
let acudits: object[] = [];
let reportAcudits: object[] = [];

//functions
function rateJoke(scoreJoke: number) {
  const d = new Date();
  d.setHours(d.getHours() + 1);
  let textDate = d.toISOString();
  let rate: RateJoke = {
    joke: textJoke,
    score: scoreJoke,
    date: textDate,
  };

  acudits.push(rate);
}

function selectFinalRate() {
  let finalRate = acudits.pop();
  reportAcudits.push(finalRate);
  acudits = [];
  return console.log(reportAcudits);
}

function nextJoke(): string {
  promise();
  selectFinalRate();
  return (p!.textContent = textJoke);
}
