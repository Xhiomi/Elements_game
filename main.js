const modeSection = document.querySelector('.mode-section');
const friendMode = document.querySelector('.play-with-a-friend');
const computerMode = document.querySelector('.play-with-the-computer');
const cardsSection = document.querySelector('.cards-section');
const selector = document.getElementById('select-an-element');
const computerSelection = document.querySelector('.computer-selection');
const selectedElement = document.querySelector('.selected-element');
const result = document.querySelector('.result');
const water = document.querySelector('.water');
const earth = document.querySelector('.earth');
const air = document.querySelector('.air');
const fire = document.querySelector('.fire');

const score = {
  userValue: 0,
  userValue2: 0
}

score.userValue +=1

let userValue;
let userValue2;

// SCHEMA ___________________________________________________
const elementCards = document.querySelectorAll('.elements-card');
for(let card of elementCards) {
  card.addEventListener('click', event => {
    if(userValue == undefined) {
      userValue = card.getAttribute('data-element');
      showSelections();
      if(gameMode == 'computer') {
        var randomElementsArray = ['water', 'earth', 'air', 'fire'];
        var randomSelector = randomElementsArray[Math.floor(Math.random()*randomElementsArray.length)];
        getWinner(userValue, randomSelector);
      }
    } else {
      const userValue2 = card.getAttribute('data-element')
      getWinner(userValue, userValue2); //haga un reset de userValue a undefined
    }
  })
}

function getWinner(userValue, userValue2) {

}
// SCHEMA ___________________________________________________
var selectedMode = "";

//First two modes initial screen
friendMode.addEventListener('click', friend => {
  modeSection.classList.add('hidden');
  selectedMode = "Friend";
});

computerMode.addEventListener('click', computer => {
  selectedMode = "Computer";
  modeSection.classList.add('hidden');
  cardsSection.classList.remove('hidden');
});

function showSelections {
  modeSection.classList.add('hidden');
  cardsSection.classList.remove('hidden');
}

function showComputerGame {
  cardsSection.classList.add('hidden');
  computerSelection.classList.remove('hidden');
  computerSelection.innerHTML = `
  <section class="selected elements ${randomSelector}">
    <p class="selection-text">Computer selection</p>
    <img class="element-image" src="${randomSelector}.png" alt="${randomSelector} image">
  </section>
  `
}

function showResults {

  console.log('Perdiste');
  result.innerHTML= `
  <section class="selected elements fire">
  <p class="selection-text">Perdiste :(</p>
    <img class="element-image" src="lose.png" alt="Water image">
    </section>
    `

  selectedElement.classList.remove('hidden');
  selectedElement.innerHTML= `
  <section class="selected elements card">
    <p class="selection-text">Selected element</p>
    <img class="element-image" src="card.png" alt="card image">
  </section>
  `
  testValues();
}

function testValues() {
  console.log('userValue: ', userValue);
  console.log('randomSelector: ', randomSelector);
  // console.log('randomValue: ', randomValue);

  if(randomValue > userValue){
    console.log('Perdiste');
    result.innerHTML= `
    <section class="selected elements fire">
    <p class="selection-text">Perdiste :(</p>
      <img class="element-image" src="lose.png" alt="Water image">
      </section>
      `
    } else if (randomValue < userValue) {
      console.log('Ganaste')
      result.innerHTML= `
      <section class="selected elements fire">
      <p class="selection-text">¡Ganaste! :D</p>
      <img class="element-image" src="win.png" alt="Water image">
      </section>
      `
    } else {
      console.log('Empate')
      result.innerHTML= `
      <section class="selected elements fire">
      <p class="selection-text">Empate D:</p>
      <img class="element-image" src="tie.png" alt="Water image">
      </section>
      `
    }
  }
