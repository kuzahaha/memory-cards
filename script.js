

const initialArray = [
          {id: 1, frontImage: "img/rubashka.png", backImage: "img/open.png" },     //die.png
          {id: 1, frontImage: "img/rubashka.png", backImage: "img/open.png" }, 
          {id: 2, frontImage: "img/rubashka.png", backImage: "img/rickSanchez.jpg" },
          {id: 2, frontImage: "img/rubashka.png", backImage: "img/rickSanchez.jpg" }, // cделать через цикл или как-то поумнее;
          {id: 3, frontImage: "img/rubashka.png", backImage: "img/mmorty.jpg" },
          {id: 3, frontImage: "img/rubashka.png", backImage: "img/mmorty.jpg" },
          {id: 4, frontImage: "img/rubashka.png", backImage: "img/sammer.jpg" },
          {id: 4, frontImage: "img/rubashka.png", backImage: "img/sammer.jpg" }, 
          {id: 5, frontImage: "img/rubashka.png", backImage: "img/ricksLove.png" },
          {id: 5, frontImage: "img/rubashka.png", backImage: "img/ricksLove.png" },
          {id: 6, frontImage: "img/rubashka.png", backImage: "img/meme.png" },
          {id: 6, frontImage: "img/rubashka.png", backImage: "img/meme.png" }
];

var shuffledArr = initialArray.sort(function(){
  return Math.random() - 0.5;
});

let cards = initialArray.map( item => {
  return `<div class="scene">
            <div class="card" id="${item.id}">
              <div class="card__face card__face--front">
                <img src="${item.frontImage}" alt="">
              </div>
              <div class="card__face card__face--back">
                <img src="${item.backImage}" alt="">
              </div>
            </div>
          </div>`
});
document.querySelector('.field').innerHTML = cards.join(' ');

const arr = document.querySelectorAll('.card');
const aheret = document.getElementById('oheret');

function clear() {
  aheret. innerHTML = " КЛИК СУДА СУДА";
}

let COUNTER = 0;

function counter() {
  COUNTER++

  if( COUNTER == 6 ) {
    clear();
    alert('game is finished');
    
  }
}
//all constants on top and declaration variables should be on top
//delete all setTimeout ,wtf, are you want to broke my computer or whatttttttt
//change names of variables
let DidYouFlipTheCard = false;
let firstCard = {};   
let secondCard = {}; 
let flippedCards = 0;

function flipTheCard(event) {
  if(flippedCards == 2) return;
  let target = event.target.parentNode.parentNode;
  target.classList.toggle('is-flipped');
  if(!DidYouFlipTheCard) {
    DidYouFlipTheCard = true;
    firstCard = target;
    firstCard.classList.add('sceneShadow');
    flippedCards++;
    firstCard.removeEventListener('click', flipTheCard);
    console.log(" you've picked the FIRST card");
  } else {
    DidYouFlipTheCard = false;
    secondCard = target;
    flippedCards++;
    console.log(" you've picked the SECOND card");


    if( firstCard.id === secondCard.id && firstCard !== null && secondCard !== null) {
      setTimeout(function() {counter();}, 1500);
      
      console.log('its a match');
      firstCard.removeEventListener('click', flipTheCard);
      secondCard.removeEventListener('click', flipTheCard);

      firstCard.classList.add('sceneShadowMatched');
      secondCard.classList.add('sceneShadowMatched');
    } else {
      firstCard.addEventListener('click', flipTheCard);
      firstCard.classList.remove('sceneShadow');
      setTimeout( function() {
        firstCard.classList.toggle('is-flipped');
        secondCard.classList.toggle('is-flipped');
      },
      800
      );
    }
    setTimeout( function(){flippedCards = 0;}, 1100);
    
  }
}

arr.forEach( item => item.addEventListener('click', flipTheCard ));




aheret.addEventListener('click', function() {
  location.reload();
})


