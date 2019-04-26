// const express = require('express');
// const game = express();
// const port = 8080;
// const mongoose = require('mongoose');

const mainSection = document.querySelector('.main-section');
const modeSection = document.querySelector('.mode-section');
const friendMode = document.querySelector('.play-with-a-friend');
const computerMode = document.querySelector('.play-with-the-computer');
const cardsSection = document.querySelector('.cards-section');
const selector = document.getElementById('select-an-element');
const selectedElement = document.querySelector('.selected-element');
const secondUserSelection = document.querySelector('.second-user-selection');
const cardsSection2 = document.querySelector('.cards-section-2');
const computerSelection = document.querySelector('.computer-selection');
const result = document.querySelector('.result');
const water = document.querySelector('.water');
const earth = document.querySelector('.earth');
const air = document.querySelector('.air');
const fire = document.querySelector('.fire');
const water2 = document.querySelector('.water-2');
const earth2 = document.querySelector('.earth-2');
const air2 = document.querySelector('.air-2');
const fire2 = document.querySelector('.fire-2');
const cardSectionTitle = document.querySelector('.card-section-title');
const cardSectionTitle2 = document.querySelector('.card-section-title-2');

// const score = {
//   p1: 0,
//   p2: 0
// }
//
// score.p1 +=1
//
// let p1;

var userValue = "";
var userValue2 = "";
var waterValue = 0;
var earthValue = 1;
var airValue = 2;
var fireValue = 3;

var randomValue = ""
var randomElementsArray = ['water', 'earth', 'air', 'fire'];
var randomSelector = randomElementsArray[Math.floor(Math.random()*randomElementsArray.length)];

// SCHEMA ___________________________________________________
// const elementCards = document.querySelectorAll('.elements-card');
// for(let card of elementCards) {
//   card.addEventListener('click', event => {
//     if(p1 == undefined) {
//       p1 = card.getAttribute('data-element');
//       if(gameMode == 'computer') {
//         const computer = computerValue;
//         getWinner(userValue, computer);
//       }
//     } else {
//       const p2 = card.getAttribute('data-element')
//       getWinner(p1, p2); //haga un reset de p1 a undefined
//     }
//   })
// }
//
// function getWinner(p1, p2) {
//
// }
// SCHEMA ___________________________________________________

// game.listen(port, () => {
//   console.log(`Escuchando en el puerto ${port}...`);
// });
//
// game.use(express.static('public'));

var selectedMode = "";
var user2Selector = "";

function secondUserElement() {
  water2.addEventListener('click', water2 => {
    userValue2 = waterValue;
    user2Selector = 'water';
    secondUserSelection.innerHTML = `
    <section class="selected elements ${user2Selector}">
    <p class="selection-text">Second player</p>
    <img class="element-image" src="${user2Selector}.png" alt="Water image">
    </section>
    `
    selectedElement.classList.remove('hidden');
    cardsSection.classList.add('hidden');
    cardsSection2.classList.remove('hidden');
    cardsSection2.classList.add('hidden');
    cardSectionTitle2.classList.add('hidden');
    testValues();
  });
  earth2.addEventListener('click', earth2 => {
    userValue2 = earthValue;
    user2Selector = 'earth';
    secondUserSelection.innerHTML = `
    <section class="selected elements ${user2Selector}">
    <p class="selection-text">Second player</p>
    <img class="element-image" src="${user2Selector}.png" alt="Water image">
    </section>
    `
    selectedElement.classList.remove('hidden');
    cardsSection.classList.add('hidden');
    cardsSection2.classList.remove('hidden');
    cardsSection2.classList.add('hidden');
    cardSectionTitle2.classList.add('hidden');
    testValues();
  });
  air2.addEventListener('click', air2 => {
    userValue2 = airValue;
    user2Selector = 'air';
    secondUserSelection.innerHTML = `
    <section class="selected elements ${user2Selector}">
    <p class="selection-text">Second player</p>
    <img class="element-image" src="${user2Selector}.png" alt="Water image">
    </section>
    `
    selectedElement.classList.remove('hidden');
    cardsSection.classList.add('hidden');
    cardsSection2.classList.remove('hidden');
    cardsSection2.classList.add('hidden');
    cardSectionTitle2.classList.add('hidden');
    testValues();
  });
  fire2.addEventListener('click', fire2 => {
    userValue2 = fireValue;
    user2Selector = 'fire';
    secondUserSelection.innerHTML = `
    <section class="selected elements ${user2Selector}">
    <p class="selection-text">Second player</p>
    <img class="element-image" src="${user2Selector}.png" alt="Water image">
    </section>
    `
    selectedElement.classList.remove('hidden');
    cardsSection.classList.add('hidden');
    cardsSection2.classList.remove('hidden');
    cardsSection2.classList.add('hidden');
    cardSectionTitle2.classList.add('hidden');
    testValues();
  });
}

