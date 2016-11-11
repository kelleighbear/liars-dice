## Liars Dice Web App

###Liar's Dice

In the game Liar's Dice, each player begins the game with 5 dice, hidden from the other players.  Every player rolls the dice and hides the result. The first player puts X(ex. 0 to 5) number of dice in the middle and declares how many dice of a certain number exist amongst all the dice in play. For example, if he puts out 3 4s and says "There are at least 10 4s", then he believes there are 10 4's across everyone's hand including the 3 dice in the middle.

After a player places dice on the board and makes a bid(note: the player doesn't have to place any dice on the board, they can just make a bid), he/she must reroll the remaining dice in their hand.

The next player must either challenge the previous player's claim, or make a new claim that is at least one die higher (it can be an different number is the player chooses). For example, "There are at least 11 4s" or "There are at least 11 3s".

## Setting up the app

1. Clone the repository locally
2. Make sure you have Node installed (https://nodejs.org/download/)
3. Run npm install
4. node index.js

The server will run on localhost:8080
