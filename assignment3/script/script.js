// Card order: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
// J: 11, Q: 12, K: 13, A:14
// Suits: .1 clubs (♣), .2 diamonds (♦), .3 hearts (♥), and .4 spades (♠)

var cardDeck = [
  2.1,
  3.1,
  4.1,
  5.1,
  6.1,
  7.1,
  8.1,
  9.1,
  10.1,
  11.1,
  12.1,
  13.1,
  14.1,
  2.2,
  3.2,
  4.2,
  5.2,
  6.2,
  7.2,
  8.2,
  9.2,
  10.2,
  11.2,
  12.2,
  13.2,
  14.2,
  2.3,
  3.3,
  4.3,
  5.3,
  6.3,
  7.3,
  8.3,
  9.3,
  10.3,
  11.3,
  12.3,
  13.3,
  14.3,
  2.4,
  3.4,
  4.4,
  5.4,
  6.4,
  7.4,
  8.4,
  9.4,
  10.4,
  11.4,
  12.4,
  13.4,
  14.4
];
var deck1 = [];
var deck1Count;
var deck2 = [];
var deck2Count;
var currentCard1;
var currentCard2;

var win1;
var win2;

//STEPS

//Split cardDeck into two seperate cardDecks (randomized) and displaying appropriate cards on screen
function play() {
  //Display cards
  document.getElementById("how-to-play").style.display = "none";
  document.getElementById("game").style.display = "inline-block";
  // putting 26 randomized cards into deck1
  while (cardDeck.length > 26) {
    //picks a random card inside the card deck that's left
    var currentPosition = Math.floor(Math.random() * cardDeck.length);
    var currentCard = cardDeck[currentPosition];


    //Putting the card into deck1
    deck1.push(currentCard);

    //Taking out that specific card from the whole card deck
    cardDeck.splice(cardDeck.indexOf(currentCard), 1);
  }

  //Whatever wasn't added in deck1 is added to deck2
  deck2 = cardDeck;

  //Printing deck1 length + contents
  console.log("DECK 1 length: " + deck1.length);
  console.log("DECK 1: " + deck1);

  //Printing deck1 length + contents
  console.log("DECK 2 length: " + deck2.length);
  console.log("DECK 2: " + deck2);
}

//Draw 1 card from top of each deck
//function to compare both face up cards (or current cards)
function deal() {
  document.getElementById("text1").innerHTML = "    ";
  document.getElementById("text2").innerHTML = "    ";

  currentCard1 = deck1[0];
  currentCard2 = deck2[0];
  showCards(currentCard1, currentCard2);

  //if deck 1's card value is higher than the deck 2's card value, deck 1 wins
  //player 1 wins
  if (Math.floor(currentCard1) > Math.floor(currentCard2)) {
    //add deck2 currentcard2 into deck1 at the end
    //substract from deck2, push card that was drawn to end of deck
    deck1.push(currentCard2);
    deck1.push(deck1.shift());
    deck2.splice(deck2.indexOf(currentCard2), 1);
    // DISPLAY DECK 1 WINNING
    document.getElementById("text1").innerHTML = "WINNER";
    document.getElementById("text2").innerHTML = "LOSER";

    console.log("Deck 1 won:" + deck1);

    document.getElementById("cardsleft1").innerHTML =
      "Cards Left: " + deck1.length;
    document.getElementById("cardsleft2").innerHTML =
      "Cards Left: " + deck2.length;
  } else if (Math.floor(currentCard2) > Math.floor(currentCard1)) {
    //add deck1 currentcard1 into deck2 at the end
    //substract from deck1
    deck2.push(currentCard1);
    deck2.push(deck2.shift());
    deck1.splice(deck1.indexOf(currentCard1), 1);
    document.getElementById("text1").innerHTML = "LOSER";
    document.getElementById("text2").innerHTML = "WINNER";
    console.log("Deck 2 won:" + deck2);

    document.getElementById("cardsleft1").innerHTML =
      "Cards Left: " + deck1.length;
    document.getElementById("cardsleft2").innerHTML =
      "Cards Left: " + deck2.length;
  } else {
    document.getElementById("text1").innerHTML = "TIE";
    document.getElementById("text2").innerHTML = "TIE";
    tie();
  }

  if (deck1.length === 0) {
    console.log("DECK2 WINNER");
  }
  if (deck2.length === 0) {
    console.log("DECK1 WINNER");
  }
  console.log("currentcard1: " + currentCard1);
  console.log("currentcard2: " + currentCard2);
}

