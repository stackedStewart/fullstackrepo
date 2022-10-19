/* John Stewart
  Team Stats Codecademy Javascript Project
  10/19/2022
*/

const team = {
    _players: [
      {firstName: 'Homer', lastName: 'Simpson', age: 37},
      {firstName: 'Sonic', lastName: 'Hedgehog', age: 16},
      {firstName: 'Ivo', lastName: 'Robotnik', age: 60}
     ],
    _games: [
      {opponent: 'Team-Mario', teamPoints: 47, opponentPoints: 35},
      {opponent: 'Team-Burns', teamPoints: 35, opponentPoints: 12},
      {opponent: 'Team-Rick', teamPoints: 55, opponentPoints: 15}
     ],
     //GETTING DATA
     get players(){
       return this._players;
     },
     get games(){
       return this._games;
     },
     //ADDING DATA
     addPlayer(newFirstName, newLastName, newAge) {
       let player = {
         firstName: newFirstName,
         lastName: newLastName,
         age: newAge
       };
       this.players.push(player);
     },
     addGame(newOpponent, newTeamPoints, newOpponentPoints) {
       let game = {
         opponent: newOpponent,
         teamPoints: newTeamPoints,
         opponentPoints: newOpponentPoints
       };
       this.games.push(game);
     },
  };
  
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team.players);
  team.addGame('Titans', 100, 98);
  console.log(team.games);