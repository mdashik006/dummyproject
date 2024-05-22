preloader();
const cards_arr = [
  {
    name: "hippo",
    icon: '<i class="fa-solid fa-hippo"></i>',
  },
  {
    name: "dog",
    icon: '<i class="fa-solid fa-dog"></i>',
  },
  {
    name: "cat",
    icon: '<i class="fa-solid fa-cat"></i>',
  },
  {
    name: "spider",
    icon: '<i class="fa-solid fa-spider"></i>',
  },
  {
    name: "horse",
    icon: '<i class="fa-solid fa-horse"></i>',
  },
  {
    name: "fish",
    icon: '<i class="fa-solid fa-fish"></i>',
  },
  {
    name: "hippo",
    icon: '<i class="fa-solid fa-hippo"></i>',
  },
  {
    name: "dog",
    icon: '<i class="fa-solid fa-dog"></i>',
  },
  {
    name: "cat",
    icon: '<i class="fa-solid fa-cat"></i>',
  },
  {
    name: "spider",
    icon: '<i class="fa-solid fa-spider"></i>',
  },
  {
    name: "horse",
    icon: '<i class="fa-solid fa-horse"></i>',
  },
  {
    name: "fish",
    icon: '<i class="fa-solid fa-fish"></i>',
  },
];

const gameboard = document.getElementById("gameboard");
let flipped_cards = [];
let matchedpairs = 0;
shuffle_card();
display_cards();

function shuffle_card() {
  for (let i = cards_arr.length - 1; i >= 0; i--) {
    const randindex = Math.floor(Math.random() * (i + 1));
    [cards_arr[i], cards_arr[randindex]] = [cards_arr[randindex], cards_arr[i]];
  }
}

function display_cards() {
  cards_arr.forEach((curr, index) => {
    const card = document.createElement("div");
    card.setAttribute("id", index);
    card.classList.add("cardback");
    card.classList.add("active");
    gameboard.append(card);
    card.addEventListener("click", flippcard);
  });
}

function flippcard() {
  if (flipped_cards.length < 2 && this.classList.contains("active")) {
    let cardID = this.getAttribute("id");
    flipped_cards.push(this);
    console.log(flipped_cards);
    this.classList.remove("cardback");
    this.innerHTML = cards_arr[cardID].icon;
    if (flipped_cards.length == 2) {
      setInterval(checkeMatch, 1000);
    }
  }
}

function checkeMatch() {
  const card1ID = flipped_cards[0].getAttribute("id");
  const card2ID = flipped_cards[1].getAttribute("id");
  if (cards_arr[card1ID].name == cards_arr[card2ID].name) {
    flipped_cards[0].style.border = "none";
    flipped_cards[1].style.border = "none";
    flipped_cards[0].classList.remove("active");
    flipped_cards[1].classList.remove("active");
    flipped_cards[0].innerHTML = " ";
    flipped_cards[1].innerHTML = " ";
    matchedpairs++;
    checkGameover();
  } else {
    flipped_cards[0].innerHTML = " ";
    flipped_cards[0].classList.add("cardback");
    flipped_cards[1].innerHTML = " ";
    flipped_cards[1].classList.add("cardback");
  }
  flipped_cards = [];
}

function checkGameover() {
  if (matchedpairs == cards_arr.length / 2) {
    while (gameboard.firstChild) {
      gameboard.removeChild(gameboard.firstChild);
    }
    gameboard.innerHTML = "Game Over";
    gameboard.classList.remove("game");
    gameboard.classList.add("won");
  }
}

function preloader() {
  const container = document.getElementById("container");
  window.addEventListener("load", () => {
    container.style.display = "none";
  });
}
