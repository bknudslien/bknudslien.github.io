class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}

class Deck {
    constructor() {
        this.cards = [];    
    }
                       
    createDeck() {
        let suits = ['C', 'D', 'H', 'S'];
        let ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
        
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                this.cards.push(new Card(suits[i], ranks[j], values[j]));
            }
        }
    }

    shuffleDeck() {
        let location1, location2, tmp;
        for (let i = 0; i < 1000; i++) {
            location1 = Math.floor((Math.random() * this.cards.length));
            location2 = Math.floor((Math.random() * this.cards.length));
            tmp = this.cards[location1];
            this.cards[location1] = this.cards[location2];
            this.cards[location2] = tmp;
         }
     }
}

class Player {
    constructor(name) {
        this.playerName = name;
        this.playerCards = [];
    }
}

class Board {
    constructor() {
        this.cardsInMiddle = [];
        this.players = [];
    }
    start(playerOneName, playerTwoName, playerThreeName, playerFourName, playerFiveName, playerSixName) {
        if (playerOneName != null) {
            this.players.push(new Player(playerOneName)) }
        if (playerTwoName != null) {
            this.players.push(new Player(playerTwoName)) }
        if (playerThreeName != null) {
            this.players.push(new Player(playerThreeName)) }
        if (playerFourName != null) {
            this.players.push(new Player(playerFourName)) }
        if (playerFiveName != null) {
            this.players.push(new Player(playerFiveName)) }
        if (playerSixName != null) {
            this.players.push(new Player(playerSixName)) }
        let d = new Deck();
        d.createDeck();
        d.shuffleDeck();    
        this.players[0].playerCards = d.cards.slice(0, 4);
        this.players[1].playerCards = d.cards.slice(4, 8);
        this.players[2].playerCards = d.cards.slice(8, 12);
        this.players[3].playerCards = d.cards.slice(12, 16);
        this.players[4].playerCards = d.cards.slice(16, 20);
        this.players[5].playerCards = d.cards.slice(20, 24);
    }
}

function changeImage() {
    const image = document.getElementById('myImage');
    image.src = '../cardsJS/richardschneider-cardsJS-fe5e857/cards/QD.svg';
}

function reShuffleDeck() {
    let location1, location2, tmp;
    for (let i = 0; i < 1000; i++) {
        location1 = Math.floor((Math.random() * this.cards.length));
        location2 = Math.floor((Math.random() * this.cards.length));
        tmp = this.cards[location1];
        this.cards[location1] = this.cards[location2];
        this.cards[location2] = tmp;
    }
}

function reDeal() {
    this.reShuffleDeck();   
    this.players[0].playerCards = this.d.cards.slice(9, 13);
    this.players[1].playerCards = this.d.cards.slice(13, 17);
    this.players[2].playerCards = this.d.cards.slice(13, 17);
    this.players[3].playerCards = this.d.cards.slice(13, 17);
    this.players[4].playerCards = this.d.cards.slice(13, 17);
    this.players[5].playerCards = this.d.cards.slice(13, 17);
}