//addEventListener
friendMode.addEventListener('click', friend => {
  selectedMode = "Friend";
  modeSection.classList.add('hidden');
  cardsSection.classList.remove('hidden');
  cardSectionTitle2.innerHTML = `
    <p>First player</p>
  `

  water.addEventListener('click', water => {
    userValue = waterValue;
    if(selectedMode = "Friend"){
      cardsSection.classList.add('hidden');
      secondUserSelection.classList.remove('hidden');
    }
    // if(userValue != undefined) {
      secondUserElement();
      cardsSection.classList.add('hidden');
      cardsSection2.classList.remove('hidden')
      cardSectionTitle2.innerHTML = `
        <p class="player">Second player</p>
      `
    // }
    selectedElement.innerHTML= `
    <section class="selected elements water">
      <p class="selection-text">First player</p>
      <img class="element-image" src="water.png" alt="Water image">
    </section>
    `
    // testValues();
  });

  earth.addEventListener('click', event => {
    userValue = earthValue;
    if(selectedMode = "Friend"){
      cardsSection.classList.add('hidden');
      secondUserSelection.classList.remove('hidden');
    }
    // if(userValue != undefined) {
      secondUserElement();
      cardsSection.classList.add('hidden');
      cardsSection2.classList.remove('hidden');
      cardSectionTitle2.innerHTML = `
        <p class="player">Second player</p>
      `
    // }
    selectedElement.innerHTML= `
    <section class="selected elements earth">
      <p class="selection-text">First player</p>
      <img class="element-image" src="earth.png" alt="Water image">
    </section>
    `
    // testValues();
  });

  air.addEventListener('click', air => {
    userValue = airValue;
    if(selectedMode = "Friend"){
      cardsSection.classList.add('hidden');
      secondUserSelection.classList.remove('hidden');
    }
    // if(userValue != undefined) {
      secondUserElement();
      cardsSection.classList.add('hidden');
      cardsSection2.classList.remove('hidden');
      cardSectionTitle2.innerHTML = `
        <p class="player">Second player</p>
      `
    // }
    selectedElement.innerHTML= `
    <section class="selected elements air">
      <p class="selection-text">First player</p>
      <img class="element-image" src="air.png" alt="Water image">
    </section>
    `
    // testValues();
  });

  fire.addEventListener('click', fire => {
    userValue = fireValue;
    if(selectedMode = "Friend"){
      cardsSection.classList.add('hidden');
      secondUserSelection.classList.remove('hidden');
    }
    // if(userValue != undefined) {
      secondUserElement();
      cardsSection.classList.add('hidden');
      cardsSection2.classList.remove('hidden');
      cardSectionTitle2.innerHTML = `
        <p class="player">Second player</p>
      `
    // }
    selectedElement.innerHTML= `
    <section class="selected elements fire">
      <p class="selection-text">First player</p>
      <img class="element-image" src="fire.png" alt="Water image">
    </section>
    `
    // testValues();
  });

});