function showCards(currentCard1, currentCard2) {
  document.getElementById("card1").src = "images/" + currentCard1 + ".jpg";
  document.getElementById("card2").src = "images/" + currentCard2 + ".jpg";
}

function tie() {
  //Three cards will be drawn from each deck (if available)
  //and the fourth card from each will be compared. Highest card wins. Winner takes all 8 cards

  showCards(currentCard1, currentCard2);

  // take the 3rd card in both decks and compare
  console.log("TIE");
  console.log(currentCard1);
  console.log(currentCard2);
  var tieBreaker = 3;
  var war1 = deck1[tieBreaker];
  var war2 = deck2[tieBreaker];

  console.log(war1 + "+" + war2);

  // while tie is not yet broken, keep drawing cards until tie is broken
  while (Math.floor(war1) == Math.floor(war2)) {
    console.log("TIE AGAIN");

    //if card deck is too small for war -> lose
    if (deck1.length < 4) {
      console.log("DECK2 WINNER");
      document.getElementById("text1").innerHTML = "NOT ENOUGH CARDS";
      document.getElementById("text2").innerHTML = "WINNER";
      showCards(war1, war2);
      break;
    } else if (deck2.length < 4) {
      console.log("DECK1 WINNER");
      document.getElementById("text2").innerHTML = "NOT ENOUGH CARDS";
      document.getElementById("text1").innerHTML = "WINNER!";
      showCards(war1, war2);
      break;
    } else {
      if (Math.floor(war1) > Math.floor(war2)) {
        // takes tied card and puts it in back of deck1
        deck1.push(deck1.shift());
        // puts all loser's cards in deck1
        for (var i = 0; i <= tieBreaker; i++) {
          deck1.push(deck2[i]);
        }
        deck2.splice(0, tieBreaker);
        console.log("DECK1 WINS TIE: " + deck1);
        document.getElementById("text1").innerHTML = "TIE WINNER";
        showCards(war1, war2);
      } else {
        // takes tied card and puts it in back of deck2
        deck2.push(deck2.shift());
        // puts all loser's cards in deck2
        for (var i = 0; i <= tieBreaker; i++) {
          deck2.push(deck1[i]);
        }
        // deck1 gets rid of cards
        deck1.splice(0, tieBreaker);
        console.log("DECK2 WINS TIE: " + deck2);
        document.getElementById("text2").innerHTML = "TIE WINNER";
        showCards(war1, war2);
      }
    }
  }

  if (Math.floor(war1) > Math.floor(war2)) {
    // takes tied card and puts it in back of deck1
    deck1.push(deck1.shift());
    // puts all loser's cards in deck1
    for (var i = 0; i <= tieBreaker; i++) {
      deck1.push(deck2[i]);
    }
    deck2.splice(0, tieBreaker);
    console.log("DECK1 WINS TIE: " + deck1);
    document.getElementById("text1").innerHTML = "TIE WINNER";
    showCards(war1, war2);
  } else {
    // takes tied card and puts it in back of deck2
    deck2.push(deck2.shift());
    // puts all loser's cards in deck2
    for (var i = 0; i <= tieBreaker; i++) {
      deck2.push(deck1[i]);
    }
    // deck1 gets rid of cards
    deck2.splice(0, tieBreaker);
    console.log("DECK2 WINS TIE: " + deck2);
    document.getElementById("text2").innerHTML = "TIE WINNER";
    showCards(war1, war2);
  }
}