function loadImages() {
    if (gameBoard.players[0].playerName != null) {
        document.getElementById("player1").innerHTML = gameBoard.players[0].playerName }
    if (gameBoard.players[1].playerName != null) {
        document.getElementById("player2").innerHTML = gameBoard.players[1].playerName }
    if (gameBoard.players[2].playerName != null) {
        document.getElementById("player3").innerHTML = gameBoard.players[2].playerName }
    if (gameBoard.players[3].playerName != null) {
        document.getElementById("player4").innerHTML = gameBoard.players[3].playerName }
    if (gameBoard.players[4].playerName != null) {
        document.getElementById("player5").innerHTML = gameBoard.players[4].playerName }
    if (gameBoard.players[5].playerName != null) {
        document.getElementById("player6").innerHTML = gameBoard.players[5].playerName }
    
    let rank = gameBoard.players[1].playerCards[0].rank;
    let suit = gameBoard.players[1].playerCards[0].suit;
    const imagep1c1 = document.getElementById('p1c1Image');
    imagep1c1.src = '../cardsJS/richardschneider-cardsJS-fe5e857/cards/'+gameBoard.players[0].playerCards[0].rank+gameBoard.players[0].playerCards[0].suit+'.svg';
    const imagep1c2 = document.getElementById('p1c2Image');
    imagep1c2.src = '../cardsJS/richardschneider-cardsJS-fe5e857/cards/'+gameBoard.players[0].playerCards[1].rank+gameBoard.players[0].playerCards[1].suit+'.svg';
    const imagep1c3 = document.getElementById('p1c3Image');
    imagep1c3.src = '../cardsJS/richardschneider-cardsJS-fe5e857/cards/'+gameBoard.players[0].playerCards[2].rank+gameBoard.players[0].playerCards[2].suit+'.svg';
    const imagep1c4 = document.getElementById('p1c4Image');
    imagep1c4.src = '../cardsJS/richardschneider-cardsJS-fe5e857/cards/'+gameBoard.players[0].playerCards[3].rank+gameBoard.players[0].playerCards[3].suit+'.svg';
    const imagep2c1 = document.getElementById('p2c1Image');
    imagep2c1.src = '../cardsJS/richardschneider-cardsJS-fe5e857/cards/'+gameBoard.players[1].playerCards[0].rank+gameBoard.players[1].playerCards[0].suit+'.svg';
    const imagep2c2 = document.getElementById('p2c2Image');
    imagep2c2.src = '../cardsJS/richardschneider-cardsJS-fe5e857/cards/'+gameBoard.players[1].playerCards[1].rank+gameBoard.players[1].playerCards[1].suit+'.svg';
    const imagep2c3 = document.getElementById('p2c3Image');
    imagep2c3.src = '../cardsJS/richardschneider-cardsJS-fe5e857/cards/'+gameBoard.players[1].playerCards[2].rank+gameBoard.players[1].playerCards[2].suit+'.svg';
    const imagep2c4 = document.getElementById('p2c4Image');
    imagep2c4.src = '../cardsJS/richardschneider-cardsJS-fe5e857/cards/'+gameBoard.players[1].playerCards[3].rank+gameBoard.players[1].playerCards[3].suit+'.svg';
    const imagep3c1 = document.getElementById('p3c1Image');
    imagep3c1.src = '../cardsJS/richardschneider-cardsJS-fe5e857/cards/'+gameBoard.players[2].playerCards[0].rank+gameBoard.players[2].playerCards[0].suit+'.svg';
    const imagep3c2 = document.getElementById('p3c2Image');
    imagep3c2.src = '../cardsJS/richardschneider-cardsJS-fe5e857/cards/'+gameBoard.players[2].playerCards[1].rank+gameBoard.players[2].playerCards[1].suit+'.svg';
    const imagep3c3 = document.getElementById('p3c3Image');
    imagep3c3.src = '../cardsJS/richardschneider-cardsJS-fe5e857/cards/'+gameBoard.players[2].playerCards[2].rank+gameBoard.players[2].playerCards[2].suit+'.svg';
    const imagep3c4 = document.getElementById('p3c4Image');
    imagep3c4.src = '../cardsJS/richardschneider-cardsJS-fe5e857/cards/'+gameBoard.players[2].playerCards[3].rank+gameBoard.players[2].playerCards[3].suit+'.svg';
    const imagep4c1 = document.getElementById('p4c1Image');
    imagep4c1.src = '../cardsJS/richardschneider-cardsJS-fe5e857/cards/'+gameBoard.players[3].playerCards[0].rank+gameBoard.players[3].playerCards[0].suit+'.svg';
    const imagep4c2 = document.getElementById('p4c2Image');
    imagep4c2.src = '../cardsJS/richardschneider-cardsJS-fe5e857/cards/'+gameBoard.players[3].playerCards[1].rank+gameBoard.players[3].playerCards[1].suit+'.svg';
    const imagep4c3 = document.getElementById('p4c3Image');
    imagep4c3.src = '../cardsJS/richardschneider-cardsJS-fe5e857/cards/'+gameBoard.players[3].playerCards[2].rank+gameBoard.players[3].playerCards[2].suit+'.svg';
    const imagep4c4 = document.getElementById('p4c4Image');
    imagep4c4.src = '../cardsJS/richardschneider-cardsJS-fe5e857/cards/'+gameBoard.players[3].playerCards[3].rank+gameBoard.players[3].playerCards[3].suit+'.svg';
    const imagep5c1 = document.getElementById('p5c1Image');
    imagep5c1.src = '../cardsJS/richardschneider-cardsJS-fe5e857/cards/'+gameBoard.players[4].playerCards[0].rank+gameBoard.players[4].playerCards[0].suit+'.svg';
    const imagep5c2 = document.getElementById('p5c2Image');
    imagep5c2.src = '../cardsJS/richardschneider-cardsJS-fe5e857/cards/'+gameBoard.players[4].playerCards[1].rank+gameBoard.players[4].playerCards[1].suit+'.svg';
    const imagep5c3 = document.getElementById('p5c3Image');
    imagep5c3.src = '../cardsJS/richardschneider-cardsJS-fe5e857/cards/'+gameBoard.players[4].playerCards[2].rank+gameBoard.players[4].playerCards[2].suit+'.svg';
    const imagep5c4 = document.getElementById('p5c4Image');
    imagep5c4.src = '../cardsJS/richardschneider-cardsJS-fe5e857/cards/'+gameBoard.players[4].playerCards[3].rank+gameBoard.players[4].playerCards[3].suit+'.svg';
    const imagep6c1 = document.getElementById('p6c1Image');
    imagep6c1.src = '../cardsJS/richardschneider-cardsJS-fe5e857/cards/'+gameBoard.players[5].playerCards[0].rank+gameBoard.players[5].playerCards[0].suit+'.svg';
    const imagep6c2 = document.getElementById('p6c2Image');
    imagep6c2.src = '../cardsJS/richardschneider-cardsJS-fe5e857/cards/'+gameBoard.players[5].playerCards[1].rank+gameBoard.players[5].playerCards[1].suit+'.svg';
    const imagep6c3 = document.getElementById('p6c3Image');
    imagep6c3.src = '../cardsJS/richardschneider-cardsJS-fe5e857/cards/'+gameBoard.players[5].playerCards[2].rank+gameBoard.players[5].playerCards[2].suit+'.svg';
    const imagep6c4 = document.getElementById('p6c4Image');
    imagep6c4.src = '../cardsJS/richardschneider-cardsJS-fe5e857/cards/'+gameBoard.players[5].playerCards[3].rank+gameBoard.players[5].playerCards[3].suit+'.svg';
}

let gameBoard = new Board();
gameBoard.start('Mike', 'John', 'Doug', 'Jeff', 'Brent', 'Bot1');
console.log(gameBoard.players);
