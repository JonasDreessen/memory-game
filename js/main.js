const titleId = document.querySelector(".page-header");
const cardId = document.querySelectorAll(".card");
//const titleIdEventListener = titleId.addEventListener("click", flipCard);


for (let i = 0; i < cardId.length; i++) {
    cardId[i].addEventListener('click', function () {
        cardId[i].classList.add("card-fliped");
        setTimeout(flipCardBack, 2500);
    });
}

function flipCardBack() {
    for (i = 0; i < cardId.length; i++)
    cardId[i].classList.remove("card-fliped");
}