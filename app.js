
// let player = { 
//    name: "Your Score",
//    chips: 145
// }


let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let snd1 = new Audio('/clap.wav');
let snd2 = new Audio('/sad.wav');
        



// let playerEl = document.getElementById("player-el")
// playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard() {
   let randomNumber = Math.floor(Math.random() * 13) + 1
   if (randomNumber > 10) {
      return 10
   } else if (randomNumber === 1) {
      return 11
   } else {
      return randomNumber
   }
}

function startGame() {
   isAlive = true
   let firstCard = getRandomCard()
   let secondCard = getRandomCard()
   cards = [firstCard, secondCard]
   sum = firstCard + secondCard
   renderGame()
}

function renderGame() {
   if (sum <= 20) {
      message = "Do you want to draw a new card?"
   } else if (sum === 21) {
      message = "You've got Blackjack!"
      hasBlackjack = true
      snd1.play();
      let text = document.createElement("p");
      text.innerHTML = "Refresh the page to play again.";
      document.body.appendChild(text);
      text.setAttribute("id", "refresh");
   } else {
      message = "You're out of the game!"
      isAlive = false
      snd2.play()
      let text = document.createElement("p");
      text.innerHTML = "Refresh the page to play again.";
      document.body.appendChild(text);
      text.setAttribute("id", "refresh");
   }
   messageEl.textContent = message
   sumEl.textContent = "Sum : " + sum
   cardEl.textContent ="Cards : "
   for ( let i = 0; i<cards.length; i++){
      cardEl.textContent += cards[i] + " "
   } 
}

function newCard() {
   if (isAlive === true && hasBlackjack === false) {
      let card = getRandomCard()
      sum += card
      cards.push(card)
      console.log(cards)
      renderGame()
   }
}



