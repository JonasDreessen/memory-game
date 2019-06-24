const allCards = document.querySelectorAll(".card");
let hasFlipedCard = false;
let firstCard, secondCard;

function flipCard (){
    this.classList.add('card-flipped');

    if(!hasFlipedCard){
        hasFlipedCard = true;
        firstCard = this;
        
    } else {
        hasFlipedCard = false;
        secondCard = this;       
    }
    if(firstCard.dataset.framework === secondCard.dataset.framework) {
        firstCard.removeEventlistener("click",flipCard);
        secondCard.removeEventlistener("click",flipCard);
    } else {
        setTimeout(flipBack,500);
    }
}

function flipBack(){
document.querySelectorAll(".card-flipped").forEach(element => { element.classList.remove("card-flipped");
})
};

allCards.forEach(card => card.addEventListener("click",flipCard));














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