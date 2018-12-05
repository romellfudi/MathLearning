const url = 'https://quickdrawfiles.appspot.com/drawing/{pattern}?isAnimated=false&format=json&key='

let strokeIndex = 0;
let index = 0;
let pizza;
let prevx, prevy;
let keyInput;
let start;

function setup() {
  createCanvas(255, 255);
  newPizza();
}

function newPizza() {
  let apiKey = 'AIzaSyCeQHFgyDYeCwEDhvvfrGxkif_7Y8Sc4E4'; // keyInput.value();
  loadJSON(url.replace('{pattern}','pizza') + apiKey, gotPizza);
}


function gotPizza(data) {
  background(220);
  pizza = data.drawing;
}

function draw() {
  if (pizza) {
    let x = pizza[strokeIndex][0][index];
    let y = pizza[strokeIndex][1][index];
    stroke(0);
    strokeWeight(3);
    if (prevx !== undefined) {
      line(prevx, prevy, x, y);
    }
    index++;
    if (index === pizza[strokeIndex][0].length) {
      strokeIndex++;
      prevx = undefined;
      prevy = undefined;
      index = 0;
      if (strokeIndex === pizza.length) {
        pizza = undefined;
        strokeIndex = 0;
        setTimeout(newPizza, 500);
      }
    } else {
      prevx = x;
      prevy = y;
    }
  }
}
