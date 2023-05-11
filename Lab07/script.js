var cardList = [
    { value: ['♣', 'A'], isFaceDown: true },
    { value: ['♣', '2'], isFaceDown: false },
    { value: ['♣', '3'], isFaceDown: true },
    { value: ['♣', '4'], isFaceDown: false },
    { value: ['♣', '5'], isFaceDown: true },
    { value: ['♣', '6'], isFaceDown: true },
    { value: ['♣', '7'], isFaceDown: true },
    { value: ['♣', '8'], isFaceDown: false },
    { value: ['♣', '9'], isFaceDown: true },
    { value: ['♣', '10'], isFaceDown: true },
    { value: ['♣', 'J'], isFaceDown: true },
    { value: ['♣', 'Q'], isFaceDown: true },
    { value: ['♣', 'K'], isFaceDown: false },
    { value: ['♦', 'A'], isFaceDown: true },
    { value: ['♦', '2'], isFaceDown: false },
    { value: ['♦', '3'], isFaceDown: true },
    { value: ['♦', '4'], isFaceDown: false },
    { value: ['♦', '5'], isFaceDown: true },
    { value: ['♦', '6'], isFaceDown: true },
    { value: ['♦', '7'], isFaceDown: true },
    { value: ['♦', '8'], isFaceDown: false },
    { value: ['♦', '9'], isFaceDown: true },
    { value: ['♦', '10'], isFaceDown: true },
    { value: ['♦', 'J'], isFaceDown: true },
    { value: ['♦', 'Q'], isFaceDown: true },
    { value: ['♦', 'K'], isFaceDown: false },
    { value: ['♥', 'A'], isFaceDown: true },
    { value: ['♥', '2'], isFaceDown: true },
    { value: ['♥', '3'], isFaceDown: false },
    { value: ['♥', '4'], isFaceDown: false },
    { value: ['♥', '5'], isFaceDown: true },
    { value: ['♥', '6'], isFaceDown: false },
    { value: ['♥', '7'], isFaceDown: true },
    { value: ['♥', '8'], isFaceDown: true },
    { value: ['♥', '9'], isFaceDown: true },
    { value: ['♥', '10'], isFaceDown: true },
    { value: ['♥', 'J'], isFaceDown: true },
    { value: ['♥', 'Q'], isFaceDown: true },
    { value: ['♥', 'K'], isFaceDown: false },
    { value: ['♠', 'A'], isFaceDown: true },
    { value: ['♠', '2'], isFaceDown: true },
    { value: ['♠', '3'], isFaceDown: false },
    { value: ['♠', '4'], isFaceDown: false },
    { value: ['♠', '5'], isFaceDown: true },
    { value: ['♠', '6'], isFaceDown: false },
    { value: ['♠', '7'], isFaceDown: true },
    { value: ['♠', '8'], isFaceDown: true },
    { value: ['♠', '9'], isFaceDown: true },
    { value: ['♠', '10'], isFaceDown: true },
    { value: ['♠', 'J'], isFaceDown: true },
    { value: ['♠', 'Q'], isFaceDown: true },
    { value: ['♠', 'K'], isFaceDown: false },
]   

function htmlToElem(html) {
    let temp = document.createElement('template');
    html = html.trim(); // Never return a space text node as a result
    temp.innerHTML = html;
    return temp.content.firstChild;
}

function renderCardList() {
// TODO: define cardZoneElm hereช
    const cardZoneElm = document.getElementById('card-zone');
    cardZoneElm.innerHTML = "";

// before append any DOM(s), you need to clear all children of cardZoneElm
    var cardStyle; 
    var tempCard = [];

    for (var idx=0; idx < cardList.length; idx++) {
        // TODO:
        do {
            cardStyle = cardList[Math.floor(Math.random()*cardList.length)];
        } while (tempCard.includes(cardStyle));

        tempCard.push(cardStyle);
        var content = '"><div class="card-title">' + cardStyle.value[0] + '</div><div class="card-body">' + cardStyle.value[1] + '</div></div>';
        console.log(cardStyle);

        // if isFaceDown is true, create a card component with 'face-down' class
        if (cardStyle.isFaceDown == true) {
            content = ' face-down"><div class="card-title"></div><div class="card-body">?</div></div>';
        }
        cardElm = htmlToElem( '<div class="card' + content);
        cardZoneElm.append(cardElm);
    }

    const cardModify = document.querySelectorAll('.card-title, .card-body, .card');

    for (let i = 0; i < cardModify.length; i++) {
        if (cardModify[i].textContent == '♥' || cardModify[i].textContent == '♦') {
            cardModify[i-1].style.border = '2px solid red';
            for (let n = 0; n <= 1; n++) {
                cardModify[i+n].style.color = 'red';
            }
        }
    }
}