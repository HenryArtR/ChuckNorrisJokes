//html getters
let p = document.getElementById('joke');
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
//objects
let option: object = {
  headers: {
    Accept: 'application/json'
  }
}
//promesa
let promise: any = () => fetch('https://icanhazdadjoke.com/', option)
  .then(response => response.json())
  .then(jokes => {
    textJoke = jokes.joke;
    p!.textContent = textJoke
  })
  .catch(err => alert('Ha habido un problema ' +err));

  window.onload = promise
let textJoke = "";

//interface
interface RateJoke {
  joke: string,
  score: number,
  date: string
  
}

//arrays
let acudits: object[] = []
let reportAcudits: object[] = [];

//functions
function rateJoke(scoreJoke: number){
  const newDate = new Date();
  let textDate = newDate.toISOString();
  let rate: RateJoke = {
    joke: textJoke,
    score: scoreJoke,
    date: textDate
  }
  
    acudits.push(rate)
  
}

function selectFinalRate(){
  
  let finalRate = acudits.pop();
  reportAcudits.push(finalRate)
  acudits = [];
}

function nextJoke(): string { 
  promise()
  selectFinalRate()
  return p!.textContent = textJoke
  
}