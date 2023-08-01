export const houseEdges = [
  {
    name: 'Baccarat',
    types: [
      { name: 'Banker', edge: 1.06 },
      { name: 'Player', edge: 1.24 },
    ],
    rules:
      "Player has two bets, to bet on player or banker! Goal is for players' cards to be as close to 9 as possible. Cards 2-9 have face-value, while cards 10-King have 0-value, and ace has a value of 1. Two cards are dealt face-up to the players and the banker. Whichever side is closest to 9, those respective bets will win. If player has value of 5 or less, they will hit. Otherwise, the banker will hit on 5 or less value if player stands. Player bet has double payout, while banker bet has 95% payout.",
  },
  {
    name: 'Big Six',
    types: [
      { name: '$1 Bet', edge: 11.11 },
      { name: '$2 Bet', edge: 16.67 },
      { name: '$5 Bet', edge: 22.22 },
      { name: '$10 Bet', edge: 18.52 },
      { name: '$20 Bet', edge: 22.22 },
      { name: 'Joker/Logo', edge: 24.07 },
    ],
    rules:
      'Player has six possible bets, as shown below. The player is trying to predict a wheel-spin. The wheel has 52 segments, and each segment contains one bet only. The higher-paying bets/segments are more rare to land on, while the lower paying bets/segments are common to land on as there is a higher frequency of them. The wheel will spin and target one segment. The player with the correct bet wins the respective payout.',
  },
  {
    name: 'Bonus Six',
    types: [
      { name: 'No Insurance', edge: 10.42 },
      { name: 'Insurance', edge: 23.83 },
    ],
    rules:
      "Player has two bets, to bet on player or banker! Goal is for players' cards to be as close to 9 as possible. Cards 2-9 have face-value, while cards 10-King have 0-value, and ace has a value of 1. Two cards are dealt face-up to the players and the banker. Whichever side is closest to 9, those respective bets will win. If player has value of 5 or less, they will hit. Otherwise, the banker will hit on 5 or less value if player stands. Player bet has double payout, while banker bet has 95% payout.",
  },
  {
    name: 'Blackjack',
    types: [{ name: 'Liberal Vegas Rules', edge: 0.28 }],
    rules:
      "Player has two bets, to bet on player or banker! Goal is for players' cards to be as close to 9 as possible. Cards 2-9 have face-value, while cards 10-King have 0-value, and ace has a value of 1. Two cards are dealt face-up to the players and the banker. Whichever side is closest to 9, those respective bets will win. If player has value of 5 or less, they will hit. Otherwise, the banker will hit on 5 or less value if player stands. Player bet has double payout, while banker bet has 95% payout.",
  },
  {
    name: 'Caribbean Stud Poker',
    types: [{ name: 'Default', edge: 5.22 }],
    rules:
      "Player has two bets, to bet on player or banker! Goal is for players' cards to be as close to 9 as possible. Cards 2-9 have face-value, while cards 10-King have 0-value, and ace has a value of 1. Two cards are dealt face-up to the players and the banker. Whichever side is closest to 9, those respective bets will win. If player has value of 5 or less, they will hit. Otherwise, the banker will hit on 5 or less value if player stands. Player bet has double payout, while banker bet has 95% payout.",
  },
  {
    name: 'Casino War',
    types: [{ name: 'War On Ties', edge: 2.88 }],
    rules:
      "Player has two bets, to bet on player or banker! Goal is for players' cards to be as close to 9 as possible. Cards 2-9 have face-value, while cards 10-King have 0-value, and ace has a value of 1. Two cards are dealt face-up to the players and the banker. Whichever side is closest to 9, those respective bets will win. If player has value of 5 or less, they will hit. Otherwise, the banker will hit on 5 or less value if player stands. Player bet has double payout, while banker bet has 95% payout.",
    types: [{ name: 'Surrender On Ties', edge: 3.7 }],
    rules:
      "Player has two bets, to bet on player or banker! Goal is for players' cards to be as close to 9 as possible. Cards 2-9 have face-value, while cards 10-King have 0-value, and ace has a value of 1. Two cards are dealt face-up to the players and the banker. Whichever side is closest to 9, those respective bets will win. If player has value of 5 or less, they will hit. Otherwise, the banker will hit on 5 or less value if player stands. Player bet has double payout, while banker bet has 95% payout.",
    types: [{ name: 'Bet On Ties', edge: 18.65 }],
    rules:
      "Player has two bets, to bet on player or banker! Goal is for players' cards to be as close to 9 as possible. Cards 2-9 have face-value, while cards 10-King have 0-value, and ace has a value of 1. Two cards are dealt face-up to the players and the banker. Whichever side is closest to 9, those respective bets will win. If player has value of 5 or less, they will hit. Otherwise, the banker will hit on 5 or less value if player stands. Player bet has double payout, while banker bet has 95% payout.",
  },
  {
    name: 'Catch A Wave',
    types: [{ name: 'Default', edge: 0.5 }],
    rules:
      "Player has two bets, to bet on player or banker! Goal is for players' cards to be as close to 9 as possible. Cards 2-9 have face-value, while cards 10-King have 0-value, and ace has a value of 1. Two cards are dealt face-up to the players and the banker. Whichever side is closest to 9, those respective bets will win. If player has value of 5 or less, they will hit. Otherwise, the banker will hit on 5 or less value if player stands. Player bet has double payout, while banker bet has 95% payout.",
  },
  {
    name: 'Crazy 4 Poker',
    types: [{ name: 'Ante', edge: 3.42 }],
    rules:
      "Player has two bets, to bet on player or banker! Goal is for players' cards to be as close to 9 as possible. Cards 2-9 have face-value, while cards 10-King have 0-value, and ace has a value of 1. Two cards are dealt face-up to the players and the banker. Whichever side is closest to 9, those respective bets will win. If player has value of 5 or less, they will hit. Otherwise, the banker will hit on 5 or less value if player stands. Player bet has double payout, while banker bet has 95% payout.",
  },
  {
    name: 'Double Down Stud',
    types: [{ name: 'Default', edge: 2.67 }],
    rules:
      "Player has two bets, to bet on player or banker! Goal is for players' cards to be as close to 9 as possible. Cards 2-9 have face-value, while cards 10-King have 0-value, and ace has a value of 1. Two cards are dealt face-up to the players and the banker. Whichever side is closest to 9, those respective bets will win. If player has value of 5 or less, they will hit. Otherwise, the banker will hit on 5 or less value if player stands. Player bet has double payout, while banker bet has 95% payout.",
  },
  {
    name: 'Heads Up Hold Em',
    types: [{ name: 'Blind Pay Table #1', edge: 2.36 }],
    rules:
      "Player has two bets, to bet on player or banker! Goal is for players' cards to be as close to 9 as possible. Cards 2-9 have face-value, while cards 10-King have 0-value, and ace has a value of 1. Two cards are dealt face-up to the players and the banker. Whichever side is closest to 9, those respective bets will win. If player has value of 5 or less, they will hit. Otherwise, the banker will hit on 5 or less value if player stands. Player bet has double payout, while banker bet has 95% payout.",
  },
  {
    name: 'Keno',
    types: [{ name: 'Default', edge: 29 }],
    rules:
      "Player has two bets, to bet on player or banker! Goal is for players' cards to be as close to 9 as possible. Cards 2-9 have face-value, while cards 10-King have 0-value, and ace has a value of 1. Two cards are dealt face-up to the players and the banker. Whichever side is closest to 9, those respective bets will win. If player has value of 5 or less, they will hit. Otherwise, the banker will hit on 5 or less value if player stands. Player bet has double payout, while banker bet has 95% payout.",
  },
  {
    name: 'Let It Ride',
    types: [{ name: 'Default', edge: 3.51 }],
    rules:
      "Player has two bets, to bet on player or banker! Goal is for players' cards to be as close to 9 as possible. Cards 2-9 have face-value, while cards 10-King have 0-value, and ace has a value of 1. Two cards are dealt face-up to the players and the banker. Whichever side is closest to 9, those respective bets will win. If player has value of 5 or less, they will hit. Otherwise, the banker will hit on 5 or less value if player stands. Player bet has double payout, while banker bet has 95% payout.",
  },
  {
    name: 'Pai Gow Poker',
    types: [{ name: 'Default', edge: 1.46 }],
    rules:
      "Player has two bets, to bet on player or banker! Goal is for players' cards to be as close to 9 as possible. Cards 2-9 have face-value, while cards 10-King have 0-value, and ace has a value of 1. Two cards are dealt face-up to the players and the banker. Whichever side is closest to 9, those respective bets will win. If player has value of 5 or less, they will hit. Otherwise, the banker will hit on 5 or less value if player stands. Player bet has double payout, while banker bet has 95% payout.",
  },
  {
    name: 'Roulette',
    types: [
      { name: 'Single Zero', edge: 2.7 },
      { name: 'Double Zero', edge: 5.26 },
    ],
    rules:
      "Player has two bets, to bet on player or banker! Goal is for players' cards to be as close to 9 as possible. Cards 2-9 have face-value, while cards 10-King have 0-value, and ace has a value of 1. Two cards are dealt face-up to the players and the banker. Whichever side is closest to 9, those respective bets will win. If player has value of 5 or less, they will hit. Otherwise, the banker will hit on 5 or less value if player stands. Player bet has double payout, while banker bet has 95% payout.",
  },
];
