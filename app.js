document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [{
        name: "avenger",
        img: "images/avenger.jpg"
    }, {
        name: "bat",
        img: "images/bat.jpg"
    }, {
        name: "cap",
        img: "images/cap.png"
    }, {
        name: "dp",
        img: "images/dp.jpg"
    }, {
        name: "spider",
        img: "images/spider.jpg"
    }, {
        name: "superman",
        img: "images/superman.jpg"
    }, {
        name: "avenger",
        img: "images/avenger.jpg"
    }, {
        name: "bat",
        img: "images/bat.jpg"
    }, {
        name: "cap",
        img: "images/cap.png"
    }, {
        name: "dp",
        img: "images/dp.jpg"
    }, {
        name: "spider",
        img: "images/spider.jpg"
    }, {
        name: "superman",
        img: "images/superman.jpg"
    }
    ]
    cardArray.sort(() => 0.5 - Math.random())
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardChosen = []
    var cardChosenID = []
    var cardsWon = []


    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/riddler.jpg')
            console.log('image added')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
           grid.appendChild(card)
        }
    }


    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardChosenID[0]
        const optionTwoID = cardChosenID[1]
        if (cardChosen[0] === cardChosen[1]) {
            alert('Match Found')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoID].setAttribute('src', 'images/white.png')
            cardsWon.push(cardChosenID[0])
            cardsWon.push(cardChosenID[1])
        } else {
            cards[optionOneId].setAttribute('src', 'images/riddler.jpg')
            cards[optionTwoID].setAttribute('src', 'images/riddler.jpg')
            alert('Try again')
        }
        cardChosen = []
        cardChosenID = []
        resultDisplay.textContent = cardsWon.length/2
        if (cardsWon.length === cardArray.length) {
            resultDisplay.textContent = "You found them all"
            setTimeout(location.reload(), 3000)
            
        }
    }

    function flipcard() {
        var cardID = this.getAttribute('data-id')
        console.log(cardsWon)
        if(cardsWon.includes(cardID)){
            alert("You already guessed this card")
            cardID.setAttribute('src', 'images/riddler.jpg')
        }
        else if (cardChosenID.includes(cardID)) {
            alert("Select the second card")
        }
        else {
            cardChosen.push(cardArray[cardID].name)
            cardChosenID.push(cardID)
            this.setAttribute('src', cardArray[cardID].img)
            if (cardChosen.length === 2) {
                setTimeout(checkForMatch, 500)
            }
        }
    }
    createBoard()
})