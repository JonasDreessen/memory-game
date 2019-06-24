const allCards = document.querySelectorAll(".card");
let hasFlippedCard = false;
let firstCard, secondCard;
let blockTheGame = false;



function flipCard() {
    // give a class .card-flipped to the clicked card
    if (blockTheGame) return;
    this.classList.add('card-flipped');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;

    } else {
        hasFlippedCard = false;
        secondCard = this;
    }
    matchMaker();
}

function matchMaker() {
    // compare the dataset.framework of the first and second card.
    if (firstCard.dataset.framework ===
        secondCard.dataset.framework) {
        stopFlipCards();
    } else {
        blockTheGame = true;
        flipBack();
    }
}

function flipBack() {
    setTimeout(flipBackForReal, 1500);
    // remove the added class .card-flipped
    function flipBackForReal(){
        document.querySelectorAll(".card-flipped").forEach(element => {
            element.classList.remove("card-flipped");
        })
    }
    
    
    blockTheGame = false;
};

function resetBoard(){
    hasFlippedCard = false;
    blockTheGame = false;
    firstCard = null;
    secondCard = null;
    
}
function stopFlipCards() {
    // remove the eventlistener of the card so it stays visible.
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    setTimeout(resetBoard, 1500);
    
}

(function randomPosition(){
    allCards.forEach(allCards => {
        let randomNumber = Math.floor(Math.random()*9);
        allCards.style.order = randomNumber;
    });
})();

allCards.forEach(allCards => allCards.addEventListener("click", flipCard));














/* BELOW IS MY OWN CODE 

const titleId = document.querySelector(".page-header");
const cardId = document.querySelectorAll(".card");
var cardCounter = 0;
//const titleIdEventListener = titleId.addEventListener("click", flipCard);

// give the clicked card a class of .card-fliped
// when 2 cards are fliped, activate the function flipCardBack
for (let i = 0; i < cardId.length; i++) {
    cardId[i].addEventListener('click', function () {
        cardId[i].classList.add("card-flipped");
        cardCounter++;
        if (cardCounter === 2) {
            cardCounter = 0;
            //setTimeout(flipCardBack, 2500);
        }

    });
}

// trying to remove the added class .card-fliped (currently not working)
/*
function flipCardBack() {
    document.querySelectorAll(".card-flipped").forEach(element => {
        var titleValues = element.getElementsByClassName("card-title");
        var valuesToCompare = titleValues[0].innerHTML;
        return valuesToCompare;
    })
    if (valuesToCompare == valuesToCompare){
        console.log("hi");
    }


    document.querySelectorAll(".card-flipped").forEach(element => {
        element.classList.remove("card-flipped");
    })
}


/*
function compareCards(){
    console.log(compareFlipedCard);
} */