//addEventListener2
computerMode.addEventListener('click', computer => {
  selectedMode = "Computer";
  modeSection.classList.add('hidden');
  cardsSection.classList.remove('hidden');
  cardSectionTitle.innerHTML = `
    <p class="player">Elige un valor</p>
  `

  water.addEventListener('click', water => {
    userValue = waterValue;
    if(selectedMode = "Computer"){
      cardsSection.classList.add('hidden');
      computerSelection.classList.remove('hidden');
      computerSelection.innerHTML = `
      <section class="selected elements ${randomSelector}">
        <p class="selection-text">Computer selection</p>
        <img class="element-image" src="${randomSelector}.png" alt="Water image">
      </section>
      `
    }
    selectedElement.classList.remove('hidden');
    selectedElement.innerHTML= `
    <section class="selected elements water">
      <p class="selection-text">Selected element</p>
      <img class="element-image" src="water.png" alt="Water image">
    </section>
    `
    testValues();
  });

  earth.addEventListener('click', event => {
    userValue = earthValue;
    if(selectedMode = "Computer"){
      cardsSection.classList.add('hidden');
      computerSelection.classList.remove('hidden');
      computerSelection.innerHTML = `
      <section class="selected elements ${randomSelector}">
        <p class="selection-text">Computer selection</p>
        <img class="element-image" src="${randomSelector}.png" alt="Water image">
      </section>
      `
    }
    selectedElement.classList.remove('hidden');
    selectedElement.innerHTML= `
    <section class="selected elements earth">
      <p class="selection-text">Selected element</p>
      <img class="element-image" src="earth.png" alt="Water image">
    </section>
    `
    testValues();
  });

  air.addEventListener('click', air => {
    userValue = airValue;
    if(selectedMode = "Computer"){
      cardsSection.classList.add('hidden');
      computerSelection.classList.remove('hidden');
      computerSelection.innerHTML = `
      <section class="selected elements ${randomSelector}">
        <p class="selection-text">Computer selection</p>
        <img class="element-image" src="${randomSelector}.png" alt="Water image">
      </section>
      `
    }
    selectedElement.classList.remove('hidden');
    selectedElement.innerHTML= `
    <section class="selected elements air">
      <p class="selection-text">Selected element</p>
      <img class="element-image" src="air.png" alt="Water image">
    </section>
    `
    testValues();
  });

  fire.addEventListener('click', fire => {
    userValue = fireValue;
    if(selectedMode = "Computer"){
      cardsSection.classList.add('hidden');
      computerSelection.classList.remove('hidden');
      computerSelection.innerHTML = `
      <section class="selected elements ${randomSelector}">
        <p class="selection-text">Computer selection</p>
        <img class="element-image" src="${randomSelector}.png" alt="Water image">
      </section>
      `
    }
    selectedElement.classList.remove('hidden');
    selectedElement.innerHTML= `
    <section class="selected elements fire">
      <p class="selection-text">Selected element</p>
      <img class="element-image" src="fire.png" alt="Water image">
    </section>
    `
    testValues();
  });

});

// let nombre= ()  => {
//
// }
//
// function nombre() {
//
// }

function testValues() {

  if(selectedMode == "Friend") {

    if(user2Selector == 'water'){
      userValue2 = waterValue
    } else if (user2Selector == 'earth') {
      userValue2 = earthValue
    } else if (user2Selector == 'air') {
      userValue2 = airValue
    } else {
      userValue2 = fireValue
    }

    console.log('userValue: ', userValue);
    console.log('userValue2: ', userValue2);
    console.log('user2Selector: ', user2Selector);

    if(userValue2 > userValue){
      console.log('Perdiste');
      result.innerHTML= `
      <section class="selected elements fire">
        <p class="selection-text">Perdiste :(</p>
        <img class="element-image" src="lose.png" alt="Water image">
        <p class="selection-text">¡Juega de nuevo! u_ú</p>
      </section>
      `
    } else if (userValue2 < userValue) {
      console.log('Ganaste')
      result.innerHTML= `
      <section class="selected elements fire">
        <p class="selection-text">¡Ganaste! :D</p>
        <img class="element-image" src="win.png" alt="Water image">
        <p class="selection-text">¡Juega de nuevo! uwu</p>
      </section>
      `
    } else {
      console.log('Empate')
      result.innerHTML= `
      <section class="selected elements fire">
        <p class="selection-text">Empate D:</p>
        <img class="element-image" src="tie.png" alt="Water image">
        <p class="selection-text">¡Juega de nuevo! =O</p>
      </section>
      `
    }

  } else {

    cardSectionTitle.classList.add('hidden');

    if(randomSelector == 'water'){
      randomValue = waterValue
    } else if (randomSelector == 'earth') {
      randomValue = earthValue
    } else if (randomSelector == 'air') {
      randomValue = airValue
    } else {
      randomValue = fireValue
    }

    console.log('userValue: ', userValue);
    console.log('randomSelector: ', randomSelector);
    console.log('randomValue: ', randomValue);

    if(randomValue > userValue){
      console.log('Perdiste');
      result.innerHTML= `
      <section class="selected elements fire">
        <p class="selection-text">Perdiste :(</p>
        <img class="element-image" src="lose.png" alt="Water image">
        <p class="selection-text">¡Juega de nuevo! u_ú</p>
      </section>
      `
    } else if (randomValue < userValue) {
      console.log('Ganaste')
      result.innerHTML= `
      <section class="selected elements fire">
        <p class="selection-text">¡Ganaste! :D</p>
        <img class="element-image" src="win.png" alt="Water image">
        <p class="selection-text">¡Juega de nuevo! uwu</p>
      </section>
      `
    } else {
      console.log('Empate')
      result.innerHTML= `
      <section class="selected elements fire">
        <p class="selection-text">Empate D:</p>
        <img class="element-image" src="tie.png" alt="Water image">
        <p class="selection-text">¡Juega de nuevo! =O</p>
      </section>
      `
    }
  }

  renderPage();
}

function renderPage() {
  mainSection.addEventListener("click", function(event){
    location.reload(true)
  })
}

// computer();

// friend();
