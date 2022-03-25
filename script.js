let firstCard = getRandomCard()
let secondCard = getRandomCard()
let sum = firstCard+secondCard
let blackJack = false
let isAlive = true
let message = ""
 let messageEl = document.getElementById("message-el")
 let sumEl = document.getElementById("sum-el")
 let cardEl = document.getElementById("card-el")
let cards =[firstCard,secondCard]


function getRandomCard(){
     
   let rondomnum = Math.floor( Math.random()*13) + 1
   if(rondomnum > 10){
       return 10
   }else if(rondomnum === 1){
       return 11
   }else{
       return rondomnum
   }
 }
 getRandomCard()

 function startGame(){
    renderGame()
 }
function renderGame(){
    cardEl.textContent = "Card:"
    for(let i =0; i<cards.length;i++){
        cardEl.textContent += cards[1] + "  "
    }
    sumEl.textContent = "Sum:"+ ""+ sum
    
   
    if(sum<=20){
        message = "Do you want to draw a new card?"
    
    }else if(sum===21){
        message = " You've got Blackjack!"
        blackJack = true
    }else{
        message = "You're out of the game!"
        isAlive = true
    }
    messageEl.textContent = message
}
function newCard(){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}

